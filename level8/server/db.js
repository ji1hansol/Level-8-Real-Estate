const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);

const level8Schema = new mongoose.Schema({
  property_id: {
    type: Number,
    unique: true
  },
  property_name: String,
  location: String,
  pricing: Number,
  summary: String,
  property_type: String,
  room_type: String,
  num_of_guests: Number,
  num_of_rooms: Number,
  num_of_beds: Number,
  bed_size: Object,
  num_of_baths: Number,
  amenities: Array,
  images: Buffer,
  house_rules: Array,
  health_safety: Array,
});

const Level8 = mongoose.model('Level8', level8Schema);

