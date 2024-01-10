import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
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
  category: {
    type: String,
    required: true,
  },
  archived: {
    type: Boolean,
    required: true,
  },
  occasion: {
    type: Array,
    required: false,
  },
  available: {
    type: Boolean,
    required: false,
  },
  popular: {
    type: Boolean,
    required: true,
  },
  viewsCount: {
    type: Number,
    default: 0,
  },
});

const CardProduct = mongoose.models.products ||mongoose.model('products', ProductSchema);
export default CardProduct;
