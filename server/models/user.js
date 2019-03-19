import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
    userId: String,
    password: String,
    
    

    
});

export default mongoose.model('user', User);
