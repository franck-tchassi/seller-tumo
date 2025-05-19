"use client"

import { useI18n } from '@/locales/client';
import { Boxes, Zap, Shield, TrendingUp, Globe, Percent } from 'lucide-react'

export default function WhySellWithUs() {
  const t = useI18n();
  const features = [
    {
      icon: <Boxes className="w-10 h-10 text-white" />,
      title: `${t("landing.features.items.0.title")}`,
      description: `${t("landing.features.items.0.description")}`
    },
    {
      icon: <Percent className="w-10 h-10 text-white" />,
      title: `${t("landing.features.items.1.title")}`,
      description: `${t("landing.features.items.1.description")}`
    },
    {
      icon: <Zap className="w-10 h-10 text-white" />,
      title: `${t("landing.features.items.2.title")}`,
      description: `${t("landing.features.items.2.description")}`
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: `${t("landing.features.items.3.title")}`,
      description: `${t("landing.features.items.3.description")}`
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: `${t("landing.features.items.4.title")}`,
      description: `${t("landing.features.items.4.description")}`
    },
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      title: `${t("landing.features.items.5.title")}`,
      description: `${t("landing.features.items.5.description")}`
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-12">{t("landing.features.title")}</h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 border border-white/10 hover:border-blue-300/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 overflow-hidden"
            >
              {/* Fond animé */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icône flottante */}
              <div className="absolute -top-6 -right-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-blue-400/10 group-hover:bg-blue-400/20 transition-all duration-500"></div>
                  <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
                    {feature.icon}
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-100/80 text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}