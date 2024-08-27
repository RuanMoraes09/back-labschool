const express = require('express')
const route = express.Router()
const cors = require('cors')

route.options("*", cors())



module.exports = route