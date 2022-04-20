var express = require('express');
const { findOneAndDelete } = require('./users');
var router = express.Router();
let UserModel = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/post', function(req,res,next){
  res.render('write')
});

router.get('/review', function(req,res,next){
  UserModel.find()
  .then(function(data){
    res.render('read',{data});
  });
});

router.post('/submit', function(req,res){
  UserModel.create({
    gamename: req.body.gamename,
    review: req.body.review
  })
  .then(function(a){
    res.redirect('/review');
  })
})

router.get('/update/:id', function(req,res){
  UserModel.findOne({_id: req.params.id})
  .then(function(game){
    res.render('update', {game});
  });
});

router.post('/update/:id', function(req,res){
  let updated = {
    gamename : req.body.gamename,
    review:req.body.review
  }
  UserModel.findOneAndUpdate({_id:req.params.id},{'$set':updated},{require:true})
  .then(function(updatedData){
    res.redirect('/review')
  })
})

router.get('/delete/:id', function(req,res){
  UserModel.findOneAndDelete({_id:req.params.id})
  .then(function(){
    res.redirect('/review')
  })
})



module.exports = router;
