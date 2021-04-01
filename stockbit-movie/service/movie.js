require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const moment = require("moment")
var axios = require('axios').default
const {
    get
} = require('../lib/index')
const {
    transformList,
    transformDetail
} = require('../entity/index')
const {
    addApiParam,
    createParam
} = require('../helper/movie')
const {
    insert
} = require('../models/index')
const {
    OMDB_HOST = '',
    OMDB_KEY = '',
} = process.env;

let base_url = `${OMDB_HOST}/?apikey=${OMDB_KEY}`

async function insertDB(url, data) {
    return await insert({
        log_id: uuidv4(),
        log_req: url,
        log_resp: JSON.stringify(data),
        created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    })
}

module.exports = {

    search: async (data) => {
        try {
            let pagination = {
                page: data.page ? parseInt(data.page) : 1,
                total_data: 0,
                total_page: 0
            }
            const resp = []

            const param = await createParam(data)
            const url = `${base_url}&` + param
            const res = await get(url)
            await insertDB(url, res)

            if (res.Search) {
                res.Search.map(item => resp.push(transformList(item)))
                pagination.total_data = parseInt(res.totalResults)
                pagination.total_page = Math.ceil(res.totalResults / 10)
            } else {
                throw new Error("Data not found! ")
            }

            await insertDB(url, res)
            return {
                data: resp,
                pagination: pagination
            }
        } catch (e) {
            throw new Error(e)
        }

    },

    detail: async (data) => {
        try {
            let resp = {}

            const param = await createParam(data)
            const url = `${base_url}&` + param
            const res = await get(url)
            await insertDB(url, res)

            if (res) {
                resp = transformDetail(res)
            } else {
                throw new Error("Data not found! ")
            }

            return resp
        } catch (e) {
            throw Error(e)
        }
    }
}