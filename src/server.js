import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import webRoute from "./route/web"
import connectDB from './config/connectDB'
require('dotenv').config()


let app = express()


//config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
webRoute(app)

connectDB()

let port = process.env.PORT || 1608;
// neu file process chuwa khai bao port thi server se chay o cong 1608

app.listen(port, () => {
     console.log('Backend nodejs is running: ' + port);
})
