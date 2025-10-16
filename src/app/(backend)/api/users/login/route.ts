import { connectToDB } from "@/app/(backend)/lib/mongodb"
import User from "@/app/(backend)/models/userModel"
import bcrypt from "bcryptjs"
import { NextRequest } from "next/server"

export const POST = async (request:NextRequest) => {
    try {
        await connectToDB()
        const {email,password} = await request.json()
        const user = await User.findOne({email})
        if (!user) {
            return new Response(JSON.stringify({message:"User not found"}),{status:404})
        }
        const isValid = bcrypt.compare(password,user.password)
        if (!isValid) {
            return new Response(JSON.stringify({message:"Invalid credentials"}),{status:401})
        }
        return new Response(JSON.stringify(user),{status:200})
    } catch (error:any) {
        return new Response(JSON.stringify({message:"Failed to login",error:error.message}),{status:500})
    }
}