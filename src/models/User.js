import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    firstname: { type: String, required: [true, "Please provide firstname"] },
    lastname: { type: String, required: [true, "Please provide lastname"] },
    email: {
      type: String,
      required: [true, "Please provide email address"],
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
