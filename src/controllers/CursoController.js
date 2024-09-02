const { response } = require('express')
const cursoService = require('../services/CursoService')

module.exports = {
    
    // Consultar curso
    findAllTurmas: async (request, response) => {

        //Declaração do objeto json que será retornado como resposta da requisição
        let json = { error: "", result: [] }

        //Invocar a função que irá consultar o BD para listar as turmas
        let cursos = await cursoService.readCursos()

        //Tratamento de dados
        for (let curso of cursos) {
            json.result.push({
                id: curso.id,
                nome: curso.nome,
                quantidade: curso.quantidade
            })

        }

        response.status(200).json(json)
    },

    // Cadastrar Curso
    saveCurso: async (request, response) => {
        let json = { error: "", result: {}}

        //Receber dados via corpo da requisição para cadastrar o curso
        let nome = request.body.nomeCurso

        if(nome){
            let curso = await cursoService.createCurso(nome)

            json.result = {
                id: curso.insertId,
                nome: nome
            }
        }else{
            json.error = "Nome do curso é obrigatório!"
        }

        response.status(201).json(json)
    }
}