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
```
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


```