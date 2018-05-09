const port = process.env.PORT || 3200
const connexionString = 'mongodb://localhost:27017/koa-rest'
const baseApi = 'api';
const secret = 'jwt_secret';



export {port,connexionString,baseApi,secret}