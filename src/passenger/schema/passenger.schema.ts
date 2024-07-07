import * as mongoose from 'mongoose';

export const PassengerSchema = new mongoose.Schema({
    name: { type: 'string', required: true },
    email: { type: 'string', required: true },
})

PassengerSchema.index({ email: 1 }, { unique: true })
