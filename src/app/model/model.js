import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'username is required'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'required field'],
    },
    productId: {
        type: String
    },
    qty: {
        type: Number,
        required: [true, 'required field'],
    },
    price: {
        type: Number,
        required: [true, 'required field'],
    }
});

const User = mongoose.models.database1 || mongoose.model ("database1", userSchema)
export default User;