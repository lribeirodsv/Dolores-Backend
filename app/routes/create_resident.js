//executa uma funcao ao chamar o dominio /create_resident
module.exports = function(app,database) {
    
    app.post('/create_resident', (request, response) => {
        
        console.log("[TRACE] - /create_resident = Service started");

        var resident = require('../models/resident');

        let newResident = new resident()
        { 
            username : request.body.username;
            password: request.body.password;/*
            name: undefined;
            cpf: undefined;
            telephone: undefined;
            apartment: undefined;
            block: undefined;
            isOwner: undefined;
            isResponsable: undefined;*/
        };

        if (newResident.username != undefined && newResident.password != undefined) {

            database.createResident(newResident)
            .then(({ success }) => {
                if (success) response.status(200).json({'message':'User successfully created'});
                else response.status(401).json({'message':'Error creating the new user'});
            });

        } else {
            console.log("[ERROR] - /create_resident = Missing \"username\" or \"password\" in request");
            response.status(400).json({'message':'Its necessary a username and a password'});
        }
    });
};