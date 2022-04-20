const ChisteController = require("../controllers/chiste.controller");

module.exports = app => {
  
  // Welcome
  app.get('/api', ChisteController.welcome);
  
  // Returns a list of all jokes
  app.get('/api/jokes', ChisteController.allJokes);

  // Returns a random joke
  app.get('/api/jokes/random', ChisteController.randomJoke);
  
  // Returns the joke with matching " id"
  app.get('/api/jokes/:_id', ChisteController.jokeById);

  // Creates a new joke
  app.post('/api/jokes/new', ChisteController.newJoke);

  // Updates the joke with matching "_id"
  app.put('/api/jokes/update/:_id', ChisteController.updateJokeById);

  // Removes the joke with matching " id"
  app.delete('/api/jokes/delete/:_id', ChisteController.deleteJokeById);
  
};