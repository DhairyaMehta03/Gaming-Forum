let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/gamingforum');

//mongoose.connect('mongodb+srv://Chandana:cvml462ccl4*@mytasker.wknnc.mongodb.net/task?retryWrites=true&w=majority');

let schema = mongoose.Schema(
  {
    gamename:{
      type:String,
      required:true
    },
    review:{
      type:String,
      required:true
    }
  }
)

module.exports = mongoose.model('gamingforum', schema);