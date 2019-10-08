import * as mongoose from 'mongoose';

export const ObjectSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
});
