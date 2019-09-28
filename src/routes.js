const routes = require('express').Router()

const { User } = require('./app/models/User')

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Mateus',
    email: 'mateus4k@protonmail.ch',
    password_hash: '123456'
  })
  return res.json({ user })
})

module.exports = routes
