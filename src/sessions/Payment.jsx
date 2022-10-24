import React from "react";
import payment from "../assets/payment.svg";

const Payment = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="tag border-gray-500"> Pricing </label>
            </div>
            <label className="text-2xl"> Qui dolore dolor cupidatat. </label>
            <label className="text-gray-600 text-md">
              Eiusmod ea ut excepteur enim exercitation voluptate. Duis in
              voluptate aliquip duis.
            </label>

            <img src={payment} className="max-w-xs m-auto" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div className="card-pricing">
              <div className="space-y-3">
                <label className="text-xl block font-semibold">Personal</label>

                <ul className="card-pricing-list">
                  <li>Eiusmod ea ut excepteur enim exer.</li>
                  <li>Duis in voluptate aliquip duis.</li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-between gap-8">
                <label className="text-4xl block font-semibold"> Free </label>
                <button className="btn-primary">Get started</button>
              </div>
            </div>
          </div>

          <div>
            <div className="card-pricing border-l-red-800">
              <div className="space-y-3">
                <label className="text-xl block font-semibold">
                  For Family
                </label>

                <ul className="card-pricing-list">
                  <li>Eiusmod ea ut excepteur enim exer.</li>
                  <li>Duis in voluptate aliquip duis.</li>
                  <li>Anim exercitation voluptate duis.</li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-between gap-8">
                <label className="text-4xl block font-semibold">
                  $22{" "}
                  <span className="text-xs text-gray-400 font-normal">/mo</span>
                </label>
                <button className="btn-primary">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
