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
  return (
    <div className="overflow-clip">
      <div className="w-screen bg-[#003F85] h-1"></div>
      <div className="h-screen bg-cover bg-right-top bg-no-repeat bg-[url(/fundo.jpeg)] text-white">
        <div className="h-full bg-black/30 md:bg-transparent">
          <NavBar />
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
      <section id="2" className="bg-[#f5f5f5] h-auto justify-center">
        <div className="container mx-auto px-5 z-50">
          <div className="flex flex-col z-0 items-center">
            <h2 className="text-6xl mt-16">Portfólio de Serviços</h2>
            <span className="mt-4 text-xl text-gray-500 text-justify">
              Com mais de 9 anos de experiência no mercado, a A9 oferece
              transporte ágil e eficiente, utilizando equipamentos modernos e
              ferramentas logísticas avançadas. Atendemos a diversas
              necessidades de transporte, sem possuir frota própria, o que nos
              permite fornecer soluções customizadas e de confiança. Atuamos em
              todo o estado de Mato Grosso, conectando suas principais cidades e
              regiões, além de rotas interestaduais como MT-PA, MT-SP e MT-GO.
            </span>
            <picture>
              <source media="(min-width: 1000px)" srcSet={desktop} />
              <source media="(min-width: 500px)" srcSet={mobile} />
              <img {...rest} style={{ width: "100%", height: "auto" }} />
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

        <div className="w-screen bg-[#003F85] h-12"></div>
      </section>
      <div className="container mx-auto px-5 mb-10">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
