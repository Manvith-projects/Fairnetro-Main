import React from "react";
import { motion } from "framer-motion";

const Started = () => {
  return (
    <section id="Feature" className="section_process">
      <div className="container mx-auto px-4">
        {/* Heading Animation */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-semibold text-gray-800">
            How to <span className="color-text">Get Started ?</span>
          </h1>
          <p className="text-sm text-gray-600 mt-4" style={{ color: "#b2b3b3" }}>
            Follow these easy steps to begin your journey with our website development and marketing services. From planning to execution, we’ve got everything covered to help grow your business.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
          {[
            {
              step: "1",
              title: "Define Your Business Goals",
              description:
                "Start by defining your business objectives. Whether you're looking to increase brand awareness, drive traffic, or boost sales, understanding your goals will guide the website and marketing strategies we develop for you.",
            },
            {
              step: "2",
              title: "Build a User-Friendly Website",
              description:
                "We’ll create a responsive, modern website tailored to your business needs. From design to functionality, we ensure your website provides an engaging and smooth user experience that converts visitors into customers.",
            },
            {
              step: "3",
              title: "Launch Your Marketing Campaign",
              description:
                "Once your website is live, we help you create and launch targeted marketing campaigns. From social media ads to email marketing, we’ll amplify your reach and bring your brand to the forefront of your target audience.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="process_item p-6 rounded-lg text-center"
              style={{ backgroundImage: "linear-gradient(342deg, #111214, #000103)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="process_circle w-30 h-30 text-white rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  backgroundImage: "url(/assets/grycard.jpg)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  opacity: "90%",
                }}
              >
                <span className="text-5xl font-bold">{item.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="fs-6 text-gray-600" style={{ color: "#b2b3b3" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button Animation */}
        <motion.div className="text-center mt-12" whileHover={{ scale: 1.1 }}>
          <a href="/sign-up" className="text-blue-500 font-medium mt-3 vp btn-secondary w-48">
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Started;
