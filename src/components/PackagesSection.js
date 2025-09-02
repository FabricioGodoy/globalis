import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PackageCard from "./PackageCard";
import PackageModal from "./PackageModal";
import { travelPackages } from "../mock/packages";

// Paleta consistente
const COLORS = {
  midnight: "#0d112d",
  navy: "#002155",
  gold: "#d2983a",
  sand: "#ede5da",
};

const PackagesSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSelectPackage = (pkg) => setSelectedPackage(pkg);
  const handleCloseModal = () => setSelectedPackage(null);

  return (
    <motion.section
      id="packages"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-[#ede5da] via-white to-[#002155]/5"
    >
      {/* Filetes dorados sutiles */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#d2983a]/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#d2983a]/30" />

      {/* manchas de luz */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#002155]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0d112d]/10 blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.35 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[#0d112d] mb-6"
        >
          Nuestros {" "}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl text-[#d2983a]">
            Paquetes
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center mb-12"
        >
          <span className="h-[2px] w-24 bg-[#d2983a] rounded-full" />
        </motion.div>

        {/* Grid de paquetes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {travelPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
            >
              <PackageCard pkg={pkg} onSelectPackage={handleSelectPackage} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <PackageModal pkg={selectedPackage} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default PackagesSection;
