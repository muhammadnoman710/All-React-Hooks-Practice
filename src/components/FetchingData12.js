import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchingData12() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [buttonId, setButtonId] = useState(1)

    const handleSubmit = () => {
        setButtonId(id)
    }

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [buttonId])

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleSubmit}>FETCH POSTS</button>
            <div>{post.title}</div>
            {/*<ul></div>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
                }
            </ul>*/}

        </div>
    )
}


export default FetchingData12