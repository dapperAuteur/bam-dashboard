import { Int32 } from "mongodb";
import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.DATABASE_URL);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    role: Number,
    username: String,
    profileImageUrl: String
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;