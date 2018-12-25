const express = require('express');
const path = require('path');
const parser = require('body-parser');
const axios = require('axios');
const port = 3000;
// const db = require('../database/model.js')
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '../client')));

app.get('/news', (req,res)=>{
    console.log('in get!')
})

app.listen(port, ()=>{
    console.log(`successfully listening on ${port}`)
});