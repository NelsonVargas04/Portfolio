import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="mb-20">
      <h2 className="text-5xl font-semibold mb-6 text-blue-400">
        {t.aboutTitle}
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Nelson Vargas"
            className="w-96 h-96 rounded-full object-cover border-4 border-blue-400 shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          {t.aboutContent.map((paragraph, index) => (
            <p
              key={index}
              className={`mb-4 text-gray-300 ${
                index < t.aboutContent.length - 1 ? "mb-4" : ""
              }`}
              style={{ fontSize: "1.375rem" }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
