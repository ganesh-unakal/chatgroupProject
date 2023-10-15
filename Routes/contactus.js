const express = require('express');
const fs = require("fs");
const bodyparse = require('body-parser');
// app.use(bodyparse.urlencoded());

const router = express.Router();
const path = require('path')
const rootDir = require('../util/path')

router.get("/contact", (req, res) => {
    res.sendFile(path.join(rootDir, 'views','contactus.html'));
  });

router.post("/success",(req,res) => {
    console.log(req.body)
    fs.writeFileSync('user.txt',`${req.body.title} : ${req.body.mail}`)
    res.sendFile(path.join(rootDir,'views','succesfull.html'));
});


module.exports = router