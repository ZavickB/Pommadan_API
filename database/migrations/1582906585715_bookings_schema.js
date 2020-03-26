'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingsSchema extends Schema {
  up () {
    this.create('bookings', (table) => {
      table.increments()
      table.datetime('booking_start', {precision: 6}).notNullable()
      table.datetime('booking_end', {precision: 6}).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bookings')
  }
}

module.exports = BookingsSchema
