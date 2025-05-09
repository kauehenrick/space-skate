import Footer from "@/components/Footer";
import Header from "@/components/Header";
import bannerImg from "../assets/banner.png";


export default function Home() {
  {
    return (
      <>
        <Header />
        <img className="w-full mt-3" src={bannerImg} alt="banner space skate" />
        <Footer />
      </>
    );
  }
}