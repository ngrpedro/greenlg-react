import React from "react";
import analytics from '../assets/analytics.png';

const Analytics = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="section-container grid grid-cols-1 md:grid-cols-2">
        <div>
          <img
            src={analytics}
            className="static m-auto md:max-w-md xl:max-w-xl"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 gap-4">
            <label className="text-4xl">
              Qui dolore dolor cupidatat
              <span className="text-green-500">cupidatat ullamco velit </span>
              pariatur.
            </label>
            <label className="text-gray-600 text-xl">
              Duis in voluptate aliquip duis.Eiusmod ea ut excepteur enim
              exercitation voluptate.
            </label>
          </div>
          <div>
            <div className="list-with-icons">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>

              <label className="text-xl"> Dolore do cupidatat </label>
            </div>
            <div className="list-with-icons">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>

              <label className="text-xl"> Dolore do cupidatat </label>
            </div>
            <div className="list-with-icons">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </div>

              <label className="text-xl"> Dolore do cupidatat </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
