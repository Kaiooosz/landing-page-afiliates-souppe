"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-black border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO */}
          <div className="flex items-center">
            <Image
              src="/images/logo-perfil.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-12 md:h-12"
              priority
            />
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="https://www.instagram.com/souppe.shop/" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </nav>

          {/* BOTÃO MENU MOBILE */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-300 hover:text-gray-400 transition-colors"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* MENU MOBILE DROPDOWN */}
        {isMenuOpen && (
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