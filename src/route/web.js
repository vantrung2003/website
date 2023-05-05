import express from "express";
import homeController from "../controllers/homeController";
let route = express.Router();

let webRoute = (app) => {
     route.get('/', homeController.getHomePage)
     route.get('/readApi', homeController.readApi)
     route.post('/create-user', homeController.createNewUser)

     return app.use("/", route);
}


module.exports = webRoute;