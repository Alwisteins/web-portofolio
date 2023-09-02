import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Navbar />
        <div className="p-5">{children}</div>
        <Footer />
      </>
    );
  }
  
  export default RootLayout;