import React from "react";
import main from "../assets/main.png";

const Hero = () => {
  return (
    <section className="section-container border-b-2 border-b-green-300">
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        <div className="grid grid-cols-1 gap-14">
          <div>
            <label className="tag"> Lorem ipson dolor </label>
          </div>
          <label className="text-6xl">
            Nulla dolor
            <span className="text-green-500">mollit officia</span> tempor!
          </label>
          <label className="text-sm">
            Dolore sint esse aute sint amet non tempor consequat magna culpa
            occaecat nostrud. sint amet non tempor consequat. a occaecat
            nostrud. sint amet non tempor consequat.
          </label>

          <div className="flex items-center justify-start gap-5">
            <button type="button" className="btn-primary">
              Get started
            </button>
            <button className="btn-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
              Share Document
            </button>
          </div>
        </div>
        <div>
          <img
            src={main}
            className="static m-auto md:max-w-md xl:max-w-xl"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-start gap-3 mt-5 py-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-green-500 animate-bounce"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
        <label className="block p-2">Scrool down for more</label>
      </div>
    </section>
  );
};

export default Hero;
