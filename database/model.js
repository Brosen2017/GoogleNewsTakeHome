const sequelize = require("sequelize");
const connection = require("./index.js");

const news = connection.define("news", {
  newsId: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

connection
  .sync({force: false})
  .then(() => console.log("synced with PSQL database"))
  .catch(err => console.error(err));

module.exports = user;