import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PiFlyingSaucer } from "react-icons/pi";
import bannerImg from "../assets/banner.webp";

export default function Home() {
  {
    return (
      <>
        <Header />

        <img className="w-full mt-3" src={bannerImg} alt="banner space skate" />

        <div className="flex flex-col items-center mt-4">
          <div className="flex items-center text-[1.563rem] "><div className="w-50 h-[0.005rem] bg-black mr-3" /> <p className="mr-2">FEEDBACKS DOS NOSSOS CLIENTES</p> <PiFlyingSaucer />  <div className="w-50 h-[0.005rem] bg-black ml-3" /></div>
        </div>

        <Footer />
      </>
    );
  }
}