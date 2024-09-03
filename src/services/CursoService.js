//importação do database
const { updateCurso } = require('../controllers/CursoController')
const database = require('../database')

module.exports = {

    //Consultar os curso
    readCursos: () => {
        return new Promise((resolve, reject) => {
            database.query("SELECT * FROM curso", (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },

    //Cadastrar Curso
    createCurso: (nome) => {
        return new Promise((resolve, reject) => {
            database.query(`INSERT INTO curso VALUES (null, "${nome}", 0)`, (err, result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },

    //Pesquisar curso pelo id
    findCursoById: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM curso WHERE id = ${id}`, (err, result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },

    //Atualizar um curso
    updateCurso: (id, nome, quantdade) =>{
        return new Promise((resolve, reject) => {
            database.query(`UPDATE curso SET nome = "${nome}", quantidade = ${quantidade} WHERE id = ${id}`, (err, result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },

    //Deletar um curso
    deleteCurso: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`DELETE FROM curso WHERE id = ${id}`, (err, result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    }
}
