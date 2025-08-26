import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Heart } from 'lucide-react';
 
const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Duración ajustada
        when: "beforeChildren",
        staggerChildren: 0.2 // Stagger ajustado
      }
    },
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Y ajustado
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }, // Duración ajustada
  };
 
  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-extrabold text-center text-gray-800 mb-12"
        >
          Sobre <span className="text-blue-600">Globalis</span>

        </motion.h2>
        
 
        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-[72ch] text-gray-700 text-lg md:text-xl leading-7 md:leading-8 mb-12 text-center px-4 md:px-0 space-y-6">

          <span>
            En GLOBALIS Viajes creemos que cada viaje es mucho más que un destino: es un sueño por cumplir. Nuestra razón de ser es acompañar a cada persona en recorrido, brindando atención personalizada y trabajando en conjunto para diseñar experiencias que superen expectativas y hagan realidad lo que tanto desean.
          </span>
          
          <br/>
          <br/>
          <span>
            Nuestra prioridad es generar confianza, tranquilidad y seguridad, para que cada experiencia sea única e irrepetible. Con una identidad renovada, nos proyectamos como una agencia moderna, cercana y dinámica, pero siempre con el mismo compromiso: transformar cada viaje en un recuerdo inolvidable.
          </span>
          <br/>
          <br/>
          <span>
            Sigamos soñando juntos. Sigamos viajando.
          </span>
        </motion.p>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-100"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 10 }} // Delay y stiffness ajustados
              className="w-16 h-16 text-blue-500 mx-auto mb-6 flex items-center justify-center"
            >
              <Globe className="w-full h-full" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Destinos Globales</h3>
            <p className="text-gray-600">Explora el mundo con nuestra amplia selección de destinos, desde selvas exóticas hasta playas paradisíacas.</p>
          </motion.div>
 
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-100"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 150, damping: 10 }} // Delay y stiffness ajustados
              className="w-16 h-16 text-purple-500 mx-auto mb-6 flex items-center justify-center"
            >
              <Users className="w-full h-full" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Asesoramiento Experto</h3>
            <p className="text-gray-600">Nuestro equipo de expertos te guiará en cada paso, asegurando que tu viaje sea perfecto y sin preocupaciones.</p>
          </motion.div>
 
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-100"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 150, damping: 10 }} // Delay y stiffness ajustados
              className="w-16 h-16 text-pink-500 mx-auto mb-6 flex items-center justify-center"
            >
              <Heart className="w-full h-full" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Experiencias Únicas</h3>
            <p className="text-gray-600">Diseñamos viajes personalizados que se adaptan a tus sueños, creando recuerdos que durarán toda la vida.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
 
export default AboutSection;