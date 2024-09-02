//importação do database
const database = require('../database')

module.exports = {

    //método para consultar os curso
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
            database.query(`INSERT INTO curso VALUES (null, "${nome}", null)`, (err, result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    }
}
