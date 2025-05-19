// components/Footer.ts
"use client"

import { useI18n } from '@/locales/client';
import React from 'react';

const Footer = () => {
  const t = useI18n();
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()}. {t("landing.footer.year")}
          </p>
          
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors text-sm">
              {t("landing.footer.CGU")}
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors text-sm">
              {t("landing.footer.confidentiality")}
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors text-sm">
              {t("landing.footer.legal")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;