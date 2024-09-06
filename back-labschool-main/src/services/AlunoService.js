const database = require('../database')

module.exports = {
    //Cadastrar novo aluno
    createAluno: (foto, nome, telefone, email, data_nascimento, curso) => {
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO aluno VALUES(null, ?, ?, ?, ?, ?, ?)`,
                [foto, nome, telefone, data_nascimento, curso, email],
                (err, result) => {
                    if (err) {
                        reject(err)
                        return
                    }
                    resolve(result)
                }
            )
        })
    },

    // Atualizar Aluno
    updateAluno: (id, nome, telefone, email, data_nascimento, curso, foto) => {
        return new Promise((resolve, reject) => {
            let query = `UPDATE aluno SET nome = ?, telefone = ?, email = ?, data_nascimento = ?, curso = ?`
            let params = [nome, telefone, email, data_nascimento, curso]

            if (foto) {
                query += `, foto = ?`
                params.push(foto)
            }

            query += ` WHERE id = ?`
            params.push(id)

            database.query(query, params, (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    }
}
