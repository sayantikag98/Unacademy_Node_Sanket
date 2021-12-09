import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Posts(){
    const [ posts, setPosts ] = useState([]);

   

    useEffect(()=>{
        const dataFetch = async () => {
            try{
                const response = await axios.get("http://localhost:3000/posts/");
                const data = await response.data.data;
                setPosts(data);
            }
            catch(err){
                console.error(err);
            }
        };
        dataFetch();
    },[]);


// reponse.data is an object and response.data.data is an object

    return (
        <ul id = "posts">
            {posts.length === 0 && <div style = {{marginTop:"10px"}}>No posts to display</div>}
            {posts.length > 0 && posts.map(post =>
            <ul key = {post._id} className = "post">
                <Link to = {`/${post._id}`} className = "post-link">
                    <li><h2>{post.title}</h2></li>
                    <li>{post.content}</li>
                </Link>  
            </ul> 
            )}
        </ul>
    );

};