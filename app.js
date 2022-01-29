const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// To Use CSS
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("home");
})


app.listen(3000,()=>{
    console.log("App is running!!");
})