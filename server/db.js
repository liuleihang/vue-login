import mongoose from "mongoose";
import { connexionString } from "../config/index";

import userSchema from "./schema/User.schema";

mongoose.connect(connexionString)
Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connect error'))
db.once('open', function () {
	console.log('Mongodb started successfully')
})

const model = {
	// 在此处扩展 model，例如：
	// Article: mongoose.model('Article', articleSchema),
	User: mongoose.model('User', userSchema)
}

export default model;
