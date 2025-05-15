// import React, { useState, useEffect, useCallback } from 'react';

// // Simulate fetching posts from an API (for the demo purpose)
// const fetchPosts = (page, limit) => {
//   const allPosts = [
//     { id: 1, title: 'Understanding React', excerpt: 'A brief introduction to React and its core concepts.', category: 'React', date: '2025-05-01' },
//     { id: 2, title: 'CSS Grid vs Flexbox', excerpt: 'Comparing two powerful layout techniques in CSS.', category: 'CSS', date: '2025-04-28' },
//     { id: 3, title: 'JavaScript ES6 Features', excerpt: 'A look into the new features of JavaScript ES6.', category: 'JavaScript', date: '2025-05-10' },
//     { id: 4, title: 'Introduction to Tailwind CSS', excerpt: 'How Tailwind CSS can speed up your web development.', category: 'CSS', date: '2025-04-20' },
//     { id: 5, title: 'Node.js Basics', excerpt: 'A beginner’s guide to Node.js.', category: 'Node.js', date: '2025-05-05' },
//     { id: 6, title: 'Next.js for Beginners', excerpt: 'Getting started with Next.js for server-side rendering.', category: 'React', date: '2025-05-12' },
//     { id: 7, title: 'CSS Variables', excerpt: 'Learn about CSS variables and their benefits.', category: 'CSS', date: '2025-05-15' },
//     // Add more posts as needed
//   ];
//   return allPosts.slice((page - 1) * limit, page * limit);
// };

// const BlogParent = () => {
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);

//   const loadPosts = useCallback(async () => {
//     setLoading(true);
//     const newPosts = fetchPosts(page, 5);  // Load 5 posts per page
//     setPosts((prevPosts) => [...prevPosts, ...newPosts]);
//     setHasMore(newPosts.length > 0);
//     setLoading(false);
//   }, [page]);

//   useEffect(() => {
//     loadPosts();
//   }, [loadPosts]);

//   const handleScroll = (e) => {
//     const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
//     if (bottom && !loading && hasMore) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 bg-gray-50" onScroll={handleScroll}>
//       <h1 className="text-4xl font-bold mb-6 text-center text-teal-600">Blog</h1>

//       {/* Blog Posts List */}
//       <div className="space-y-8">
//         {posts.length === 0 && !loading && <p className="text-center text-gray-500">No posts found.</p>}
//         {posts.map(post => (
//           <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gray-50">
//             <h2 className="text-3xl font-semibold text-teal-500 mb-4">{post.title}</h2>
//             <p className="text-gray-800 mb-4">{post.excerpt}</p>
//             <a href={`/blog/${post.id}`} className="text-blue-500 hover:text-teal-600 font-semibold">
//               Read more
//             </a>
//             <div className="text-sm text-gray-500 mt-4">{new Date(post.date).toLocaleDateString()}</div>
//             <div className="text-sm text-teal-500">Category: {post.category}</div>
//           </div>
//         ))}
//       </div>

//       {/* Loading Spinner */}
//       {loading && (
//         <div className="flex justify-center mt-6">
//           <div className="loader w-12 h-12 border-t-4 border-teal-500 border-solid rounded-full animate-spin"></div>
//         </div>
//       )}

//       {/* Load More Button */}
//       {!loading && hasMore && (
//         <div className="flex justify-center mt-6">
//           <button onClick={() => setPage(page + 1)} className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600">
//             Load More
//           </button>
//         </div>
//       )}

//       {/* No more posts */}
//       {!hasMore && !loading && (
//         <div className="flex justify-center mt-6">
//           <p className="text-gray-500">No more posts to load.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogParent;


import React, { useState, useEffect, useCallback } from 'react';

// Import blog images from the assets folder
import reactImg from '../../../src/assets/business.png';
// import reactImg from '../../../src/assets/business.jpg';
import cssImg from '../../../src/assets/business.png';
import jsImg from '../../../src/assets/business.png';
import tailwindImg from '../../../src/assets/business.png';
import nodeImg from '../../../src/assets/business.png';
import nextImg from '../../../src/assets/business.png';
import cssVarImg from '../../../src/assets/business.png';

// Simulate fetching posts from an API (for demo purpose)
const fetchPosts = (page, limit) => {
  const allPosts = [
    { id: 1, title: 'Understanding React', excerpt: 'A brief introduction to React and its core concepts.', category: 'React', date: '2025-05-01', image: reactImg },
    { id: 2, title: 'CSS Grid vs Flexbox', excerpt: 'Comparing two powerful layout techniques in CSS.', category: 'CSS', date: '2025-04-28', image: cssImg },
    { id: 3, title: 'JavaScript ES6 Features', excerpt: 'A look into the new features of JavaScript ES6.', category: 'JavaScript', date: '2025-05-10', image: jsImg },
    { id: 4, title: 'Introduction to Tailwind CSS', excerpt: 'How Tailwind CSS can speed up your web development.', category: 'CSS', date: '2025-04-20', image: tailwindImg },
    { id: 5, title: 'Node.js Basics', excerpt: 'A beginnerâ€™s guide to Node.js.', category: 'Node.js', date: '2025-05-05', image: nodeImg },
    { id: 6, title: 'Next.js for Beginners', excerpt: 'Getting started with Next.js for server-side rendering.', category: 'React', date: '2025-05-12', image: nextImg },
    { id: 7, title: 'CSS Variables', excerpt: 'Learn about CSS variables and their benefits.', category: 'CSS', date: '2025-05-15', image: cssVarImg },
    // Add more posts if needed
  ];
  return allPosts.slice((page - 1) * limit, page * limit);
};

const BlogParent = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadPosts = useCallback(async () => {
    setLoading(true);
    const newPosts = fetchPosts(page, 5); // Load 5 posts per page
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setHasMore(newPosts.length > 0);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom && !loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50 max-h-screen overflow-auto" onScroll={handleScroll}>
      <h1 className="text-4xl font-bold mb-6 text-center text-teal-600">Blog</h1>

      {/* Blog Posts List */}
      <div className="space-y-8">
        {posts.length === 0 && !loading && <p className="text-center text-gray-500">No posts found.</p>}
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gray-50">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-3xl font-semibold text-teal-500 mb-4">{post.title}</h2>
            <p className="text-gray-800 mb-4">{post.excerpt}</p>
            <a href={`/blog/${post.id}`} className="text-blue-500 hover:text-teal-600 font-semibold">
              Read more
            </a>
            <div className="text-sm text-gray-500 mt-4">{new Date(post.date).toLocaleDateString()}</div>
            <div className="text-sm text-teal-500">Category: {post.category}</div>
          </div>
        ))}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center mt-6">
          <div className="loader w-12 h-12 border-t-4 border-teal-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      {/* Load More Button */}
      {!loading && hasMore && (
        <div className="flex justify-center mt-6">
          <button onClick={() => setPage(page + 1)} className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600">
            Load More
          </button>
        </div>
      )}

      {/* No more posts */}
      {!hasMore && !loading && (
        <div className="flex justify-center mt-6">
          <p className="text-gray-500">No more posts to load.</p>
        </div>
      )}
    </div>
  );
};

export default BlogParent;