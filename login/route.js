"use server";
import bcrypt from "bcrypt";
import UserModel from "@/app/utils/userModel/usersModel";
import { DBconnection } from "@/app/utils/config/db";

export async function POST(req) {
  await DBconnection();
  try {
    const { email, password } = await req.json();
    console.log("Input credentials:", email, password);

    const user = await UserModel.findOne({ email });
    console.log("User from DB:", user);

    if (!user) {
      console.warn("No user found for email:", email);
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match result:", isMatch);

    if (!isMatch) {
      console.warn("Password mismatch for user:", email);
      throw new Error("Invalid credentials");
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Login error:", error.message);
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 400 });
  }
}
