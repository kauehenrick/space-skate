import { PiEnvelope, PiPhone, PiWhatsappLogo } from "react-icons/pi";
import logoImg from "../assets/space-skate-logo.png";

const FooterTopic = (topicTitle: string, topicContent: string[]) => {
  return (
    <ul>
      <p className="font-bold mb-2">{topicTitle}</p>
      {topicContent.map((item, index) => (
        <li className="text-[0.813rem] mb-1 text-primary-gray hover:text-black duration-800 cursor-pointer" key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="flex absolute bottom-0 justify-center border-t py-5 gap-25 w-full">
      <div className="flex gap-12.5">
        {FooterTopic("INSTITUCIONAL", ["Home", "Sobre a Space Skate", "Avaliações dos clientes"])}

        {FooterTopic("ATENDIMENTO", ["Trocas e devoluções", "Fale conosco"])}

        <div>
          {FooterTopic("CONTATO", ["Entre em contato conosco"])}

          <ul>
            <li className="flex items-center gap-[0.188rem] text-[0.813rem] mb-1 text-primary-gray hover:text-black duration-800 cursor-pointer"><PiPhone /> (11) 9 9999-9999</li>
            <li className="flex items-center gap-[0.188rem] text-[0.813rem] mb-1 text-primary-gray hover:text-black duration-800 cursor-pointer"><PiWhatsappLogo /> (11) 9 9999-9999</li>
            <li className="flex items-center gap-[0.188rem] text-[0.813rem] mb-1 text-primary-gray hover:text-black duration-800 cursor-pointer"><PiEnvelope /> spaceskateshop@gmail.com</li>
          </ul>
        </div>
      </div>

      <img className="h-37.5" src={logoImg} alt="logo space skate" />
    </footer>
  )
} 