import React, { useState, useEffect } from "react";

import img1 from "../assets/testimonios/Barranquilla.webp";
import img2 from "../assets/testimonios/Bogotá.webp";
import img3 from "../assets/testimonios/medellin.webp";
import img4 from "../assets/testimonios/pereira.webp";
import img5 from "../assets/testimonios/Medellin22.webp";
import img6 from "../assets/testimonios/Cucuta.webp";
import img7 from "../assets/testimonios/Cali.webp";

const TestimonialsAndStats = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  // ---------------------------
  // CONTADORES ANIMADOS
  // ---------------------------
  const useCounter = (target, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = target / (duration / 30);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 30);

      return () => clearInterval(counter);
    }, [target, duration]);

    return count;
  };

  const hogares = useCounter(1000);
  const profesionales = useCounter(10);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white font-['Baloo_Thambi_2'] relative overflow-hidden">

      {/* Decoraciones de fondo */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#0b6059]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4a017]/5 rounded-full blur-3xl"></div>

      {/* TÍTULO TESTIMONIOS */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b6059] mb-4">
          TESTIMONIOS DE NUESTROS <span className="text-[#d4a017]">CLIENTES</span>
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#0b6059] rounded-full"></div>
          <span className="text-3xl">💬</span>
          <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#0b6059] rounded-full"></div>
        </div>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Familias felices en todo Colombia confían en nosotros
        </p>
      </div>

      {/* CARRUSEL SUPER FLUIDO - VELOCIDAD DIFERENTE MOBILE/DESKTOP */}
      <div className="overflow-hidden w-full py-6 relative">
        {/* Gradientes laterales para efecto fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        
        {/* Mobile: animación más rápida | Desktop: animación normal */}
        <div 
          className="flex gap-4 md:gap-8 whitespace-nowrap" 
          style={{
            animation: window.innerWidth < 768 
              ? 'testimonial-slide-mobile 25s linear infinite' 
              : 'testimonial-slide-desktop 40s linear infinite',
            willChange: 'transform'
          }}
        >
          {/* Duplicamos las imágenes para loop infinito */}
          {[...images, ...images, ...images].map((img, index) => (
            <div key={index} className="relative group flex-shrink-0">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0b6059] to-[#d4a017] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative">
                <img
                  src={img}
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] border-4 border-white"
                  alt="Testimonio"
                  loading="lazy"
                />
                {/* Overlay con icono */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b6059]/80 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-bold text-lg flex items-center gap-2">
                    <span className="text-2xl">🐾</span> Cliente Feliz
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TÍTULO ESTADÍSTICAS */}
      <div className="text-center mt-24 mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b6059] mb-4">
          Nuestras <span className="text-[#d4a017]">Estadísticas</span>
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#d4a017] rounded-full"></div>
          <span className="text-3xl">📊</span>
          <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#d4a017] rounded-full"></div>
        </div>
      </div>

      {/* CONTADORES */}
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 px-4 relative z-10">
        
        {/* Hogares Felices */}
        <div className="group">
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#0b6059]/20 relative overflow-hidden">
            {/* Decoración */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0b6059]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0b6059] to-[#083d3a] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🏠</span>
              </div>
              <div className="text-6xl font-extrabold text-[#0b6059] mb-2 group-hover:scale-110 transition-transform duration-300">
                +{hogares}
              </div>
              <div className="text-xl text-gray-600 font-semibold">Hogares Felices</div>
              <div className="h-1 w-16 bg-gradient-to-r from-[#d4a017] to-[#f4c542] rounded-full mx-auto mt-4"></div>
            </div>
          </div>
        </div>

        {/* Profesionales */}
        <div className="group">
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#d4a017]/20 relative overflow-hidden">
            {/* Decoración */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4a017]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4a017] to-[#c49115] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              <div className="text-6xl font-extrabold text-[#d4a017] mb-2 group-hover:scale-110 transition-transform duration-300">
                +{profesionales}
              </div>
              <div className="text-xl text-gray-600 font-semibold">Profesionales</div>
              <div className="h-1 w-16 bg-gradient-to-r from-[#0b6059] to-[#0d7a6f] rounded-full mx-auto mt-4"></div>
            </div>
          </div>
        </div>

        {/* Años de Experiencia - BONUS */}
        <div className="group">
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#0b6059]/20 relative overflow-hidden">
            {/* Decoración */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0b6059]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0b6059] to-[#0d7a6f] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">⭐</span>
              </div>
              <div className="text-6xl font-extrabold text-[#0b6059] mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-xl text-gray-600 font-semibold">Satisfacción</div>
              <div className="h-1 w-16 bg-gradient-to-r from-[#d4a017] to-[#f4c542] rounded-full mx-auto mt-4"></div>
            </div>
          </div>
        </div>

      </div>

      {/* ESTILOS CSS - ANIMACIONES OPTIMIZADAS */}
      <style>{`
        /* Animación para MOBILE (25 segundos - más rápido) */
        @keyframes testimonial-slide-mobile {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 0.5));
          }
        }

        /* Animación para DESKTOP (40 segundos - más lento y elegante) */
        @keyframes testimonial-slide-desktop {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }

        /* Pausar animación al hacer hover en desktop */
        @media (min-width: 768px) {
          div[style*="testimonial-slide"]:hover {
            animation-play-state: paused !important;
          }
        }
      `}</style>

    </section>
  );
};

export default TestimonialsAndStats;