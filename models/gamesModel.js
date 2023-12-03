const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
    game: String,
    price: Number,
    genre: String,
    rating: String,
    publisher: String, 
});
const gamesModel = mongoose.model("games", gameSchema);
module.exports = gamesModel;