//importação do database
const { resolve } = require('path')
const database = require('../database')

module.exports = {

    // Consultar os Cursos
    readCursos: () => {
        return new Promise((resolve, reject) => {
            database.query("SELECT * FROM curso", (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                return resolve(result)
            })
        })
    },

    // Cadastrar Curso
    createCurso: (nome) => {
        return new Promise((resolve, reject) => {
            database.query(`INSERT INTO curso VALUES (null, "${nome}", 0)`, (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                return resolve(result)
            })
        })
    },

    // Pesquisar Curso pelo ID
    findCursoById: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM curso WHERE id = ${id}`, (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                return resolve(result)
            })
        })
    },

    // Atualizar um Curso
    updateCurso: (id, nome, quantidade) => {
        return new Promise((resolve, reject) => {
            database.query(
                `UPDATE curso SET nome = "${nome}", quantidade = "${quantidade}" WHERE id = ${id}`,
                (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    return resolve(result);
                }
            );
        });
    },


    // Deletar um Curso 
    deleteCurso: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`DELETE FROM curso WHERE id = ${id}`, (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                return resolve(result)
            })
        })
    }
}
