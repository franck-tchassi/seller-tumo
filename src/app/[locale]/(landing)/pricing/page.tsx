"use client"

import { Check, Zap, Boxes, Search, Globe, BarChart2, BadgeCheck, Rocket, Shield, Infinity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import FAQSection from '@/components/layout/FAQSection'
import HighlightText from '@/components/layout/HighlightText'

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "0€",
      period: "/an",
      description: "Parfait pour tester la plateforme",
      cta: "Commencer gratuitement",
      popular: false,
      features: [
        "5 produits maximum",
        "Commission à 5%",
        "Dashboard basique",
        "Support par email",
        "Scraping limité"
      ]
    },
    {
      name: "Pro",
      price: "25€",
      period: "/an",
      description: "Pour les vendeurs sérieux",
      cta: "Acheter",
      popular: true,
      features: [
        "100 produits maximum",
        "Commission à 2.5%",
        "Dashboard avancé",
        "Support prioritaire",
        "Scraping complet",
        "Analytics de base"
      ]
    },
    {
      name: "Enterprise",
      price: "99€",
      period: "/an",
      description: "Solution illimitée",
      cta: "Contactez-nous",
      popular: false,
      features: [
        "Produits illimités",
        "Commission à 1.5%",
        "Dashboard premium",
        "Support 24/7",
        "Scraping premium",
        "Analytics avancés",
        "API intégration",
        "Compte manager dédié"
      ]
    }
  ]

  const features = [
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      title: "Commissions compétitives",
      description: "De 1.5% à 5% selon votre plan"
    },
    {
      icon: <Search className="w-5 h-5 text-blue-500" />,
      title: "Scraping intelligent",
      description: "Trouvez les produits tendances automatiquement"
    },
    {
      icon: <Boxes className="w-5 h-5 text-blue-500" />,
      title: "Gestion centralisée",
      description: "Tous vos canaux de vente en un seul endroit"
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-500" />,
      title: "Multi-plateformes",
      description: "Vendez sur votre site, Amazon, eBay et plus"
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-blue-500" />,
      title: "Analytiques puissants",
      description: "Suivez vos performances en temps réel"
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      title: "Sécurité bancaire",
      description: "Paiements cryptés et sécurisés"
    }
  ]

  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8" aria-label="Tarification">
      <div className="max-w-7xl mx-auto">
        {/* Hero section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Rocket className="w-4 h-4 mr-2" />
            Lancez votre business e-commerce
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Des outils puissants pour <HighlightText variant={"fancy-slant"} > scaler vos ventes</HighlightText>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le plan qui correspond à votre ambition. Passez d'un niveau à l'autre à tout moment.
          </p>
        </div>

        {/* Pricing plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl shadow-lg overflow-hidden border ${
                plan.popular 
                  ? "border-blue-500 ring-2 ring-blue-200" 
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-bold transform translate-x-2 -translate-y-2 rotate-6">
                  POPULAIRE
                </div>
              )}
              
              <div className="p-8 bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h2>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-lg text-gray-500">
                    {plan.period}
                  </span>
                </div>
                
                <Button 
                  className={`w-full py-6 text-lg ${
                    plan.popular 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="border-t border-gray-200 bg-gray-50 p-8">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Ce qui est inclus
                </h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Feature comparison */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comparez les fonctionnalités
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Fonctionnalités</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.icon}
                    <span className="ml-3">
                      <strong className="text-gray-900">{feature.title}</strong>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-1 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Starter</h3>
              <ul className="space-y-4">
                {features.map((_, index) => (
                  <li key={index} className="h-12 flex items-center justify-center">
                    {index < 5 ? <Check className="text-green-500" /> : <span className="text-gray-400">—</span>}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-1 text-center bg-blue-50 rounded-lg pt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Pro</h3>
              <ul className="space-y-4">
                {features.map((_, index) => (
                  <li key={index} className="h-12 flex items-center justify-center">
                    <Check className="text-green-500" />
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-1 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Enterprise</h3>
              <ul className="space-y-4">
                {features.map((_, index) => (
                  <li key={index} className="h-12 flex items-center justify-center">
                    <BadgeCheck className="text-blue-500" />
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-1 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Premium</h3>
              <ul className="space-y-4">
                {features.map((_, index) => (
                  <li key={index} className="h-12 flex items-center justify-center">
                    <Infinity className="text-purple-500" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
         <FAQSection />
    </div>
</main>
)}
        