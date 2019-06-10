var app = require("./config/server"); 
var database = require ("./config/database");
var fileSystem = require("fs");
var routesPath = "./app/routes/";

//carrega todas as rotas presentes no diretorio 'routes'
fileSystem.readdirSync(routesPath).forEach(function(file) {
    var route = routesPath + file;
    require(route)(app,database);
    console.log(`[TRACE] - Mapped endpoint /${file.substring(0, file.length - 3)}`);
});

//sobe o servidor na porta 3000 e executa a funcao de callback
console.log("[TRACE] - Starting server...");
app.listen(3000, function(){
    console.log("[TRACE] - Server running on http://localhost:3000");
});

app.use(function (request, response, next) {
    response.status(404).send(`Sorry, can't find ${request.originalUrl} endpoint`)
});