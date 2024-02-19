// import express from 'express';
// import * as dotenv from 'dotenv';
// dotenv.config();
// import authRoutes from './routes/authRoutes.js';
// import  connectdb  from './db/connectdb.js';
// import bodyParser from "body-parser";
// import messageRoutes from './routes/messageRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import cookieParser from 'cookie-parser';



// const app = express();

// const port= process.env.PORT;

// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser);


// app.use('./api/auth',authRoutes);
// app.use('./api/message',messageRoutes);
// app.use('./api/users',userRoutes);


// app.get('./',(req,res)=>{
//     res.send("hello ")
// })

// app.listen(port,()=>{
//     connectdb();
    
//     console.log(`server running on port ${port}`)
// });


// import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectdb from "./db/connectdb.js";
// import { app, server } from "./socket/socket.js";


const app = express();
const PORT = process.env.PORT || 5000;

// const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

app.listen(PORT, () => {
	connectdb();
	console.log(`Server Running on port ${PORT}`);
});