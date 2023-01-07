const express = require("express");

const router = express.Router();

const postController = require('../controllers/post')

router.get('/', (req, res, next) => {
    res.status(200).send("Welcome to person's profile")
})

router.post('/', postController.postInfoPerson)

module.exports = router