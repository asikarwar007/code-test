const employeeModel = require('../models/employee.model')

module.exports = {
    addEmployee: async (req, res) => {
        let payload = req.body
        // let previousData = await employeeModel.findOne({ employee: body.booking, status: true })
        // if (!previousData) {
        //     return res.send({
        //         error: true,
        //         message: "booking Already Exist"
        //     })
        // }
        const addDetail = new employeeModel(payload)
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
    getAllEmployee: async (req, res) => {
        const payload = req.body
        let currentPage = parseInt(payload.currentPage) || 0
        let documentSize = parseInt(payload.documentSize) || 30
        let skip = currentPage * documentSize
       
        let totalCount = await employeeModel.countDocuments({
            status: true
        })

        let employeeList = await employeeModel.find({
            status: true
        })
            .limit(documentSize)
            .skip(skip)

        if (!employeeList) {
            return res.send({
                error: true,
                message: "something went wrong"
            })
        }
        return res.send({
            error: false,
            employeeList: employeeList,
            pageCount: parseInt(totalCount / documentSize),
            message: "success"
        })
    },
    getEmployeebyId: async (req, res) => {
        const payload = req.body
        let employeeData = await employeeModel.findOne({
            _id: payload.employeeId
        })
        if (!employeeData) {
            return res.send({
                error: true,
                message: "something went wrong"
            })
        }
        return res.send({
            error: false,
            employeeDetails: employeeData,
            message: "success"
        })
    },
    updateEmployee: async (req, res) => {
        const payload = req.body
        let updateData = await employeeModel.findOneAndUpdate({
            _id: payload.employeeId
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
    deleteEmployee: async (req, res) => {
        const payload = req.body
        let deleteData = await employeeModel.findOneAndUpdate({
            _id: payload.employeeId
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