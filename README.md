
## 安装模块
发布使用
- koa
- koa-router
- koa-bodyparser
- koa-jwt
- koa-logger
- mongoose
- jsonwebtoken

```
npm install <name> --save
```
开发使用
- nodemon node调试工具
- bable 编译
- babel-core 
- babel-loader 
- babel-eslint

```
npm install <name> --save--dev
```


## 服务端api接口

#### 在根目录创建服务端目录server和服务端入口文件server.js
```
│  db.js         //数据库配置文件夹
├─controller    // controller-控制器
│      users.js
├─middlewares       //中间件
│      errorHandle.js
├─routes      // route-路由
│      index.js
│      users.js
└─schema    // schema-数据库表结构
        User.schema.js

```
**ps:windows下cmd执行``tree /f <dirname>``命令就可以生成目录及文件树**

#### 创建登录api路由[``routes/user.js``]
```
import Router from 'koa-router'

import users from '../controller/users'

const router = new Router();


router.post('/login',users.login)

export default router
```

#### 将路由规则“挂载”到koa上去
```
routes/index.js
import Router from 'koa-router'
import users from './user'
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
```
服务端入口文件server.js引用
```
import routerList from './server/routes'

routerList(app)
```

#### 使用nodemon调试工具启动api接口服务

安装模块
- ``nodemon``
- ``babel-plugin-transform-runtime``
- ``dotenv`` 环境变量管理工具
- ``babel-preset-env``
- ``babel-preset-stage-2``

创建环境变量配置文件``env.js``

server.js首行引入env.js
```
import './env'
```
package.json文件scripts添加``dev``
```
"scripts": {
    "dev": "nodemon -w server.js -w server server-entry.js"
  }
```
执行``npm run dev``启动调试
```
> nodemon -w server.js -w server server-entry.js

[nodemon] 1.17.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: server.js 
[nodemon] starting `node server-entry.js`
✅  The server is running at http://localhost:3200/
Mongodb started successfully
```
服务启动,接下来就可以测试接口了。










参考

https://ykloveyxk.github.io/2017/03/21/vue-login-通过一个项目带你走进vue全栈开发/

https://molunerfinn.com/Vue+Koa/

https://github.com/Molunerfinn/vue-koa-demo


