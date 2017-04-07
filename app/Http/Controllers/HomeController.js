'use strict'

class HomeController {

    * index (req, res) {

      yield res.sendView('home')

    }

}

module.exports = HomeController
