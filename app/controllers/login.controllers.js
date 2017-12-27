//console.log("inside controllers...");
var Login = require('../models/auth.model.js');



//console.log("inside controllers...");

exports.create = function (req, res) {

    // console.log("inside controllers create...");

    // console.log("----"+req.body.content);

    if (Object.keys(req.body).length === 0) {
        res.status(400).send({ message: "Login body cannot be empty" });
    }

    // console.log("----here--");

    var login = new Login({

        email: req.body.email,
        password: req.body.password,
        userId: req.body.userId

    });

    login.save(function (err, data) {
        //console.log(data);
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating login..." });
        } else {
            res.send(data);
        }
    });

};


exports.findByUserId = function (req, res) {
    Login.findOne({ userId: req.params.userId })
    .exec(function (err, data) {
        if (err) {
            res.status(500).send({ message: "could not retrieve login with userId: " + req.params.userId });
        }
        else {
            console.log('The password fetched using userId is %s', data.password);
            res.send(data);
        }
        
    });
};



exports.findByEmailId = function (req, res) {
    Login.findOne({ email: req.params.emailId })
    .exec(function (err, data) {
        if (err) {
            res.status(500).send({ message: "could not retrieve login with email: " + req.params.emailId });
        }
        else {
            console.log('The password fetched using email is %s', data.password);
            res.send(data);
        }
        
    });
};



/*exports.findOne = function (req, res) {
    console.log("--" + req.params.emailId);
    console.log("--" + req.params.userId);
    if ('undefined' !== req.params.emailId) {
        console.log("-inside email logic--");
        Login.findOne({ email: req.params.emailId })
            
            .exec(function (err, data) {
                if (err) {
                    res.status(500).send({ message: "could not retrieve login info with email: " + req.params.emailId });
                }
                else {
                    console.log('The password fetched using email is %s', data);
                    res.send(data);
                }
                
            });
    }
    if ('undefined' !== req.params.userId) {
        console.log("-inside userid logic--");
        Login.findOne({ userId: req.params.userId })
            
            .exec(function (err, data) {
                if (err) {
                    res.status(500).send({ message: "could not retrieve login with userId: " + req.params.userId });
                }
                else {
                    console.log('The password fetched using userId is %s', data.password);
                    res.send(data);
                }
                
            });
    }

   

};
*/
exports.update = function (req, res) {
    Login.findById(req.params.clientId, function (err, client) {
        if (err) {
            res.status(500).send({ message: "could not find the a client with Id: " + req.params.clientId });
        }

        login.email = req.body.email;
        login.password = req.body.password;
        userloginId = req.body.userId;

        l

        login.save(function (err, data) {
            if (err) {
                res.status(500).send({ message: "could not udpate client with Id: " + req.params.clientId });
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function (req, res) {
    Login.remove({ _id: req.params.clientId }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "could not delete client with Id: " + req.params.clientId });
        } else {
            res.send({ message: "Client deleted successfully" });
        }
    });
};