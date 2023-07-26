import {Schema,model,models} from 'mongoose'

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        trim: true
    },
}, {
    timestamps: true
})

const Users = models.User || model('User', userSchema)

export default Users;