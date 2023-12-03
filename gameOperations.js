const userModel = require('./models/gamesModel');

const addGame = async (game, price, genre, rating, publisher) => {
    let game = new gameModel();
    game.game = game;
   game.price = price;
   game.genre = genre;
   game.rating = rating;
   game.publisher= publisher;

    await game.save()
    return game;

};


const updateGame = async (_id, game, price, genre, rating, publisher) => {
    let game = await gameModel.findById(_id);
    game.game = game;
   game.price = price;
   game.genre = genre;
   game.rating = rating;
   game.publisher= publisher;

    await game.save()
    return game;
  };
  const getGames = async () => {
    let games = await gameModel.find();
    return games;
  };
  const deleteGames = async (_id) => {
    let game = await gameModel.findByIdAndDelete(_id);
    return game;
  };

  module.exports.addGame = addGame;
  module.exports.getGames = getGames
  module.exports.deleteGames = deleteGames;
  module.exports.updateGame = updateGame;