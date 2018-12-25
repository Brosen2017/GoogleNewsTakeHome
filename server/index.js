const express = require('express');
const path = require('path');
const parser = require('body-parser');
const key = require('../APIKEY/key.js');
const axios = require('axios');
const port = 3000;
// const db = require('../database/model.js')
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/news', (req,res)=>{
    console.log('in get!')
    axios
    .get(`https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${key}`)
    .then((response)=>{
        console.log(response.data)
        res.status(200).send(response.data);
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.post('/news', (req, res)=>{
    console.log('in post!', req.body.search)
    axios
    .get(`https://newsapi.org/v2/everything?q=${req.body.search}&apiKey=${key}`)
    .then((response)=>{
        console.log(response.data)
        res.status(200).send(response.data)
    })
    .catch(err=>console.log(err))
})

app.listen(port, ()=>{
    console.log(`successfully listening on ${port}`)
});