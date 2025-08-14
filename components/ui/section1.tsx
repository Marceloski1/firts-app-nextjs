import Animado from "../animations/animado"
import Image from "next/image"
import a16 from '../../public/adri-images/a16.jpg'

export default function Section1() {
  const poema = `
Un verano sin ser tu héroe, más que un gladiador, una bestia fui, todo por volver al trono de tu amor, pero el tiempo pasó, y este príncipe sapo, sin su dragona, triste quedó.
Me siento en un cuento de Allan Poe, pues mi suerte, desde que dijiste adiós, es como las alas negras del cuervo, oscuras sin sol.
Un verano como aquel, cultivando amarilis te vi,
carita de hada y cuerpo de ángel sutil
Ojalá una máquina del tiempo existiera, para volver a verte y amarte como debiera.
Tu cuerpo desnudo apagó mis sentidos, y con el susurro del viento divino, nuestros alientos se unieron, destino y camino.
Descongelaste el cero absoluto de mi interior, y como solías decirme cuando me faltaba valor:
"Tú puedes, corazón".
Pero ya no más…
Y ahora, como un zombi, deambulo sin fin, recordando los momentos que vivimos sin fin, esos que me hacían volar sin razón, cuando tú, cual Edison, dabas luz al corazón. 
`

  return (
<section id="section1" className="mb-12 px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative aspect-square lg:aspect-auto lg:h-96">
                <Image 
                  src={a16}
                  alt="Creo que nuestro primer día de novios o algo por el estilo, no recuerdo bien"
                  fill
                  className="object-cover rounded-tr-4xl rounded-bl-4xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                /> 
              </div>
              <Animado />
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2 bg-white">
            <p className="whitespace-pre-wrap font-black text-green-600 font-serif pl-3 pr-3 text-sm md:text-base lg:text-lg">Y ahora un poema...</p>
              <p className="whitespace-pre-wrap font-black font-serif p-3 pt-0  bg-opacity-70 rounded-lg shadow-md text-sm md:text-base lg:text-lg">
                {poema}
              </p>
            </div>
          </div>
        </section>
  )
}
