import React, { useState } from "react";

const faqs = [
  { 
    question: "How can this platform enhance my business operations?", 
    answer: "Our platform provides a variety of tools to streamline your business operations. By automating tasks and offering advanced analytics, we help you boost productivity, enhance customer engagement, and grow your business." 
  },
  { 
    question: "How can I access and download your company logo?", 
    answer: "You can download the logo by navigating to the 'Branding' section under settings. There, you will find the logo files along with our branding guidelines for proper usage." 
  },
  { 
    question: "Can I integrate your logo with my other business platforms?", 
    answer: "Yes, you may use our logo on other platforms, provided you follow our branding guidelines to ensure consistency and proper representation of our brand." 
  },
  { 
    question: "What languages are supported by your platform?", 
    answer: "Our platform supports several languages, including English, Spanish, French, and German. We are continuously working to add more languages for a global audience." 
  },
  { 
    question: "What is your pricing structure?", 
    answer: "We offer flexible pricing plans based on your usage, business size, and specific requirements. For more detailed information, please check our 'Pricing' page or contact our support team." 
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

return (
    <div className="faq-container mt-5">
        <h2 className="faq-title">
            Frequently <span className="color-text">Asked Questions</span>
        </h2>
        <p className="faq-subtitle mb-5">
            Here are some common questions to help you get started with our platform.
        </p>
        <div className="faq-list mt-5">
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item ">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="faq-question"
                    >
                        {faq.question}
                        <span className="faq-toggle-icon">{openIndex === index ? "−" : "+"}</span>
                    </button>
                    <div
                        className={`faq-answer ${openIndex === index ? "open" : ""}`}
                    >
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* New Section for 'Still have questions?' */}
        <div className="contact-container mt-5">
            <h3 className="contact-title mt-5">Still have questions?</h3>
            <p className="contact-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-5 font-medium mt-3 vp btn-secondary w-48">Contact Us</button>
        </div>
    </div>
);
};

export default FAQ;
