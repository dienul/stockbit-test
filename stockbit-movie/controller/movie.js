const {
    search,
    detail
} = require('../service/movie')

const {
    success,successPagination
} = require('../resp/resp_success')

const {
    errorResp,errorPagination
} = require('../resp/resp_error')

module.exports = {
    searchMovie: async (req, res) => {
        
        try {
            if(req.query.s){
                console.log('--- searchMovie ---')
                const resp = await search(req.query)                
                res.json(successPagination(resp))

            }else{
                res.status(400).json(errorPagination([], "Query param 's' is required" ))
                return
            }

        } catch (error) {
            res.status(400).json(errorPagination([], "Data not found"))
        }
    },

    detailMovie: async (req, res) => {
     
        try {
            if(req.query.i || req.query.t){
                console.log('--- detail movie ---')
                const resp = await detail(req.query)
                res.json(success(resp))

            }else{
                res.status(400).json(errorResp([], "Query param 'i' or 't is required" ))
                return
            }
            
        } catch (error) {
            res.status(400).json(errorResp({}, "Data not found"))
        }
    }
}