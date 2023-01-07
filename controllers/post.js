const Person = require("../models/Person");

exports.postInfoPerson = async (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  const favoriteFood = req.body.favoritefood;

  const person = new Person({
    name: name,
    age: age,
    favoritefood: favoriteFood,
  });
  try {
    const savedPost = await person.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
