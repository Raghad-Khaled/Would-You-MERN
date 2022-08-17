const Question = require('../models/question');

const get_questions = (req, res) => {
    Question.find().sort({ createdAt: -1 })
    .then(result => {
      //console.log(result);
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
}

const add_question = (req, res) => {
  //console.log(req.body);  
  const question = new Question(req.body);
  question.save()
    .then(result => {
      console.log(result);  
      res.json(result);
    })
    .catch(err => {
        res.json(err);
    });
}

const  question_details = (req, res) => {
    const id = req.params.id;
    Question.findById(id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
      });
  }

  const  answer_question = (req, res) => {
     Question.updateOne(
      { _id: req.body.qid },
      { $push: { [`${req.body.option}.votes`]: req.body.name } })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
      });
  };

module.exports = {
    get_questions, 
    add_question,
    question_details,
    answer_question
  }