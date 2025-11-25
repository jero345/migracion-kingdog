import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import nosotros from "../assets/img/nosotros.webp";

// Importar los iconos de "ofrecemos"
import compromisoCalidad from "../assets/ofrecemos/compromiso con la calidad.png";
import transparenciaConfianza from "../assets/ofrecemos/transparencia y confianza.png";
import bienestarAnimal from "../assets/ofrecemos/bienestar animal.png";
import asesoriaPersonalizada from "../assets/ofrecemos/asesoria personalizada.png";


const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('historia');

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-lg md:text-xl leading-relaxed font-['Baloo_Thambi_2'] relative overflow-hidden">

      {/* Decoraciones de fondo */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-[#0b6059]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#d4a017]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-[#0b6059]/5 rounded-full blur-3xl"></div>

      {/* --- CONTENEDOR PARA BAJAR TODO DEBAJO DE LA NAVBAR --- */}
      <div className="pt-24 md:pt-28 relative z-10">
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">

          {/* First Section - ¿Quiénes Somos? */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-5xl mb-4 block">👋</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b6059] mb-2">
                ¿Quiénes <span className="text-[#d4a017]">Somos</span>?
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-[#0b6059] to-[#d4a017] rounded-full"></div>
                <span className="text-[#0b6059] text-xl">🐾</span>
              </div>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                En Criadero King Dog, contamos con más de <span className="font-bold text-[#0b6059]">14 años de experiencia</span> en
                la cría profesional de perros de raza pura. Nuestra trayectoria
                refleja nuestro compromiso con la calidad, la confianza y el cuidado
                excepcional de cada cachorro que entregamos a nuevas familias en
                Colombia.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0b6059] to-[#d4a017] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl"></div>
              <img
                 src={nosotros} 
                alt="Nosotros"
                className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto border-4 border-white group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Features Cards */}
          <div className="bg-gradient-to-br from-[#0b6059] to-[#083d3a] rounded-3xl p-10 mb-20 relative overflow-hidden shadow-2xl">
            
            {/* Decoraciones internas */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            {/* Título de sección */}
            <div className="text-center mb-10 relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                ¿Qué <span className="text-[#d4a017]">Ofrecemos</span>?
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-[#d4a017] to-[#f4c542] rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              
              {[
                { img: compromisoCalidad, title: "Compromiso con la Calidad", desc: "Cachorros de raza pura con certificados de salud y pureza.", icon: "🏆" },
                { img: transparenciaConfianza, title: "Transparencia y Confianza", desc: "Garantías claras y procesos transparentes que respaldan cada venta.", icon: "🤝" },
                { img: bienestarAnimal, title: "Bienestar Animal", desc: "Criamos cachorros en un entorno seguro y lleno de cariño, promoviendo su salud y felicidad.", icon: "❤️" },
                { img: asesoriaPersonalizada, title: "Asesoría Personalizada", desc: "Acompañamiento total, brindando la mejor asesoría pre y postventa.", icon: "💬" }
              ].map((item, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="mb-5 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#d4a017] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl scale-110"></div>
                      <div className="w-36 h-36 rounded-full border-4 border-[#d4a017] flex items-center justify-center bg-white overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-white relative">
                        <img 
                          src={item.img} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#d4a017] rounded-full flex items-center justify-center text-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-0">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <h5 className="text-xl font-bold text-white mb-3 uppercase transition-colors duration-300 group-hover:text-[#d4a017]">
                    {item.title}
                  </h5>
                  <p className="text-gray-300 text-base group-hover:text-white transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* About Section with Accordion */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-5xl mb-4 block">📖</span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#0b6059] mb-2">
                Acerca de <span className="text-[#d4a017]">Nosotros</span>
              </h3>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-[#0b6059] to-[#d4a017] rounded-full"></div>
                <span className="text-[#d4a017] text-xl">👑</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                En Criadero King Dog, llevamos más de <span className="font-bold text-[#0b6059]">14 años de experiencia</span> siendo
                referentes en la cría profesional de perros de raza pura en Colombia.
                Nos enorgullece ofrecer cachorros que cumplen con los más altos
                estándares de calidad, pureza genética y salud.
              </p>
              
              {/* Stats mini */}
              <div className="flex gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-[#0b6059]">+14</div>
                  <div className="text-sm text-gray-600">Años</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-[#d4a017]">+1000</div>
                  <div className="text-sm text-gray-600">Familias</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-[#0b6059]">100%</div>
                  <div className="text-sm text-gray-600">Garantía</div>
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              
              {[
                { id: 'historia', title: 'Nuestra Historia', icon: '📜', content: 'Hace más de una década, iniciamos este camino con el propósito de ofrecer cachorros de raza pura, saludables y con garantías únicas.' },
                { id: 'mision', title: 'Nuestra Misión', icon: '🎯', content: 'Proveer cachorros de alta calidad genética y salud comprobada, ofreciendo un servicio integral que priorice el bienestar animal.' },
                { id: 'vision', title: 'Nuestra Visión', icon: '🔭', content: 'Consolidarnos como el criadero líder en Colombia, ofreciendo experiencias únicas a cada familia.' }
              ].map((item) => (
                <div 
                  key={item.id} 
                  className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                    openAccordion === item.id 
                      ? 'shadow-2xl shadow-[#0b6059]/20 scale-[1.02]' 
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full bg-gradient-to-r from-[#0b6059] to-[#0d7a6f] text-white px-6 py-5 text-left font-bold hover:from-[#094d47] hover:to-[#0b6059] transition-all duration-300 flex justify-between items-center text-xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-2xl transition-transform duration-300 ${openAccordion === item.id ? 'scale-125 animate-bounce' : ''}`}>
                        {item.icon}
                      </span>
                      {item.title}
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 ${openAccordion === item.id ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openAccordion === item.id && (
                    <div className="bg-gradient-to-br from-[#0b6059]/10 to-white px-6 py-5 border-l-4 border-[#d4a017] animate-slideDown">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; transform: translateY(-10px); }
          to { opacity: 1; max-height: 200px; transform: translateY(0); }
        }
        .animate-slideDown { animation: slideDown 0.4s ease-out; }
      `}</style>
    </div>
  );
};

export default AboutPage;