import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const PostList = () => {

    const [posts, setPosts] = useState([])

    function getPost() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(respons => {
                setPosts(respons.data)
            })
    }
    useEffect(getPost, [])

    return <>
        <h1>Post</h1>
        {posts.map(post => <div key={post.id}>
            <h3>{post.title}</h3>
            <Link to={`/post/${post.id}`} ><p>link del post {post.id}</p></Link>

        </div>)}
    </>
}


export default PostList