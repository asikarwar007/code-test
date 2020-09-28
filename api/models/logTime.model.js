const mongoose = require('mongoose')
// const bcrypt = require('bcrypt');

const schema = mongoose.Schema
const logTimeScheme = schema({
    date: { type:Date },
    timeLogged: { type: String, default: '' },
    projectId: { type: schema.Types.ObjectId, ref: 'project' },
    employeeIde: { type: schema.Types.ObjectId, ref: 'employee' },

    status: { type: Boolean, default: true }

}, {
    timestamps: true
})


module.exports = mongoose.model("logTime", logTimeScheme, "logTime")