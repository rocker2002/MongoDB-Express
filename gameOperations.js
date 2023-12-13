const userModel = require('./models/gamesModel');

const addGame = async (game, price, genre, rating, publisher) => {
    let games = new gameModel();
    games.game = game;
   games.price = price;
   games.genre = genre;
   games.rating = rating;
   games.publisher= publisher;

    await games.save()
    return games;

};


const updateGame = async (_id, game, price, genre, rating, publisher) => {
    let games = await gameModel.findById(_id);
    games.game = game;
   games.price = price;
   games.genre = genre;
   games.rating = rating;
   games.publisher= publisher;

    await games.save()
    return games;
  };
  const getGames = async () => {
    let games = await gameModel.find();
    return games;
  };
  const deleteGames = async (_id) => {
    let games = await gameModel.findByIdAndDelete(_id);
    return games;
  };

  module.exports.addGame = addGame;
  module.exports.getGames = getGames
  module.exports.deleteGames = deleteGames;
  module.exports.updateGame = updateGame;