import express from "express";
import homeController from "../controllers/homeController";
let route = express.Router();

let webRoute = (app)=>{
     route.get('/',homeController.getHomePage)
return app.use("/", route);
}

module.exports = webRoute;