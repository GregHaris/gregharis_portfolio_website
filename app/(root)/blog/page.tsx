import Link from 'next/link';
import Navbar from '@/components/Navbar';

const blogPosts = [
  { id: 1, title: 'Getting Started with React', date: '2023-06-01' },
  { id: 2, title: 'Advanced TypeScript Techniques', date: '2023-06-15' },
  {
    id: 3,
    title: 'Building Scalable Node.js Applications',
    date: '2023-07-01',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border-b border-gray-200 dark:border-gray-700 pb-6"
            >
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                  href={`/blog/${post.id}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
