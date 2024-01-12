export type BlogdataType = {
  createdAt: string;
  name: string;
  avatar: string;
  title: string;
  body: string;
  id: string;
};

const blog = async () => {
  const res = await fetch("https://65a0c08d600f49256fb03f28.mockapi.io/post");
  const data: BlogdataType[] = await res.json();
  return data;
};

async function BlogPage() {
  const data = await blog();
  return (
    <div className="container mx-auto max-w-7xl">
      {data.map((post) => (
        <div key={post.id}>
          {post.id} {post.title}
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
