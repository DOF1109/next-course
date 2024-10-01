import PostCard from "@/components/PostCard";

async function loadPosts() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  return resp;
}

const PostsPage = async () => {
  const posts = await loadPosts();

  return (
    <>
      <h1>PostsPage</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostsPage;
