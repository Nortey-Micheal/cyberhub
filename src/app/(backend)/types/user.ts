import { Document } from "mongoose";

export interface UserType extends Document {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}