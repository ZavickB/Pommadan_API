'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehiclesTypesSchema extends Schema {
  up () {
    this.create('vehicles_types', (table) => {
      table.increments()
      table.string('type_name', 25)
      table.timestamps()
    })
  }

  down () {
    this.drop('vehicles_types')
  }
}

module.exports = VehiclesTypesSchema
