import mongoose from 'mongoose';

const apartmentSchema = new mongoose.Schema({
  rent: { type: Number, required: true, unique: true },
  numberOfBedrooms: { type: Number, required: true },
  numberOfBathrooms: { type: Number, required: true },
  size: { type: Number },
  availability: { type: Boolean, default: true },
  date: { type: Date, required: true }
});

export default mongoose.model('Apartment', apartmentSchema);