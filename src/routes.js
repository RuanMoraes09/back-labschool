const express = require('express')
const route = express.Router()
const cors = require('cors')
const cursoController = require('./controllers/CursoController')

route.options("*", cors())

//Endpoints - CURSO
route.get('/curso', cursoController.findAllTurmas) //READY

module.exports = route