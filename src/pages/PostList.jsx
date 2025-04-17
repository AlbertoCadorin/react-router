import { useState, useEffect } from "react"
import axios from "axios"

const PostList = () => {

    const [post, setPost] = useState([])

    function getPost() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(respons => {
                setPost(respons.data)
            })
    }
    useEffect(getPost, [])

    return <>
        <h1>Post</h1>
        {post.map(post => <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>)}
    </>
}


export default PostList