export type BlogType = {
  title: string;
  slug?: string;
  content?: string;
  author: string //Types.ObjectId; // Reference to User
  tags?: string[];
  image?: string;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  readingTime?: string | "10";
  views?: number;
  _id?: string;
}

export type UserType = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: string;
  bio?: string;
  createdAt?: Date;
  updatedAt?: Date;
}