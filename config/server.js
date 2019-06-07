//retorna uma funcao para a variavel express
var express = require('express');

//retorna uma funcao para a variavel body-parser
var bodyParser = require('body-parser');

//executa a funcao retornada pelo express
var app = express();    

app.use(express.static('public'));
app.use(bodyParser.json());

module.exports = app;