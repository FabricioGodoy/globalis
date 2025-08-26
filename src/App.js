import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import PackagesSection from './components/PackagesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
 
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20"> {/* Add padding-top to account for fixed navbar */}
        <AboutSection />
        <PackagesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}