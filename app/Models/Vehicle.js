'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vehicle extends Model {
    type (){
        return this.hasOne('app/Models/Vehicle_type')
    }

    motor_oil (){
        return this.hasOne('app/Models/Motor_oil')
    }
}

module.exports = Vehicle
