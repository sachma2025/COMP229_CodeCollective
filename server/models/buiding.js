import mongoose from 'mongoose';
const mongoose = require('mongoose');
const BuildingSchema = new mongoose.Schema({
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    address: String,
    apartmentCount: Number
});

module.exports = mongoose.model('Building', BuildingSchema);
