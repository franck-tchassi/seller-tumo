// components/CTA.ts
"use client"

import { useI18n } from '@/locales/client';
import React from 'react';

interface CTAProps {
  openSignUp: () => void
}

const CTA = ({openSignUp}: CTAProps) => {
  const t = useI18n();
  return (
    <section className="relative py-16 px-4 text-white h-[400px] md:h-[500px] overflow-hidden">
      {/* Conteneur image de fond avec contrôle du zoom */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/image/cta.png" 
          alt="Plateforme e-commerce professionnelle"
          className="w-full h-full object-cover object-center scale-100" 
          style={{ transform: 'scale(1)' }}
        />
        {/* Overlay pour meilleure lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Contenu centré verticalement */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center max-w-4xl relative z-10">
        <div className="px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-5">
            {t("landing.cta.title")}
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg md:text-xl">
            {t("landing.cta.sub_title")}
          </p>
          <button 
            onClick={openSignUp}
            className="bg-white text-black px-10 py-4 text-lg rounded-full font-bold hover:bg-gray-100 
            transition-all duration-300 hover:scale-105 min-w-[220px] shadow-lg cursor-pointer"
          >
            {t("landing.cta.signup")}
          </button>
          <p className="mt-4 text-sm md:text-base opacity-90">
            {t("landing.cta.abonment")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;