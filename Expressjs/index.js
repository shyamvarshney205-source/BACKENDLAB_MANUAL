
const express=require('express');

const app=express();
app.get("/",(req,res)=>(
    res.send("Welcome")
));
app.get("/home",(req,res)=>(
    res.send("Welcome home")
));
app.get("/contact",(req,res)=>(
    res.send("Welcome co")
));
app.get("/search",(req,res)=>{ 
    const data=req.query.name;
    console.log(req.query)  
    res.send("<h1>search result found</h1>"+req.query.name);
    if(data==""){
        res.send("<h1>search result not found</h1>");
    }
});
app.get("/about",(req,res)=>{ 
    console.log(req.query)  
    res.send("<h1>about result found</h1>"+req.query.name);
});

app.listen(9000, () => {
    console.log("Server http://localhost:9000");
})




