import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué razas de cachorros están disponibles en King Dog?",
      answer: "En King Dog, contamos con una amplia selección de razas, desde pequeñas como Pomerania, Yorkshire Terrier y Shih Tzu, hasta medianas y grandes como Golden Retriever, Bulldog Francés, Labrador y Husky Siberiano",
      icon: "🐕"
    },
    {
      question: "¿Los cachorros tienen certificado de pureza de raza?",
      answer: "Sí, todos los cachorros que ofrecemos cuentan con una garantía de pureza de raza de por vida, respaldada por nuestro criadero. Esto asegura que provienen de linajes auténticos, posicionándonos como líderes en la venta de perros en Colombia.",
      icon: "📜"
    },
    {
      question: "¿Qué pasa si mi cachorro se enferma después de la compra?",
      answer: "Ofrecemos una garantía de salud inicial que cubre cualquier enfermedad preexistente al momento de la entrega.",
      icon: "🏥"
    },
    {
      question: "¿Qué incluye el certificado de salud?",
      answer: "Incluye un historial de vacunación y desparasitación, confirmando que el cachorro está en perfectas condiciones al momento de la entrega.",
      icon: "💉"
    },
    {
      question: "¿Hacen envíos a otras ciudades?",
      answer: "¡Claro que sí! Realizamos envíos seguros a todas las principales ciudades de Colombia, incluyendo: Bogotá, Medellín, Cali, Barranquilla, Bucaramanga, Cartagena, Pereira, Manizales, Ibagué y Cúcuta. Garantizamos que el cachorro llegará en óptimas condiciones a su nuevo hogar.",
      icon: "🚚"
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencias bancarias, pagos en efectivo y pagos contra entrega. Contáctanos para coordinar el método más cómodo para ti.",
      icon: "💳"
    },
    {
      question: "¿Cuánto tiempo tarda la entrega del cachorro?",
      answer: "La entrega toma entre 1 y 2 días hábiles, dependiendo de la ciudad de destino.",
      icon: "⏰"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 font-['Baloo_Thambi_2'] relative overflow-hidden pt-32 md:pt-40">
      
      {/* Decoraciones de fondo */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#0b6059]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#d4a017]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0b6059]/3 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        {/* Título */}
        <div className="text-center mb-16">
          <span className="text-6xl mb-4 block">❓</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b6059] mb-4">
            Preguntas <span className="text-[#d4a017]">Frecuentes</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent to-[#0b6059] rounded-full"></div>
            <span className="text-[#d4a017] text-2xl">🐾</span>
            <div className="h-1 w-24 bg-gradient-to-l from-transparent to-[#0b6059] rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Resolvemos todas tus dudas sobre nuestros cachorros y servicios
          </p>
        </div>

        {/* Contenido FAQ */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto space-y-5">

            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`rounded-2xl transition-all duration-500 ${
                  activeIndex === index 
                    ? 'shadow-2xl shadow-[#0b6059]/20 scale-[1.02]' 
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                
                {/* Botón de pregunta */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full p-5 md:p-6 flex justify-between items-center text-left transition-all duration-300 bg-gradient-to-r from-[#0b6059] to-[#0d7a6f] text-white ${
                    activeIndex === index 
                      ? 'rounded-t-2xl rounded-b-none' 
                      : 'rounded-2xl hover:from-[#094d47] hover:to-[#0b6059]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-3xl transition-transform duration-300 ${
                      activeIndex === index ? 'scale-125 animate-bounce' : ''
                    }`}>
                      {faq.icon}
                    </span>
                    <span className="text-lg md:text-xl font-bold pr-4">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg 
                      className="w-5 h-5 text-white transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Contenido de la respuesta */}
                {activeIndex === index && (
                  <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-t-0 border-[#0b6059]/20 rounded-b-2xl overflow-hidden animate-slideDown">
                    <div className="p-6 md:p-8">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-1 bg-gradient-to-b from-[#d4a017] to-[#0b6059] rounded-full"></div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

          </div>

          {/* CTA al final */}
          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-[#0b6059] to-[#0d7a6f] p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <p className="text-white text-xl md:text-2xl font-bold mb-4 relative z-10">
                ¿Tienes más preguntas? <span className="text-[#d4a017]">¡Contáctanos!</span>
              </p>
              <a 
                href="https://wa.me/573217543836?text=Hola%20Criadero%20King%20Dog%2C%20tengo%20una%20pregunta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#0b6059] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg relative z-10"
              >
                <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}