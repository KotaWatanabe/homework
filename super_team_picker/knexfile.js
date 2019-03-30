// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'team_picker'
    },
    migrations:{
      directory:"./db/migrations"
    }
  },

};
