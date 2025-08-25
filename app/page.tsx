/**
 * LANDING PAGE DE DIRECIONAMENTO
 *
 * Esta é a página principal que direciona leads para produtos afiliados.
 * Contém foto de perfil e produtos com design customizado:
 * - Background cinza com brilho sutil
 * - Componentes brancos/cinzas com detalhes azuis
 * - Texto branco/cinza
 * - Botões de direcionamento para links de afiliado
 */
import { Header } from "@/components/header"
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
    imagem: "/images/cd-01.png",
    nome: "Claerador Dérmico",
    titulo: "Creme Clareador de Manchas – Melasma - virilha - axilia.",
    valor: "R$ 159,90",
    linkAfiliado: "https://cicatribem.com.br/products/clareador-dermico-cicatribem-60g?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 3,
    imagem: "/images/cd-02.png",
    nome: "2 unidades - Claerador Dérmico",
    titulo: "Creme Clareador de Manchas – Melasma - virilha - axilia.",
    valor: "R$ 287,82",
    linkAfiliado: "https://cicatribem.com.br/products/clareador-dermico-cicatribem-60g-2-unidades?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 4,
    imagem: "/images/cd-04.png",
    nome: "4 unidades - Claerador Dérmico",
    titulo: "Creme Clareador de Manchas – Melasma - virilha - axilia.",
    valor: "R$ 479,70",
    linkAfiliado: "https://cicatribem.com.br/products/clareador-dermico-cicatribem-60g-4-unidades?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 5,
    imagem: "/images/gr-01.png",
    nome: "Gel Redutor",
    titulo: "Gel Redutor de medidas - Celulites e Flacidez.",
    valor: "R$129,90",
    linkAfiliado: "https://cicatribem.com.br/products/gel-redutor-cicatribem-200g?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 6,
    imagem: "/images/gr-02.png",
    nome: "2 unidade - Gel Redutor",
    titulo: "Gel Redutor de medidas - Celulites e Flacidez.",
    valor: "R$ 233,82",
    linkAfiliado: "https://cicatribem.com.br/products/gel-redutor-cicatribem-200g-2-unidades?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 7,
    imagem: "/images/gr-04.png",
    nome: "4 unidade - Gel Redutor",
    titulo: "Gel Redutor de medidas - Celulites e Flacidez.",
    valor: "R$ 389,70",
    linkAfiliado: "https://cicatribem.com.br/products/gel-redutor-cicatribem-200g-4-unidades?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 10,
    imagem: "/images/rd-01.png",
    nome: "Regenerador Dêrmico",
    titulo: "O Regenerador Dérmico da Cicatribem é um poderoso creme ultra hidratante de tratamento para redução e prevenção das estrias.",
    valor: "R$  159,90",
    linkAfiliado: "https://cicatribem.com.br/products/regenerador-dermico-cicatribem-150g?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 11,
    imagem: "/images/rd-02.png",
    nome: "2 unidades Regenerador Dêrmico",
    titulo: "O Regenerador Dérmico da Cicatribem é um poderoso creme ultra hidratante de tratamento para redução e prevenção das estrias.",
    valor: "R$ 319,80",
    linkAfiliado: "https://cicatribem.com.br/products/combo-2-unidades-regenerador-dermico-cicatribem-150g?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 12,
    imagem: "/images/rd-04.png",
    nome: "4 unidades Regenerador Dêrmico",
    titulo: "O Regenerador Dérmico da Cicatribem é um poderoso creme ultra hidratante de tratamento para redução e prevenção das estrias.",
    valor: "R$ 466,91",
    linkAfiliado: "https://cicatribem.com.br/products/combo-4-unidades-regenerador-dermico-cicatribem-150g?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 8,
    imagem: "/images/af-01.png",
    nome: "Multivitamínico com Ácido Fólico",
    titulo: "Acelerando o crescimento capilar, fortalecimento das unhas, melhora o aspecto da pele e ainda auxilia na saúde cardiovascular!",
    valor: "R$ 79,90",
    linkAfiliado: "https://cicatribem.com.br/products/acido-folico-omega-3-iodo-e-vitaminas-cicatribem-60-capsulas?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 81,
    imagem: "/images/af-03.png",
    nome: "3 unidades Multivitamínico",
    titulo: "Ácido Fólico, acelerando o crescimento capilar, fortalecimento das unhas, melhora o aspecto da pele e ainda auxilia na saúde cardiovascular!",
    valor: "R$ 179,82",
    linkAfiliado: "https://cicatribem.com.br/products/combo-2-unidades-esfoliante-corporal-cicatribem-150g?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 9,
    imagem: "/images/af-06.png",
    nome: "6 unidades Multivitamínico",
    titulo: "Ácido Fólico, acelerando o crescimento capilar, fortalecimento das unhas, melhora o aspecto da pele e ainda auxilia na saúde cardiovascular!",
    valor: "R$ 213,93",
    linkAfiliado: "https://cicatribem.com.br/products/combo-6-unidades-vitamina-cicatribem-60-capsulas?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 13,
    imagem: "/images/es-01.png",
    nome: "Esfoliante Corporal",
    titulo: "Esfoliante Corporal - Tratamento para estrias - Limpeza e renovação celular da sua pele.",
    valor: "R$ 99,90",
    linkAfiliado: "https://cicatribem.com.br/products/esfoliante-corporal-cicatribem-150g?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 14,
    imagem: "/images/es-02.png",
    nome: "2 unidades - Esfoliante Corporal",
    titulo: "Esfoliante Corporal - Tratamento para estrias - Limpeza e renovação celular da sua pele.",
    valor: "R$ 179,82",
    linkAfiliado: "https://cicatribem.com.br/products/combo-2-unidades-esfoliante-corporal-cicatribem-150g?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 15,
    imagem: "/images/es-04.png",
    nome: "4 unidades - Esfoliante Corporal",
    titulo: "Esfoliante Corporal - Tratamento para estrias - Limpeza e renovação celular da sua pele.",
    valor: "R$ 319,80",
    linkAfiliado: "https://cicatribem.com.br/products/combo-4-unidades-esfoliante-corporal-cicatribem-150g?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 16,
    imagem: "/images/cd-rd-es-gr-01.png",
    nome: "Kit Completo - cicatribem.",
    titulo: "Sua Experiência completa, cuidado para na viciar nesses queridinhos!",
    valor: "R$ 362,74",
    linkAfiliado: "https://cicatribem.com.br/products/kit-tudo?bg_ref=nzkMTzLBNs&utm_source=CREATOR&utm_medium=INFLUENCER&utm_campaign=kaio%20souza",
  },
  {
    id: 17,
    imagem: "/images/liftDetox.png",
    nome: "liftDetox",
    titulo: "O emagrecedor mais procurado do Brasil, Lift Detox Black, é um poderoso inibidor de gordura corporal com colágeno que ajuda a inibir o apetite, controla a ansiedade, acelera o metabolismo, combate a flacidez e seca muito a barriga grande!",
    valor: "R$ 137,00",
    linkAfiliado: "https://liftdetoxcaps.com/b4/?b4f=Nmk_2Td3Rv",
  },

  {
    id: 18,
    imagem: "/images/Durazul-image.png",
    nome: "Durazul.",
    titulo: "Disposição, resultado, pré treino, P@u funcionando.",
    valor: "R$ 167,00",
    linkAfiliado: "ttps://pv.b4you.com.br/pages/b574d4a5-7417-45b6-9039-d05d675aa877/rFtO1SQmAR",
  },
]

/**
 * COMPONENTE PRINCIPAL DA PÁGINA
 * Renderiza o cabeçalho com perfil e a grade de produtos
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* HEADER DE NAVEGAÇÃO */}
      <Header />
      
      {/* SEÇÃO DO CABEÇALHO COM PERFIL */}
      <ProfileHeader />

      {/* SEÇÃO PRINCIPAL COM PRODUTOS */}
      <main className="container mx-auto px-4 py-8">
        {/* TÍTULO DA SEÇÃO DE PRODUTOS */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Compre pelos links oficiais a baixo!
          </h2>

          {/* SEÇÃO ICONES DAS MARCAS */}
          <div className="flex justify-center items-center gap-6 md:gap-12 py-6 md:py-8 opacity-30">
            <Image
              src="/icons/logo-braip.svg"
              alt="braip-icon"
              width={60}
              height={60}
              className="w-12 h-12 md:w-15 md:h-15 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-300"
            />
            
            <Image
              src="/icons/be4you-logo.svg"
              alt="be4you-icon"
              width={60}
              height={60}
              className="w-12 h-12 md:w-15 md:h-15 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-300"
            />
            
            <Image
              src="/icons/payt-logo.svg"
              alt="payt-icon"
              width={60}
              height={60}
              className="w-12 h-12 md:w-15 md:h-15 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-300"
            />

            <Image
              src="/icons/tiktok-icon.svg"
              alt="tiktok-icon"
              width={60}
              height={60}
              className="w-12 h-12 md:w-15 md:h-15 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-300"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Escolhemos os melhores produtos para você! 
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
            Links dos sites oficiais, 100% confiáveis, aproveite com segurança e evite golpes!
          </p>

          <div className="flex justify-center py-6 md:py-8">
            <Image
              src="/icons/ChevronDown2.svg"
              alt="Seta para baixo"
              width={36}
              height={36}
              className="w-8 h-8 md:w-9 md:h-9 animate-bounce opacity-60"
            />
          </div>
        </div>

        {/* GRADE DE PRODUTOS - LAYOUT EM LISTA VERTICAL */}
        <div className="space-y-4 max-w-4xl mx-auto">
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

        {/* SEÇÃO DE GARANTIAS */}
        
      </main>

      {/* RODAPÉ */}
      <footer className="border-t border-gray-700 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4"> 
            <Image
              src="/images/logo-perfil.svg"
              alt="Logo"
              width={60}
              height={60}
              className="w-16 h-16 md:w-20 md:h-20"
              priority
            />
          </div>
          <p className="text-gray-400 text-sm md:text-base mb-2">
            © 2025 - Todos os direitos reservados.     
          </p>
          <p className="text-gray-500 text-xs md:text-sm">
            Termos de uso e Privacidade.     
          </p>
        </div>
      </footer>
    </div>
  )
}