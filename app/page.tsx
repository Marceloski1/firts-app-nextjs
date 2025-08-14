import Animado from "@/components/animations/animado";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import FooterLanding from "@/components/ui/footer-landing";
import Header from "@/components/ui/header";
import Section1 from "@/components/ui/section1";
import Section2 from "@/components/ui/section2";

import a16 from '../public/adri-images/a16.jpg'
import a15 from '../public/adri-images/a15.jpg'

export const runtime = "edge";

export default function Home() {
  


  return (
    <div className="font-sans bg-green-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
      
        <Section1/>
        <Section2 />

        {/* Sección 3 */}
        <section id="section3" className="mb-12">
          {/* Contenido de la sección 3 */}
        </section>

       
      </main>
      
      <FooterLanding />
    </div>
  );
}