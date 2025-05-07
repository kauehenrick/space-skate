import logoImg from "../assets/space-skate-logo.png";
import { PiMagnifyingGlass, PiAlien, PiHeartStraight, PiShoppingCart } from "react-icons/pi";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <header className="flex items-center justify-center gap-25 mt-2 w-full">
        <img className="h-25" src={logoImg} alt="logo space skate" />

        <search className="flex items-center justify-between w-125 h-10 border-b rounded">
          <Input className="border-0 focus-visible:border-0 focus-visible:ring-0" placeholder="Pesquisar" />
          <PiMagnifyingGlass className="cursor-pointer" />
        </search>

        <div className="flex gap-4 text-[1.438rem]">
          <PiAlien />
          <PiHeartStraight />
          <PiShoppingCart />
        </div>
      </header>
      
      <nav>
        <ul className="flex gap-20 pt-1">
          <li>ROUPAS</li>
          <li>TÊNIS</li>
          <li>SKATE SHOP</li>
          <li>ACESSÓRIOS</li>
          <li className="font-bold text-dark-purple">% PROMOÇÕES</li>
        </ul>
      </nav>
    </div>
  )
}