import Router from 'koa-router'

import users from '../controller/users'

const router = new Router();


router.post('/login',users.login)
router.post('/register',users.register)
router.get('/userList/:page',users.userList)

export default router