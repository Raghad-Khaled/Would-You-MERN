const express = require('express');
const questionController = require('../controllers/questionController');

const router = express.Router();


router.get('/', questionController.get_questions);
router.post('/', questionController.add_question);
router.put('/answer', questionController.answer_question);
router.get('/:id', questionController.question_details);

module.exports = router;