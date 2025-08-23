/**
 * COMPONENTE DE CABEÇALHO COM PERFIL
 * 
 * Exibe a foto de perfil e informações principais do afiliado
 * Design: fundo preto, bordas vermelhas com brilho, texto cinza claro
 */

import Image from "next/image"

export function ProfileHeader() {
  return (
    <div className="bg-black pt-8">
      <div className="flex flex-col items-center text-center space-y-4 pt-8">
        
        {/* FOTO DE PERFIL COM BORDA VERMELHA BRILHANTE - tamanho reduzido para mobile */}
        <div className="relative">
          <Image
            src="/images/shop-souppe-logo.png"
            alt="Logo do Perfil"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32"
            priority
          />
        </div>
        
        {/* INFORMAÇÕES DO PERFIL - textos menores e mais compactos */}
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
          Ofertas Exclusivas do Site Oficial!
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto leading-relaxed">
           Entre no Grupo VIP do Telegram!
          </p>
          
          {/* BOTÃO DO TELEGRAM */}
          <div className="mt-4">
            <a 
              href="https://t.me/+A2UKDEAk-HI4MjNh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.379 2.655-1.407 3.119-2.896 1.932-.626-.499-1.077-.929-1.555-1.338-.442-.378-.934-.799-.464-1.423.515-.685 2.335-2.251 4.769-4.51.417-.388-.09-.615-.672-.229-3.258 2.159-6.414 4.24-7.167 4.664-1.22.688-2.644.616-3.329.439-.832-.214-1.607-.47-2.246-.72-1.048-.41-.982-1.288.115-1.608z"/>
              </svg>
              Entrar no Grupo VIP do Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}