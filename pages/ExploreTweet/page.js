import Navbar from "@/app/Components/Navbar";
import Link from "next/link";
import TweetCard from "@/app/Components/TweetCard";


const fetchTweets=async ()=>{
        const url="https://dummyjson.com/posts";
        const res=await fetch(url);
        return res.json()
    }
export default async function ExploreTweet(){
    const tweetsData=await fetchTweets();

    return(
        <div className=" bg-blue-300 p-10">
            <Navbar/>
            <div>
                {tweetsData.posts.map((tweet)=>{
                    return(                    
                        <Link key={tweet.id} href={`/tweet/${tweet.id}`}>
                            <TweetCard tweet={tweet}/>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}