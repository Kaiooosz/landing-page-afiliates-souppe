"use client"

/**
 * COMPONENTE DE CARD DE PRODUTO
 *
 * Exibe informações do produto e botão de direcionamento
 * Props: imagem, nome, titulo, valor, linkAfiliado
 * Design: fundo preto, bordas vermelhas com brilho, hover effects
 * Otimizado para exibir produtos corretamente
 */

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface ProductCardProps {
  imagem: string
  nome: string
  titulo: string
  valor: string
  linkAfiliado: string
}

export function ProductCard({ imagem, nome, titulo, valor, linkAfiliado }: ProductCardProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  /**
   * FUNÇÃO PARA REDIRECIONAR PARA LINK DE AFILIADO
   * Abre o link em nova aba para não perder o usuário da landing
   */
  const handleRedirect = () => {
    if (isClient && typeof window !== 'undefined') {
      window.open(linkAfiliado, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="bg-black border border-gray-500 rounded-lg overflow-hidden shadow-[0_0_10px_rgb(200, 200, 200)] hover:shadow-[0_0_20px_rgb(210, 210, 210)] transition-all duration-300">
      {/* CONTAINER DA IMAGEM - OTIMIZADO PARA PRODUTOS */}
      <div className="relative h-48 sm:h-56 bg-white/5 flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <Image 
            src={imagem || "/placeholder.svg"} 
            alt={nome} 
            fill 
            className="object-contain hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
        </div>
      </div>

      {/* CONTEÚDO DO CARD */}
      <div className="p-4 space-y-3">
        {/* NOME DO PRODUTO */}
        <h3 className="text-base sm:text-lg font-semibold text-gray-200 text-center">{nome}</h3>

        {/* TÍTULO/DESCRIÇÃO */}
        <p className="text-gray-400 text-sm leading-snug text-center line-clamp-3">{titulo}</p>

        {/* SEÇÃO DE VALOR E BOTÃO */}
        <div className="space-y-4 pt-2">
          {/* VALOR DO PRODUTO */}
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-bold text-gray-200">{valor}</span>
          </div>

          {/* BOTÃO DE DIRECIONAMENTO */}
          <Button
            onClick={handleRedirect}
            className="w-full bg-black border border-gray-500 text-gray-200 hover:bg-gray-700 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(200,200,200,0.3)] hover:shadow-[0_0_15px_rgba(200,200,200,0.5)] font-semibold py-3 text-sm uppercase tracking-wide"
          >
            QUERO AGORA!
          </Button>
        </div>
      </div>
    </div>
  )
}