import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from "../assets/img/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#0b6059]/95 backdrop-blur-md shadow-2xl shadow-[#0b6059]/30' 
        : 'bg-gradient-to-r from-[#0b6059] via-[#0d7a6f] to-[#0b6059] shadow-lg'
    }`}>
      
      {/* Línea decorativa dorada superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4a017] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* NAV CONTENT */}
        <div className={`flex items-center justify-between gap-x-6 transition-all duration-500 ${scrolled ? 'h-16' : 'h-28'}`}>

          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center group">
            <a href="/" className="relative">
              <div className={`absolute inset-0 bg-[#d4a017] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${scrolled ? 'scale-75' : 'scale-100'}`}></div>
              <img 
                src={logo} 
                alt="Criadero King Dog" 
                className={`w-auto transition-all duration-500 relative z-10 drop-shadow-lg group-hover:scale-105 ${scrolled ? 'h-12' : 'h-24'}`}
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {[
              { href: "/", label: "Inicio" },
              { href: "/about", label: "Acerca de nosotros" },
              { href: "/faq", label: "Preguntas frecuentes" }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="relative text-white text-lg font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:bg-white/10 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#d4a017] rounded-full group-hover:w-3/4 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            {[
              { href: "https://www.tiktok.com/@criadero_kingdog?_t=8sHSJ01SHeY&_r=1", icon: FaTiktok },
              { href: "https://www.facebook.com/people/King-Dog/100054907174024/?mibextid=wwXIfr&rdid=DlAL1bXmJhefOqjd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F189WLAMMSu%2F%3Fmibextid%3DwwXIfr", icon: FaFacebook },
              { href: "https://www.instagram.com/kingdog_col/", icon: FaInstagram }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-[#d4a017] hover:border-[#d4a017] transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
            
            {[
              { href: "/", label: "Inicio", icon: "🏠" },
              { href: "/about", label: "Acerca de nosotros", icon: "📖" },
              { href: "/faq", label: "Preguntas frecuentes", icon: "❓" }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="flex items-center gap-3 text-white text-lg font-semibold hover:bg-white/10 px-4 py-3 rounded-xl transition-all duration-300 hover:translate-x-2" 
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </a>
            ))}

            {/* Social Icons - Mobile */}
            <div className="flex items-center justify-center space-x-4 pt-6 mt-4 border-t border-white/20">
              {[
                { href: "https://www.tiktok.com/@criadero_kingdog?_t=8sHSJ01SHeY&_r=1", icon: FaTiktok },
                { href: "https://www.facebook.com/people/King-Dog/100054907174024/?mibextid=wwXIfr&rdid=DlAL1bXmJhefOqjd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F189WLAMMSu%2F%3Fmibextid%3DwwXIfr", icon: FaFacebook },
                { href: "https://www.instagram.com/kingdog_col/", icon: FaInstagram }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full border-2 border-[#d4a017] flex items-center justify-center text-white hover:bg-[#d4a017] transition-all duration-300"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>

            {/* CTA WhatsApp Mobile */}
            <a 
              href="https://wa.me/573217543836" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold py-3 px-6 rounded-full mt-4 hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              ¡Contáctanos!
            </a>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;