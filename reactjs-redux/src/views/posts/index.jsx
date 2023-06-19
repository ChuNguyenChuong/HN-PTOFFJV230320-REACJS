import axios from "axios"
import { useEffect, useState } from "react"


const PostsView = () => {
    const [user, setUser] = useState(undefined)

    useEffect(() => {

        const getDateInit = async () => {
            const res = await axios.get("http://localhost:3000/users/1")
            const user = res.data;
            console.log(user);
            const resPost = await axios.get("http://localhost:3000/posts")
            const posts = resPost.data
            console.log(posts);
        }

        getDateInit()

    }, [])


    const hanldeCreateData = async () => {
        axios.post("http://localhost:3000/comments", {
            "body": "some comment new created",
            "postId": 1
        })

        const resPost = await axios.get("http://localhost:3000/comments")
        const comment = resPost.data
        console.log(comment);
    }


    return <div>PostsView
        <div>{JSON.stringify(user)}
            <div>
                <button onClick={() => {
                    hanldeCreateData()
                }}>click</button>
            </div>
        </div>
    </div>
}

export default PostsView