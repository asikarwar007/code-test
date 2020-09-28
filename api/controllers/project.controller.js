const projectModel = require('../models/project.model')

module.exports = {
    addProject: async (req, res) => {
        let payload = req.body
        // let previousData = await projectModel.findOne({ project: body.booking, status: true })
        // if (!previousData) {
        //     return res.send({
        //         error: true,
        //         message: "booking Already Exist"
        //     })
        // }
        const addDetail = new projectModel(payload)
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
    getAllProject: async (req, res) => {
        const payload = req.body
        let currentPage = parseInt(payload.currentPage) || 0
        let documentSize = parseInt(payload.documentSize) || 30
        let skip = currentPage * documentSize
       
        let totalCount = await projectModel.countDocuments({
            status: true
        })

        let projectList = await projectModel.find({
            status: true
        })
            .limit(documentSize)
            .skip(skip)
            .populate('employeeIde','name')
        if (!projectList) {
            return res.send({
                error: true,
                message: "something went wrong"
            })
        }
        return res.send({
            error: false,
            projectList: projectList,
            pageCount: parseInt(totalCount / documentSize),
            message: "success"
        })
    },
    getProjectbyId: async (req, res) => {
        const payload = req.body
        let projectData = await projectModel.findOne({
            _id: payload.projectId
        })
        if (!projectData) {
            return res.send({
                error: true,
                message: "something went wrong"
            })
        }
        return res.send({
            error: false,
            projectDetails: projectData,
            message: "success"
        })
    },
    updateProject: async (req, res) => {
        const payload = req.body
        let updateData = await projectModel.findOneAndUpdate({
            _id: payload.projectId
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
    deleteProject: async (req, res) => {
        const payload = req.body
        let deleteData = await projectModel.findOneAndUpdate({
            _id: payload.projectId
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