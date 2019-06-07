//retorna uma funcao para a variavel knex
var knex = require('knex')(require('../knexfile'))

module.exports = {
    
    createResident ({ username, password }) {
        console.log(`[TRACE] - Add user ${username} with password ${password}`);
        return knex('residents').insert({
            username,
            password
        })
    }

}

