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

| **required** 	|       **params**      |  **notess**   |
|---------------|--------------------|----------------------|
| Yes      	    | s         	 |          -         	|
| Optional      | page         	 |          -         	|

``` http://localhost:3000/movie/search?page=1&y=2016&plot=short&s=batman ```

#### Detail

    http://localhost:3000/movie/detail

Query

| **required** 	|       **params**      |  **notes**   |
|---------------|--------------------|----------------------|
| Yes      	    | i         	 |          imdbID         	|


``` http://localhost:3000/movie/detail/?i=tt5916948 ```
