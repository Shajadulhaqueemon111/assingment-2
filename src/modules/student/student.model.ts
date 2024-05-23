import { Schema, model} from 'mongoose';
import {  Student, userName } from './student.interface';


const userNameSchema=new Schema<userName>({
    
        firstName:{type:String,required:true},
        middleName:{type:String,required:true},
        lastName:{type:String,required:true}

    
})

const userSchema = new Schema<Student>({
    id:{type: String, required:true},
    name:userNameSchema,

    gender:["male","female"],
    email:{type:String, required:true},
    contactNumber:{type:String, required:true}
})

export const StudentModel =model<Student>("Student",userSchema );