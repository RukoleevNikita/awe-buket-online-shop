import mongoose from "mongoose";

const ProductShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  previewLinks: {
    type: Array,
    required: true,
  },
  linksMainImages: {
    type: Array,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  occasion: {
    type: Array,
    required: false,
  },
  viewsCount: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("CardProduct", ProductShema);
