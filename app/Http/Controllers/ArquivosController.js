'use strict'

class ArquivosController {

    *index (req, res) {

        yield res.sendView('arquivo')
    }

}

module.exports = ArquivosController
