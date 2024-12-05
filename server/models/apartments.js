import mongoose from 'mongoose';

const apartmentSchema = new mongoose.Schema({
<<<<<<< HEAD
  rent: { type: Number, required: true },
  numberOfBedrooms: { type: Number, required: true },
  numberOfBathrooms: { type: Number, required: true },
  size: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  date: { type: Date, default: Date.now}
=======
  rent: { type: Number, required: true, unique: true },
  numberOfBedrooms: { type: Number, required: true },
  numberOfBathrooms: { type: Number, required: true },
  size: { type: Number },
  availability: { type: Boolean, default: true },
  date: { type: Date, required: true }
>>>>>>> 7e8834c0bf68413923bc7bbed9fab30b41fb3478
});

export default mongoose.model('Apartment', apartmentSchema);