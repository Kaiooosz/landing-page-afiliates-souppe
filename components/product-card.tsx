"use client"

/**
 * COMPONENTE DE CARD DE PRODUTO
 *
 * Exibe informações do produto e botão de direcionamento
 * Props: imagem, nome, titulo, valor, linkAfiliado
 * Design: fundo preto, bordas vermelhas com brilho, hover effects
 */

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  imagem: string
  nome: string
  titulo: string
  valor: string
  linkAfiliado: string
}

export function ProductCard({ imagem, nome, titulo, valor, linkAfiliado }: ProductCardProps) {
  /**
   * FUNÇÃO PARA REDIRECIONAR PARA LINK DE AFILIADO
   * Abre o link em nova aba para não perder o usuário da landing
   */
  const handleRedirect = () => {
    window.open(linkAfiliado, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="bg-black border border-red-500/30 rounded-lg overflow-hidden shadow-[0_0_10px_rgba(239,68,68,0.2)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300">
      {/* IMAGEM DO PRODUTO - ALTURA REDUZIDA */}
      <div className="relative h-32 sm:h-40 overflow-hidden">
        <Image src={imagem || "/placeholder.svg"} alt={nome} fill className="object-cover" />
      </div>

      {/* CONTEÚDO DO CARD - PADDING REDUZIDO */}
      <div className="p-4 space-y-3">
        {/* NOME DO PRODUTO */}
        <h3 className="text-base sm:text-lg font-semibold text-gray-200">{nome}</h3>

        {/* TÍTULO/DESCRIÇÃO - MAIS COMPACTO */}
        <p className="text-gray-400 text-sm leading-snug line-clamp-2">{titulo}</p>

        {/* SEÇÃO DE VALOR E BOTÃO */}
        <div className="space-y-3">
          {/* VALOR DO PRODUTO */}
          <div className="text-center">
            <span className="text-xl sm:text-2xl font-bold text-red-500">{valor}</span>
          </div>

          {/* BOTÃO DE DIRECIONAMENTO - MAIS COMPACTO */}
          <Button
            onClick={handleRedirect}
            className="w-full bg-black border-2 border-red-500 text-gray-200 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(239,68,68,0.3)] hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] font-semibold py-2 text-sm"
          >
            QUERO AGORA
          </Button>
        </div>
      </div>
    </div>
  )
}
