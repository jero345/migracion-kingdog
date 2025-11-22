// components/FloatButton.jsx
import React from "react";

const FloatButton = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50 md:bottom-28 md:right-8">
      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/573217543836?text=Hola%20Criadero%20King%20Dog%2C%20estoy%20interesado%20en%20un%20cachorro"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group block
          w-14 h-14 md:w-16 md:h-16
          bg-[#25D366] rounded-full shadow-2xl
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110 active:scale-95
          animate-pulse hover:animate-none
        "
        aria-label="Chatear por WhatsApp"
      >
        {/* Logo oficial de WhatsApp */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-9 h-9 md:w-10 md:h-10 drop-shadow-md"
        />
      </a>
    </div>
  );
};

export default FloatButton;