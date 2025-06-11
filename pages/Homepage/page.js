"use client"
import Link from "next/link";
import Navbar from "@/app/Components/Navbar";
import TweetCard from "@/app/Components/TweetCard";
import { useState,useEffect } from "react";
 

export default function HomePage(){
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        async function fetchTweets() {
        try{  
            const res = await fetch("/api/WriteTweets");
            const data = await res.json();
            setTweets(data);
            console.log(data);
        }catch(err){
           console.log(err);
        }
        }
        fetchTweets();
    }, []);

    return(
        <main className="bg-blue-200 p-10 text-center">
            <Navbar/>
            <div>
                <h1 className="text-5xl text-amber-900 font-bold mt-20">Welcome to Let's Tweet!</h1>
                <p className="text-2xl text-amber-400 font-sans m-3">Share your thoughts.Explore trending tweets.<br/> Connect with the world.</p>
                <Link href="/pages/PostaTweet">
                    <button className="border-none rounded-4xl w-56 h-15 bg-blue-600 text-white text-2xl font-semibold m-2">Let's Tweet</button>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-1 text-start mt-10">
                <section className="bg-white">
                    <h1 className="text-2xl text-black font-bold m-5">Explore Tweets</h1>
                    {tweets.map((tweet)=>{return(<TweetCard key={tweet._id || tweet.id} tweet={tweet} />)})}
                </section>
                <div className="grid grid-rows-2 gap-1">
                    <section className="bg-white">
                        <h1 className="text-2xl text-black font-bold mt-4 ml-4 mb-3">Trending Now</h1>
                        <ul className="ml-4">    
                            <li><Link href="#" className="text-blue-500 font-medium">#TrendingTag1</Link></li>
                            <li><Link href="#" className="text-blue-500 font-medium">#TrendingTag2</Link></li>
                            <li><Link href="#" className="text-blue-500 font-medium">#TrendingTag3</Link></li>
                        </ul>
                    </section>
                    <section className="bg-white">
                        <h1 className="text-2xl text-black font-bold m-4">Why Join Let's Tweet</h1>
                        <ul>
                            <li><input type="text" className="border-1 m-3 text-gray-600" placeholder="Type here"></input></li>
                            <li><input type="text" className="border-1 m-3 text-gray-600" placeholder="Type here"></input></li>
                            <li><input type="text" className="border-1 m-3 text-gray-600" placeholder="Type here"></input></li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    )
}