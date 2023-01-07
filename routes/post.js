const express = require("express");

const router = express.Router();

const postController = require("../controllers/post");

const Person = require("../models/Person");

router.get("/", async (req, res, next) => {
  // res.status(200).send("Welcome to person's profile")
  try {
    const result = await Person.find();
    res.status(200).json(result)
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post("/", postController.postInfoPerson);

router.get("/people", postController.getInfoPeople);

router.post("/people", postController.postInfoPeople);

router.post("/findbyid", postController.findById);

router.post("/findone", postController.findOne);

router.get("/:name", postController.findPerson);

module.exports = router;
