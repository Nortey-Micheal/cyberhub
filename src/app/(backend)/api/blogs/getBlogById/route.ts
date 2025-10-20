import { connectToDB } from "@/app/(backend)/lib/mongodb"
import Blog from "@/app/(backend)/models/blogModel"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("blogId");
    console.log({ blogId })
    try {
        await connectToDB()
        const blog = await Blog.findById(blogId).lean()
        if (!blog) {
            return new NextResponse(JSON.stringify({ error: "Blog not found" }), { status: 404 })
        }
        return new NextResponse(JSON.stringify(blog), { status: 200 })
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 })
    }
}