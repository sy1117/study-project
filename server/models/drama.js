import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Drama = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    synonym : String,
    url : String
},{ collection: 'dramaInfo' });

export default mongoose.model('dramaInfo', Drama);
