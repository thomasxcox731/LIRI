# LIRI
This is the repository for the homework for Unit 10: Node.js. The purpose of this application is to create a Language Interpretation and Recognition Interface, or LIRI for short. LIRI is a command line node application that takes in user input and gives a data-based response. The goal with LIRI is to return as specific information to the user as possible based on a brief command. 

In this application, LIRI interacts with multiple API's, including Bands in Town, Spotify, Online Movie Database, and Axios to obtain data to present to the user. While I was the sole programmer of this application, I received assistance from my teachers and classmates. LIRI uses Node.js as a framework and JavaScript as its language.

Instructions

The user inputs a command into the terminal, consisting of "Node liri.js" + one of the following options: 

    1. "Concert-this, Artist": Initiates the 'concert-this' function that retrieves information from the Bands in Town API pertaining to the designated artist's next concert. Details listed are venue, location, and event date.

    2. "Spotify-this-song, Song": Commences the 'spotify-this-song' function that interfaces with the Spotify API to obtain the following information: artist, song title, the album it is from, and a brief preview of the song. 
        -Should the user initiate the function without designating a song, LIRI will default to "The Sign" by Ace of Base.  

    3. "Movie-this, Movie": Initiates the 'movie-this' function, which uses the OMDB API to get information about the selected movie, including its title, release year, IMDB rating, Rotten Tomatoes rating, country of origin, language, actors, and plot. 
        -If no movie is selected, LIRI will default to "Mr. Nobody."

    4. "Do-what-it-says": Commences the 'do-what-it-says' function which reads the file 'random.txt' and initates the command within, which in this case is 'spotify-this-song,"I Want it That Way"', which will run the 'spotify-this-song' function to obtain and present information on the song, "I Want it That Way" by The Backstreet Boys.  

The following link will present a video demo of the application: 
