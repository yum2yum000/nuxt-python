const middleware = {}

middleware['load-auth'] = require('..\\middleware\\load-auth.js')
middleware['load-auth'] = middleware['load-auth'].default || middleware['load-auth']

export default middleware
