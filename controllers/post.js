const Person = require("../models/Person");

//Create and Save a Record of a Model:
exports.postInfoPerson = (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  const favoriteFood = req.body.favoritefood;

  const person = new Person({
    name: name,
    age: age,
    favoritefood: favoriteFood,
  });
  person.save((err, data) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      res.status(200).json(data);
    }
  });
};

exports.getInfoPeople = (req, res, next) => {
  res.status(200).send("Welcome to people's page");
};

//Create Many Records with model.create()
exports.postInfoPeople = (req, res, next) => {
  const arrayOfPeople = req.body;
  Person.create(arrayOfPeople, (err, data) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      res.status(200).json(data);
    }
  });
};

//Use model.find() to Search Your Database
exports.findPerson = (req, res, next) => {
  const info = req.params.name;
  Person.find({ name: info }, (err, result) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      res.status(200).json(result);
    }
  });
};

//Use model.findById() to Search Your Database By _id

exports.findById = (req, res, next) => {
  const info = req.body.personId;
  Person.findById(info, (err, result) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      res.status(200).json(result);
    }
  });
};

//Use model.findOne() to Return a Single Matching Document from Your Database
exports.findOne = (req, res, next) => {
  const searchItem = req.body.food;
  Person.findOne({ favoritefood: { $all: searchItem} }, (err, result) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      res.status(200).json(result);
    }
  });
};
