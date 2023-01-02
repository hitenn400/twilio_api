const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('dotenv').config();

const home = require('./routes/route');
app.use(home);
app.listen(process.env.PORT,()=>{
    console.log("server is listening on 3000");
})