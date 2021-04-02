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
