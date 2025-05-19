"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Globe, Menu, X } from "lucide-react"
import LocaleSelectLanguage from "@/app/[locale]/LocaleSelectLanguage"

interface HeaderProps {
  openSignIn: () => void
  openSignUp: () => void
}

export default function Header({ openSignIn, openSignUp }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [mobileMenuOpen])

  return (
    <header className="fixed w-full z-50 bg-black py-3 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between px-6 md:px-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white tracking-tight">TÜMO</span>
            <span className="text-xs font-medium text-gray-300 bg-gray-800 px-2 py-1 rounded">SELLER</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            
            <div className="relative">
              <LocaleSelectLanguage />
            </div>

            <div className="flex items-center space-x-3">
              <button 
                onClick={openSignIn}
                className="text-sm cursor-pointer font-medium text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={openSignUp}
                className="text-sm bg-white cursor-pointer text-black px-3 py-1.5 rounded hover:bg-gray-100 transition-colors font-medium"
              >
                Sign Up
              </button>
            </div>
          </nav>

          <button 
            className="md:hidden p-1 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 z-50">
          <div className="bg-gray-900 h-full w-4/5 max-w-sm ml-auto p-4 border-l border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-white">TÜMO</span>
                <span className="text-xs font-medium text-gray-300 bg-gray-800 px-1.5 py-0.5 rounded">SELLER</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link 
                href="/pricing" 
                className="text-sm font-medium text-gray-300 py-2 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <div className="pt-2 border-t border-gray-800">
                <button 
                  className="block w-full cursor-pointer text-left py-2 text-sm font-medium text-gray-300 hover:text-white"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    openSignIn()
                  }}
                >
                  Sign In
                </button>
                <button
                  className="block w-full cursor-pointer text-left bg-white text-black py-2 rounded mt-2 text-sm font-medium text-center"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    openSignUp()
                  }}
                >
                  Sign Up
                </button>
              </div>

              <div className="pt-2 border-t border-gray-800">
                <button className="flex items-center space-x-2 text-sm font-medium text-gray-300 py-2 hover:text-white">
                  <Globe size={16} className="text-gray-400" />
                  <span>Change Language</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}