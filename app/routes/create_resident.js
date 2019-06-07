//executa uma funcao ao chamar o dominio /noticias
module.exports = function(app,database) {
    
    app.post('/create_resident', (request, response) => {
        
        console.log("[TRACE] - /create_resident service started");

        var body = request.body;

        if (body.username != undefined && body.password != undefined){

            database.createResident({
                username: request.body.username,
                password: request.body.password
            })
            .then(() => response.sendStatus(200));

        } else {
            response.sendStatus(400);
        }
    });
};