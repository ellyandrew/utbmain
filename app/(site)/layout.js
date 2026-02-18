import Navbar from "@/components/layouts/MainHeader";
import Footer from "@/components/layouts/MainFooter";

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
}
