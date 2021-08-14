const express = require('express')
const Router = express.Router()

const getRoute = require('./getRoute')
const postRoute = require('./postRoute')

Router.use('/getAllData', getRoute)
Router.use('/insertData', postRoute)

module.exports = Router