const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const newsRoute = require('./routes/news');
const categoryRoute = require('./routes/categories');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
dotenv.config();


app.use(cors());
app.use(express.json());
// app.use("/images",express.static(path.join(__dirname,"/images")))
app.use("/images", (req, res, next) => {
  res.setHeader("Content-Type", "image/jpeg"); // or "image/png" depending on your images
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin"); // Ensures the image can be loaded from different origins
  next();
}, express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL, {
  
  
  autoIndex: true,
  
 
}).then(console.log("connected to mongo")).catch((err)=>console.log(err));

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"images");
  },filename:(req,file,cb)=>{
    cb(null,req.body.name);
  }

});

const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).json("File has been uploaded");
})

app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/news", newsRoute);
// app.use("/api/categories", categoryRoute);
app.listen("5000", () => {
  console.log("backend is running...");
});
