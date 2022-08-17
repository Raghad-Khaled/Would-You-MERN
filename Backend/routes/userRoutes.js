const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.get_users);
router.post("/", userController.add_user);
router.put("/add", userController.add_question);
router.put("/answer", userController.answer_question);
router.put("/avater", userController.add_avater);

module.exports = router;
