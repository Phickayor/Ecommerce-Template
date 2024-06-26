import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "You're required to input email"]
    },
    password: {
      type: String,
      required: [true, "You're required to input password"]
    },
    userName: {
      type: String,
      required: [true, "Users name is required"]
    },
    phoneNumber: {
      type: String
    },
    isEmailVerified: {
      type: Boolean,
      default: false
    },
    favourites: [
      {
        ref: "favourite",
        type: mongoose.Schema.Types.ObjectId
      }
    ],
    cart: [
      {
        ref: "cart",
        type: mongoose.Schema.Types.ObjectId
      }
    ]
  },
  {
    timestamps: true
  }
);

const userModel = mongoose.model("userModel", userSchema);

export default userModel;
