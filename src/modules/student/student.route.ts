
import express, { Request, Response } from 'express';
import { StudentcreateController } from './student.controller';

const router =express.Router()
router.post('/create-student',StudentcreateController.createStudent)

export const StudentRoutes=router