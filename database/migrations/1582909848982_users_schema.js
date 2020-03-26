'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
    this.raw('ALTER TABLE users ADD constraint FK_users_roles FOREIGN KEY (id_role) REFERENCES roles(id)')
    })
  }


  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UsersSchema
