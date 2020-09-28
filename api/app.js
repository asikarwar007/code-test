// Include the cluster module
var cluster = require('cluster');
// Code to run if we're in the master process
if (cluster.isMaster) {
    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;
    // Create a worker for each CPU
    // for (var i = 0; i < cpuCount; i += 1) {
    //     // for (var i = 0; i < 4; i += 1) {
    //     cluster.fork();
    // }
    cluster.fork();
    // Listen for terminating workers
    cluster.on('exit', function (worker) {
        // Replace the terminated workers
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();

    });

    // Code to run if we're in a worker process
} else {

    var os = require('os');
    var ifaces = os.networkInterfaces();
    let hostaddress
    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0;

        ifaces[ifname].forEach(function (iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                return;
            }
            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses
                //  console.log(ifname + ':' + alias, iface.address);
            } else {
                // this interface has only one ipv4 adress
                hostaddress = iface.address
                //  console.log(ifname, iface.address);
            }
            ++alias;
        });
    });

    // setInterval(()=>{},2000)
    var express = require('express');
    var bodyParser = require('body-parser');
    var cookieParser = require('cookie-parser')
    var mongoose = require('mongoose');
    var path = require('path');
    var fs = require('fs');

    const db = require('./config/db.config')


    var userRouter = require('./routes/user');

    var app = express();

    app.use(bodyParser.json())
    app.use(cookieParser())

    app.all('/*', async function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,');
        res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
        next();
    });
    app.use("/public", express.static(path.join(__dirname, 'public')));

    mongoose.promise = global.promise;

    mongoose.connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
        .then(async () => {
            console.log("db is connected")
        })
        .catch(error => {
            console.log("db not connecred", error)
        })

    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');

    app.use(bodyParser.json({ limit: '1000mb', extended: true }))
    app.use(bodyParser.urlencoded({
        limit: '1000mb',
        extended: true
    }))
    // app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))

    const logRequestStart = (req, res, next) => {
        let url = req.originalUrl.split('/')
        let userIp = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            (req.connection.socket ? req.connection.socket.remoteAddress : null);
        if (url[1] != 'uploads') {
            console.info(`${userIp} ${req.method} ${req.originalUrl} `, req.body)
        }
        next()
    }
    app.use(logRequestStart)

    app.use('/user', userRouter);


    app.get('/assets/:folder/:file', function (req, res) {
        var folder_name = req.params.folder;
        var file_name = req.params.file;
        var file = 'assets/' + folder_name + "/" + file_name

        fs.readFile(file, (err, data) => {
            if (err) {
                // res.download('uploads/9711048756.jpg')
            } else {
                // res.download(file)
                res.sendFile(__dirname + '/' + file)
            }
        });
        // res.sendFile(__dirname + body.originalUrl);
    });

    app.get('/*', function (req, res) {
        res.sendFile(__dirname + '/public/dist/index.html');

    });

    var port = process.env.PORT || 9619;

    var server = app.listen(port, function () {
        console.log('Server running at ' + hostaddress + ":" + port + '/');
    });
}