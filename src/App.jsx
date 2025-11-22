// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes globales
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatButton from "./components/FloatButton";   // ← ¡El botón flotante!

// Páginas
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      {/* Layout principal: min-h-screen + flex col para que el footer siempre quede abajo */}
      <div className="min-h-screen flex flex-col bg-white font-baloo">

        {/* Navbar fija arriba */}
        <Navbar />

        {/* Contenido principal que crece y ocupa el espacio disponible */}
        <main className="flex-1 w-full pb-24 md:pb-20">
          {/* Añadimos padding-bottom para que el botón flotante nunca tape contenido importante */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            {/* Puedes añadir más rutas aquí */}
          </Routes>
        </main>

        {/* Footer siempre pegado abajo */}
        <Footer />

        {/* BOTÓN FLOTANTE (siempre encima de todo) */}
        <FloatButton />
      </div>
    </BrowserRouter>
  );
}