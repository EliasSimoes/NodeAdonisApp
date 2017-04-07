'use strict'

const Versao = use('App/Model/Versao')
const Post = use('App/Model/Post')

const Validator = use('Validator')

class VersaoController {

    * index (req, res) {

      const versoes = yield Post.query().orderBy('id', 'desc').fetch()
      yield res.sendView('versao', { versoes: versoes.toJSON()})

    }

    * create (req, res) {
        yield res.sendView('update')
    }

    * store (req, res) {
        const postData = req.only('autor', 'titulo', 'observacao')
        const rules = {
            autor: 'required',
            titulo: 'required',
            observacao: 'required'
        }

        const validation = yield Validator.validate(postData, rules)

        if (validation.fails()) {

            yield req
                .withOnly('titulo', 'observacao')
                .andWith({errors: validation.messages()})
                .flash()
            res.redirect('back')
            return
        }

        yield Post.create(postData)
        res.redirect('/versao')

    }

    * show (req, res) {
        const versao = yield Post.find(req.param('id'))
        yield res.sendView('versao.show', {versao: versao.toJSON()})


    }
}

module.exports = VersaoController
