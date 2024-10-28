import React, { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

interface Certificate {
  title: string;
  image: string;
}

const certificatesData: Certificate[] = [
  {
    title: "Full Stack Web Developer - Henry Bootcamp",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "React Native Specialist - Udemy",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Advanced JavaScript - Platzi",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const Certificates: React.FC = () => {
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
      <div className="relative inline-flex items-center gap-4 mb-8 bg-gradient-to-r from-purple-500/20 to-transparent p-6 rounded-lg">
        <h2 className="text-4xl font-semibold text-blue-400">
          {t.certificatesTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((certificate, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => setSelectedCertificate(index)}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">
                {certificate.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCertificate !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-4xl w-full p-6 relative animate-scaleIn">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              {certificatesData[selectedCertificate].title}
            </h3>
            <img
              src={certificatesData[selectedCertificate].image}
              alt={certificatesData[selectedCertificate].title}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
