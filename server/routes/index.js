import Router from 'koa-router'
import users from './users'
import { baseApi } from '../../config/index'

const router = new Router();

router.prefix(`/${baseApi}`)
export default function (app) {
    //装载上面四个子路由
    router.use('', users.routes(), users.allowedMethods())
    //router.use('/users', users.routes(), users.allowedMethods())

    //加载路由中间件
     app.use(router.routes())
}