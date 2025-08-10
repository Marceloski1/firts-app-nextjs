'use client'
import { useRouter } from "next/router"

export default function ButtonChange(ventana){
    const route = useRouter() ; 

    const handleChange = (e) => {
       e.preventDefault()
       if(!ventana){
    route.push('/')
       }
    route.push(`/${ventana}`)
        
    }
    return(
        <button onClick={handleChange}>
          {`Ir para ${ventana || 'principal'}`}
        </button>
    )
}