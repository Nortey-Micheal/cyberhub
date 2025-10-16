import { connectToDB } from "@/app/(backend)/lib/mongodb"
import User from "@/app/(backend)/models/userModel"
import bcrypt from "bcryptjs"
import { NextRequest } from "next/server"

export const POST = async (request:NextRequest) => {
    try {
        await connectToDB()
        const {email,firstName,lastName,password} = await request.json()
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({email,firstName,lastName,password: hashedPassword})
        return new Response(JSON.stringify(user),{status:201})
    } catch (error) {
        return new Response(JSON.stringify({message:"Failed to create user"}),{status:500})
    }
}