import PostCard from "@/components/PostCard";

async function loadPosts() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  // Simulating a delay for the API response
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return resp;
}

const Posts = async () => {
  const posts = await loadPosts();

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};

export default Posts;
