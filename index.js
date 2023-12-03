const express = require("express");
const app = express();
const mongoose = require("mongoose")
const {
    addGame,
    getGames,
    deleteGames,
    updateGame,
  } = require("./gameOperations");
app.use(express.json());

let connection = "mongodb://localhost:27017/games"

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) .then(async () => {
    console.log("Connection to MongoDB created");
    // Creating a user
    let game = await addGame('God Of War', 70, 'RPG Action', 'Mature', 'Sony')
    console.log(game)

    //Get all users
    let games = await getGames();
    console.log(games);

    //Delete a user
    console.log(await deleteGames("656ce7e7c61aceed674d5504"));


    //Update a user
    let updatedGame = await updateGame('656ce7e7c61aceed674d5504', 'Halo', 60, Shooter, '18+', 'Microsoft');
    console.log(updatedGame);
}) .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });


app.listen(3000);