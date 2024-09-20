const express = require('express');
const authMiddleware = require('./auth')

const app = express();
const port = 8080;

app.use(authMiddleware);                 // basic authentication is implemented in this middleware 

app.get("/",async(req,res) => {
    
    res.send("Authentication successfull !!!")
})

app.listen(port,() => {
    console.log("Server listening to port 8080");
});
