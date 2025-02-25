import { ArrowUpCircle } from "lucide-react"

import { Card } from "@/components/ui/card"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import Image from "next/image"

interface PillarProps {
  number: string
  text: string
}

const Pillar = ({ number, text }: PillarProps) => (
  <Card className="group relative overflow-hidden border-none bg-gradient-to-r from-[#003F85] to-[#005ab8] p-6 transition-all hover:shadow-lg h-[200px] flex items-center justify-center">
    <div className="absolute -right-20 -top-20 h-40 w-40 rotate-12 transform overflow-hidden rounded-xl bg-white/10 transition-transform duration-500 group-hover:-rotate-12" />
    <div className="flex items-center gap-6 max-w-[500px]">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#FF7600] text-xl font-bold text-white">
        {number}
      </div>
      <p className="text-lg text-white text-center">{text}</p>
    </div>
  </Card>
)

export default function LogisticsSection() {
  const benefits = ["Mais segurança", "Otimização de tempo", "Redução de custos", "Melhor gestão", "DRE por veículo"]

  const pillars = [
    "Relacionamento próximo com transportadoras e operadoras de carga",
    "Carteira diversificada de clientes embarcadores",
    "Conhecimento técnico e experiência no setor de transportes",
    "Ferramentas tecnológicas para análise de dados de transporte",
  ]

  return (
    <section id="3" className="relative overflow-hidden bg-gray-100 py-20">
      <div className="container relative mx-auto px-4">
        <Card className="relative mb-20 bg-[#FF7600] p-8 shadow-xl lg:p-12 min-h-[250px] flex lg:flex-row flex-col items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white lg:text-4xl mb-8">
              Reduza Custos e Agilize suas Operações Logísticas
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <ArrowUpCircle className="h-6 w-6 rotate-45 text-white flex-shrink-0" />
                  <span className="text-lg text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Espaço reservado para logo */}
          <div className="w-32 h-32 mt-5 lg:mt-0 bg-gradient-to-r from-[#003F85] to-[#005ab8] p-2 rounded-full md:ml-8 flex-shrink-0">
          <AspectRatio ratio={4 / 4}>
              <Image
                unoptimized={true}
                src={"/a905.png"}
                fill
                alt="logo da A9"
                className="rounded-md object-cover"
              />
            </AspectRatio></div>
        </Card>

        <div className="space-y-12 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">O que Podemos Fazer por Você</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Nossa atuação é focada no modelo B2B, oferecendo soluções logísticas sob medida, cuidando de todo o
              processo de transporte, desde o planejamento até o rastreamento detalhado. Independentemente do porte da
              sua operação, estamos prontos para atender suas necessidades para simplificar e otimizar seu carregamento.
              Nossos principais pilares:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Pillar key={index} number={(index + 1).toString()} text={pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

