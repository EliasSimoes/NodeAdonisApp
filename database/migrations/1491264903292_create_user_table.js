'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username')
      table.string('email').unique()
      table.string('password')
      table.string('provider')
      table.string('provider_id')
      table.string('provider_token')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
