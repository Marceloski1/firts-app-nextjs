import Animado from "@/components/animations/animado";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import FooterLanding from "@/components/ui/footer-landing";
import Header from "@/components/ui/header";
import Section2 from "@/components/ui/section2";

import a11 from '../public/adri-images/a11.jpg'
import a15 from '../public/adri-images/a15.jpg'

export const runtime = "edge";

export default function Home() {
  
const section2Image  = { 
   width:'50%' , 
   height:'auto'
} 
const poema = `
Un verano sin ser tu héroe, más que un gladiador, una bestia fui, todo por volver al trono de tu amor, pero el tiempo pasó, y este príncipe sapo, sin su dragona, triste quedó.
Me siento en un cuento de Allan Poe, pues mi suerte, desde que dijiste adiós, es como las alas negras del cuervo, oscuras sin sol.
Un verano como aquel, cultivando amarilis te vi,
carita de hada y cuerpo de ángel sutil
Ojalá una máquina del tiempo existiera, para volver a verte y amarte como debiera.
Tu cuerpo desnudo apagó mis sentidos, y con el susurro del viento divino, nuestros alientos se unieron, destino y camino.
Descongelaste el cero absoluto de mi interior, y como solías decirme cuando me faltaba valor:
“Tú puedes, corazón”.
Pero ya no más…
Y ahora, como un zombi, deambulo sin fin, recordando los momentos que vivimos sin fin, esos que me hacían volar sin razón, cuando tú, cual Edison, dabas luz al corazón. 
`

   return (
    <div className="font-sans items-center bg-green-100 space-y-1">
<Header></Header>
      
     <main className="space-y-0.1"> 

     <section className="" id="section1">
     <div className="grid grid-cols-2">
    <div className="inline-flex">
      <Image 
      src={a11}
      alt="Creo que nuestro primer día de novios o algo por el estilo, no recuerdo bien"
      style={section2Image}
      className="rounded-tr-4xl"
      /> 
      <Animado></Animado>
      </div>
      <div className="p-2">
        <p className="whitespace-pre-wrap font-black font-serif p-2">
          {poema}
        </p>
        </div>
      
     </div>
     </section>

   <Section2></Section2>

     <section className="" id="section3">
      
     </section>

<Navbar/>
     
   </main>
    <FooterLanding/>
    </div>
  );
}
