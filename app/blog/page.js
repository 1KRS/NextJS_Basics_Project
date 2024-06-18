import Link from 'next/link';

const BlogPage = () => {
  return (
    <main>
      <h1>Blog Page</h1>
      <Link href="/blog/post-1">Post 1</Link>
      <Link href="/blog/post-2">Post 2</Link>
    </main>
  );
};
export default BlogPage;
