"use server";

import { NextResponse } from "next/server";
import UserModel from "@/app/utils/userModel/usersModel";
import bcrypt from "bcrypt";
import { DBconnection } from "@/app/utils/config/db";


export async function PUT(request){
    await DBconnection()
    const {email,newPassword}=await request.json();
    console.log(email,newPassword)

    const hashedPassword=await bcrypt.hash(password,10);

    try{
        await DBconnection()
        const user=await UserModel.findOne({ email })
        
        if (!user) {
            console.warn("No user found for email:", email);
            throw new Error("Invalid credentials");
        }
        
    


    return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
    console.error("Login error:", error.message);
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 400 });
    }
}
        

        





  