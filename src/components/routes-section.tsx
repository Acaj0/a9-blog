import Image from "next/image"
import { AspectRatio } from "./ui/aspect-ratio"

export default function RoutesSection() {
  return (
    <section className="pb-20 text-white p-2">
      <div className="container bg-[#003F85] mx-auto p-6 rounded-lg">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="flex flex-col">
            <div className="flex items-center gap-4  mb-12">
              <div className="rounded-full bg-white/10 p-2">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
              <div>
                <h2 className="text-sm uppercase">Principais</h2>
                <h3 className="text-3xl font-bold">ROTAS ATENDIDAS</h3>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full space-y-12">
                <div>
                  <h4 className="text-2xl font-semibold mb-4">ROTAS ESTADUAIS</h4>
                  <p className="text-white/90 max-w-lg">
                    Atuamos em todo o estado de Mato Grosso, conectando principais cidades e regiões, com expertise em rotas
                    rurais e urbanas.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-4">ROTAS INTERESTADUAIS</h4>
                  <ul className="space-y-2">
                    <li className="text-white/90">MT-PA (Mato Grosso - Pará)</li>
                    <li className="text-white/90">MT-SP (Mato Grosso - São Paulo)</li>
                    <li className="text-white/90">MT-GO (Mato Grosso - Goiás)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 md:mt-0 items-center flex justify-center ">
            <Image className = "rounded-lg inline-block"
              src="/rotas.jpg"
              width={600}
              height={450}
              alt="tecnologias"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

