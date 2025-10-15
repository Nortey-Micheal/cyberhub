import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables");
}

interface CachedConnection {
    conn: Connection | null;
    promise: Promise<Connection> | null;
}

// Use a global variable to persist the connection in development
const globalWithMongoose = global as typeof globalThis & {
    mongoose?: CachedConnection;
};

let cached = globalWithMongoose.mongoose;

if (!cached) {
    cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}

export async function connectToDB(): Promise<Connection> {
    if (cached?.conn) return cached.conn;

    if (!cached?.promise) {
        cached && (cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
            console.log("✅ MongoDB connected");
            return mongoose.connection;
        })) .catch((error) => {
            console.error("❌ MongoDB connection error:", error);
            throw error;
        });
    }

    cached && (cached.conn = await cached?.promise);
    if (!cached?.conn) {
        throw new Error("❌ Failed to establish a MongoDB connection");
    }
    return cached.conn;
}
