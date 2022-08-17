const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   email: {
    type: String,
    required: true,
    },
    avatarURL: {
        type: String,
//        required: true,
    },
    answers: {
       type: Object,
//       required: true
    },
    questions: {
       type: Array,
//       required:true
    },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;