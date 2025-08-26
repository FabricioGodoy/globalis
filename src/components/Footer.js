import React from 'react';
import { motion } from 'framer-motion';
// Importaciones específicas de react-icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 
 
const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Duración ajustada
        when: "beforeChildren",
        staggerChildren: 0.15 // Stagger ajustado
      }
    },
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }, // Duración ajustada
  };
 
  return (
    <motion.footer
      className="bg-gray-800 text-white py-12"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Globalis</h3>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Tu pasaporte a las aventuras más increíbles. En Globalis, convertimos tus sueños de viaje en realidad, ofreciéndote experiencias únicas y memorables alrededor del mundo.
          </p>
        </motion.div>
 
        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-8">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebookF size={28} />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter size={28} />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram size={28} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedinIn size={28} />
          </motion.a>
        </motion.div>
 
        <motion.p variants={itemVariants} className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Globalis. Todos los derechos reservados.
        </motion.p>
      </div>
    </motion.footer>
  );
};
 
export default Footer;