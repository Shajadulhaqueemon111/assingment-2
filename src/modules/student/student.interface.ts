import { Schema, model, connect } from 'mongoose';


export type userName={
    
    firstName: string;
    middleName:string;
    lastName: string;
}
export type Student  ={
    id:string,
    name: userName,
    gender:"male"|"female",
    dateOfBirth?:string,
    email: string;
    contactNumber: string;
    bloodGroup?:"A+"|"A-"|"AB+";

    presentAddress:string;
    parmanentAddress:string;
   
  }