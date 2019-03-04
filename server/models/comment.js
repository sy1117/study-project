import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Comment = new Schema({
    dramaId: String,
    comment: String,
    created: { type: Date, default: Date.now },
    userId: String,
    star: {type:Number, default:0}
    
});

export default mongoose.model('comment', Comment);
