import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  loginid: String,
  password: String,
  email: {type:String,default:''},
	//recheck: {type:String,default:''},
	token: {type:String,default:''},
	create_time: Date
},{versionKey:false})

 /*
 UserSchema
 .virtual('userInfo')
  .get(function() {
    return {
      username: this.username,
    }
  })
  .set(function(obj) {
    console.log('set----',obj)
    this.username = obj.username;
    this.ext.length = obj.length;
    this.ext.weigh = obj.weigh;
  })*/

export default UserSchema
