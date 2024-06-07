import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then((data) => {
            setPosts(data)
        })
    }, [])
    return (
        <>
            <h1 className="posthd">All Posts</h1>
            <ul className="postul">
                {posts.map((post) => (
                    <li id="postli" key={post.id}><Link>{post.title}</Link></li>
                ))}
            </ul>
        </>
    )
}