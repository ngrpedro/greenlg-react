import React from "react";
import computer05 from "../assets/google.png";
import computer03 from "../assets/imac.png";
import computer04 from "../assets/money.png";

const Cards = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-3xl font-semibold">Dolore sint esse </label>
          <label className="text-md">
            Dolore sint esse aute sint amet non tempor consequat magna culpa
            occaecat nostrud. sint amet.
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <div className="w-16">
              <img src={computer03} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold cursor-pointer">
                Dolore{" "}
              </label>
              <label className="text-md cursor-pointer">
                Dolore sint esse aute sint amet non tempor consequat magna
                culpa.
              </label>
            </div>
          </div>

          <div className="card">
            <div className="w-16">
              <img src={computer04} className="w-80" alt="" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold cursor-pointer">
                Dolore{" "}
              </label>
              <label className="text-md cursor-pointer">
                Dolore sint esse aute sint amet non tempor consequat magna
                culpa.
              </label>
            </div>
          </div>

          <div className="card">
            <div className="w-16">
              <img src={computer05} className="w-80" alt="" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold cursor-pointer">
                Dolore{" "}
              </label>
              <label className="text-md cursor-pointer">
                Dolore sint esse aute sint amet non tempor consequat magna
                culpa.
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
