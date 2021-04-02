### Getting started
- Clone this repo and and go to stockbit-movie directory
- `npm install`
- Fill the .env from .env.template 
- `npm run dev`

----------

### Available endpoint:

#### Search


    http://localhost:3000/movie/search

Query

| **parameter** 	|       **required**      |  **description**   |
|---------------|--------------------|----------------------|
| s      	    | yes         	     |          Movie title to search for.  |
| page          | Optional         	 |          Page number to return.      |
| y             | Optional        	 |          Year of release.         	|
| type          | Optional           |         Type of result to return (e.g. movie, series, episode)       	|


``` http://localhost:3000/movie/search?page=1&y=2016&plot=short&s=batman ```

Response
```json
success :
{
    "data": [
        {
            "Title": "Banat Kharqat (Banat Superman)",
            "Year": "2016",
            "imdbID": "tt10522084",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjIxMDliNmEtMTA0NS00MDAxLTgzNzgtYjc4YjI3YTFkZTAxXkEyXkFqcGdeQXVyMjQ1MDI1MzU@._V1_SX300.jpg"
        },
        {
            "Title": "Goku vs Superman: The Animated Movie",
            "Year": "2016–",
            "imdbID": "tt6255046",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYWU4NTc0MDctYzI0ZC00NjFhLWE4OGYtZGFkZDRhYmQ0OTA2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjgzMzYzMjA@._V1_SX300.jpg"
        },
        {
            "Title": "Hot Wheels All Access: Batman v. Superman",
            "Year": "2016",
            "imdbID": "tt6684296",
            "Type": "series",
            "Poster": "N/A"
        }
    ],
    "status_code": 200,
    "status": "success",
    "pagination": {
        "page": 1,
        "total_data": 3,
        "total_page": 1
    },
    "error": ""
}

error:
1. param "s" is null
{
    "data": [],
    "status_code": 400,
    "status": "bad request",
    "pagination": {},
    "error": "Query param 's' is required"
}

2. data not found
{
    "data": [],
    "status_code": 400,
    "status": "bad request",
    "pagination": {},
    "error": "Data not found"
}

```


#### Detail

    http://localhost:3000/movie/detail

Query

| **parameter** 	|       **required**      |  **description**  |  **notes**   |
|---------------|--------------------|----------------------|----------------------|
| i      	    | yes        	     |  A valid IMDb ID (e.g. tt1285016)| "i" must require if "t" optional |
| t      	    | yes        	     |   Movie title to search for.    	| "t" must require if "i" optional |
| type      	| no        	     |   Type of result to return.   	| e.g. movie, series, episode  |
| y      	    | no        	     |   Year of release.             	|-                             |
| plot      	| no        	     |   short, full                   	| -                            |

``` http://localhost:3000/movie/detail/?i=tt5916948 ```

Response
```json
success :
{
    "data": {
        "Title": "Batman",
        "Year": "1989",
        "Rated": "PG-13",
        "Released": "23 Jun 1989",
        "Genre": "Action, Adventure",
        "Director": "Tim Burton",
        "Writer": "Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)",
        "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl",
        "Plot": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
        "Language": "English, French, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 7 wins & 26 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "71%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ],
        "Metascore": "69",
        "imdbRating": "7.5",
        "imdbVotes": "340,277",
        "imdbID": "tt0096895",
        "Type": "movie",
        "DVD": "24 Jul 2014",
        "BoxOffice": "$251,348,343",
        "Production": "Warner Brothers, Guber-Peters Company, PolyGram Filmed Entertainment",
        "Website": "N/A",
        "Response": "True"
    },
    "status_code": 200,
    "status": "success",
    "error": ""
}

error:
1. param "t" or "i" is null
{
    "data": [],
    "status_code": 400,
    "status": "bad request",
    "error": "Query param 'i' or 't is required"
}

2.data not found
{
    "data": {
        "Title": "",
        "Year": "",
        "Rated": "",
        "Released": "",
        "Genre": "",
        "Director": "",
        "Writer": "",
        "Actors": "",
        "Plot": "",
        "Language": "",
        "Country": "",
        "Awards": "",
        "Poster": "",
        "Ratings": [],
        "Metascore": "",
        "imdbRating": "",
        "imdbVotes": "",
        "imdbID": "",
        "Type": "",
        "DVD": "",
        "BoxOffice": "",
        "Production": "",
        "Website": "",
        "Response": "False"
    },
    "status_code": 200,
    "status": "success",
    "error": ""
}

```