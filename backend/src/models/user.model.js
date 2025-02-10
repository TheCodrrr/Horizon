import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        profilePic: {
            type: String,
            default: "",
        }
    },
    {
        timestamps: true
    }
);

const db = mongoose.connection.useDb("horizon_user_details")

const User = db.model("User", userSchema);
export default User;