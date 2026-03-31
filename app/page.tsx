import { Button } from "@/components/ui/button";
import Image  from "next/image";
import Logo from '../assets/logo.svg'
import {Camera, CameraIcon} from 'lucide-react'
import LandingImg from '../assets/main.svg'
import Link from "next/link";

export default function Home() {
  return (
<main>
  <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
    <Image src={Logo} alt="logo" />
  </header>
  <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
    <div>
      <h1 className="capitalize text-4xl md:text-7xl font-bold">Job <span className="text-primary">tracking</span> </h1>
      <p className="leading-loose max-w-md mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, id ea rem excepturi alias libero nobis maxime, illo quia numquam exercitationem maiores, molestiae doloribus eius? Consectetur autem fugit ipsa delectus.</p>
   <Button asChild className="mt-4">
   <Link href='/add-job' >Get Started</Link>
   </Button>
    </div>
    <Image src={LandingImg} alt="landing" className="hidden lg:block" />
  </section>
</main>
  );
}