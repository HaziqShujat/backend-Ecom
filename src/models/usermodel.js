import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },

  avaar: {
    type: String, //cloudernary serices url
    required: true,
  },

  coverimage: {
    type: String,
    unique: true,
  },

  watchhistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      reg: "Video",
    },
  ],
  password: {
    type: String,
    required: [true, "password must required"],
  },
  refreshToken: {},
});

export const User = mongoose.model("User", UserSchema);
