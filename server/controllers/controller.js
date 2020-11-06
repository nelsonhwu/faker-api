const { User, Company } = require('../models/models')

module.exports = {
    createUser: (request, response) => {
        const NewUser = new User();
        console.log(NewUser);
    },

    createCompany: (request, response) => {
        const newCompany = new Company();
        response.json({newCompany});
    },

    createBoth: (request, response) => {
        const newUser = new User();
        const newCompany = new Company();
        response.json({user: newUser, company: newCompany});
    }
}