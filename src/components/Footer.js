import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Paleta
const COLORS = {
  midnight: "#0d112d",
  navy: "#002155",
  gold: "#d2983a",
  sand: "#ede5da",
};

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, when: "beforeChildren", staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const Social = ({ href, label, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border text-[#ede5da]/80 border-white/10 hover:text-[#d2983a] hover:border-[#d2983a]/60 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#d2983a]/60"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.94 }}
    >
      {children}
    </a>
  );

  return (
    <footer
      className="border-t [border-top-color:rgba(210,152,58,0.35)] bg-gradient-to-b from-[#0d112d] to-[#002155] text-[#ede5da]"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 py-12 text-center">
        {/* Marca + descripción */}
        <div variants={itemVariants} className="mb-8 flex flex-col items-center">
          <img
            src={`${process.env.PUBLIC_URL}/img/logos/png/PNGlogoNaranja_textNaranja.png`}
            alt="Globalis Logo"
            className="logoFooter mb-4 select-none"
          />
          <h3 className="sr-only">Globalis</h3>
          <p className="text-[#ede5da]/80 max-w-2xl leading-relaxed">
            Tu pasaporte a las aventuras más increíbles. En Globalis convertimos tus sueños de viaje en realidad, con experiencias únicas y memorables alrededor del mundo.
          </p>
        </div>

        {/* Iconos sociales */}
        <div variants={itemVariants} className="flex justify-center gap-4 mb-8">
          <Social href="https://facebook.com" label="Facebook">
            <FaFacebookF size={18} />
          </Social>
          <Social href="https://twitter.com" label="Twitter">
            <FaTwitter size={18} />
          </Social>
          <Social href="https://instagram.com" label="Instagram">
            <FaInstagram size={18} />
          </Social>
          <Social href="https://linkedin.com" label="LinkedIn">
            <FaLinkedinIn size={18} />
          </Social>
        </div>

        {/* Divider dorado */}
        <div variants={itemVariants} className="flex justify-center mb-4">
          <span className="h-[2px] w-24 bg-[#d2983a] rounded-full opacity-80" />
        </div>

        {/* Copyright */}
        <p variants={itemVariants} className="text-sm text-[#ede5da]/70">
          &copy; {new Date().getFullYear()} Globalis. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
