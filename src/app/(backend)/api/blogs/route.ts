import { NextRequest } from "next/server";
import { connectToDB } from "../../lib/mongodb";
import Blog from "../../models/blogModel";

export const GET = async (request: NextRequest) => {
    try {
        await connectToDB();
        const blogs = await Blog.find({});
        return new Response(JSON.stringify(blogs), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch blogs", { status: 500 });
    }
}

export const POST = async (request: NextRequest) => {
    try {
        await connectToDB();
        const {title,tags,author,content,} = await request.json();
        const newBlog = new Blog({title,tags,author,content,});
        await newBlog.save();
        return new Response(JSON.stringify(newBlog), { status: 201 });
    } catch (error:any) {
        return new Response(error.message, { status: 500 });
    }
}