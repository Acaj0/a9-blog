import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Fale } from "@/components/Fale";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { wisp } from "@/lib/wisp";
import Image, { getImageProps } from "next/image";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });
  const common = { alt: "Art Direction Example", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 875,
    quality: 100,
    src: "/tech.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1334,
    quality: 70,
    src: "/tech_mob.png",
  });
  const {
    props: { srcSet: pc },
  } = getImageProps({
    ...common,
    width: 2800,
    height: 920,
    quality: 100,
    src: "/pc.png",
    loading: "eager",
  });
  const {
    props: { srcSet: mob, ...restProps },
  } = getImageProps({
    ...common,
    width: 700,
    height: 1400,
    quality: 100,
    src: "/mob.png",
  });
  return (
    <div className="overflow-clip">
      <div className="h-screen bg-cover bg-right-top bg-no-repeat bg-[url(/fundo.jpeg)] text-white">
        <div className="h-full bg-black/30 md:bg-transparent">
          <div className=" bg-[#003F85] overflow-clip">
            <NavBar />
            <div className="w-screen bg-[#FF7600] h-2"></div>
          </div>
          <section
            id="1"
            className="flex lg:px-28 flex-col text-left lg:items-end justify-center lg:justify-start h-full "
          >
            <div className="lg:w-[850px] lg:mt-14 lg:text-justify lg:bg-black/30 p-10 lg:rounded-3xl ">
              <h1 className="text-4xl lg:text-5xl ">
                Mais Agilidade e Qualidade!
              </h1>
              <h2 className="text-xl lg:text-xl mt-5">
                Na A9, transportamos sua carga com agilidade e confiança. Com
                sede em Várzea Grande, MT, oferecemos soluções personalizadas
                para o transporte de mercadorias em todo o Brasil.
              </h2>
              <h3 className="text-xl md:text-xl mt-10">
                Precisa de uma cotação?
              </h3>
              <div className="flex mt-5 text-left ">
                <Fale />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-screen bg-[#003F85] h-4"></div>
      <div className="w-screen bg-[#FF7600] h-2"></div>
      <section id="2" className="bg-[#f5f5f5] h-auto justify-center">
        <div className="container mx-auto px-5 z-50">
          <div className="flex flex-col z-0 items-center">
            <h2 className="text-6xl mt-16">Portfólio de Serviços</h2>
            <span className="mt-4 text-xl text-gray-500 text-justify">
              Com mais de 9 anos de experiência no mercado, a A9 oferece
              transporte ágil e eficiente, utilizando equipamentos modernos e
              ferramentas logísticas avançadas. Atendemos a diversas
              necessidades de transporte, contamos com frota própria e
              agregados, o que nos permite fornecer soluções customizadas e de
              confiança. Atuamos em todo o estado de Mato Grosso, conectando
              suas principais cidades e regiões, além de rotas interestaduais
              atendendo principalmente o centro oeste, sudeste e sul do país.
            </span>
            <picture>
              <source media="(min-width: 1000px)" srcSet={desktop} />
              <source media="(min-width: 500px)" srcSet={mobile} />
              <img
                {...rest}
                style={{ width: "100%", height: "auto" }}
                alt="tecnologias"
              />
            </picture>
            <a
              className="z-50 mb-10 text-xl hover:text-white hover:bg-[#FF7600] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100 outline outline-2 p-4 rounded-md"
              href="Portifolio de Servicos.pdf"
              target="_blank"
            >
              Ver Portfólio Completo
            </a>
          </div>
        </div>
      </section>
      <section id="3" className="mt-10 h-auto justify-center bg-[#ffffff]">
        <div className="container mx-auto px-5 z-50">
          <picture>
            <source media="(min-width: 1000px)" srcSet={pc} />
            <source media="(min-width: 500px)" srcSet={mob} />
            <img
              {...restProps}
              style={{ width: "100%", height: "auto" }}
              alt="agenciamento de cargas"
            />
          </picture>
          <div className="flex flex-col z-0 items-center">
            {" "}
            <h1 className="text-6xl mt-10">O que Podemos Fazer por Você</h1>
            <span className="mt-6 text-xl text-gray-500 text-justify">
              Nós oferecemos soluções logísticas sob medida, cuidando de todo o
              processo de transporte, desde o planejamento até o rastreamento
              detalhado. Independentemente do porte da sua operação, estamos
              prontos para atender suas necessidades com a expertise necessária
              para simplificar e otimizar sua cadeia de suprimentos. Nossos principais pilares:
            </span>{" "}
            <div className="grid mt-20 md:grid-cols-2 mb-20 gap-20">
              <div className="flex items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#FF7600"
                  width={60}
                >
                  <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
                  <text
                    x="50%"
                    y="50%"
                    text-anchor="middle"
                    dy=".3em"
                    font-size="200"
                    fill="#FFF"
                  >
                    1
                  </text>
                </svg>
                <div className="md:w-[440px] w-[380px] h-20 bg-[#003F85] rounded-full items-center justify-center flex ">
                  <h4 className=" text-white text-center p-2">
                    Relacionamento próximo com transportadoras e operadoras de
                    carga
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#FF7600"
                  width={60}
                >
                  <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
                  <text
                    x="50%"
                    y="50%"
                    text-anchor="middle"
                    dy=".3em"
                    font-size="200"
                    fill="#FFF"
                  >
                    2
                  </text>
                </svg>
                <div className="md:w-[440px] w-[380px] h-20 bg-[#003F85] rounded-full items-center justify-center flex ">
                  <h4 className=" text-white text-center p-2">
                    Carteira diversificada de clientes embarcadores
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#FF7600"
                  width={60}
                >
                  <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
                  <text
                    x="50%"
                    y="50%"
                    text-anchor="middle"
                    dy=".3em"
                    font-size="200"
                    fill="#FFF"
                  >
                    3
                  </text>
                </svg>
                <div className="md:w-[440px] w-[380px] h-20 bg-[#003F85] rounded-full items-center justify-center flex ">
                  <h4 className=" text-white text-center p-2">
                    Conhecimento técnico e experiência no setor de transportes
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#FF7600"
                  width={60}
                >
                  <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
                  <text
                    x="50%"
                    y="50%"
                    text-anchor="middle"
                    dy=".3em"
                    font-size="200"
                    fill="#FFF"
                  >
                    4
                  </text>
                </svg>
                <div className="md:w-[440px] w-[380px] h-20 bg-[#003F85] rounded-full items-center justify-center flex ">
                  <h4 className=" text-white text-center p-2">
                    Ferramentas tecnológicas para análise de dados de transporte
                  </h4>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="w-screen bg-[#003F85] h-6"></div>
      </section>
      <div className="container mx-auto px-5 mb-10">
        <h2 className="text-6xl mt-4">Ultimas Notícias</h2>
        <BlogPostsPreview posts={result.posts.slice(0, 2)} />
        <div className="flex items-center justify-center">
          <a
            className="text-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100 outline outline-2 p-4 rounded-md"
            href="/posts"
          >
            Ver Todas as Notícias
          </a>
        </div>
      </div>
      <div className="container mx-auto px-5 mb-10">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
