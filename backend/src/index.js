const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')

const app = express();


app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(router)

/**
 * Rota / Recurso
 */

 /**
  * Tipos de Parametros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?"(filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo de requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Driver: SELECT * from 'users
   * Query builder: table('users').select('*').where()
   */

app.listen(3333)