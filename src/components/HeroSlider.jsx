import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importar las imágenes
import colombiaImage from '../assets/banner/banner-1.webp';
import colombia2Image from '../assets/banner/banner-2.webp';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: colombiaImage,
      title: 'Venta de cachorros de raza pura en Colombia',
      subtitle: 'Más de 14 años enfocados en una crianza responsable y cachorros de raza pura con certificación de calidad.',
    },
    {
      image: colombia2Image,
      title: 'Descubre nuestras razas disponibles',
      subtitle: 'Desde las razas más pequeñas hasta las más grandes, encuentra tu cachorro ideal para tu hogar.',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  // Función para abrir WhatsApp
  const handleContactClick = () => {
    window.open('https://wa.me/573217543836?text=Hola%20Criadero%20King%20Dog%2C%20estoy%20interesado%20en%20un%20cachorro', '_blank');
  };

  return (
    <section className="relative h-[550px] md:h-[650px] overflow-hidden font-['Baloo_Thambi_2']">
      
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-110'
            }`}
          >
            {/* Imagen de fondo */}
            <div 
              className="absolute inset-0 transition-transform duration-[8000ms] ease-out"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>

            {/* Contenido */}
            <div
              className={`relative h-full flex items-center justify-center text-center transition-all duration-1000 ${
                index === currentSlide
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="max-w-3xl mx-auto px-12 md:px-8 relative z-20">
                
                {/* Título */}
                <h1 className={`text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-5 leading-tight drop-shadow-2xl transition-all duration-700 delay-300 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {slide.title}
                </h1>

                {/* Línea decorativa */}
                <div className={`flex items-center justify-center gap-3 mb-4 md:mb-5 transition-all duration-700 delay-400 ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#d4a017] rounded-full"></div>
                  <span className="text-2xl"></span>
                  <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#d4a017] rounded-full"></div>
                </div>

                {/* Subtítulo */}
                <p className={`text-sm md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto transition-all duration-700 delay-500 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {slide.subtitle}
                </p>

                {/* Botón CONTÁCTANOS */}
                <div className={`transition-all duration-700 delay-600 relative z-30 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button
                    onClick={handleContactClick}
                    type="button"
                    className="inline-block bg-gradient-to-r from-[#0b6059] to-[#0d7a6f] hover:from-[#094d47] hover:to-[#0b6059] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer active:scale-95"
                  >
                    CONTÁCTANOS
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#0b6059] backdrop-blur-md text-white p-2 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#0b6059] z-10 group"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#0b6059] backdrop-blur-md text-white p-2 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#0b6059] z-10 group"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-500 rounded-full overflow-hidden ${
              index === currentSlide
                ? 'w-10 h-3 bg-[#0b6059]'
                : 'w-3 h-3 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-[#d4a017] animate-progress rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }
        .animate-progress { animation: progress 6s linear; }
        .animate-scroll { animation: scroll 1.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HeroSlider;