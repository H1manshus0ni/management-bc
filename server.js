require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Connection Establised")
    }catch(err) {
        console.log("Connection Failed with DB",err)
    }
}

// db.on("error",(err)=>console.log(err));
// db.on("open",()=>console.log("DATABASE CONNECTED"));

const tasRouter = require("./routes/tasks");
app.use("/api/tasks",tasRouter)

app.get('/', (req, res) => {
    res.send("<h1>Server Running Just Fine !!</h1>")
})



app.listen(process.env.PORT,()=> {
    connectDB();
    console.log(`server is listening at port ${process.env.PORT}`)
}
);