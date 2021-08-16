const express = require('express')
const Router = express.Router()

const getShowDataController = require('../controller/getShowDataController')

Router.use('/', getShowDataController.showData)

module.exports = Router