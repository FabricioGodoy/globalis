import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock /*, DollarSign*/ } from "lucide-react";

// Paleta
const COLORS = {
  midnight: "#0d112d",
  navy: "#002155",
  gold: "#d2983a",
  sand: "#ede5da",
};

const PackageCard = ({ pkg, onSelectPackage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
      onClick={() => onSelectPackage(pkg)}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-b from-[#002155]/95 to-[#0d112d]/95 text-[#ede5da] border border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* filete superior dorado siguiendo el radio */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[#d2983a]" />

      {/* Imagen */}
      <div className="relative h-52 md:h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="h-full w-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* degradé para lectura del título */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d112d]/80 via-[#0d112d]/25 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-extrabold drop-shadow-xl">
          {pkg.name}
        </h3>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <p className="text-[#ede5da]/80 mb-4 line-clamp-3">{pkg.description}</p>

        <div className="flex flex-col gap-2 mb-4">
          <div className="inline-flex items-center gap-2 text-sm text-[#ede5da]/80 bg-white/5 border border-white/10 px-3 py-2 rounded-xl w-fit">
            <MapPin size={16} color={COLORS.gold} />
            <span>{pkg.destination}</span>
          </div>
          <div className="inline-flex items-center gap-2 text-sm text-[#ede5da]/80 bg-white/5 border border-white/10 px-3 py-2 rounded-xl w-fit">
            <Clock size={16} color={COLORS.gold} />
            <span>{pkg.duration}</span>
          </div>
        </div>

        {/* Precio (si se usa) */}
        {false && (
          <div className="flex items-center text-lg font-bold text-[#ede5da]">
            {/* <DollarSign size={20} color={COLORS.gold} className="mr-2" /> */}
            <span>Desde ${'{'}pkg.price{'}'}</span>
          </div>
        )}

        {/* CTA principal: Ver Detalles (abre modal) */}
        <motion.button
          type="button"
          aria-label={`Ver detalles de ${pkg.name}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.985 }}
          onClick={(e) => {
            e.stopPropagation();
            onSelectPackage(pkg);
          }}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-[#0d112d] bg-[#d2983a] hover:bg-[#c68a2f] active:bg-[#b87f2c] focus:outline-none focus:ring-2 focus:ring-[#d2983a]/50 shadow-sm hover:shadow"
        >
          Ver Detalles
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PackageCard;
