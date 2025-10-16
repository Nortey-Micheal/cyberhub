import { connectToDB } from "@/app/(backend)/lib/mongodb";
import Blog from "@/app/(backend)/models/blogModel";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    try {
        await connectToDB();
        const {title,tags,author,content,slug} = await request.json();
        const newBlog = new Blog({title,tags,author,content,slug});
        await newBlog.save();
        return new Response(JSON.stringify(newBlog), { status: 201 });
    } catch (error:any) {
        return new Response(error.message, { status: 500 });
    }
}