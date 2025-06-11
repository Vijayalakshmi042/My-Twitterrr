import { NextResponse } from "next/server";
import dbConnect from "/lib/mongoose";
import TweetsModel from "@/app/utils/TweetModel/TweetsModel";

export async function GET(){
    try{
        await dbConnect();
        const TweetsData= await TweetsModel.find({})
        console.log(TweetsData)
        return NextResponse.json(TweetsData)
    }catch (error) {
    console.error("GET /api/WriteTweets error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
        });
    }
}



export async function POST(request){
    try{
        await DBconnection()
        const {title,body} =await request.json()
        const newTweet= new TweetsModel({
            title:title,body:body
        })
        newTweet.save();
        return NextResponse.json({Success:"Tweet Added."})
    }catch(error){
        console.error(error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
         status: 500,
        })
    }
}
