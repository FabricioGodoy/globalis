import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign } from 'lucide-react';
 
const PackageCard = ({ pkg, onSelectPackage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      onClick={() => onSelectPackage(pkg)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-lg">{pkg.name}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">{pkg.description}</p>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin size={16} className="mr-2 text-blue-500" />
          <span>{pkg.destination}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Clock size={16} className="mr-2 text-purple-500" />
          <span>{pkg.duration}</span>
        </div>
        <div className="flex items-center text-gray-800 text-lg font-bold">
          <DollarSign size={20} className="mr-2 text-green-500" />
          <span>Desde ${pkg.price}</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
        >
          Ver Detalles
        </motion.button>
      </div>
    </motion.div>
  );
};
 
export default PackageCard;