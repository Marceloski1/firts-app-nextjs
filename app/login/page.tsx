"use client"
import { useState } from "react"
import Formulario from "@/components/formulario"

export default function Login() { 
  const [name, setName] = useState<string>('')
  return( 
   <div>
    <Formulario></Formulario>
   </div>
  )
}