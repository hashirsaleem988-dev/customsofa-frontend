
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BlogListing from "@/components/blogs/blog-listing";
import BlogConsultation from "@/components/blogs/blog-consultation";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fbf6f4]">
      <Header />
      <BlogListing />
      <BlogConsultation />
      <Footer />
    </main>
  );
}
