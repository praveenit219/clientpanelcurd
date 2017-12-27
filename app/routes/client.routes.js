console.log("inside routes 111...");
module.exports = function(app) {
console.log("before controllers ...");
 var clients = require('../controllers/client.controllers.js');
 var login = require('../controllers/login.controllers.js');
 var loginstatus = require('../controllers/loginstatus.controllers.js');

 console.log("inside routes...");

 app.post('/clients', clients.create);
 app.get('/clients',clients.findAll);
 app.get('/clients/:clientId',clients.findOne);
 app.put('/clients/:clientId',clients.update);
 app.delete('/clients/:clientId',clients.delete);


 app.post('/auth', login.create);
 app.get('/auth/email/:emailId',login.findByEmailId);
 app.get('/auth/user/:userId',login.findByUserId);
 app.put('/auth/:clientId',login.update);
 app.delete('/auth/:clientId',login.delete);

app.post('/auth/user/authstatus', loginstatus.create);
app.put('/auth/user/authstatus/:userId', loginstatus.updateStatusByUserId);
app.get('/auth/user/authstatus/:userId', loginstatus.findLoginStatusByUserId);
 
}