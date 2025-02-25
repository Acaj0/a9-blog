import { Tractor, Package, Recycle, CupSoda } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex items-start gap-6 p-6 rounded-xl transition-all hover:bg-gray-50">
    <div className="rounded-full bg-[#FF7600] p-4">
      <Icon className="h-8 w-8 text-white" />
    </div>
    <div className="space-y-2">
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

export default function TransportServices() {
  const services = [
    {
      icon: CupSoda,
      title: "Refrigerantes e Água",
      description: "Experiência no transporte de bebidas, atendendo grandes empresas do setor há mais de 9 anos."
    },
    {
      icon: Tractor,
      title: "Maquinários Pesados",
      description: "Transporte especializado de tratores, escavadeiras e outros equipamentos pesados."
    },
    {
      icon: Package,
      title: "Insumos Agrícolas",
      description: "Transporte de milho, farinha, açúcar e outros cereais com pontualidade garantida."
    },
    {
      icon: Recycle,
      title: "Materiais Recicláveis",
      description: "Transporte de PET, papelão, PP e PPA com responsabilidade ambiental."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="rounded-full bg-gray-200 p-2">
            <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
          <div>
            <h2 className="text-sm text-gray-600 uppercase">Nossos Serviços de Transporte</h2>
            <h3 className="text-3xl font-bold text-[#003F85]">DE CARGAS CONTEMPLAM</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
