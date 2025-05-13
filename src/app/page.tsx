import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import bannerImg from "../assets/banner.webp";
import { PiFlyingSaucer } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image className="w-full mt-3" src={bannerImg} alt="banner space skate" />
      </main>
      <Footer />
    </>
  );
}
