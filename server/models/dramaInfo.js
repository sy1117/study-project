import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DramaInfo = new Schema({
    name: String,
    url: String
});

export default mongoose.model('dramaInfo', DramaInfo);
