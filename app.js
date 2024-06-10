const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const product = require("./models/product")

const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/search",(req,res)=>{
    res.send("hellooo")
})

app.get("/delete",(req,res)=>{
    res.send("hellooooo")
})

app.get("/viewall",(req,res)=>{
    res.send("hellooooooooooo")
})

app.listen(8080,()=>{
    console.log("server started")
})