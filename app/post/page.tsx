import PostCard from "@/components/post-card";
import { Suspense } from "react";
export const runtime = "edge";


async function getData() { 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    const data = await response.json() 

   await new Promise((resolve) => setTimeout(resolve , 4000))
    return data 
 }

 export default async function PostPages() {

    const data = await getData()
    return(
        <div>
<Suspense fallback={<div>Cargando.....</div>}> 
           {
           data.map((dato) =>
      
           <PostCard dato={dato} key={dato.id}></PostCard>
        
            )
           }
           </Suspense>
        </div>
    )
 }