import cors from 'cors'

import express, { Request, Response } from 'express';
import { StudentRoutes } from './modules/student/student.route';
const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/v1/students',StudentRoutes)
app.get('/', (req:Request, res:Response) => {
  const a =10;
  res.send(a)
})

console.log(process.cwd())

export default app
