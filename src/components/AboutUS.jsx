import React from 'react';

const AboutUs = () => {
  return (
    <section 
      className="py-16 px-6 text-white mt-5" 
      style={{
        backgroundImage: "linear-gradient(180deg, #000103, #ffffff00 32%, #ffffff00 75%, #000103), linear-gradient(90deg, #000103, #002025 66%)"
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20 mt-5">
        
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-left md:text-left">
          <h1 
            className=" font-bold mb-5 inline-block"
            style={{
              backgroundImage: "linear-gradient(90deg, #fa955c, #00d5f3 103%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              fontSize: '3.5rem'
            }}
          >
            Our Story
          </h1>
          <p className="text-gray-400 mb-4" style={{ fontSize: '1.25rem',color:'#b2b3b3'}}>
            At <span className="color-text font-semibold">FAIRNETRO</span>, we believe in crafting seamless digital experiences. 
            What started as a vision between two passionate individuals has grown into a dynamic agency dedicated to **web development** and **branding solutions**.
          </p>
          <p className="text-gray-400" style={{ fontSize: '1.25rem',color:'#b2b3b3'}}>
            Our journey is fueled by innovation, creativity, and the desire to bridge the gap between businesses and technology.  
            With expertise in **web design, e-commerce, and digital strategy**, we empower brands to make a lasting impact.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://placehold.co/700x700" // Replace with actual image
            alt="Our Story"
            className="w-auto h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;
