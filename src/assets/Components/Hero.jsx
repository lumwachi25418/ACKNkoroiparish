import React from "react";
import churchphoto from "../Images/churchphoto.jpeg";
import mu from "../Images/mu.jpeg";

function Hero() {
  const services=[
    {
      name: "English Service",
      description: "Join us every Sunday at 8:30 AM -10:30 AM for our English service.",
    },
    {
      name: "Kiswahili Service",
      description: "Join us every Sunday at 10:30 AM -12:30 PM for our Kiswahili service.",
    },
    {
      name: "Youth service",
      description: "Join us every Sunday at 9:30-10:30 AM for the youth service.",
    },
    {
      name: "Sunday School",
      description: "Bring your kids for Bible study and learning every Sunday at 9:30 AM.",
    },
  ];  
  return (
    <>
        <section
      className="relative flex min-h-[75vh] items-center overflow-hidden bg-cover bg-center px-6 py-20"
      style={{
        backgroundImage: `url(${churchphoto})`,
      }}
    >
      {/* Soft overlay to brighten the image */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Gentle gradient for readable text */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-white/35 to-transparent"></div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-4 font-semibold uppercase tracking-[0.18em] text-green-800">
            ACK Nkoroi Parish
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-7xl">
            Welcome Home.
            <br />
            <span className="text-green-800">
              Grow in Faith.
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-gray-700 sm:text-xl">
            A place to worship God, find fellowship, grow spiritually,
            and serve our community in Christian love.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/about"
              className="rounded-lg bg-green-800 px-7 py-4 font-semibold text-white shadow-md transition hover:bg-green-900"
            >
              Discover Our Parish →
            </a>

            <a
              href="#services"
              className="rounded-lg border-2 border-green-800 bg-white/80 px-7 py-4 font-semibold text-green-900 transition hover:bg-green-50"
            >
              Join Us for Worship
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm font-medium text-gray-700">
            <span className="h-1 w-10 rounded-full bg-yellow-500"></span>
            Faith • Fellowship • Service
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-10">
        <h2 className="mb-10 text-center text-3xl font-bold text-green-900">
          Services
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl bg-white p-6 shadow-lg shadow-gray-100 ring-1 ring-gray-100"
            >
              <h3 className="mb-3 text-xl font-semibold text-green-900">
                {service.name}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
      

      </div>
    </section>
      <section classNAme='w-fit h-fit bg-gray-50 py-16'>
        <h1 className="flex justify-center ">Gallery</h1>
        <img src={mu} alt="mu" className="mx-auto mt-4 rounded-lg shadow-lg" />
        
</section>
    
    </>

  
  );
}

export default Hero;