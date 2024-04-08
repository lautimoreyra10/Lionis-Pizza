import Link from "next/link";
import Image from "next/image";
export const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <Image src="/Lionis.png" alt="Lionis Pizza" width={300} height={100}/>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={''}>Home</Link>
        <Link href={''}>Menú</Link>
        <Link href={''}>About Us</Link>
        <Link href={''}>Contacto</Link>
        <Link href={''} className="bg-primary rounded-full text-white px-8 py-2 ">Login</Link>
      </nav>
    </header>
  )
}