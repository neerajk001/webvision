import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Image Placeholder */}
        <div className="flex-1 bg-gray-300 h-64 w-full rounded-lg flex items-center justify-center text-gray-600 text-sm">
         <img
            src={"/program.png"}
            alt="WebVision Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-snug">
            WELCOME TO WEBVISION <br /> INFOTECH PVT LTD.
          </h1>

          <p className="text-xl text-purple-600 font-semibold mt-4">
            WE MAKE AN WEB HAPPEN..........
          </p>

          <p className="text-gray-700 mt-4 text-base leading-relaxed">
            Webvision Softech is a “One Stop IT Solution” for any kind of business process.
            It basically deals with various web as well as window’s application and services.
            We provide high quality of application to promote the IT sector.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded shadow">
              Get started
            </button>
            <button className="bg-black text-white font-semibold px-6 py-2 rounded shadow hover:bg-gray-800">
              our services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
