const Chiste = require("../models/chiste.model");

module.exports.welcome = (req, res) => {
  res.json({ results: '¡Bienvenido a la API de chistes!' })
}

module.exports.allJokes = (req, res) => {
  Chiste.find()
    .then(allJokes => res.json({ results: allJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.jokeById = (req, res) => {
  Chiste.findOne({ _id: req.params._id })
    .then(jokeById => res.json({ results: jokeById }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.randomJoke = (req, res) => {
  Chiste.aggregate([{ $sample: { size: 1 } }])
    .then(randomJoke => res.json({ results: randomJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.newJoke = (req, res) => {
  Chiste.create(req.body)
    .then(newJoke => res.json({ results: newJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.updateJokeById = (req, res) => {
  Chiste.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then(updateJokeById => res.json({ results: updateJokeById }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJokeById = (req, res) => {
  Chiste.deleteOne({ _id: req.params._id })
    .then(deleteJokeById => res.json({ result: deleteJokeById }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};