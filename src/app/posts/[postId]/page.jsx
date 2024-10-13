import { Suspense } from "react";
import PostsPage from "../page";

const loadPost = async (postId) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then((res) => res.json());
  return resp;
};

const Page = async ({ params }) => {
  const post = await loadPost(params.postId);

  return (
    <>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>
      <hr />
      <h3>Otras publicaciones</h3>
      {/* Suspend the slow load */}
      <Suspense fallback={<h4>Loading posts...</h4>}>
        <PostsPage />
      </Suspense>
    </>
  );
};

export default Page;
