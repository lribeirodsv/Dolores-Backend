var app = require("./config/server"); 
var database = require ("./config/database");

var createUserRoute = require('./app/routes/create_resident')(app,database);
var loginRoute = require('./app/routes/login')(app,database);

//sobe o servidor na porta 3000 e executa a funcao de callback
console.log("[TRACE] - Starting server...");
app.listen(3000, function(){
    console.log("[TRACE] - Server running on http://localhost:3000");
});

app.use(function (request, response, next) {
    response.status(404).send(`Sorry, can't find ${request.originalUrl} endpoint`)
});