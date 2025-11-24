import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] text-white py-16 font-['Baloo_Thambi_2'] relative overflow-hidden">
      
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0b6059] to-transparent"></div>
      
      {/* Decoraciones de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0b6059]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4a017]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-8 relative z-10">

        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* LOGO */}
          <div className="flex flex-col items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0b6059] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="/src/assets/img/logo.png"
                alt="King Dog Logo"
                className="h-48 w-auto object-contain relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-center">
              <p className="text-[#0b6059] font-extrabold text-xl tracking-wider">CRIADERO</p>
              <p className="text-[#d4a017] font-extrabold text-2xl tracking-widest">KING DOG</p>
            </div>
          </div>

          {/* CONTACTO */}
          <div className="flex flex-col items-center gap-6">
            
            <h3 className="text-2xl font-extrabold mb-2">
              <span className="text-white">CONTÁC</span><span className="text-[#d4a017]">TANOS</span>
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-[#0b6059] to-[#d4a017] rounded-full mb-2"></div>

            {/* Teléfono */}
            <a href="tel:3217543836" className="flex items-center gap-4 group cursor-pointer hover:translate-x-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[#0b6059]/20 border-2 border-[#0b6059] flex items-center justify-center group-hover:bg-[#0b6059] group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 fill-[#0b6059] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-white group-hover:text-[#0b6059] transition-colors">321 754 3836</span>
            </a>

            {/* Correo */}
            <a href="mailto:Criaderokingdog@gmail.com" className="flex items-center gap-4 group cursor-pointer hover:translate-x-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[#0b6059]/20 border-2 border-[#0b6059] flex items-center justify-center group-hover:bg-[#0b6059] group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 fill-[#0b6059] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span className="text-lg font-semibold text-white group-hover:text-[#0b6059] transition-colors">Criaderokingdog@gmail.com</span>
            </a>

            {/* Ubicación */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#d4a017]/20 border-2 border-[#d4a017] flex items-center justify-center group-hover:bg-[#d4a017] group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 fill-[#d4a017] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-white group-hover:text-[#d4a017] transition-colors">Oriente Medellín</span>
            </div>

          </div>

          {/* REDES SOCIALES */}
          <div className="flex flex-col items-center gap-6">

            <h3 className="text-2xl font-extrabold">
              <span className="text-white">SÍGUE</span><span className="text-[#0b6059]">NOS</span>
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-[#d4a017] to-[#0b6059] rounded-full"></div>

            <div className="flex gap-5">

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@criadero_kingdog?_t=8sHSJ01SHeY&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-3 border-[#0b6059] flex items-center justify-center bg-[#0b6059]/10 hover:bg-[#0b6059] transition-all duration-300 group hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-[#0b6059]/30"
              >
                <svg className="w-7 h-7 fill-[#0b6059] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/King-Dog/100054907174024/?mibextid=wwXIfr&rdid=DlAL1bXmJhefOqjd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F189WLAMMSu%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-3 border-[#0b6059] flex items-center justify-center bg-[#0b6059]/10 hover:bg-[#0b6059] transition-all duration-300 group hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-[#0b6059]/30"
              >
                <svg className="w-7 h-7 fill-[#0b6059] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kingdog_col/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-3 border-[#d4a017] flex items-center justify-center bg-[#d4a017]/10 hover:bg-[#d4a017] transition-all duration-300 group hover:scale-110 hover:-rotate-6 hover:shadow-lg hover:shadow-[#d4a017]/30"
              >
                <svg
                  className="w-7 h-7 stroke-[#d4a017] group-hover:stroke-white transition-colors"
                  fill="none"
                  strokeWidth="2.3"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17" cy="7" r="1.5"></circle>
                </svg>
              </a>

            </div>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/573217543836" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#0b6059] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg mt-2"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>

          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 <span className="text-[#0b6059] font-semibold">Criadero King Dog</span>. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-2">
            Hecho con <span className="text-red-500">❤️</span> en Colombia 🇨🇴
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;