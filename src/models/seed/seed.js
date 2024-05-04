import mongoose from "mongoose";
import User from "./../User.js";
import dotenv from "dotenv";

dotenv.config();

const connect = async () => {
  await mongoose.connect("mongodb://localhost:27017/crud-node");
  mongoose.connection.on("disconnected", () => {
    console.log("connected");
  });
};

connect();

const seedUser = [
  {
    id: 1,
    firstname: "Ahmed",
    lastname: "Olusesi",
    email: "olusesia@gmail.com",
  },
  {
    id: 2,
    firstname: "Anita",
    lastname: "Olusesi",
    email: "olusesianita@gmail.com",
  },
  {
    id: 3,
    firstname: "Eniola",
    lastname: "Olusesi",
    email: "olusesieniola@gmail.com",
  },
  {
    id: 4,
    firstname: "Aaliyah",
    lastname: "Olusesi",
    email: "olusesiaaliyah@gmail.com",
  },
];

const seed = async () => {
  try {
    await User.deleteMany();
    await User.create(seedUser);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
  }
};

seed();
