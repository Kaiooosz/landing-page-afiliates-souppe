/**
 * COMPONENTE DE CABEÇALHO COM PERFIL
 * 
 * Exibe a foto de perfil e informações principais do afiliado
 * Design: fundo preto, bordas vermelhas com brilho, texto cinza claro
 */

import Image from "next/image"

export function ProfileHeader() {
  return (
    <div className="bg-black border-2 ">
      <div className="flex flex-col items-center text-center space-y-4">
        
        {/* FOTO DE PERFIL COM BORDA VERMELHA BRILHANTE - tamanho reduzido para mobile */}
        <div className="relative">
          <Image
            src="/images/logo-perfil.svg"
            alt="Logo do Perfil"
            width={96}
            height={96}
            className="w-28 h-20 sm:w-32 sm:h-24 "
            priority
          />
        </div>
        
        {/* INFORMAÇÕES DO PERFIL - textos menores e mais compactos */}
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            Seu Nome Aqui
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto leading-relaxed">
            Especialista em Marketing Digital | Ajudo pessoas a conquistarem liberdade financeira online
          </p>
        </div>
      </div>
    </div>
  )
}