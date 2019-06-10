//retorna uma funcao para a variavel knex
var knex = require('knex')(require('../knexfile'))

module.exports = {
    
    createResident ({ username, password }) {
        console.log(`[TRACE] - /create_resident = Creating resident \"${username}\"`);
        return knex('resident').insert({
            username,
            password
        });
    },
    authenticate ({ username, password }) {
        console.log(`[TRACE] - /login = Authenticating resident \"${username}\"`);
        return knex('resident').where({ username })
        .then(([resident]) => {
          if (!resident) return { success: false }
          return { success: password === resident.password }
        })
    }

}

