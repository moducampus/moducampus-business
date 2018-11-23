const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

/*
app.post('http://localhost:3001', (req,res,next)=>{
    if(!req.body.)
})
*/