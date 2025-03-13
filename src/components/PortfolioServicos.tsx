export default function PortfolioServicos() {
  return (
    <section id="2" className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
            Portfólio de Serviços
          </h2>
          <p className="mx-auto max-w-3xl text-base md:text-lg text-gray-600 text-center mt-4">
            Com mais de 9 anos de experiência no mercado, a A9 Logística se destaca pela oferta de transporte ágil e
            eficiente. Contamos com equipamentos modernos, colaboradores altamente capacitados e ferramentas logísticas
            de última geração. Operamos com uma ampla variedade de caminhões, incluindo veículos próprios e agregados,
            cuidadosamente selecionados conforme as necessidades específicas de cada cliente, garantindo a solução ideal
            para cada tipo de carga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Planejamento */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex-shrink-0">
              <div className="bg-orange-50 p-3 sm:p-4 rounded-full">
                <img
                  src="/Planejamento.png"
                  alt="Ícone de Planejamento"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a365d] mb-2">Planejamento</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF7600] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Roteirização</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF7600] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Otimização de transporte</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Gerenciamento de riscos */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex-shrink-0">
              <div className="bg-blue-50 p-3 sm:p-4 rounded-full">
                <img
                  src="/Gerenciamento_de_riscos.png"
                  alt="Ícone de Gerenciamento de riscos"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a365d] mb-2">Gerenciamento de riscos</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF7600] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Segurança</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF7600] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Gerenciamento de Risco</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF7600] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Rastreamento</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visibilidade */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex-shrink-0">
              <div className="bg-orange-50 p-3 sm:p-4 rounded-full">
                <img
                  src="/Visibilidade.png"
                  alt="Ícone de Visibilidade"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a365d] mb-2">Visibilidade</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF7600] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Monitoramento logístico</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF7600] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Performance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sistema Integrado de Informação */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex-shrink-0">
              <div className="bg-blue-50 p-3 sm:p-4 rounded-full">
                <img
                  src="/Sistema.png"
                  alt="Ícone de Sistema Integrado de Informação"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a365d] mb-2">Sistema Integrado de Informação</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF7600] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Emissão de CT-e</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF7600] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Integração de Sistemas (EDI)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF7600] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Auditoria de Fretes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

