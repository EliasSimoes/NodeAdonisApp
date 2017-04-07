'use strict'

const Validator = use('Validator')
const User = use('App/Model/User')

class UserController {
    * login (req, res) {
        const email = req.input('email')
        const password = req.input('password')
        const login = yield req.auth.attempt(email, password)

        if(login) {
            res.send('Logado com sucesso!')
            return
        }

        res.unauthorized('Infomações invalidas')
     }

     * store (req, res) {
        const userData = req.param('username', 'email', 'password')
        const rules = {
            username: 'required',
            email: 'required',
            password: 'required'
        }

        const searchAtt = req.input('email')
        const pass = req.input('password')
        const confirmPass = req.input('confirm-pass')

        const validation = yield Validator.validate(userData, rules)

            if (validation.fails()) {

                yield req
                    .withOnly('username','email','password')
                    .andWith({errors: validation.messages()})
                    .flash()
                res.redirect('back')
                return
            }

            if(pass === confirmPass){
                yield User.find().where()
            }

            yield User.findOrCreate(searchAtt, userData)

            res.redirect('/login')
     }
}

module.exports = UserController
