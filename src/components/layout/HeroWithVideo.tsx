"use client"

import { useI18n } from '@/locales/client';
import React from 'react';
import HighlightText from './HighlightText';

interface HeroWithVideoProps {
    openSignUp: () => void
}
const HeroWithVideo = ({ openSignUp }: HeroWithVideoProps) => {
    const t = useI18n();
    
  return (
    <section className="relative h-screen min-h-[600px] text-white overflow-hidden">
      {/* Vidéo de fond */}
      <div className="absolute inset-0 -z-10">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/video/video-baniere.mp4" type="video/mp4" />
          {/* Fallback image si vidéo ne charge pas */}
          <img 
            src="/image/fallback-banner.jpg" 
            alt="Plateforme de vente professionnelle"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Overlay pour meilleure lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Contenu */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("landing.hero.title")} <span className="text-yellow-300"><HighlightText variant={"fancy-slant"} color={"gradient"}>{t("landing.hero.title_span")}</HighlightText></span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("landing.hero.sub_title_1")} <strong>{t("landing.hero.sub_title_2")}</strong> {t("landing.hero.sub_title_3")}         
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
             onClick={openSignUp}
             className="bg-white cursor-pointer text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
            >
              {t("landing.hero.demarrer")}
            </button>
            <button 
                className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 text-lg"
            >
              {t("landing.hero.demo")}
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{t("landing.hero.sans_frais")}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{t("landing.hero.support")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithVideo;