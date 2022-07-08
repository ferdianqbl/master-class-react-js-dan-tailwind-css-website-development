import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between hero container mx-auto pt-[7rem] mb-20">
      <div className="text-center hero-caption flex-1">
        <h1 className="text-3xl md:text-5xl font-bold">
          The Room <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-fuchsia-400">
            You've Dreaming
          </span>
        </h1>
        <h2 className="px-8 text-base md:px-0 md:text-lg my-6">
          Kami menyediakan furniture berkelas yang
          <br className="hidden lg:block" />
          membuat ruangan terasa homey
        </h2>
        <a
          href="#browse-the-room"
          className="bg-pink-400 text-black hover:bg-black hover:text-pink-400 rounded-full px-8 py-3 mt-4 inline-block flex-none transition duration-200"
        >
          Explore Now
        </a>
      </div>
      <div className="flex-1">
        <div className="hero-image relative">
          {/* <div className="overlay inset-0 bg-black opacity-35 z-10"></div> */}
          <div className="overlay right-0 bottom-0 md:inset-0">
            <button
              className="video hero-cta focus:outline-none z-30 modal-trigger"
              data-content='<div className="w-screen pb-56 md:w-88 md:pb-56 relative z-50">
                <div className="absolute w-full h-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/3h0_v1cdUIA"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>'
            ></button>
          </div>
          <img
            src="images/image-section-1.png"
            alt="hero 1"
            className="hidden sm:block w-full object-cover rounded-tl-full rounded-bl-full"
          />
        </div>
      </div>
    </section>
  );
}
