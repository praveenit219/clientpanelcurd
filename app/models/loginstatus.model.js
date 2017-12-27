var mongoose = require('mongoose');
var loginStatusSchema = mongoose.Schema({
    id: String,
    email: {
        type: String,
        unique: true
    },
    loggedin: Boolean,
    userId: {
        type: String,
        unique: true
    }
   
}, {
    
    
});
console.log("inside modelling...");
loginStatusSchema.set('toJSON', {
    //virtuals: true,
    //versionKey:false,
    //timestamps: false,
    transform: function (doc, ret) {  ret.id = ret._id; delete ret._id  }
  });
module.exports = mongoose.model('LoginStatus', loginStatusSchema);