import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </>
    );
  }
  
  export default RootLayout;