"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Evitar erro de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Renderizar o mesmo HTML tanto no servidor quanto no cliente
  return (
    <header className="bg-primary border-b-2 border-chart-1 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO */}
          <div className="flex items-center">
            <Image
              src="/images/logo-perfil.svg"
              alt="Logo"
              width={90}
              height={90}
              className="w-20 h-20 md:w-24 md:h-24"
              priority
            />
          </div>

          {/* cupom */}
          <div className="flex justify-center items-center min-h-[200px]">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
            Cupom: souppe10
            </h1>
          </div>


          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="https://www.instagram.com/souppe.shop/" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Image
              src="/icone-insta.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="w-6 h-6"
             />
            </a>
          </nav>

          {/* BOTÃO MENU MOBILE */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-300 hover:text-gray-400 transition-colors"
          >
            {mounted && isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* MENU MOBILE DROPDOWN */}
        {mounted && isMenuOpen && (
          <div className="md:hidden border-t border-gray-700">
            <nav className="py-4 space-y-3">
              <a 
                href="https://www.instagram.com/souppe.shop/" 
                className="block px-4 py-2 text-gray-300 hover:text-gray-400 hover:bg-gray-500/10 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Instagram
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}