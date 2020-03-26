'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Booking extends Model {
    user (){
        return this.hasOne('app/Models/Role')
    }

    vehicle (){
        return this.hasOne('app/Models/Vehicle')
    }
}

module.exports = Booking
