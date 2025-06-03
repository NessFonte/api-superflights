import * as mongoose from 'mongoose';

export const FlightSchema = new mongoose.Schema(
    {
        pilot: { type: String, required: true },
        airplane: { type: String, required: true },
        airline: { type: String, required: true },
        origin_city: { type: String, required: true },
        destination_city: { type: String, required: true },
        flight_date: { type: Date, required: true },
        passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'passengers' }]
    },
    { timestamps: true }
);