import { useState, useEffect } from "react";
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
                console.log(err);
            }
        };
        dataFetch();
    },[]);


// reponse.data is an object and response.data.data is an object

    return (
        <ul>
            {posts.map(post =>
            <ul key = {post._id}>
                <li>{post.title}</li>
                <li>{post.content}</li>
                <hr></hr>
            </ul> 
            )}
        </ul>
    );

};