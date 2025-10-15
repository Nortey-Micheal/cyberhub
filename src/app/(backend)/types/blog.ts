import { Document, Types } from 'mongoose';

export interface BlogType extends Document {
    title: string;
    slug: string;
    content: string;
    author: string //Types.ObjectId; // Reference to User
    tags?: string[];
    image?: string;
    published?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
