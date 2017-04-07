'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')



Route.post('/login', 'UserController.login')
Route.post('/login', 'UserController.store')
Route.get('/login', 'LoginController.index')
Route.get('/facebook/login', 'LoginController.redirect')
Route.get('/facebook/authenticated', 'LoginController.handleCallback')


Route.group('authenticated', function () {
    Route.get('/','HomeController.index')

    Route.get('/update', 'UpdateController.index')

    Route.get('/versao', 'VersaoController.index')
    Route.get('versao/create', 'VersaoController.create')
    Route.post('versao', 'VersaoController.store')
    Route.get('versao/:id', 'VersaoController.show')

    Route.get('/arquivo', 'ArquivosController.index')
}).middleware('auth')