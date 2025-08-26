import React from 'react';
import { motion } from 'framer-motion';
// Asegúrate de que todas las importaciones de lucide-react estén correctas
import { X, MapPin, Clock, DollarSign, CheckCircle, Whatsapp } from 'lucide-react'; 
 
const PackageModal = ({ pkg, onClose }) => {
  if (!pkg) return null;
 
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(pkg.whatsappMessage)}`;
 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors duration-200"
        >
          <X size={24} />
        </button>
 
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
          <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <h2 className="absolute bottom-6 left-6 text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
            {pkg.name}
          </h2>
        </div>
 
        <div className="p-6 md:p-8">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">{pkg.longDescription}</p>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <MapPin size={20} className="mr-3 text-blue-500" />
              <span className="font-semibold">Destino:</span> {pkg.destination}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={20} className="mr-3 text-purple-500" />
              <span className="font-semibold">Duración:</span> {pkg.duration}
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign size={20} className="mr-3 text-green-500" />
              <span className="font-semibold">Precio:</span> Desde ${pkg.price}
            </div>
          </div>
 
          <h3 className="text-xl font-bold text-gray-800 mb-3">Incluye:</h3>
          <ul className="list-none space-y-2 mb-8">
            {pkg.includes.map((item, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <CheckCircle size={18} className="mr-3 text-green-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
 
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center bg-green-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Whatsapp size={24} className="mr-3" />
            Consultar por WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};
 
export default PackageModal;