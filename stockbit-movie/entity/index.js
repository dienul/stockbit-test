

module.exports = {

    transformList:  (data) => {
        return  {
            Title: data.Title ? data.Title : "",
            Year: data.Year ? data.Year : "",
            imdbID: data.imdbID ? data.imdbID : "",
            Type: data.Type ? data.Type : "",
            Poster: data.Poster ? data.Poster : ""
        }
    },
    transformDetail:  (data) => {
        return  {
            Title: data.Title ? data.Title : "",
            Year: data.Year ? data.Year : "",
            Rated: data.Rated ? data.Rated : "",
            Released: data.Released ? data.Released : "",
            Genre: data.Genre ? data.Genre : "",
            Director: data.Director ? data.Director : "",
            Writer: data.Writer ? data.Writer : "",
            Actors: data.Actors ? data.Actors : "",
            Plot: data.Plot ? data.Plot : "",
            Language: data.Language ? data.Language : "",
            Country: data.Country ? data.Country : "",
            Awards: data.Awards ? data.Awards : "",
            Poster: data.Poster ? data.Poster : "",
            Ratings: data.Ratings ? data.Ratings : [],
            Metascore: data.Metascore ? data.Metascore : "",
            imdbRating: data.imdbRating ? data.imdbRating : "",
            imdbVotes: data.imdbVotes ? data.imdbVotes : "",
            imdbID: data.imdbID ? data.imdbID : "",
            Type: data.Type ? data.Type : "",
            DVD: data.DVD ? data.DVD : "",
            BoxOffice: data.BoxOffice ? data.BoxOffice : "",
            Production: data.Production ? data.Production : "",
            Website: data.Website ? data.Website : "",
            Response: data.Response ? data.Response : ""
        }
    }
}