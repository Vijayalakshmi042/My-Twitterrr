import Link from "next/link";

export default function Navbar(){
    return(
        <main className="bg-white m-2 p-3 text-center w-full h-15 flex flex-row border-none">
            <h1 className="text-blue-600  text-4xl font-bold">Let's Tweet</h1>
            <section className="flex flex-row justify-between text-center ml-40">
                <Link href="/" className="text-xl text-black font-sans mr-15">Home</Link>
                <Link href="/pages/ExploreTweet" className="text-xl text-black font-sans mr-15">Explore Tweets</Link>          
                <Link href="/pages/PostaTweet" className="text-xl text-black font-sans mr-15">Post a Tweet</Link>
                <Link href="/pages/Trending" className="text-xl text-black font-sans mr-15">Trending</Link>
                <Link href="/pages/Profile" className="text-xl text-black font-sans">Account</Link>
            </section>
        </main>
    )    
}