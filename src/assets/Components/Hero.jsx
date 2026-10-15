import React from "react";
import churchphoto from "../Images/churchphoto.jpeg";

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
              href="#about"
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
    <section>
      <h1 className=" flex items-center justify-around text-3xl font-bold text-green-900">services</h1>
      <div className="flex flex-cols font-bold text-green-900 justify-between p-5 ">
      <div className="bg-white w-6em h-100px rounded-2xl shadow-lg p-4">
        
       <h1> English service</h1>
       <p> 8:30AM-10:30AM </p>
        
        </div>
         <div className="bg-white w-6em h-100px rounded-2xl shadow-lg p-4">
        
       <h1> Kiswahili service</h1>
       <p> 11:30AM-12:30AM </p>
        
        </div> <div className="bg-white w-6em h-100px rounded-2xl shadow-lg p-4">
        
       <h1> Youth service</h1>
       <p> 9:30AM-10:30AM</p>
        
        </div>
         <div className="bg-white w-6em h-100px rounded-2xl shadow-lg p-4">
        
       <h1> Sunday School</h1>
       <p> 9:30AM-10:30AM</p>
        
        </div>
     
      </div>
    </section>
    
    </>

  
  );
}

export default Hero;