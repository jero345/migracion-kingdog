import React, { useState } from "react";
import { breedsDetails } from "../data/breedsData";

const BreedDetailModal = ({ breedName, onClose }) => {
  const breed = breedsDetails[breedName];
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!breed) return null;

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: scale(0.95) translateY(20px);
            }
            to { 
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>

      <div
        className="relative w-full max-w-6xl my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:-top-4 sm:-right-4 z-10 bg-white hover:bg-red-500 text-gray-800 hover:text-white rounded-full p-2 sm:p-3 transition-all duration-300 hover:rotate-90 shadow-2xl"
          aria-label="Cerrar modal"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenido del modal */}
        <div
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          style={{ maxHeight: "95vh" }}
        >
          <div className="grid lg:grid-cols-2 gap-0 overflow-y-auto">
            {/* Imagen */}
            <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center" style={{ minHeight: "250px" }}>
              <img
                src={breed.descImage}
                alt={`Descripción de ${breedName}`}
                className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-lg"
                style={{ maxHeight: "400px" }}
              />
            </div>

            {/* Contenido textual */}
            <div className="p-4 sm:p-6 lg:p-12 flex flex-col">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                {breedName}
              </h1>

              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                {breed.descripcion}
              </p>

              {/* Acordeones */}
              <div className="space-y-3 sm:space-y-4 flex-grow">
                {/* Características */}
                <div className="border-2 border-teal-600 rounded-lg sm:rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("caracteristicas")}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white hover:bg-teal-50 flex justify-between items-center transition-colors duration-200"
                  >
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-teal-700 text-left">
                      Características Principales del {breedName}
                    </span>
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-teal-600 flex-shrink-0 ml-2 transition-transform duration-300 ${
                        openAccordion === "caracteristicas" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openAccordion === "caracteristicas" ? "500px" : "0" }}
                  >
                    <div className="px-4 sm:px-6 py-3 sm:py-4 bg-teal-50 overflow-y-auto" style={{ maxHeight: "400px" }}>
                      <ul className="space-y-2">
                        {breed.caracteristicas.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-teal-600 font-bold mt-1 flex-shrink-0">•</span>
                            <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Cuidados */}
                <div className="border-2 border-teal-600 rounded-lg sm:rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("cuidados")}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white hover:bg-teal-50 flex justify-between items-center transition-colors duration-200"
                  >
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-teal-700 text-left">
                      Cuidados Especiales para el {breedName}
                    </span>
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-teal-600 flex-shrink-0 ml-2 transition-transform duration-300 ${
                        openAccordion === "cuidados" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openAccordion === "cuidados" ? "500px" : "0" }}
                  >
                    <div className="px-4 sm:px-6 py-3 sm:py-4 bg-teal-50 overflow-y-auto" style={{ maxHeight: "400px" }}>
                      <ul className="space-y-2">
                        {breed.cuidados.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-teal-600 font-bold mt-1 flex-shrink-0">•</span>
                            <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ¿Por qué elegir? */}
                <div className="border-2 border-teal-600 rounded-lg sm:rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("elegir")}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white hover:bg-teal-50 flex justify-between items-center transition-colors duration-200"
                  >
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-teal-700 text-left">
                      ¿Por Qué Elegir un {breedName} de King Dog?
                    </span>
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-teal-600 flex-shrink-0 ml-2 transition-transform duration-300 ${
                        openAccordion === "elegir" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openAccordion === "elegir" ? "500px" : "0" }}
                  >
                    <div className="px-4 sm:px-6 py-3 sm:py-4 bg-teal-50 overflow-y-auto" style={{ maxHeight: "400px" }}>
                      <ul className="space-y-2">
                        {breed.porQueElegir.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-teal-600 font-bold mt-1 flex-shrink-0">•</span>
                            <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón WhatsApp */}
              <div className="mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <a
                  href="https://wa.me/573217543836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 sm:gap-3 text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl w-full"
                  style={{
                    background: "linear-gradient(to right, #25D366, #128C7E)",
                  }}
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-white flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  ¡Quiero este cachorrito!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedDetailModal;