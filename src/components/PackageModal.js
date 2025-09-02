import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X, MapPin, Clock, /* DollarSign, */ CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_PHONE } from "../config";

// Paleta
const COLORS = {
  midnight: "#0d112d",
  navy: "#002155",
  gold: "#d2983a",
  sand: "#ede5da",
};

const buildWhatsAppLink = (message = "", phone) => {
  // phone: en formato internacional sin + ni 0 ni 15. Ej AR: 54911XXXXXXXX
  const digits = (phone || "").replace(/\D/g, "");
  const base = digits ? `https://wa.me/${digits}` : "https://wa.me/";
  const params = new URLSearchParams({ text: message });
  return `${base}?${params.toString()}`;
};

const PackageModal = ({ pkg, onClose }) => {
  if (!pkg) return null;

  const whatsappLink = buildWhatsAppLink(
    pkg.whatsappMessage || `Hola! Me interesa el paquete: ${pkg.name}`,
    pkg.whatsappPhone || WHATSAPP_PHONE
  );

  // Cerrar con ESC y bloquear scroll del body
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002155]/30 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="package-modal-title"
    >
      <motion.div
        initial={{ y: 36, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 36, opacity: 0, scale: 0.98 }}
        transition={{ type: "spring", damping: 20, stiffness: 260 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#002155]/15 bg-gradient-to-b from-[#ede5da] to-white text-[#0d112d] shadow-[0_24px_80px_rgba(0,33,85,0.20)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* filete superior dorado */}
        <div
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{
            background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.navy})`,
            opacity: 0.9,
          }}
        />

        {/* botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/70 text-[#0d112d] border border-[#002155]/10 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#d2983a]/40"
        >
          <X size={20} />
        </button>

        {/* Hero */}
        <div className="relative h-60 md:h-80 overflow-hidden rounded-t-3xl">
          <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
          {/* overlay claro para que no se oscurezca el hero */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, rgba(237,229,218,0.92), rgba(237,229,218,0.35) 45%, transparent 75%)`,
            }}
          />
          <h2
            id="package-modal-title"
            className="absolute bottom-6 left-6 right-6 text-3xl md:text-4xl font-extrabold text-[#002155] drop-shadow-sm"
          >
            {pkg.name}
          </h2>
        </div>

        {/* Contenido */}
        <div className="p-6 md:p-8">
          <p className="text-[#0d112d]/80 text-lg mb-6 leading-relaxed">
            {pkg.longDescription}
          </p>

          {/* Chips info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="inline-flex items-center gap-3 text-sm bg-white/80 border border-[#002155]/10 px-4 py-3 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
              <MapPin size={18} color={COLORS.gold} />
              <div className="font-medium text-[#002155]">
                <span className="opacity-70">Destino:</span>{" "}
                <span className="text-[#0d112d]">{pkg.destination}</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-3 text-sm bg-white/80 border border-[#002155]/10 px-4 py-3 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
              <Clock size={18} color={COLORS.gold} />
              <div className="font-medium text-[#002155]">
                <span className="opacity-70">Duración:</span>{" "}
                <span className="text-[#0d112d]">{pkg.duration}</span>
              </div>
            </div>
            {/**
            <div className="inline-flex items-center gap-3 text-sm bg-white/80 border border-[#002155]/10 px-4 py-3 rounded-2xl">
              <DollarSign size={18} color={COLORS.gold} />
              <div className="font-medium text-[#002155]">
                <span className="opacity-70">Precio:</span>{" "}
                <span className="text-[#0d112d]">Desde ${pkg.price}</span>
              </div>
            </div>
            */}
          </div>

          <h3 className="text-xl font-bold text-[#002155] mb-3">Incluye</h3>
          <ul className="list-none space-y-2 mb-8">
            {pkg.includes.map((item, index) => (
              <li key={index} className="flex items-start text-[#0d112d]/85">
                <CheckCircle
                  size={18}
                  color={COLORS.gold}
                  className="mr-3 mt-0.5 flex-shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold text-[#0d112d] bg-[#d2983a] hover:brightness-95 active:brightness-90 focus:outline-none focus:ring-2 focus:ring-[#d2983a]/40 shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
            >
              <FaWhatsapp size={20} className="mr-2" />
              Consultar por WhatsApp
            </motion.a>

            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold text-[#002155] bg-white border border-[#002155]/20 hover:border-[#d2983a]/60 hover:text-[#0d112d] focus:outline-none focus:ring-2 focus:ring-[#d2983a]/30"
            >
              Cerrar
            </button>
          </div>
        </div>

        {/* acentos suaves en el fondo (decorativos) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(closest-side, ${COLORS.gold}, transparent)` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ background: `radial-gradient(closest-side, ${COLORS.navy}, transparent)` }}
        />
      </motion.div>
    </motion.div>
  );
};

export default PackageModal;
