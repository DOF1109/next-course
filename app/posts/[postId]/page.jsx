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
    </>
  );
};

export default Page;
