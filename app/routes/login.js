//executa uma funcao ao chamar o dominio /login
module.exports = function(app,database) {
    
    app.post('/login', (request, response) => {
        
        console.log("[TRACE] - /login = Service started");

        var body = request.body;

        if (body.username != undefined && body.password != undefined) {

            database.authenticate({
                username: request.body.username,
                password: request.body.password
            })
            .then(({ success }) => {
                if (success) response.status(200).json({'message':'Access granted'});
                else response.status(401).json({'message':'Access denied'});
            });

        } else {
            console.log("[ERROR] - /login = Missing \"username\" or \"password\" in request");
            response.status(400).json({'message':'Its necessary a \"username\" and a \"password\"'});
        }
    });
};

