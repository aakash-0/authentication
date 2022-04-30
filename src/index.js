const express  = require("express");
const app = express();
const userController = require("./controller/user.controller");
const {register,login} = require("./controller/auth.controller");
app.use(express.json());

app.use("/user",userController);
app.post("/reg",register);
app.post("/login",login);

module.exports = app;