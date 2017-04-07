'use strict'

const Schema = use('Schema')

class VersaosTableSchema extends Schema {

  up () {
    this.create('versaos', (table) => {
      table.increments()
      table.string('titulo')
      table.text('observacao')
      table.timestamps()
    })
  }

  down () {
    this.drop('versaos')
  }

}

module.exports = VersaosTableSchema
