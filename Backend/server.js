import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import multer from 'multer'

const app=express() // routes,middleware
const port=process.env.PORT || 4000

connectDB()
connectCloudinary()
app.use(express.json())
app.use(cors()) // frontend //different domains can access api


app.use('/api/admin',adminRouter)


app.get('/',(req,res)=>{
    res.send('API working')
})

app.listen(port ,()=>console.log("server started",port))