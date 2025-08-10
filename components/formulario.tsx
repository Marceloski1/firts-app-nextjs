'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Formulario() {
  const route = useRouter()
  const [name , setName] = useState('')
  const [password , setPassword] = useState('') 

  const handleRegister = (e) => {
    e.preventDefault()
    route.push('/')
  }

  const onSubmit = (e) => {
   e.preventDefault()
   const data = {
    name: name , 
    password: password
   }
   console.log(data)
   route.push('/')
  }

    return (
    <div>
        <form onSubmit={onSubmit}>
            <div>
             <label>Nombre de usuario</label>
            <input type="text" 
            id="name"
            onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="passord">Contraseña</label>
            <input type="number" 
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button>Click</button>
        </form>
        
    </div>
  )
}
