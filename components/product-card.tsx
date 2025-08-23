import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  imagem: string
  nome: string
  titulo: string
  valor: string
  linkAfiliado: string
}

export function ProductCard({ imagem, nome, titulo, valor, linkAfiliado }: ProductCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-all duration-300">
      <div className="flex items-center gap-4">
        {/* IMAGEM DO PRODUTO */}
        <div className="flex-shrink-0">
          <Image
            src={imagem}
            alt={nome}
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
          />
        </div>
        
        {/* INFORMAÇÕES DO PRODUTO */}
        <div className="flex-grow min-w-0">
          <h3 className="text-white font-semibold text-sm md:text-base mb-1 truncate">
            {nome}
          </h3>
          
          <p className="text-gray-400 text-xs md:text-sm mb-2 line-clamp-2">
            {titulo}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-white font-bold text-lg md:text-xl">
              {valor}
            </span>
            
            <Link 
              href={linkAfiliado}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              Comprar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}