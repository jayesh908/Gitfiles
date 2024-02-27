const express = require("express")
const router = require("express").Router()
const app =express()
const cors = require("cors")
const dotenv = require("dotenv").config()
  const port =   process.env.port ||3000


  const fake = (req,res,next)=>{
    
  }
    const getuser = (req,res)=>{
        res.json({
            message:"getting all user"
        })
    }
    const createuser = (req,res)=>{
        res.json({
            message:"creating all user"
        })
    }
  router.route("/").get(getuser).post(createuser)


app.use(express.json())
app.use(cors())
app.use(router)
app.listen(port,()=>{
    console.log("Database running...")
})  