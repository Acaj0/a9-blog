import { BlogPostsPreview } from "@/components/BlogPostPreview";
import CC from "@/components/Contact Section";
import { Fale } from "@/components/Fale";
import { Footer } from "@/components/Footer";
import LogisticsSection from "@/components/logistica";
import NavBar from "@/components/NavBar";
import RoutesSection from "@/components/routes-section";
import PortfolioServicos from "@/components/PortfolioServicos";
import TransportServices from "@/components/transport-services";
import Component from "@/components/Zap";
import { wisp } from "@/lib/wisp";
import { getImageProps } from "next/image";

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
    <div className="overflow-clip ">
      <Component></Component>
      <div className="h-screen">
        <div className="bg-cover h-full bg-right-top bg-no-repeat bg-[url(/fundo.avif)] text-white">
          <div className="h-full bg-black/0 md:bg-transparent">
            <section
              id="1"
              className="flex lg:px-28 flex-col text-left lg:items-end justify-center lg:justify-start h-full "
            >
              <div className="lg:w-[850px] lg:mt-32 lg:text-justify lg:bg-black/0 p-10 lg:rounded-3xl ">
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
          </div>{" "}
        </div>
      </div>
      <div className="w-screen bg-[#003F85] h-4 z-50"></div>
      <div className="w-screen bg-[#FF7600] h-2"></div>
      <PortfolioServicos/>
      <LogisticsSection/>
      <TransportServices/>
      <RoutesSection/>
      <div className="w-screen bg-[#003F85] h-4 z-50"></div>
      <div className="w-screen bg-[#FF7600] h-2"></div>
      <section className="bg-gray-100 w-screen">
        <div className="container mx-auto px-5 mb-10 items-center flex  flex-col">
          <h2 className="text-6xl mt-16">Ultimas Notícias</h2>
          <BlogPostsPreview posts={result.posts.slice(0, 2)} />
          <div className="flex items-center justify-center mb-20">
            <a
              className="text-xl  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100 outline outline-2 p-4 rounded-md"
              href="/posts"
            >
              Ver Todas as Notícias
            </a>
          </div>
        </div>
      </section>
      <section id="4" className=" h-auto justify-center my-20 ">
        <div className="container mx-auto px-5 z-50 p-10 flex items-center justify-center flex-col md:flex-row gap-5">
          <div className="md:w-[540px] items-center flex flex-col p-5">
            <span className="text-6xl">Entre em Contato</span>
            <h3 className="mt-5 mx-2 text-2xl text-left">
              Tem dúvidas ou precisa de um orçamento?
            </h3>
            <div className="hidden md:flex">
              <h4 className="mt-5 mx-2 text-2xl text-justify ">
                Entre em contato conosco através dos canais ao lado
              </h4>
            </div>
            <div className="md:hidden flex">
              <h4 className="mt-5 mx-2 text-2xl text-justify ">
                Entre em contato conosco através dos canais abaixo
              </h4>
            </div>
            <svg
              className="hidden md:flex"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="#FF7600"
              width={100}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
            <svg
              className="md:hidden flex mt-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="#FF7600"
              width={100}
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
          <CC></CC>
        </div>
      </section>
      <div className="container mx-auto px-5 mb-10">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
