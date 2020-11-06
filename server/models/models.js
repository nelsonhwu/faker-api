const faker = require('faker')

class User {
    constructor() {
        this.firstName = `${faker.name.firstName()}`;
        this.lastName = `${faker.name.lastName()}`;
        this.phoneNumber =`${faker.phone.phoneNumber()}`;
        this.email =`${faker.internet.email()}`;
        this.password = `${faker.internet.password()}`;
    }
}

class Company {
    constructor() {
        this.name = `${faker.company.companyName()}`;
        this.address = `${faker.address.streetAddress()} ${faker.address.city()} ${faker.address.state()} ${faker.address.zipCode()} ${faker.address.country()}`;
    }
}

module.exports = {
    User,
    Company,
}