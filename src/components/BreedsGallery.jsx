import React, { useState } from "react";
import BreedDetailModal from "./BreedDetailModal";

// RAZAS GRANDES
import doberman from "../assets/razas grandes/doberman.webp";
import golden from "../assets/razas grandes/Golden retriever.webp";
import husky from "../assets/razas grandes/Husky siberiano.webp";
import pastorAleman from "../assets/razas grandes/pastor aleman.webp";
import pastorBelga from "../assets/razas grandes/Pastor belga.webp";
import rottweiler from "../assets/razas grandes/rottweiler.webp";

// RAZAS MEDIANAS
import beagle from "../assets/razas medianas/beagle.webp";
import border from "../assets/razas medianas/border collie.webp";
import bulldogFrances from "../assets/razas medianas/bulldog frances.webp";
import bulldogIngles from "../assets/razas medianas/Bulldog ingles.webp";
import cocker from "../assets/razas medianas/cocker spaniel.webp";
import pastorGanadero from "../assets/razas medianas/Pastor ganadero australiano.webp";

// RAZAS PEQUEÑAS
import jack from "../assets/razas pequeñas/Jack Russell.webp";
import pomerania from "../assets/razas pequeñas/pomerania.webp";
import shih from "../assets/razas pequeñas/shih tzu.webp";
import teckel from "../assets/razas pequeñas/teckel.webp";
import yorkshire from "../assets/razas pequeñas/yorkshire.webp";
import pinscher from "../assets/razas pequeñas/pinscher.webp";

const BreedsGallery = () => {
  const categories = {
    pequeñas: [
      { name: "Pomerania", image: pomerania },
      { name: "Jack Russell", image: jack },
      { name: "Shih Tzu", image: shih },
      { name: "Teckel", image: teckel },
      { name: "Yorkshire", image: yorkshire },
      { name: "Pinscher", image: pinscher },
    ],
    medianas: [
      { name: "Beagle", image: beagle },
      { name: "Border Collie", image: border },
      { name: "Bulldog Francés", image: bulldogFrances },
      { name: "Bulldog Inglés", image: bulldogIngles },
      { name: "Cocker Spaniel", image: cocker },
      { name: "Pastor Ganadero Australiano", image: pastorGanadero },
    ],
    grandes: [
      { name: "Doberman", image: doberman },
      { name: "Golden Retriever", image: golden },
      { name: "Husky Siberiano", image: husky },
      { name: "Pastor Alemán", image: pastorAleman },
      { name: "Pastor Belga", image: pastorBelga },
      { name: "Rottweiler", image: rottweiler },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("pequeñas");
  const [selectedBreed, setSelectedBreed] = useState(null);

  const handleBreedClick = (breedName) => {
    setSelectedBreed(breedName);
  };

  const handleCloseModal = () => {
    setSelectedBreed(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 font-['Baloo_Thambi_2'] relative overflow-hidden">
      
      {/* Decoraciones de fondo */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#0b6059]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0b6059]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b6059] mb-4 drop-shadow-sm">
            BIENVENIDOS A CRIADERO KING DOG
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#0b6059] rounded-full"></div>
            <span className="text-[#0b6059] text-2xl">🐾</span>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#0b6059] rounded-full"></div>
          </div>
        </div>

        {/* BOTONES */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {["pequeñas", "medianas", "grandes"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-4 rounded-full font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg
              ${
                activeCategory === cat
                  ? "bg-[#0b6059] text-white shadow-[#0b6059]/40 shadow-xl"
                  : "bg-white text-[#0b6059] border-2 border-[#0b6059] hover:bg-[#0b6059] hover:text-white"
              }`}
            >
              🐕 RAZAS {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* GALERÍA */}
        <div className="grid md:grid-cols-3 gap-10">
          {categories[activeCategory].map((breed, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              {/* Imagen circular con borde y efectos */}
              <div className="relative w-64 h-64 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b6059] to-[#0a4f4a] rounded-full p-1 shadow-2xl shadow-[#0b6059]/30 group-hover:shadow-[#0b6059]/50 transition-shadow duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src={breed.image}
                      alt={breed.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                {/* Efecto de brillo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              {/* Nombre */}
              <h3 className="text-2xl font-bold text-[#0b6059] mb-4 group-hover:text-[#0a4f4a] transition-colors">
                {breed.name}
              </h3>
              
              {/* Botón */}
              <button 
                onClick={() => handleBreedClick(breed.name)}
                className="bg-gradient-to-r from-[#0b6059] to-[#0a4f4a] hover:from-[#0a4f4a] hover:to-[#083d3a] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                MÁS INFORMACIÓN
              </button>
            </div>
          ))}
        </div>

        {/* BOTÓN DE WHATSAPP */}
        <div className="flex justify-center mt-16">
          <a
            href="https://wa.me/573217543836"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#0b6059] text-white text-xl font-bold px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <svg className="w-8 h-8 fill-white group-hover:animate-pulse" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            ¿No Encuentras tu raza ideal? ¡Contáctanos!
          </a>
        </div>
      </div>

      {/* MODAL DE DETALLE */}
      {selectedBreed && (
        <BreedDetailModal 
          breedName={selectedBreed}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default BreedsGallery;