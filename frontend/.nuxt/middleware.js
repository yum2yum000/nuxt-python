const middleware = {}

middleware['load-auth'] = require('..\\middleware\\load-auth.js')
middleware['load-auth'] = middleware['load-auth'].default || middleware['load-auth']

middleware['load-user-data'] = require('..\\middleware\\load-user-data.js')
middleware['load-user-data'] = middleware['load-user-data'].default || middleware['load-user-data']

export default middleware
