import Apartment from '../models/apartments.js'

export const createNewApartment = async (req, res) => {
  try {
    const newApartment = new Apartment(req.body)
    await newApartment.save()
    res.status(201).json(newApartment)
  } catch (err) {
    res.status(400).json({ error: "Apartment was not created" })
  }
}

export const getAllApartments = async (req, res) => {
  try {
    const apartments = await Apartment.find()
    res.status(200).json(apartments)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve apartments' })
  }
}

export const deleteApartment = async (req, res) => {
  try {
    const deletedApartment = await Apartment.findByIdAndDelete(req.params.id);
    res.status(200).json({deletedApartment});
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete apartment' });
  }
};

export const updateApartment = async (req, res) => {
  try {
    const updatedApartment = await Apartment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedApartment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update apartment' });
  }
};

/*export const getAllApartments = async (req, res) => {
  const apartments = await Apartment.find()
  res.json(apartments)
}*/
