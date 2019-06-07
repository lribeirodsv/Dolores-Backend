var app = require("./config/server"); 
var database = require ("./config/database");

var createUserRoute = require('./app/routes/create_resident')(app,database);

//sobe o servidor na porta 3000 e executa a funcao de callback
console.log("[TRACE] - Starting server...");
app.listen(3000, function(){
    console.log("[TRACE] - Server running on http://localhost:3000");
});