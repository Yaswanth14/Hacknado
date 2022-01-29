const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const axios = require('axios');
const { response } = require('express');

app.use(bodyParser.urlencoded({ extended: false }));

// To Use CSS
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("home");
});

// Testing Endpoint
const url = "https://global-warming.org/api/temperature-api";


app.get("/tmp",(req,res)=>{
    let labless = [];
    let valuess = [];
    axios.get(url)
        .then(response=>{
            let out = response.data.result;
            out.forEach((ot)=>{
                // if(ot.time>='1880'){
                    // labless.push(Number(ot.time));
                    // valuess.push(Number(ot.station));    
                // }
                labless.push(Number(ot.time));
                valuess.push(Number(ot.station));
            })
            console.log(labless);
            console.log("This is valuess ");
            console.log(valuess);
            res.render("home",{
                val:valuess,
                lab:labless
            })
        })
        .catch(error=>{
            console.log(error);
        });
});


app.listen(3000,()=>{
    console.log("App is running!!");
})