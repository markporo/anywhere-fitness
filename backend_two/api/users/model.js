const db = require("../../data/db-config");

async function getUsers() {
  const userRows = await db("users");

  return userRows;
}

module.exports = {
  getUsers,
};
