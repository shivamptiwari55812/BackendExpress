const express= require("express")
const Router = express.Router();

const userController = require("../controllers/userControllers");

Router.post("/user",userController.createUser);
Router.get("/user",userController.getAll);

module.exports=(Router);
