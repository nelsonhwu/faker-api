const controller = require('../controllers/controller');

module.exports = app => {
    // C -> post
    app.get('/api/users/new', controller.createUser);
    app.get('/api/company/new', controller.createCompany);
    app.get('/api/user/company', controller.createBoth);
    //R -> get
    
    //U -> put/patch

    //D -> delete
}