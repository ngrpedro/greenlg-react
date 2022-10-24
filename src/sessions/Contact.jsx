import React from "react";

const Contact = () => {
  return (
    <div className="section-container border-t border-gray-300 space-y-6">
      <h1
        className="text-[26px] leading-[54px] text-gray-700
    "
      >
        Send us a message!!
      </h1>
      <div></div>
      <div className="grid grid-cols-2 gap-5">
        <div className="form-input">
          <p className="form-inputText">Nome</p>
          <input type="text" className="form-inputInput" />
        </div>

        <div className="form-input">
          <p className="form-inputText">Numero de WhatsApp</p>
          <input
            type="text"
            className="form-inputInput"
            placeholder="(xx) xxxxx-xxxx"
          />
        </div>
      </div>

      <div className="form-input">
        <p className="form-inputText">Observações</p>
        <textarea className="form-inputInput" />
      </div>

      <button
        className="w-full bg-[#37c77f] rounded-md py-2 md:py-4 flex items-center justify-center gap-5
            text-white md:font-semibold md:text-lg leading-[26px]"
      >
        Enviar
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Contact;
