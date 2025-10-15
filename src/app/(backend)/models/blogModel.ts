import { Schema, model, models } from 'mongoose';
import { BlogType } from '../types/blog';

const blogSchema = new Schema<BlogType>(
  {
    title: { 
        type: String, 
        required: true, 
        trim: true 
    },
    slug: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    author: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    tags: [{ 
        type: String 
    }],
    image: { 
        type: String 
    },
    published: { 
        type: Boolean, 
        default: false 
    },
  },
  { timestamps: true }
);

const Blog = models.Blog || model<BlogType>('Blog', blogSchema);
export default Blog;
