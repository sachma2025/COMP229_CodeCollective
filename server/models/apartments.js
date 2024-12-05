import mongoose from 'mongoose';

const apartmentSchema = new mongoose.Schema({
  rent: { type: Number, required: true },
  numberOfBedrooms: { type: Number, required: true },
  numberOfBathrooms: { type: Number, required: true },
  size: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  date: { type: Date, default: Date.now}
});

export default mongoose.model('Apartment', apartmentSchema);