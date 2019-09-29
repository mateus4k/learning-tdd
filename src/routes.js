const routes = require('express').Router()

const { User } = require('./app/models/User')
const SessionController = require('./app/controllers/SessionController')

routes.post('/sessions', SessionController.store)

module.exports = routes
