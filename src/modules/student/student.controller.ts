
import express, { Request, Response } from 'express';
import { StudentService } from './student.service';
const createStudent= async(req:Request,res:Response)=>{
   try{
    const {student : studentData}=req.body;

    const result =await StudentService.createStudentIntoDB(studentData)
 
    res.status(200).json({
        success:true,
        messaage:"student is create successfully",
        data:result
    })
   }catch(error){
    console.log(error)
   }
}

export const StudentcreateController={
createStudent,
}