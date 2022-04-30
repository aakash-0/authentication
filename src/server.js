const app = require("./index");
const mongoose = require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb://localhost:27017/authentication");
}

app.listen(5000,async ()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error)
    }
    console.log("listenning to port 5000");
})
