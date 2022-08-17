const User = require('../models/user');

const get_users = (req, res) => {
    User.find()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
}

const add_user = (req, res) => {
  const blog = new User(req.body);
  blog.save()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
}

const  add_question = (req, res) => {
    User.updateOne(
     { email: req.body.email },
     { $push: { "questions": req.body.qid } })
     .then(result => {
       res.json(result);
     })
     .catch(err => {
       res.json(err);
     });
 };

 const  answer_question = (req, res) => {
    console.log(req.body);
    User.updateOne(
     { email: req.body.email },
     { $set: {  [`answers.${req.body.qid}`] : req.body.option } })
     .then(result => {
       res.json(result);
     })
     .catch(err => {
       res.json(err);
     });
 };

 const add_avater =(req, res)=>{
    console.log(req.body);
    User.updateOne(
     { email: req.body.email },
     { $set: {  "avatarURL": req.body.avater } })
     .then(result => {
       res.json(result);
     })
     .catch(err => {
       res.json(err);
     });
 }



module.exports = {
  get_users, 
  add_user,
  add_question,
  answer_question,
  add_avater
}