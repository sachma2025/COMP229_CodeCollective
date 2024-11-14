import Apartment from '../models/apartment.js';

export const createNewApartment = async (req, res) => {
  try {
    const newApartment = new Apartment(req.body);
    await newApartment.save();
    res.status(201).json(newApartment);
  } catch (err) {
    res.status(400).json({ error: "Apartment was not created" });
  }
};

export const getAllApartments = async (req, res) => {
  const apartments = await Apartment.find();
  res.json(apartments);
};
