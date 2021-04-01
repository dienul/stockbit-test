const {
    search, 
    detail
} = require('../service/movie')
module.exports = {
    searchMovie : async (req,res)=>{
        console.log('--- searchMovie ---')
        try {
            const resp = await search(req.query)
            res.json(resp)
        } catch (error) {
            
        }
    },

    detailMovie : async (req,res)=>{
        console.log('--- detail movie ---')
        try {
            const resp = await detail(req.query)
            res.json(resp)
        } catch (error) {
            
        }
    }
}