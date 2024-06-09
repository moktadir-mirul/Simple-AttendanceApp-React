import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../CustomHook/useFetch";

export const Posts = () => {
    const { data: posts, isLoading, errorMessage} = useFetch([], `http://localhost:3000/posts`)
    return (
        <>
            <h1 className="posthd">All Posts</h1>
            {isLoading && <h3 style={{color:"blue", textAlign:"center", fontSize:"25px"}}>Data is laoding......</h3>}
            {errorMessage && <h2 style={{color:"red", textAlign:"center", fontSize:"30px"}}>!!!Warning: Data loading is failed!!!</h2>}
            
                {posts.map((post) => (
                    <li id="postli" key={post.id}><Link>{post.title}</Link></li>
                ))}
            
        </>
    )
}