"use client";

import Link from "next/link";
import "./PostCard.css";

const PostCard = ({ post }) => {
  return (
    <div className="card bg-gray-900 p-5">
      <Link href={`/posts/${post.id}`}>
        <h3 className="text-xl font-bold">
          {post.id}. {post.title}
        </h3>
      </Link>
      <p className="text-slate-300 m-3">{post.body}</p>
      <button
        onClick={() => {
          alert("Click!");
        }}
      >
        Click!
      </button>
    </div>
  );
};

export default PostCard;
