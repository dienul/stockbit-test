require('dotenv').config();
const {
  DB_HOST = '',
  DB_USER = '',
  DB_PASS = '',
  DB_NAME = '',
} = process.env;

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
  }
});

module.exports = {
  insert: async (data) => {
    try {
      return await knex('tb_log').insert(data);
    } catch (e) {
      console.log("SQl:", e)
      throw new Error(e)
    }

  }
}