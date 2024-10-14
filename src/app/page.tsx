import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Fale } from "@/components/Fale";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { wisp } from "@/lib/wisp";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });
  return (
    <div className="overflow-clip">
      <div className="h-screen bg-cover bg-right-top bg-no-repeat bg-[url(/fundo.jpeg)] text-white">
        <div className="h-full bg-black/30 md:bg-transparent">
          <NavBar />
          <div className="flex md:px-28 flex-col text-left  items-end ">
            <div className="md:w-[850px] md:mt-30 mt-14 md:text-justify md:bg-black/30 p-10 md:rounded-3xl ">
              <h1 className="text-4xl md:text-5xl ">
                Mais Agilidade e Qualidade!
              </h1>
              <h2 className="text-xl md:text-xl mt-5">
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
          </div>
        </div>
      </div>
      <div className="w-screen bg-[#003F85] h-4"></div>
      <div className="w-screen bg-[#FF7600] h-2"></div>
      <div className="container mx-auto px-5 mb-10">
        <h2 className="text-4xl mt-4">Ultimas Postagens</h2>
        <BlogPostsPreview posts={result.posts.slice(0, 2)} />
        <div className="flex items-center justify-center">
          <a
            className="text-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100 outline outline-2 p-4 rounded-md"
            href="/posts"
          >
            Ver Todas as Postagens
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
