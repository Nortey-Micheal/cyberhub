import { connectToDB } from "@/app/(backend)/lib/mongodb";
import Blog from "@/app/(backend)/models/blogModel";
import { NextRequest } from "next/server";

export const GET = async (_request: NextRequest) => {
    try {
        await connectToDB();
        const blogs = await Blog.find({});
        return new Response(JSON.stringify(blogs), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch blogs", { status: 500 });
    }
}