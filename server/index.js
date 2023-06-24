const express = require('express');
const { request, response } = require('./app');
const app=require('./app')

app.listen(5000,()=>{
    console.log("server started at 5000")
})