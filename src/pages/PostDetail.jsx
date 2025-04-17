import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostDetails = () => {
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate()

    function getPost() {
        setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(respons => {
                setPost(respons.data)
                setLoading(false)
            })
    }
    useEffect(getPost, [])


    if (loading) {
        return <>
            <h1>Caricamento del  dettaglio</h1>
            <button onClick={() => navigate(-1)}>Torna indietro</button>
        </>
    }

    return <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={() => navigate(-1)}>Torna indietro</button>
    </>




}

export default PostDetails