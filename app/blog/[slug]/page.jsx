
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BlogListing from "@/components/blogs/blog-listing";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fbf6f4]">
      <Header />
      <BlogListing />
      <Footer />
    </main>
  );
}
