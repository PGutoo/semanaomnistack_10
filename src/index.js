const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://omnistack:pedro3401@cluster0-qvkyk.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set('useCreateIndex', true);




app.use(routes);


// Metodos HTTP - get, post, put, delete
// get - busca/recebe informação
// post - criar alguma informação
// put - Editar um recurso
// delete - deletar
/* Tipos de parâmetros:
    Query Params: request.query (Filtros, ordenação, paginação, ...)
    Route Params: request.params (identificar um recurso na alteração ou remoção)
    Body: request.body (Dados para criação ou alteração de um registro)

*/

//MongoDB (Não-relacional)


app.listen(3333);