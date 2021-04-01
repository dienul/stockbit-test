var axios = require('axios').default
module.exports = {
    get: async (url) => {
        try {
            console.log(url)
            const resp = await axios({
                method: 'get',
                url: url,
            })
         
            return resp.data
        } catch (e) {
            throw new Error(e)
         }
    }
}