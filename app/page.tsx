/**
 * LANDING PAGE DE DIRECIONAMENTO
 *
 * Esta é a página principal que direciona leads para produtos afiliados.
 * Contém foto de perfil e 10 componentes de produtos com design customizado:
 * - Background preto
 * - Componentes pretos com bordas vermelhas brilhantes
 * - Texto cinza claro
 * - Botões de direcionamento para links de afiliado
 */

import { ProfileHeader } from "@/components/profile-header"
import { ProductCard } from "@/components/product-card"
import Image from "next/image"

/**
 * DADOS DOS PRODUTOS
 * Array com informações de cada produto para direcionamento
 * Cada produto contém: imagem, nome, título, valor e link de afiliado
 */
const produtos = [
  {
    id: 1,
    imagem: "/images/clareador-cicatribem.svg",
    nome: "Clareador Dermico",
    titulo: "Creme Clareador de Manchas – Melasma, Axilas, Virilha, Áreas Íntimas, Rosto e Corpo!",
    valor: "R$ 127,00",
    linkAfiliado: "https://www.instagram.com/souppe.shop/?next=%2F",
  },
  {
    id: 2,
    imagem: "/images/liftDetox.png",
    nome: "liftDetox",
    titulo: "O emagrecedor mais procurado do Brasil, Lift Detox Black, é um poderoso inibidor de gordura corporal com colágeno que ajuda a inibir o apetite, controla a ansiedade, acelera o metabolismo, combate a flacidez e seca muito a barriga grande!",
    valor: "R$ 137,00",
    linkAfiliado: "https://liftdetoxcaps.com/b4/?b4f=Nmk_2Td3Rv",
  },
  {
    id: 3,
    imagem: "/instagram-course.png",
    nome: "Curso Instagram Pro",
    titulo: "Como Ganhar Dinheiro no Instagram",
    valor: "R$ 297,00",
    linkAfiliado: "https://seu-link-afiliado-3.com",
  },
  {
    id: 4,
    imagem: "/business-mentorship.png",
    nome: "Mentoria Business",
    titulo: "Transforme sua Ideia em Negócio Lucrativo",
    valor: "R$ 1.997,00",
    linkAfiliado: "https://seu-link-afiliado-4.com",
  },
  {
    id: 5,
    imagem: "/youtube-course.png",
    nome: "YouTube Monetização",
    titulo: "Ganhe Dinheiro com seu Canal no YouTube",
    valor: "R$ 397,00",
    linkAfiliado: "https://seu-link-afiliado-5.com",
  },
  {
    id: 6,
    imagem: "/curso-dropshipping.png",
    nome: "Dropshipping Master",
    titulo: "Monte sua Loja Virtual sem Estoque",
    valor: "R$ 697,00",
    linkAfiliado: "https://seu-link-afiliado-6.com",
  },
  {
    id: 7,
    imagem: "/afiliados-course.png",
    nome: "Afiliado Pro",
    titulo: "Ganhe Comissões Vendendo Produtos Digitais",
    valor: "R$ 197,00",
    linkAfiliado: "https://seu-link-afiliado-7.com",
  },
  {
    id: 8,
    imagem: "/curso-copywriting.png",
    nome: "Copywriting Persuasivo",
    titulo: "Escreva Textos que Vendem Automaticamente",
    valor: "R$ 447,00",
    linkAfiliado: "https://seu-link-afiliado-8.com",
  },
  {
    id: 9,
    imagem: "/curso-trafego-pago.png",
    nome: "Tráfego Pago Expert",
    titulo: "Domine Facebook e Google Ads",
    valor: "R$ 897,00",
    linkAfiliado: "https://seu-link-afiliado-9.com",
  },
  {
    id: 10,
    imagem: "/images/liftDetox.png",
    nome: "liftDetox",
    titulo: "O emagrecedor mais procurado do Brasil, Lift Detox Black, é um poderoso inibidor de gordura corporal com colágeno que ajuda a inibir o apetite, controla a ansiedade, acelera o metabolismo, combate a flacidez e seca muito a barriga grande!",
    valor: "R$ 137,00",
    linkAfiliado: "https://liftdetoxcaps.com/b4/?b4f=Nmk_2Td3Rv",
  },
]

/**
 * COMPONENTE PRINCIPAL DA PÁGINA
 * Renderiza o cabeçalho com perfil e a grade de produtos
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* SEÇÃO DO CABEÇALHO COM PERFIL */}
      <ProfileHeader />

      {/* SEÇÃO PRINCIPAL COM PRODUTOS */}
      <main className="container mx-auto px-4 py-8">
        {/* TÍTULO DA SEÇÃO DE PRODUTOS */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-3">
            Compre pelos links oficiais a baixo!
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
          Ofertas exclusivas dos nossos parceiros oficiais, com preços especiais. 
          </p>

          {/* SEÇÃO ICONES DAS MARCAS */}
          <div className="flex justify-center items-center gap-12 py-8 opacity-40">
            <Image
              src="/icons/logo-braip.svg"
              alt="braip-icon"
              width={60}
              height={60}
              className="w-15 h-15 grayscale hover:grayscale-0 transition-all duration-300"
            />
            
            <Image
              src="/icons/be4you-logo.svg"
              alt="be4you-icon"
              width={60}
              height={60}
              className="w-15 h-15 grayscale hover:grayscale-0 transition-all duration-300"
            />
            
            <Image
              src="/icons/payt-logo.svg"
              alt="payt-icon"
              width={60}
              height={60}
              className="w-15 h-15 grayscale hover:grayscale-0 transition-all duration-300"
            />

            <Image
              src="/icons/tiktok-icon.svg"
              alt="tiktok-icon"
              width={60}
              height={60}
              className="w-15 h-15 grayscale hover:grayscale-0 transition-all duration-300"
            />

          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-3">
          Escolhemos os melhores produtos digitais para você! 
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
          Links oficiais, 100% confiáveis, aproveite com segurança e evite golpes!
          </p>

          <div className="flex justify-center py-8">
            <Image
              src="/icons/ChevronDown2.svg"
              alt="Seta para baixo"
              width={36}
              height={36}
              className="w-9 h-9 animate-bounce"
            />
          </div>
        </div>

        {/* GRADE DE PRODUTOS - LAYOUT SIMPLIFICADO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              imagem={produto.imagem}
              nome={produto.nome}
              titulo={produto.titulo}
              valor={produto.valor}
              linkAfiliado={produto.linkAfiliado}
            />
          ))}
        </div>
      </main>

      {/* RODAPÉ */}
      <footer className="border-t border-red-500/20 py-8">
        <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center"> 
        <Image
              src="/images/logo-perfil.svg"
              alt="Logo"
              width={60}
              height={60}
              className="w-20 h-20"
              priority
              />
          </div>
          <p className="text-gray-400 " >
            © 2025 - Todos os direitos reservados.     
              </p>
          <p className="text-gray-400 " >
            Termos de uso e Privaciade.     
           </p>

        </div>
      </footer>
    </div>
  )
}
