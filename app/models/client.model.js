var mongoose = require('mongoose');
var clientSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    } ,
    phone: {
        type: String,
        unique: true
    },
    
    balance: Number
}, {
    
    
});
console.log("inside modelling...");
clientSchema.set('toJSON', {
    //virtuals: true,
    //versionKey:false,
    //timestamps: false,
    transform: function (doc, ret) {  ret.id = ret._id; delete ret._id  }
  });
module.exports = mongoose.model('Client', clientSchema);