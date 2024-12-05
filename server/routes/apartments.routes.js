import express from 'express';
import { createNewApartment, getAllApartments } from '../controllers/apartments.controller.js';

const router = express.Router();

router.get('/', getAllApartments);
router.post('/', createNewApartment);

export default router;
