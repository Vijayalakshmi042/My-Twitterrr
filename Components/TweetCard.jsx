"use client";
import { FaRegUserCircle } from "react-icons/fa";

export default function TweetCard({tweet}) {
  return (
    <div key={tweet._id} className="flex flex-row border-2 border-black rounded-2xl m-3 p-4">
      <FaRegUserCircle className="mr-3 size-10"/>  
      <div>
        <p className="text-2xl font-bold text-red-800"><strong>{tweet.title}</strong></p>
        <p className="text-xl text-white"> {tweet.body}</p>
        <div className="flex flex-row justify-between">
          <p className="m-2">👍{tweet.reactions.likes}  👎{tweet.reactions.dislikes}  </p>
         <div className="m-2">
            <p>Tags: {tweet.tags.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>  
  );
}
