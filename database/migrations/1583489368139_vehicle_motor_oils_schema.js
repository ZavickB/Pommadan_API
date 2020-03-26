'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehicleMotorOilsSchema extends Schema {
  up () {
    this.table('vehicles', (table) => {
      // alter table
      this.raw('ALTER TABLE vehicles ADD constraint FK_vehicles_motor_oils FOREIGN KEY (id_motor_oil) REFERENCES motor_oils(id)')

    })
  }

  down () {
    this.table('vehicles', (table) => {
      // reverse alternations
    })
  }
}

module.exports = VehicleMotorOilsSchema
