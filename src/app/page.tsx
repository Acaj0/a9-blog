import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
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
    <div className="">
      <div className="h-screen bg-cover bg-top bg-no-repeat bg-[url(/fundo.jpeg)]">
        <NavBar />
      </div>
      <div className="w-screen bg-[#003F85] h-4"></div>
      <div className="w-screen bg-[#FF7600] h-2"></div>

      <div className="container mx-auto px-5 mb-10">
        <h2 className="text-4xl mt-4">Ultimas Postagens</h2>
        <BlogPostsPreview posts={result.posts.slice(0, 2)} />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
