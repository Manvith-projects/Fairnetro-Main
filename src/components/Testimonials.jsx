import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Fairnetro Agency",
    role: "Marketing & Web Development",
    image: "https://placehold.co/100",
    text: "Fairnetro offers top-tier marketing strategies and web development services, ensuring your business grows with innovative solutions. We specialize in creating cutting-edge websites, e-commerce platforms, and robust marketing campaigns that drive results."
  },
  {
    name: "John Anderson",
    role: "CEO, CupDev",
    image: "https://placehold.co/100",
    text: "Working with Fairnetro has been an exceptional experience. Their team delivers high-quality services that truly helped our brand reach new heights."
  },
  {
    name: "Jane Smith",
    role: "Founder, InnovateTech",
    image: "https://placehold.co/100",
    text: "Fairnetro's attention to detail and customer-centric approach made our project seamless. Their marketing strategies helped boost our online presence in no time."
  },
  {
    name: "Mark Roberts",
    role: "Freelancer",
    image: "https://placehold.co/100",
    text: "Fairnetro’s services are unmatched. From web development to innovative marketing techniques, they consistently go above and beyond to ensure satisfaction."
  },
  {
    name: "Michael Walker",
    role: "CEO, RevUp",
    image: "https://placehold.co/100",
    text: "Fairnetro helped us increase our online presence, and the results speak for themselves. Their team is incredibly skilled and professional."
  },
  {
    name: "Emily Davis",
    role: "Developer, Facelook",
    image: "https://placehold.co/100",
    text: "The collaboration with Fairnetro has been amazing. Their approach to both web development and marketing is strategic and forward-thinking."
  }
];

const Testimonials = () => {
  return (
    <div className="text-white py-16 px-8">
      <h2 className="text-4xl font-bold mb-4 text-center">
        You're in <span className="color-text ">Good Company</span>
      </h2>
      <p className="text-gray-400 text-lg mb-5 text-center">
        Fairnetro is dedicated to bringing your business to the next level with innovative marketing and web development solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="gray-card p-6 rounded-xl shadow-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger the fade-in effect
          >
            <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
