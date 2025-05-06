import logoImg from "../assets/space-skate-logo.png";
import { PiMagnifyingGlass, PiAlien, PiHeartStraight, PiShoppingCart } from "react-icons/pi";

export default function Header() {
  return (
    <header className="flex items-center">
      <img className="w-38" src={logoImg} alt="logo space skate" />

      <search className="flex items-center justify-between w-125 h-10 border-b rounded">
        <p className="text-sm">Pesquisar</p>
        <PiMagnifyingGlass />
      </search>

      <div className="flex gap-4 text-[23px]">
        <PiAlien />
        <PiHeartStraight />
        <PiShoppingCart />
      </div>
    </header>
  );
}