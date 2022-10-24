import React from "react";

const Questions = () => {
  return (
    <section className="section-container border-t-2 border-t-green-100">
      <div className="flex flex-col items-center gap-2">
        <label className="text-2xl"> Qui dolore dolor cupidatat. </label>
        <label className="text-gray-600 text-md max-w-md text-center">
          Eiusmod ea ut excepteur enim exercitation voluptate. Duis in voluptate
          aliquip duis.
        </label>
      </div>
      <div
        id="accordion-flush"
        data-accordion="collapse"
        className="m-auto my-8 max-w-3xl"
      >
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            className="accordion-btn"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <span>Exercitation officia ipsum aliquip.</span>
            <svg
              data-accordion-icon=""
              className="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-1"
          className=""
          aria-labelledby="accordion-flush-heading-1"
        >
          <div className="accordion-content">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Sint officia dolor fugiat cillum irure id ut. Dolore enim occaecat
              sit tempor consequat. Dolore id ut non minim est do nulla ullamco
              consectetur. Eiusmod consectetur do pariatur cillum ad irure est.
              Labore dolor et dolore tempor aliquip duis tempor nostrud
              incididunt et. Consequat irure id irure deserunt occaecat nulla
              quis aute ad est ad.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Anim ea eu sit ut labore non nisi culpa duis.
            </p>
          </div>
        </div>

        <h2 id="accordion-flush-heading-2">
          <button
            type="button"
            className="accordion-btn"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>Consequat laborum sit sit amet ullamco voluptate.</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          className="hidden"
          aria-labelledby="accordion-flush-heading-2"
        >
          <div className="accordion-content">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Sint officia dolor fugiat cillum irure id ut. Dolore enim occaecat
              sit tempor consequat. Dolore id ut non minim est do nulla ullamco
              consectetur.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Anim ea eu sit ut labore non nisi culpa duis.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Labore dolor et dolore tempor aliquip duis tempor nostrud
              incididunt et. Consequat irure id irure deserunt occaecat nulla
              quis aute ad est ad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
