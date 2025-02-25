import React from 'react';

const Servin = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
            Web Design & Marketing
          </span> Services
        </h2>
        <p className="text-gray-400 mb-10">
          Elevate your brand with professional web design and marketing strategies tailored to your business.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Large Card */}
          <div className="gray-cards rounded-lg overflow-hidden">
            <img src="https://placehold.co/600x600" alt="Custom Website Design" className="w-full h-auto object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Custom Website Design</h3>
              <p className="text-gray-400">
                We craft visually stunning, user-friendly websites that align with your brand identity and business goals.
              </p>
            </div>
          </div>

          {/* Right Two Stacked Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="gray-cards rounded-lg overflow-hidden flex">
              <img src="https://placehold.co/500x700" alt="SEO & Digital Marketing" className="w-1/2 object-cover"/>
              <div className="p-6 w-1/2">
                <h3 className="text-lg font-semibold mb-1">SEO & Digital Marketing</h3>
                <p className="text-gray-400 text-sm">
                  Optimize your online presence with strategic SEO, social media, and targeted digital marketing campaigns.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gray-cards rounded-lg overflow-hidden flex">
              <img src="https://placehold.co/500x700" alt="E-commerce Solutions" className="w-1/2 object-cover"/>
              <div className="p-6 w-1/2">
                <h3 className="text-lg font-semibold mb-1">E-commerce Solutions</h3>
                <p className="text-gray-400 text-sm">
                  We build powerful e-commerce platforms designed to increase conversions and grow your online sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servin;
