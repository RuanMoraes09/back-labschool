const database = require('../database')

module.exports = {
    //Cadastrar novo aluno
    createAluno: (foto, nome, telefone, email, data_nascimento, curso) => {
        return new Promise((resolve, reject) => {
            database.query(`INSERT INTO aluno VALUES(null, ?, ?, ?, ?, ?, ?)`,[foto, nome, telefone, data_nascimento, curso, email], (err, result) => {
                    if (err) {
                        reject(err)
                        return
                    }
                    resolve(result)
                })
        })
    }
}