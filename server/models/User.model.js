import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: String,
  password: String
},{versionKey:false})

UserSchema
  .virtual('userInfo')
  .get(function() {
    return {
      username: this.username,
    }
  })
  /*.set(function(obj) {
    console.log('set----',obj)
    this.username = obj.username;
    this.ext.length = obj.length;
    this.ext.weigh = obj.weigh;
  })*/


const User = mongoose.model('User', UserSchema)
export default User
