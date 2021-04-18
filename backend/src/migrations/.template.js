const mysqlm = require('mysqlm');
const database = require('./database.js');
import getDbo from './database';

// const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;


// const config = {
//   host: DB_HOST,
//   database: DB_DATABASE,
//   user: DB_USER,
//   password: DB_PASSWORD
// }

async function up () {
  const dbo = await database.getDbo();
  // const {query} = mysqlm.connect(config);

  await dbo.model('User', { name: String, emil: String });
  // await dbo.createCollection("user", {})

  // await query(`
  //   CREATE TABLE user(
  //       id INT PRIMARY KEY AUTO_INCREMENT,

  //       name VARCHAR(30) NOT NULL,
  //       email VARCHAR(255) NOT NULL UNIQUE,

  //       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  //   )
  // `); 
}

async function down () {
  const dbo = await database.getDbo();
  // const {query} = mysqlm.connect(config);

  // await query(`DROP TABLE user`);

  await dbo.connection.db.dropCollection('User', function(err, result) {});
}

module.exports = { up, down }