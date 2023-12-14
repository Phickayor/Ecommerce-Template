import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product's Name is required"]
    },
    price: {
      type: Number,
      required: [true, "Product's Price is required"]
    },
    pictures: [
      {
        ref: "pictures",
        type: mongoose.Schema.Types.ObjectId
      }
    ]
  },
  {
    timestamps: true
  }
);

const productModel = mongoose.model("productModel", productSchema);
export default productModel;
