require('dotenv').config();
var axios = require('axios').default
const {
    get
} = require('../lib/index')
const {
    transformList
} = require('../entity/index')
const {
    addApiParam,
    createParam
} = require('../helper/movie')

const {
    OMDB_HOST = '',
    OMDB_KEY = '',
} = process.env;
let base_url = `${OMDB_HOST}/?apikey=${OMDB_KEY}`


module.exports = {
    search: async (data) => {
        try {
            const resp = []
            const param = await createParam(data)
            const url = `${base_url}&` + param
            const res = await get(url)
            if (res.Search) {
                res.Search.map(item => resp.push(transformList(item)))
            }
            return resp
        } catch (e) {
            throw new Error(e)
        }

    },

    detail: async (data) => {
        try {
            const param = await createParam(data)
            const url = `${base_url}&` + param
            return await get(url)
        } catch (e) {
            throw new Error(e)
        }
    }
}