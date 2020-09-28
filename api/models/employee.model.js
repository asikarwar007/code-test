const mongoose = require('mongoose')
// const bcrypt = require('bcrypt');

const schema = mongoose.Schema
const employeeScheme = schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' },

    status: { type: Boolean, default: true }

}, {
    timestamps: true
})


module.exports = mongoose.model("employee", employeeScheme, "employee")