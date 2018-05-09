import './env'
import Koa from 'koa';
import bodyParser from 'koa-bodyparser'
import jwt from 'koa-jwt'
import logger from 'koa-logger'
import  mongoose from 'mongoose'

import errorHandle from './server/middlewares/errorHandle';
import { port, connexionString, secret } from './config/index'
import routerList from './server/routes'

const app = new Koa();

//mongoose.connect(connexionString)
// mongoose promise 风格 [mongoose.Promise = require('bluebird')]
//mongoose.Promise = global.Promise;

//const publicKey = 'shared-secret';
//const publicKey = fs.readFileSync('/path/to/public.pub');
//const publicApi = [/\/register/,/\/login/];
//const jwtFilter = jwt({secret:publicKey}).unless({path:publicApi});


app
    .use(errorHandle)
    //.use(jwtFilter)
    .use(logger())
    .use(bodyParser())
    //.use(customLog)

app.on('error', function(err, ctx){
    console.log('koa server error', err);
});
//挂载路由列表
routerList(app)

app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))

export default app