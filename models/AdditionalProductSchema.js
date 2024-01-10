var { mongoose } = require('mongoose');

var AdditionalProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  linksMainImages: {
    type: Array,
    required: true
  },
  archived: {
    type: Boolean,
    required: true
  },
  available: {
    type: Boolean,
    required: false
  },
  popular: {
    type: Boolean,
    required: true
  },
  viewsCount: {
    type: Number,
    default: 0
  }
});

var CardAdditionalProduct = mongoose.models.additional_products ||mongoose.model('additional_products', AdditionalProductSchema);
export default CardAdditionalProduct;
