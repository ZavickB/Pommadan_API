'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MotorOilsSchema extends Schema {
  up () {
    this.create('motor_oils', (table) => {
      table.increments()
      table.string('motor_oil_name', 30)
      table.timestamps()
    })
  }

  down () {
    this.drop('motor_oils')
  }
}

module.exports = MotorOilsSchema
