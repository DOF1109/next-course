"use client"

const PostCard = ({ post }) => {
    return (
        <>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => {alert("Click!")}}>Click!</button>
        </>
    )
}

export default PostCard