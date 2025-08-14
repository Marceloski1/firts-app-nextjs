'use client'
import Link from "next/link"
import Image from "next/image"
import a15 from '../../public/adri-images/a15.jpg'

export default function FooterLanding() {
  
  const footerStyle = {
    width: '100%' , 
    height: '400px'
  }

  return (
    <footer className="text-xl text-white w-full  mx-auto w-100 font-serif ">
      <div className="justify-items-end text-end text-white mb-1">
        <Link href={'/motivar'} className="text-end bg-green-200 rounded-xl p-2"> Extra</Link>
        
        </div>
      <div className="space-x-3 space-y-3">
         <div className="absolute font-black font-sans font text-2xl"> 
       <div className="text-center">
        <p>Cuidate mucho espero encuentres alguien mejor👋</p>
         <span>Gracias por ese hermoso año juntos 💘</span>
        <p>Se grande princesa</p>
        </div>
       
        </div>
        <Image 
        src={a15}
        alt="Los Beatles"
        
        />
       
      </div>
     </footer>
  )
}
