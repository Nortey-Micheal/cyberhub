import { model, models, Schema } from "mongoose";
import { UserType } from "../types/user";

const userSchema = new Schema<UserType>(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        }
    },
    { 
        timestamps: true
    }
)

const User = models.User || model<UserType>('User', userSchema);
export default User;