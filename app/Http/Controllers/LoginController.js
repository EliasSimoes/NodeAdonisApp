'use strict'

const User = use('App/Model/User')


class LoginController {
    * index (req, res) {
        yield res.sendView('login')
    }

    * redirect (req, res) {
    yield req.ally.driver('facebook').redirect()
    }

    * handleCallback (req, res) {
        const fbUser = yield req.ally.driver('facebook').getUser()

        const searchAttr = {
            email: fbUser.getEmail()
        }

        const newUser = {
            email: fbUser.getEmail(),
            username: fbUser.getName(),
            provider: 'facebook',
            provider_id: fbUser.getId(),
            provider_token: fbUser.getAccessToken(),
        }

        const user = yield User.findOrCreate(searchAttr, newUser)

        yield req.auth.loginViaId(user.id)

        res.redirect('/')
    }




}

module.exports = LoginController
