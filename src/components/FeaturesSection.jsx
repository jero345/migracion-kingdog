import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, X } from 'lucide-react';

const GuaranteesModal = ({ isOpen, onClose, openAccordion, setOpenAccordion }) => {
  if (!isOpen) return null;

  const services = [
    {
      id: 'certificado',
      title: 'Cachorros con Certificado de Salud',
      emoji: '🏥',
      content: 'Garantizamos que cada cachorro que entregamos cuenta con una excelente salud, avalada por chequeos realizados antes de la entrega. Nuestro compromiso incluye: Desparasitación completa y al día. Esquema de vacunación actualizado y detallado en su respectivo carnet. Inspección para descartar cualquier problema genético o congénito. Con esta garantía, puedes estar tranquilo de que recibes un cachorro sano y preparado para un hogar lleno de amor.'
    },
    {
      id: 'pureza',
      title: 'Garantía de Pureza de Por Vida',
      emoji: '👑',
      content: 'Nos enorgullece ofrecer razas puras garantizadas, respaldadas por un certificado exclusivo emitido por nuestro criadero. Esto incluye: Compromiso de por vida en la pureza de la raza. Claridad y transparencia en la selección del cachorro ideal para ti. Al elegirnos, tienes la tranquilidad de adquirir un compañero auténtico, ideal para familias y criadores que buscan calidad.'
    },
    {
      id: 'asesoria',
      title: 'Asesoría Personalizada y Postventa',
      emoji: '👥',
      content: 'Tu relación con nosotros no termina al llevar tu cachorro a casa. En Criadero King Dog, creemos en el acompañamiento continuo para garantizar su bienestar. Nuestros servicios incluyen: Asesoría en cuidados básicos y alimentación Respuesta rápida a cualquier inquietud relacionada con la adaptación del cachorro. Consejos personalizados para garantizar un desarrollo saludable. Estamos contigo en cada etapa, porque tu tranquilidad es nuestra prioridad.'
    },
    {
      id: 'carnet',
      title: 'Carnet de Vacunación Incluido',
      emoji: '📋',
      content: 'La transparencia es clave en nuestro servicio. Al recibir tu cachorro, te entregamos un carnet de vacunación detallado, que incluye: Fechas de vacunación específicas. Registros de desparasitaciones realizadas. Recomendaciones para futuras visitas veterinarias. Este documento te permite mantener un control exacto de la salud de tu nuevo compañero.'
    },
    {
      id: 'kit',
      title: 'Kit Inicial para Tu Cachorro',
      emoji: '🎁',
      content: 'Sabemos que el inicio es crucial para un cachorro. Por eso, cada uno se entrega con un kit inicial que incluye todo lo necesario para facilitar su adaptación. El kit contiene: Alimento para sus primeros días. Cobija para mayor confort. Collar ajustable para su seguridad. Depósito de alimentos práctico y duradero. Este detalle refleja nuestro compromiso con su bienestar desde el primer momento.'
    }
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slideUp relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decoraciones */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0b6059]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4a017]/10 rounded-full blur-3xl -z-10"></div>

        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#0b6059] via-[#0d7a6f] to-[#0b6059] text-white p-8 flex justify-between items-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">🐾</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-['Baloo_Thambi_2']">Garantías de Salud y Pureza</h2>
            </div>
            <p className="text-white/80 text-lg ml-14">Conoce nuestros servicios exclusivos</p>
          </div>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white hover:text-[#0b6059] transition-all duration-300 rounded-full p-3 hover:rotate-90 transform hover:scale-110"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Left Side */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#0b6059] to-[#083d3a] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <h3 className="text-3xl font-extrabold mb-4 font-['Baloo_Thambi_2'] relative z-10">
                  Garantías de Salud y Pureza de Raza en King Dog
                </h3>
                <div className="h-1.5 w-24 bg-gradient-to-r from-[#d4a017] to-[#f4c542] rounded-full mb-6"></div>
                <p className="text-white/90 text-lg leading-relaxed relative z-10">
                  En Criadero King Dog, hemos diseñado cada aspecto de nuestro servicio para garantizar una experiencia única y satisfactoria. Somos más que un criadero; somos tu mejor opción en la venta de cachorros de raza pura en Colombia.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#d4a017] to-[#c49115] text-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <p className="font-bold text-xl flex items-center gap-3">
                  <span className="text-3xl">✨</span> 
                  Descubre los pilares que nos distinguen
                </p>
              </div>
            </div>

            {/* Right Side - Accordion */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-2 bg-gradient-to-b from-[#d4a017] to-[#c49115] rounded-full"></div>
                <h4 className="text-4xl font-extrabold text-[#0b6059] font-['Baloo_Thambi_2']">Servicios</h4>
              </div>
              
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                      openAccordion === service.id 
                        ? 'shadow-2xl shadow-[#0b6059]/20 ring-2 ring-[#d4a017]' 
                        : 'shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(service.id)}
                      className={`w-full flex items-center justify-between px-6 py-5 transition-all duration-300 ${
                        openAccordion === service.id
                          ? 'bg-gradient-to-r from-[#0b6059] to-[#0d7a6f] text-white'
                          : 'bg-white hover:bg-[#0b6059]/5 text-gray-800'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-4xl transition-all duration-300 ${
                          openAccordion === service.id ? 'scale-125 animate-bounce' : ''
                        }`}>
                          {service.emoji}
                        </span>
                        <span className="font-bold text-left text-lg font-['Baloo_Thambi_2']">
                          {service.title}
                        </span>
                      </div>
                      <div className={`p-2 rounded-full transition-all duration-300 ${
                        openAccordion === service.id 
                          ? 'bg-white/20 rotate-180' 
                          : 'bg-[#0b6059]/10'
                      }`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>
                    
                    {openAccordion === service.id && (
                      <div className="px-6 py-6 bg-gradient-to-br from-[#0b6059]/5 to-white border-t-4 border-[#d4a017] animate-slideDown">
                        <p className="text-gray-700 leading-relaxed text-base">
                          {service.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(50px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes slideDown { from { opacity: 0; max-height: 0; } to { opacity: 1; max-height: 500px; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-slideDown { animation: slideDown 0.4s ease-out; }
      `}</style>
    </div>
  );
};

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAccordionGlobal, setOpenAccordionGlobal] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    { image: '/src/assets/elegir/asesoria personalizada y postventa.png', title: 'Asesoría Personalizada y Postventa', serviceId: 'asesoria' },
    { image: '/src/assets/elegir/carnet de vacunacion incluido.png', title: 'Carnet de Vacunación Incluido', serviceId: 'carnet' },
    { image: '/src/assets/elegir/kit inicial para tu cachorro.png', title: 'Kit Inicial para Tu Cachorro', serviceId: 'kit' },
    { image: '/src/assets/elegir/cachorros con certificado de salud.png', title: 'Cachorros con Certificado de Salud', serviceId: 'certificado' },
    { image: '/src/assets/elegir/garantia de pureza de por vida.png', title: 'Garantía de Pureza de Por Vida', serviceId: 'pureza' }
  ];

  const itemsToShow = isMobile ? 1 : 3;
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % features.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  const handleConoceMas = (serviceId) => { setOpenAccordionGlobal(serviceId); setIsModalOpen(true); };
  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) visible.push(features[(currentIndex + i) % features.length]);
    return visible;
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white font-['Baloo_Thambi_2'] relative overflow-hidden">
        
        {/* Decoraciones */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#0b6059]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#d4a017]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b6059] mb-6">
              ¿Por qué elegir el criadero <span className="text-[#d4a017]">King Dog</span>?
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent to-[#0b6059] rounded-full"></div>
              <span className="text-[#d4a017] text-3xl">👑</span>
              <div className="h-1 w-24 bg-gradient-to-l from-transparent to-[#0b6059] rounded-full"></div>
            </div>
            <p className="text-gray-600 max-w-4xl mx-auto text-xl leading-relaxed">
              En Criadero King Dog, nos destacamos por ofrecer un servicio exclusivo y de alta calidad, donde la salud, la pureza y el bienestar de nuestros cachorros son nuestra prioridad.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative px-4 md:px-12 lg:px-20">
            
            {/* Flechas */}
            <button onClick={prevSlide} className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#d4a017] to-[#c49115] hover:from-[#c49115] hover:to-[#b38514] text-white rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-x-1">
              <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
            </button>

            {/* Cards */}
            <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
              {getVisibleItems().map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-3xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-2 border-transparent hover:border-[#0b6059]/20 relative overflow-hidden">
                    
                    {/* Efecto decorativo */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0b6059]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                    
                    {/* Imagen */}
                    <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl mb-6 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b6059]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img src={feature.image} alt={feature.title} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    
                    {/* Título */}
                    <h3 className="text-xl font-bold text-[#0b6059] text-center mb-5 group-hover:text-[#083d3a] transition-colors">
                      {feature.title}
                    </h3>
                    
                    {/* Botón */}
                    <div className="flex justify-center">
                      <button onClick={() => handleConoceMas(feature.serviceId)} className="relative bg-gradient-to-r from-[#0b6059] to-[#0d7a6f] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden group/btn">
                        <span className="relative z-10">CONOCE MÁS</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#d4a017] to-[#c49115] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={nextSlide} className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#d4a017] to-[#c49115] hover:from-[#c49115] hover:to-[#b38514] text-white rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 hover:scale-110 hover:translate-x-1">
              <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {features.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-10 bg-gradient-to-r from-[#0b6059] to-[#0d7a6f]' : 'w-3 bg-gray-300 hover:bg-[#d4a017]'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <GuaranteesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} openAccordion={openAccordionGlobal} setOpenAccordion={setOpenAccordionGlobal} />
    </>
  );
};

export default FeaturesSection;