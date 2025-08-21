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

/**
 * DADOS DOS PRODUTOS
 * Array com informações de cada produto para direcionamento
 * Cada produto contém: imagem, nome, título, valor e link de afiliado
 */
const produtos = [
  {
    id: 1,
    imagem: "/digital-marketing-product.png",
    nome: "Curso Digital Marketing",
    titulo: "Domine o Marketing Digital em 30 Dias",
    valor: "R$ 497,00",
    linkAfiliado: "https://seu-link-afiliado-1.com",
  },
  {
    id: 2,
    imagem: "/ebook-vendas-online.png",
    nome: "E-book Vendas Online",
    titulo: "Estratégias Secretas para Vender na Internet",
    valor: "R$ 97,00",
    linkAfiliado: "https://seu-link-afiliado-2.com",
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
    imagem: "/curso-empreendedorismo.png",
    nome: "Empreendedor Digital",
    titulo: "Construa seu Império Digital do Zero",
    valor: "R$ 1.497,00",
    linkAfiliado: "https://seu-link-afiliado-10.com",
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-3">Compre pelos links oficiais a baixo!</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
          Ofertas exclusivas dos nossos parceiros oficiais, com preços especiais. 
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-3">
          Escolhemos os melhores produtos digitais para você! 
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
          Links oficiais, 100% confiáveis, aproveite com segurança e evite golpes!
          </p>
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
          <p className="text-gray-400">© 2024 - Todos os direitos reservados. Landing de Direcionamento.</p>
        </div>
      </footer>
    </div>
  )
}
