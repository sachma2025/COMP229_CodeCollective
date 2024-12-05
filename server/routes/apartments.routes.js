import express from 'express';
import { createNewApartment, getAllApartments, deleteApartment, updateApartment } from '../controllers/apartments.controller.js';

const router = express.Router();

router.get('/', getAllApartments);
router.post('/', createNewApartment);
router.delete('/:id', deleteApartment);
router.put('/:id', updateApartment);

export default router;
