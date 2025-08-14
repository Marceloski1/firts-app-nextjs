import Image from "next/image";
import FooterLanding from "@/components/ui/footer-landing";
import Header from "@/components/ui/header";
import Section1 from "@/components/ui/section1";
import Section2 from "@/components/ui/section2";
import SectionPrincipal from "@/components/ui/section-principal";
import dynamic from 'next/dynamic';

import liana from '../public/liana-flores.jpg' 

export const runtime = "edge";

export default function Home() {

  const lianaStyle = {
    width: '100%' , 
    height: '100px'
  }

  
 
  return (
    <div className="font-sans bg-green-50" id="confetti-area">
      <Header />
     
      <main className="container mx-auto py-8">
        <SectionPrincipal/>
        <Section1/>
        <div className="ml-[-100] mr-[-100]" >
        <Image 
         src={liana}
         alt="Flores para ti"
        style={lianaStyle}
        />
        </div>
        <Section2 />       
      </main>
      <FooterLanding />
    </div>
  );
}