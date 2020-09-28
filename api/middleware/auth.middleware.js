const jwt = require('jsonwebtoken');
const fs = require('fs');
var config = require("../config/common.config");


exports.isAuthenticated = async function (req, res, next) {
    let payload = req.body
    // console.log(req.headers);
    let token = req.headers.authorization
    if (token) {
        jwt.verify(req.headers.authorization, config.SECRET, async function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}