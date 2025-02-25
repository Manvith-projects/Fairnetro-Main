import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion

const Prices = () => {
  const plans = [
    {
      name: "Basic",
      price: "$199",
      features: [
        "Custom Website Design",
        "Mobile Responsive Design",
        "Basic SEO Optimization",
      ],
      unavailable: [
        "Social Media Marketing",
        "PPC Advertising",
        "Email Marketing Campaigns",
        "Advanced SEO & Analytics",
      ],
    },
    {
      name: "Standard",
      price: "$399",
      features: [
        "Custom Website Design",
        "Mobile Responsive Design",
        "Basic SEO Optimization",
        "Social Media Marketing",
        "PPC Advertising",
      ],
      unavailable: [
        "Email Marketing Campaigns",
        "Advanced SEO & Analytics",
      ],
    },
    {
      name: "Premium",
      price: "$999",
      features: [
        "Custom Website Design",
        "Mobile Responsive Design",
        "Basic SEO Optimization",
        "Social Media Marketing",
        "PPC Advertising",
        "Email Marketing Campaigns",
        "Advanced SEO & Analytics",
      ],
      unavailable: [],
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold color-text">
          Pricing Plan
        </h1>
        <p className="text-gray-400 mb-5">
          Choose a plan that fits your web design and marketing needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-6 rounded-lg shadow-lg ${
                index === 1
                  ? "gradient-border" // Custom class for gradient border on Standard plan
                  : "border border-gray-300" // Default border for other plans
              }`}
              initial={{ opacity: 0, scale: 0.8 }} // Initial state (hidden and smaller)
              animate={{ opacity: 1, scale: 1 }} // End state (visible and original size)
              transition={{ duration: 0.5, ease: "easeOut" }} // Animation settings
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold text-gradient mb-4 fs-1 color-text fw-bold">
                {plan.price}
              </p>
              <ul className="text-left mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <Check className="text-green-400 mr-2" /> {feature}
                  </li>
                ))}
                {plan.unavailable.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2 text-gray-500">
                    <X className="text-red-400 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="text-blue-500 font-medium mt-3 vp btn-secondary w-48">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
