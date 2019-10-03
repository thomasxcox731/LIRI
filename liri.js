require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var bandsintown = require('axios');
var operator = process.argv[2];
var input = process.argv[3];
var fs = require('fs');

function operators() {
    if (operator === "movie-this") {
        movieThis(input);
    } else if (operator === "concert-this") {
        concertThis();
    } else if (operator === "spotify-this-song") {
        spotifyThis(input);
    }
    // } else if (operator === "do-what-it-says"){
    //     var 
    // }
};
operators();

//Using the BandsInTown API to retreive Concert Data//
function concertThis() {
    bandsintown.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
        function (response) {
            // console.log(response.data[0].venue.name);
            var concert = response.data[0];
            console.log("Venue: " + concert.venue.name + "\n",
                "Location: " + concert.venue.city + "," + concert.venue.region + "\n",
                "Event Date: " + concert.datetime + "\n",
            );
        }
    );
};

//Using the Spotify API to retrieve Song Data//
function spotifyThis(song) {
    if (!song){
        song = "The Sign";
        console.log(song);
    }
    spotify
        .search({ type: 'track', query: song})
        .then(function (response) {
            console.log("Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Title: " + response.tracks.items[0].name);
            console.log("Album: " + response.tracks.items[0].album.name);
            console.log("Preview: " + response.tracks.items[0].preview_url)
        })
        .catch(function (err) {
            console.log(err);
        });
};

//Using the OMDB API via Axios to retrieve Movie Data//
function movieThis() {
    if (!input){
        input = "Mr. Nobody"
    };
    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            var movie = response.data;
            console.log("Movie title: " + movie.Title + "\n",
                "Release Year: " + movie.Year + "\n",
                "IMDB Rating: " + movie.imdbRating + "\n",
                // "Rotten Tomatoes Rating: " + movie.Ratings[1].value + "\n", 
                "Country: " + movie.Country + "\n",
                "Language: " + movie.Language + "\n",
                "Plot: " + movie.Plot + "\n",
                "Actors: " + movie.Actors + "\n",
            );
        }
    );
};
