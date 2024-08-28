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
    }
}
