import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
/* import { Logo } from '../public/logos/Logo_textAzul_logoAzul_fondoBlanco.jpg' */
 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const navItems = [
    { name: 'Nosotros', href: '#about' },
    { name: 'Paquetes', href: '#packages' },
    { name: 'Contacto', href: '#contact' },
  ];
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu on item click
    }
  };
 
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          {/* Cambiamos la ruta de la imagen para que apunte a la carpeta public directamente */}
          <img src={`${process.env.PUBLIC_URL}/img/logos/png/PNGlogoNaranja_textNaranja.png`} alt="Globalis Loooooogo" className="logoNavBar" /> 
          <span className="text-2xl font-bold text-gray-800">Globalis</span>
        </a>
 
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href.substring(1))}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
 
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
 
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href.substring(1))}
                  className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2 w-full text-center"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
 
export default Navbar;