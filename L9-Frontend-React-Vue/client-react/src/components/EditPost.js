import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";


export default function EditPost() {
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    const [ status, setStatus ] = useState("draft");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const dataFetch = async () => {
            try{
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                const data = response.data.data;
                setTitle(data.title);
                setContent(data.content);
                setStatus(data.status);
            }
            catch(err){
                console.error(err);
            }    
        };
        dataFetch();
        
    }, [id]);

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeContent = (event) => {
        setContent(event.target.value);
    };

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };

    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            const inputData = {title, content, status};
            const response = await axios.patch(`http://localhost:3000/posts/${id}`, inputData);
            console.log(response.data.data);
            navigate("/");
        }
        catch(err){
            console.error(err);
        }   
    };

    return (
        <section id = "form-section">
            <form onSubmit = {handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value = {title} onChange = {handleChangeTitle} required autoFocus/>
                <label htmlFor="content">Content</label>
                <textarea id="content" value = {content} onChange = {handleChangeContent}></textarea>
                <label htmlFor="status">Status</label>
                <select id="" value = {status} onChange = {handleChangeStatus}>
                    <option value="draft">Draft</option>
                    <option value="under review">Under Review</option>
                    <option value="published">Published</option>
                </select>
                <button type = "submit">Submit</button>
            </form>
        </section>   
    );

};