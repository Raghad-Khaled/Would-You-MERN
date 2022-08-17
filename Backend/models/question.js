const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
   author: {
    type: String,
    required: true,
  },
  avatarURL: {
    type: String,
    required: true,
  },
  optionOne: {
        votes: {
            type: Array,
        },
        text: {
            type: String,
            required: true
        }
    },
    optionTwo: {
        votes: {
            type: Array,
        },
        text: {
            type: String,
            required: true
        }
    },
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;