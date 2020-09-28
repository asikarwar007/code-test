var express = require('express');
var router = express.Router();

// var authOperation = require('../middleware/auth.middleware')

var employeeController = require('../controllers/employee.controller')
var projectController = require('../controllers/project.controller')
var logTimeController = require('../controllers/logTime.controller')


// employee
router.post('/employee/add', employeeController.addEmployee)
router.post('/employee/get', employeeController.getAllEmployee)
router.post('/employee/single', employeeController.getEmployeebyId)
router.post('/employee/edit', employeeController.updateEmployee)
router.post('/employee/delete', employeeController.deleteEmployee)

// project 
router.post('/project/add', projectController.addProject)
router.post('/project/get', projectController.getAllProject)
router.post('/project/single', projectController.getProjectbyId)
router.post('/project/edit', projectController.updateProject)
router.post('/project/delete', projectController.deleteProject)

// Log Time
router.post('/logTime/add', logTimeController.addLogTime)
router.post('/logTime/get', logTimeController.getAllLogTime)
router.post('/logTime/single', logTimeController.getLogTimebyId)
router.post('/logTime/edit', logTimeController.updateLogTime)
router.post('/logTime/delete', logTimeController.deleteLogTime)

module.exports = router;