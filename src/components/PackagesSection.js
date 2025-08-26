import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PackageCard from './PackageCard';
import PackageModal from './PackageModal';
import { travelPackages } from '../mock/packages';
 
const PackagesSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
 
  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
  };
 
  const handleCloseModal = () => {
    setSelectedPackage(null);
  };
 
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-800 mb-12"
        >
          Nuestros <span className="text-blue-600">Paquetes</span>
        </motion.h2>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onSelectPackage={handleSelectPackage} />
          ))}
        </div>
      </div>
 
      <AnimatePresence>
        {selectedPackage && (
          <PackageModal pkg={selectedPackage} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
};
 
export default PackagesSection;