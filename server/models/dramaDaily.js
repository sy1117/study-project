import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DramaDaily = new Schema({
    name: String,
    count: Number,
    year: Number,
    month: Number,
    day: Number
});

export default mongoose.model('dramaDaily', DramaDaily);
