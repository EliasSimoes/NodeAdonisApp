'use strict'

const Lucid = use('Lucid')

class Versao extends Lucid {

    user () {
        return this.belongsTo('App/Model/User')
    }
}

module.exports = Versao
