const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.post('http://localhost:3001', (req,res)=>{
    if(!req.body.name) {
        throw new Error('please give a param `name`.');
    }else if (!req.body.contents) {
        throw new Error('please give a param `contents`.');
    }
    res.json(req.body);
})

module.exports = app;