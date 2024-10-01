"use client";

import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <>
      <Link href={`/posts/${post.id}`}>
        <h3>
          {post.id}. {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <button
        onClick={() => {
          alert("Click!");
        }}
      >
        Click!
      </button>
    </>
  );
};

export default PostCard;
