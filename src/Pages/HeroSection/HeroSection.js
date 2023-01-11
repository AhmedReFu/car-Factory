import React from "react";
import { Link } from "react-router-dom";
import heroBanner from "../../img/banner/img-1.jpg";

const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="hero-overlay "></div>

      <div className="grid lg:grid-cols-2 grid-cols-1 text-start  lg:mr-80">
        <div>
          <h2 className="text-white text-4xl font-bold">Yamaha R15 V3 Indo Version</h2>
          <br />
          <p className="text-white">50+km Milage/Ltr</p>
          <br />
          <div className="md:flex gap-10 mt-8">
            <div className="border rounded-lg border-slate-400 px-20 py-12 flex justify-center mt-1 items-center w-24 h-16">
              <h1 className="text-3xl font-bold text-green-600">$4000</h1>
            </div>
            <h1 className=" font-bold text-white text-lg">
              Only 6 Month Used, <br />
              <span className="font-medium text-3xl text-slate-300">
                Refreshed Style, <br />
                High Performance
              </span>
            </h1>
          </div>
          <br />
          <div className="flex gap-5 mt-9">
            <Link to="/allcar/63808e0859c9ffedc93299f9">
              <button className="text-white bg-green-600 px-10 py-3 rounded-md hover:text-green-600 hover:bg-transparent font-bold hover:border hover:border-red-600 duration-300 transition transform ease-in-out">
                Buy Now
              </button>
            </Link>
            <Link to="/login">
              <button className="text-red bg-transparent duration-300 transition text-green-600 px-16 py-3 rounded-md hover:text-white hover:bg-green-600 font-bold border border-white-600">
                Log In
              </button>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HeroSection;
