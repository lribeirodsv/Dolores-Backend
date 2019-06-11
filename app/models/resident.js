var user = require("./user"); 

class Resident extends user {
    constructor(apartment, block, isOwner, isResponsable, username, password, name, cpf, telephone) {
        super();
        this.username = username;
        this.password = password;
        this.name = name;
        this.cpf = cpf;
        this.telephone = telephone;
        this.apartment = apartment;
        this.block = block;
        this.isOwner = isOwner; 
        this.isResponsable = isResponsable;
    }};
module.exports = Resident;

