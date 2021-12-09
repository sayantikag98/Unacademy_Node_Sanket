import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function IndividualPost(){
    const [ post, setPost ] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const dataFetch = async () => {
            try{
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                setPost(response.data.data);
            }
            catch(err){
                console.error(err);
            }  
        };
        dataFetch();
    }, [id]);

    const handleDelete = async () => {
        try{
            const response = await axios.delete(`http://localhost:3000/posts/${id}`);
            console.log(response.data.data);
            navigate("/");
        }
        catch(err){
            console.error(err);
        }
    };

    return (
        <div id = "ind-post-div">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <h4>{post.status}</h4>
            <button type = "button"><Link id = "edit" to = {`/${id}/edit`}>Edit ✏️</Link></button>
            <button type = "button" onClick = {handleDelete}>Delete ❌</button>
        </div>
    );
} 