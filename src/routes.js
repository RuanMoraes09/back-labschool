const express = require('express')
const route = express.Router()
const cors = require('cors')
const cursoController = require('./controllers/CursoController')
const alunoController = require('./controllers/AlunoController')
const upload = require('./config/multerConfig')

route.options("*", cors())

//Endpoints - CURSO
route.get('/curso', cursoController.findAllTurmas) //READY
route.post('/curso', cursoController.saveCurso) //CREATE
route.put('/curso/:id', cursoController.updateCurso) // UPDATE
route.delete('/curso/:id', cursoController.deleteCurso) // DELETE

// Endpoints - ALUNO
route.get('/aluno', alunoController.findAllAlunos) // READ
route.get('/aluno/:id', alunoController.findAlunoById) // READ
route.post('/aluno', upload.single('image'), alunoController.saveAluno) // CREATE
route.put('/aluno/:id', alunoController.updateAluno) // UPDATE
route.delete('/aluno/:id', alunoController.deleteAluno) // DELETE



module.exports = route