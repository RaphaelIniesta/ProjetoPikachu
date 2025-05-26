import Image from "next/image";
import logo from "./logo.png";

export default function Logo() {
  return <Image src={logo} width={50} height={50} alt="Logo" />;
}
