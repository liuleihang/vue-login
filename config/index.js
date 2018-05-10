const port = process.env.PORT || 3200
const connexionString = 'mongodb://localhost:27017/koa-rest'
const baseApi = 'api';
const secret = 'jwt_secret';
//const secret = fs.readFileSync('/path/to/public.pub');
const publicApi = [/\/register/,/\/login/];

export {port,connexionString,baseApi,secret,publicApi}