//console.log("inside controllers...");
var Client = require('../models/client.model.js');



//console.log("inside controllers...");

exports.create = function(req, res){

   // console.log("inside controllers create...");

   // console.log("----"+req.body.content);
    
    if(Object.keys(req.body).length === 0) {
        res.status(400).send({message: "Client body cannot be empty"});
    }

   // console.log("----here--");

    var client = new Client({
        
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        balance: req.body.balance
    });

    client.save(function(err, data){
        //console.log(data);
        if(err){
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating client..."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res){
    Client.find(function(err, clients){
        if(err){
            res.status(500).send({message: "Some error occurred while retrieving clients..."});
        } else {
            res.send(clients);
        }
    });

};

exports.findOne = function(req, res){
    console.log("--"+req.params.clientId);
    Client.findById(req.params.clientId, function(err, data){
        if(err){
            res.status(500).send({message: "could not retrieve client with Id: "+ req.params.clientId});
        } else {
            res.send(data);
        }
    });

};

exports.update = function(req, res){
    Client.findById(req.params.clientId, function(err, client){
        if(err){
            res.status(500).send({message: "could not find the a client with Id: "+req.params.clientId});
        } 

        client.firstName = req.body.firstName;
        client.lastName = req.body.lastName;
        client.email = req.body.email;
        client.phone = req.body.phone;
        client.balance = req.body.balance;

        client.save(function(err, data){
            if(err){
                res.status(500).send({message: "could not udpate client with Id: "+ req.params.clientId});
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function(req, res){
    Client.remove({_id: req.params.clientId}, function(err, data){
        if(err){
            res.status(500).send({message: "could not delete client with Id: "+ req.params.clientId});
        } else {
            res.send({message: "Client deleted successfully"});
        }
    });
};