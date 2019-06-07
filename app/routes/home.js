//executa uma funcao ao chamar o dominio padrao
module.exports = function(app) {
    app.get('/', function(request, response){
        response.render("home/index");
    });
};
