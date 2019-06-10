//executa uma funcao ao chamar o dominio /create_resident
module.exports = function(app,database) {
    
    app.post('/create_resident', (request, response) => {
        
        console.log("[TRACE] - /create_resident = Service started");

        var body = request.body;

        if (body.username != undefined && body.password != undefined) {

            database.createResident({
                username: request.body.username,
                password: request.body.password
            })
            .then(() => response.status(200).json({'message':'User successfully created'}));

        } else {
            response.status(400).json({'message':'Its necessary a username and a password'});
        }
    });
};