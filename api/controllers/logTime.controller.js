const logTimeModel = require('../models/logTime.model')

module.exports = {
    addLogTime: async (req, res) => {
        let payload = req.body
        // let previousData = await logTimeModel.findOne({ logTime: body.booking, status: true })
        // if (!previousData) {
        //     return res.send({
        //         error: true,
        //         message: "booking Already Exist"
        //     })
        // }
        const addDetail = new logTimeModel(payload)
        let saveData = await addDetail.save()
        if (!saveData) {
            return res.send({
                error: true,
                message: "something went wrong"
            })
        }
        return res.send({
            error: false,
            message: "success"
        })
    },
    getAllLogTime: async (req, res) => {
        const payload = req.body
        let currentPage = parseInt(payload.currentPage) || 0
        let documentSize = parseInt(payload.documentSize) || 30
        let skip = currentPage * documentSize
       
        let totalCount = await logTimeModel.countDocuments({
            status: true
        })

        let logTimeList = await logTimeModel.find({
            status: true
        })
            .populate('projectId','projectName')
            .populate('employeeIde','name')

        if (!logTimeList) {
            return res.send({
                error: true,
                message: "something went wrong"
            })
        }
        return res.send({
            error: false,
            logTimeList: logTimeList,
            pageCount: parseInt(totalCount / documentSize),
            message: "success"
        })
    },
    getLogTimebyId: async (req, res) => {
        const payload = req.body
        let logTimeData = await logTimeModel.findOne({
            _id: payload.logTimeId
        })
        if (!logTimeData) {
            return res.send({
                error: true,
                message: "something went wrong"
            })
        }
        return res.send({
            error: false,
            logTimeDetails: logTimeData,
            message: "success"
        })
    },
    updateLogTime: async (req, res) => {
        const payload = req.body
        let updateData = await logTimeModel.findOneAndUpdate({
            _id: payload.logTimeId
        }, {
            $set:
                payload
        })
        if (!updateData) {
            return res.send({
                error: true,
                message: "something went wrong"
            })
        }
        return res.send({
            error: false,
            message: "success"
        })
    },
    deleteLogTime: async (req, res) => {
        const payload = req.body
        let deleteData = await logTimeModel.findOneAndUpdate({
            _id: payload.logTimeId
        }, {
            $set: {
                status: false
            }
        })
        if (!deleteData) {
            return res.send({
                error: true,
                message: "something went wrong"
            })
        }
        return res.send({
            error: false,
            message: "success"
        })
    }
}