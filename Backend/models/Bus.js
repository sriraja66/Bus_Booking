import mongoose from 'mongoose';

const busSchema = new mongoose.Schema({
  busName: { type: String, required: true },
  busNumber: { type: String, required: true, unique: true },
  deckType: { type: String, enum: ['Single Deck', 'Double Deck'], default: 'Single Deck' },
  acType: { type: String, enum: ['AC', 'Non-AC'], required: true },
  startingLocation: { type: String, required: true },
  destination: { type: String, required: true },
  ticketPrice: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model('Bus', busSchema);
