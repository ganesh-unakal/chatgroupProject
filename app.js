const express = require('express');
const bodyParser = require('body-parser')

const app = express()
const port = 3000
const path = require('path')

const adminroutes = require('./Routes/admin')
const shoproutes = require('./Routes/shop')
const contactRoutes = require('./Routes/contactus')

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',adminroutes)
app.use(shoproutes)
app.use(contactRoutes)
app.use(express.static(path.join(__dirname,'public')))

app.use((req,res,next) => {
      res.status(404).sendFile(path.join(__dirname,'views','404.html'))   
})


app.listen(port, () => {
      console.log(`server is running on port ${port}`)
});
