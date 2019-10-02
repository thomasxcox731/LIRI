// require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var axios = require('axios');

var fs = require('fs');

function syntax(){
    if (process.argv[2] === "movie-this"){
        var title = process.argv[3];
    } else if (process.argv[2] === "concert-this"){
        var concert = process.argv[3];
    } else if (process.argv[2] === "spotify-this-song"){
        var song = process.argv[3];
    } else if (process.argv[2] === "do-what-it-says"){
        var 
    }
}

axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy").then(
    function(response){
        var movie = response.data;
        console.log("Movie title: " + movie.Title + "\n",
        "Release Year: " + movie.Year + "\n",
        "IMDB Rating: " + movie.imdbRating + "\n",
        // "Rotten Tomatoes Rating: " + movie.Ratings.1.value + "\n", 
        "Country: " + movie.Country + "\n", 
        "Language: " + movie.Language + "\n", 
        "Plot: " + movie.Plot + "\n", 
        "Actors: " + movie.Actors + "\n",
        );
    }
);
