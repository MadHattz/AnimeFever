let mongoose = require('mongoose');
//create a module for animeFever
let animeModule = mongoose.Schema({
    Name: String,
    Genre: String,
    Rating: String,
    Seasons: String,
    Aired: String,
    Description: String
    },
    {
        collection: "AnimeFever"

    }

);
//export module
module.exports = mongoose.model('Anime',animeModule);
//display lists of animes in router
//display by (localhost:3000/book-list)
//go into routes and add route