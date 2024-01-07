
import {  mongoose } from '@typegoose/typegoose';
import { Schema } from 'mongoose';
import {Users , status, role} from '../interface/user.interface'

const schema = new Schema<Users>({
    id: { type: String ,required: true},
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    fullname: { type: String },
    phone: { type: String },
    age: { type: Number },
    status: { type: String ,default:status.PENDING },
    role: { type: String ,default:role.USER },
    active: { type: Boolean ,default:true },
    
  }
  ,{ timestamps: true });
  const usersModel = mongoose.model('users', schema);
  export  {usersModel}