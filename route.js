
import UserModel from "@/app/utils/userModel/usersModel";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { DBconnection } from "@/app/utils/config/db";

export const {auth, signIn, signOut,handlers:{GET,POST}}=NextAuth({
    providers:[
        Credentials({
            name:'credentials',

            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },


            async authorize(credentials){
                await DBconnection();

                const user=await UserModel.findOne({email:credentials?.email});
                if(!user){
                    return null;
                }
                const isValid = await bcrypt.compare(credentials?.password || '', user.password);
                if (!isValid){
                    return null;
                }
                return{name:user.name,email:user.email};
            }
        })   
    ],
     
    secret:process.env.NEXTAUTH_SECRET

});

