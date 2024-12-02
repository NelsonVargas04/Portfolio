import React, { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

interface Certificate {
  title: string;
  description: {
    es: string;
    en: string;
  };
  image: string;
}

const certificatesData: Certificate[] = [
  {
    title: "Full Stack Web Developer - Henry",
    description: {
      es: "Certificado de desarrollador full-stack con conocimientos avanzados en backend y frontend.",
      en: "Full-stack developer certification with advanced knowledge in backend and frontend.",
    },
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "React Native Specialist - Udemy",
    description: {
      es: "Especialización en desarrollo de aplicaciones móviles con React Native.",
      en: "Specialization in mobile app development with React Native.",
    },
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Advanced JavaScript - Platzi",
    description: {
      es: "Dominio avanzado de JavaScript, incluyendo conceptos como closures y patrones de diseño.",
      en: "Advanced JavaScript proficiency, including concepts like closures and design patterns.",
    },
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const Certificates: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="mb-20">
      {/* Título de la sección */}
      <div className="relative inline-flex items-center gap-4 mb-8 bg-gradient-to-r from-purple-500/20 to-transparent p-6 rounded-lg">
        <h2
          className={`text-4xl font-semibold ${
            darkMode ? "text-[#00b4d8]" : "text-[#1D2D44]"
          }`}
        >
          {t.certificatesTitle}
        </h2>
      </div>

      {/* Lista de certificados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((certificate, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCertificate(index)}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3
                className={`text-xl font-semibold mb-2 ${
                  darkMode ? "text-[#edf6f9]" : "text-[#0D1321]"
                }`}
              >
                {certificate.title}
              </h3>
              <p
                className={`text-base ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
                style={{
                  maxHeight: "50px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {certificate.description[language]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCertificate !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className={`rounded-lg max-w-4xl w-full p-12 relative ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <h3
              className={`text-3xl font-semibold mb-4 ${
                darkMode ? "text-[#edf6f9]" : "text-[#0D1321]"
              }`}
            >
              {certificatesData[selectedCertificate].title}
            </h3>
            <img
              src={certificatesData[selectedCertificate].image}
              alt={certificatesData[selectedCertificate].title}
              className="w-full h-[400px] object-cover rounded-lg mb-4"
            />
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {certificatesData[selectedCertificate].description[language]}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
