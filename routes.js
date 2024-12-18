const express = require('express')
const employeeController = require('./controller/employeeController')

const routes = new express.Router()

//path to get all user details
routes.get('/all-employees',employeeController.getAllEmployeeController)

//path to add new employee
routes.post('/addemployee',employeeController.addEmployeeController)

//path to remove employee
routes.delete('/delete-employee/:id',employeeController.removeEmployeeController)

//path to update existing employee
routes.put('/update-employee/:id',employeeController.updateEmployeeController)

module.exports = routes