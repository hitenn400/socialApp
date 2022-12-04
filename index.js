// console.log("hello");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const format = require('date-format')
app.get("/",(req,res)=>{
    res.send("Hello")
});
app.get("/api/v1/instagram",(req,res)=>{
    const instaSocial={
        username:"hiten__",
        followers:557,
        follows:604,
        date:format.asString("dd[MM] - hh:mm:ss",new Date()),
    };
    res.status(200).json(instaSocial);
});
app.get("/api/v1/facebook",(req,res)=>{
    const instaSocial={
        username:"hiten__",
        followers:557,
        follows:604,
        date:format.asString("dd[MM] - hh:mm:ss",new Date()),
    };
    res.status(200).json(instaSocial);
});
app.get("/api/v1/linkedIn",(req,res)=>{
    const instaSocial={
        username:"hiten__",
        followers:557,
        follows:604,
        date:format.asString("dd[MM] - hh:mm:ss",new Date()),
    };
    res.status(200).json(instaSocial);
});
app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token);
    res.status(200).json({param:req.params.token});
})
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});
