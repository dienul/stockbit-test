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
  migrate: async () => {
    var check_table = await knex.schema.hasTable("tb_log").then(async function (exists) {
      if (!exists) {
        var createTable = await knex.schema.createTable("tb_log", async function (t) {
          t.string('log_id', 255);
          t.text('log_resp');
          t.text('log_req');
          t.timestamp('created_at');

        });
      }
    })
  },
  insert: async (data) => {
    try {
      return await knex('tb_log').insert(data);
    } catch (e) {
      console.log("SQl:", e)
      throw new Error(e)
    }

  }
}