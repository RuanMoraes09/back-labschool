const multer = require('multer')

// Configuração do Multer para armazenar os arquivos na memòria temporariamente (buffer)
const storage = multer.memoryStorage()

// Criar uma instância do multer com a configuração do storage
const upload = multer({storage: storage})

//Exportar upload
module.exports = upload