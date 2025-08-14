'use client'
import { Card1 } from "@/types/curency-data"
import Image from "next/image"

type CardProps = {
  param: Card1
}

export default function Card(param:CardProps) {

  console.log(param)

  const styleImage = { 
    width: '200px' , 
    height: '200px', 
    
  }
  
  return (
    <div className="bg-green-100 rounded-sm p-4 m-5 justify-items-center space-y-2 text-black">
        <Image
        src={param.param.image}
        alt={param.param.title}
        style={styleImage}
        className="rounded-xl border-0"
        />
        <p className="uppercase text-center">
          {param.param.description}
        </p>
    </div>
  )
}
