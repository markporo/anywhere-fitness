module.exports = {
    //different configs for different dbs(dev, prod, testing, qa, staging)
    development: {
      client: "sqlite3",
      connection: {
        filename: "./data/anywhere_fitness.db3",
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations",
      },
      seeds: {
        directory: "./data/seeds",
      },
    },
  };