import React from 'react';

const slider = () => {
    return (
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Buy & Sell Any Types Bike
            </h1>
            <p className="mb-5">
              A motorcycle is a two-wheeled vehicle with an engine. Motorcycles
              are bigger, heavier, and much faster than bicycles, but they have
              many similar parts. Like bicycles, motorcycles are often called
              bikes. Motorcycles are a common form of transportation throughout
              the world.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default slider;