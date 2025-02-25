import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    category: "Ideas",
    title: "From Concept to Reality: Turning Ideas into Businesses",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "https://placehold.co/400x250",
  },
  {
    category: "Productivity",
    title: "Maximizing Efficiency: The Tools for Managing a Remote Team",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "https://placehold.co/400x250",
  },
  {
    category: "Ideas",
    title: "The Role of Mindfulness in Enhancing Workplace Productivity",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "https://placehold.co/400x250",
  }
];

const FeaturedBlog = () => {
  return (
    <div className="text-white py-16 px-8 text-center">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Featured <span className="color-text text-orange-500">Blog</span>
      </motion.h2>
      <motion.p
        className="text-gray-400 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="gray-cards p-6 rounded-xl shadow-lg text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,  // Scale up slightly on hover
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Add shadow effect
              transition: { duration: 0.3 },
            }}
          >
            <img src={post.image} alt={post.title} className="rounded-lg mb-4" />
            <p className="color-text fs-4 text-sm font-semibold mb-2">{post.category}</p>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-300 mb-4">{post.description}</p>
          </motion.div>
        ))}
      </div>
    <motion.button
        className="mt-5 font-medium mt-3 vp btn-secondary w-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        >
        View all
    </motion.button>

    </div>
  );
};

export default FeaturedBlog;
