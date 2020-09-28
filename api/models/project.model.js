const mongoose = require('mongoose')
// const bcrypt = require('bcrypt');

const schema = mongoose.Schema
const projectScheme = schema({
    projectName: { type: String, default: '' },
    description: { type: String, default: '' },
    estimatedTime: { type: String, default: '' },
    employeeIde: { type: schema.Types.ObjectId, ref: 'employee' },

    status: { type: Boolean, default: true }

}, {
    timestamps: true
})


module.exports = mongoose.model("project", projectScheme, "project")