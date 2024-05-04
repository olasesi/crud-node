import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import route from "./routes/v1/user.js";

const app = express();
dotenv.config();

const connect = async () => {
  await mongoose.connect("mongodb://localhost:27017/crud-node");
  await mongoose.connection.on("disconnected", () => {
    console.log("connected");
  });
};

app.use(express.json());
app.use("api/users", route);

app.listen(3000, () => {
  console.log(`Listening to port 3000`);
});

connect();

export default app;
