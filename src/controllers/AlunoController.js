const { response, request } = require('express')
const alunoService = require('../services/AlunoService')

module.exports = {

    // Consultar Alunos
    findAllAlunos: async (request, response) => {

        let json = { error: "", result: [] }
        let alunos = await alunoService.readAlunos()

        for (let aluno of alunos) {
            json.result.push({
                id: aluno.id,
                nome: aluno.nome,
                telefone: aluno.telefone,
                email: aluno.email,
                data_nascimento: aluno.data_nascimento,
                curso: aluno.cursoNome
            })
        }

        response.status(200).json(json)
    },

    findAlunoById: async (request, response) => {
        let json = { error: "", result: {} };
        let id = request.params.id;

        if (id) {

            let alunoValid = await alunoService.getAlunoById(id)

            if (alunoValid.length == 0) {

                json.error = "Aluno não encontrado!"
                response.status(404).json(json)
            } else {

                json.result = alunoValid[0]
                response.status(200).json(json)
            }

        } else {
            json.error = "Id do aluno é obrigatório"
            response.status(400).json(json)
        }
    },

    // Método para criar um novo aluno
    saveAluno: async (request, response) => {

        let json = { error: "", result: "" }

        let foto = request.file.buffer
        let nome = request.body.nome
        let telefone = request.body.telefone
        let data_nascimento = request.body.data_nascimento
        let email = request.body.email
        let curso = request.body.curso

        let aluno = await alunoService.createAluno(foto, nome, telefone, email, data_nascimento, curso)

        json.result = `Aluno: ${nome} cadastrado com sucesso! ID: { ${aluno.insertId}}`
        response.status(201).json(json)
    },

    // Método para atualizar um aluno
    updateAluno: async (request, response) => {
        let json = { error: "", result: "" }
        let id = request.params.id
        const { nome, telefone, email, data_nascimento, curso } = request.body
        let foto = request.file ? request.file.buffer : null

        if (id) {

            let alunoValid = await alunoService.getAlunoById(id)

            if (alunoValid.length == 0) {
                json.error = "Aluno não encontrado!"
                response.status(404).json(json)
            } else {
                try {
                    await alunoService.updateAluno(id, nome, telefone, email, data_nascimento, curso, foto)
                    json.result = `Aluno ${nome} atualizado com sucesso!`
                    response.status(200).json(json)
                } catch (err) {
                    json.error = "Erro ao atualizar aluno!"
                    response.status(500).json(json)
                }
            }

        } else {
            json.error = "Id do aluno é obrigatório"
            response.status(400).json(json)
        }
    },

    // Método para deletar aluno
    deleteAluno: async (request, response) => {
        let json = { error: "", result: "" }
        let id = request.params.id

        if (id) {

            let alunoValid = await alunoService.getAlunoById(id)

            if (alunoValid.length == 0) {

                json.error = "Aluno não encontrado!"
                response.status(404).json(json)
            } else {

                await alunoService.deleteAluno(id)
                json.result = `Aluno ${alunoValid[0].nome} excluído com sucesso`
                response.status(200).json(json)
            }

        } else {
            json.error = "Id do aluno é obrigatório"
            response.status(400).json(json)
        }
    }

}
