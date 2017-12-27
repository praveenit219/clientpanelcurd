var mongoose = require('mongoose');
var loginSchema = mongoose.Schema({
    id: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    userId: {
        type: String,
        unique: true
    }
   
}, {
    
    
});
console.log("inside modelling...");
loginSchema.set('toJSON', {
    //virtuals: true,
    //versionKey:false,
    //timestamps: false,
    transform: function (doc, ret) {  ret.id = ret._id; delete ret._id  }
  });
module.exports = mongoose.model('Login', loginSchema);