const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongodb = require("mongodb").MongoClient;
const { RSA_NO_PADDING } = require("constants");
    
const app = express();

app.use(cors());

app.use(bodyparser.json());

var db;

mongodb.connect("mongodb+srv://Abhinay_dewangan:ugcs%40VB6%23pwD-z%40@clustersc.4reab.mongodb.net/pAgalProject1?retryWrites=true&w=majority", (error, result)=>{

if(error)
{
    console.log("DB Not Connect");
}
else {
    db = result.db("pAgalProject1");
    console.log("DB Connected");
}

});



app.post("/register", (req, res)=>{

    req.body._id = new Date().getTime();

    console.log(req.body);

    db.collection("collectionPAgal").insert(req.body, (error, data)=>{   // .save - used to save data in database

        if(error)
        {
            res.status(403).json("Error in insert query");
        }
        else {
            res.json("User Registered Successfully!");
        }
    });   
});

app.post("/login",(req,res)=>{
    
    console.log(req.body);
    
    db.collection("collectionPAgal").find(req.body).toArray((error , data)=>{    // .find - used to get data from database,  .toArray - used to get data in array form                                  
       
        if(error)
        {
            res.status(403).json("Error in finding query");
        }
        else {
        
            res.json(data);
        } 
    });  
    
});
app.get("/allusers", (req, res)=>{

    db.collection("collectionPAgal").find().toArray((error, data)=>{

        if(error)
        {
            res.status(403).json("Error in Finding the login doc");
        }
        else {
            res.json(data);
        }
    });

});


app.get("/usernamecheck/:username", (req, res)=>{

    console.log(req.params.username);

    db.collection("collectionPAgal").find({uname:req.params.username}, {projection: {_id : 1}}).toArray((error, data)=>{
 
        if(error)
        {
            res.status(403).json("Error in Finding Username Availibility");
        }
        else {
            res.json(data);
        }
    });
});

app.get("/getuser/:userid", (req, res)=>{
    
    console.log(req.params);

    db.collection("collectionPAgal").find({_id : Number(req.params.userid)}).toArray((error, data)=>{
 
        if(error)
        {
            res.status(403).json("Error in Finding Username Availibility");
        }
        else {
            res.json(data);
        }
    });
});

app.put("/updateuser", (req, res)=>{ 

    console.log(req.body);

    var condition = {_id : req.body._id};

    var newValues = {$set: { uname: req.body.uname, uemail:req.body.uemail, upassword:req.body.upassword, uphone:req.body.uphone, ucode:req.body.ucode , ustatus:req.body.ustatus}};

    db.collection("collectionPAgal").update(condition, newValues, (error,data)=>{

        if(error)
        {
            res.status(403).json("Error in updating the Doc");
        }
        else{
            res.json("User Updated Successfully");
        }
    });
});

app.delete("/deleteuser/:userid" , (req,res)=>{
    console.log(req.params);

    db.collection("collectionPAgal").deleteOne({_id : Number(req.params.userid)}, (error,data)=>{

        res.json("User Deleted Succesfully");
    });
});

app.get("/search/:searchtxt?", (req, res)=>{

    console.log(req.params);
    
    if(req.params.searchtxt!=undefined)
    {
        var search = new RegExp(req.params.searchtxt,'i');

        var searchCond = {uname : search};
    }
    else{
        var searchCond = null;
    }

    db.collection("collectionPAgal").find(searchCond).toArray((error, data)=>{
        
        res.json(data);
    });
});  

app.get("/searchCourier/:courierId",(req,res)=>{
    if(req.params.courierId!=undefined){
        var searchCond = {ucode : req.params.courierId};
    }
    else{
        var searchCond = null;
    }
    db.collection("collectionPAgal").find(searchCond).toArray((error, data)=>{
        console.log(searchCond);
        console.log(data);
        res.json(data);
    });
})
module.exports = app;