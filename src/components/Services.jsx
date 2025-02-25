import React from "react";
import { motion } from "framer-motion";
import { Home, TrendingUp, Clock, PenTool, FileText } from "lucide-react";

const services = [
  {
    icon: <Home size={50} className="gradient-icon" />,
    title: "Custom Web Design",
    description: "We craft visually stunning, user-friendly websites that align with your brand and drive engagement.",
  },
  {
    icon: <TrendingUp size={50} className="gradient-icon" />,
    title: "SEO Optimization",
    description: "Enhance search visibility and rank higher with data-driven SEO strategies tailored to your business.",
  },
  {
    icon: <Clock size={50} className="gradient-icon" />,
    title: "Social Media Marketing",
    description: "Grow your audience, increase engagement, and build brand authority through strategic campaigns.",
  },
  {
    icon: <PenTool size={50} className="gradient-icon" />,
    title: "Brand Identity",
    description: "Create a powerful and recognizable brand with distinctive visuals, messaging, and strategy.",
  },
  {
    icon: <FileText size={50} className="gradient-icon" />,
    title: "Content Marketing",
    description: "Engage, inform, and convert your audience with high-quality blogs, videos, and visuals.",
  },
  {
    icon: <TrendingUp size={50} className="gradient-icon" />,
    title: "Paid Advertising",
    description: "Drive conversions with highly targeted, data-backed ad campaigns on major digital platforms.",
  },
];

export default function Services() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center px-6 py-10">
      <motion.h1
        className="text-3xl text-center font-bold mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Achieve Success with Our{" "}
        <span
          className="text-transparent bg-clip-text"
          style={{ backgroundImage: "linear-gradient(90deg, #fa955c, #00d5f3)" }}
        >
          Creative Services
        </span>
      </motion.h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 max-w-6xl mt-5">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-lg text-center w-full"
            style={{
              backgroundImage: "linear-gradient(342deg, #111214, #000103)",
              color: "white",
              padding: "2rem 1rem",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="mb-4 flex justify-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {service.icon}
            </motion.div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* SVG Gradient Definition */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fa955c" />
            <stop offset="100%" stopColor="#00d5f3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Apply Gradient to Icons */}
      <style>
        {`
          .gradient-icon {
            stroke: url(#gradient);
          }
        `}
      </style>
    </div>
  );
}
