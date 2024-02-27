const express = require("express")
const mongoose = require("mongoose")
const app =express()
const cors = require("cors")
const route = require("./Routes/route")
const categoryroute = require("./Routes/Categoryroute")
const productroute = require("./Routes/Productroute")
const dotenv = require("dotenv").config()
  const port =   process.env.port ||3000
  const dburl = process.env.dburl

mongoose.connect(dburl).then(()=>console.log("database connected")).catch((Error)=>{Error})
app.use(express.json())
app.use(cors())
app.use(route)
app.use(productroute)
app.use(categoryroute)
app.listen(port,()=>{
    console.log("Database running...")
})