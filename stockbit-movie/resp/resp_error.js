

module.exports = {

    errorResp:  (data, error) => {
        return  {
            data:data,
            status_code:400,
            status:"bad request", 
            error:error
        }
    },

    errorPagination:  (data,error) => {
        return  {
            data:data,
            status_code:400,
            status:"bad request", 
            pagination:{},
            error:error
        }
    },
}