"use client"

import Link from "next/link"
export default function PostCard({dato}){
   return (
   <div>
    <ul>               
         
            <Link href={`/post/${dato.id}`}>
            <h1>{dato.id}. {dato.title}</h1>
            </Link>
         
            <li>{dato.body}</li>
            </ul> 
            <button onClick={() => {
                alert(dato.id)
            }}>
                Click
            </button>
            
    </div>
   
   )
}