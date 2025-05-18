import React from "react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 casual look ideas to dress up your kids",
    date: "22 Aug 2021",
    category: "tips & tricks",
    image: "/images/post-thumb-1.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
  },
  {
    id: 2,
    title: "Latest trends of wearing street wears supremely",
    date: "25 Aug 2021",
    category: "trending",
    image: "/images/post-thumb-2.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
  },
  {
    id: 3,
    title: "10 Different Types of comfortable clothes ideas for women",
    date: "28 Aug 2021",
    category: "inspiration",
    image: "/images/post-thumb-3.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
  },
];

const RecentBlogSection: React.FC = () => {
  return (
    <section id="latest-blog" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between my-8">
          <h2 className="text-2xl font-heading md:text-3xl font-semibold">Our Recent Blog</h2>
          <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline mt-4 md:mt-0">   Read All Articles  <svg width="24" height="24" fill="currentColor"> <use xlinkHref="#arrow-right" />  </svg>  </a>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-100 shadow-md rounded-lg overflow-hidden"
            >
              <div className="overflow-hidden">
                <a href="#" className="block hover:scale-105 transition-transform duration-300">
                  <img src={post.image} alt="post" className="w-full h-56 object-cover" />
                </a>
              </div>
              <div className="p-4">
                <div className="flex text-xs text-gray-500 uppercase gap-4 mb-3 items-center">
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" fill="currentColor">
                      <use xlinkHref="#calendar" />
                    </svg>
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" fill="currentColor">
                      <use xlinkHref="#category" />
                    </svg>
                    {post.category}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <a href="#" className="hover:text-blue-600 transition">
                    {post.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogSection;
