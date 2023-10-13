const express = require('express')
const app = express()
const fs = require('fs')
const port=3000
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded())

app.get('/login' , (req,res) => {
    // res.send("<form onsubmit='localStorage.setItem('username',document.getElementById('username').value)' action = '/' method='POST'> <input id='username' type='text' name='title'> <button type = 'submit'> Login</button></form>")
    // res.send("<form onsubmit='localStorage.setItem('username', document.getElementById('username').value)' method='POST' action='/'><input type='text' name='title' id='username'><br/> <button type='submit'>Send</button></form>")


   res.send(`<form onsubmit = "localStorage.setItem('username', document.getElementById('username').value)" action = "/chat" method = "GET"><span> Username: </span> <input id = "username" type = "text"> <button type = "submit"> Login </button></form>`)
})

app.get("/chat", (req,res) => {
    fs.readFile("username.txt",(err,data) => {
        if(err){
            data="NO Chat Exists"
        }
        res.send(
        `<prev>${data}</prev>
      <form action="/chat" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" mathod="POST">
     <input type='text' id='message' name='message' name='message'>
     <input type='hidden' name='username' id='username'>
     <button type="submit">Send</button>
     </form>`)
    })
    
})

app.post("/chat",(req,res)=> {
    console.log(`${req.body.username} : ${req.body.message}`);
    fs.writeFileSync("username.txt", `${req.body.username} : ${req.body.message}`,
    {flag: 'a'})

    res.redirect("/chat")

})

app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    });


