'use client'
import { useParams } from "next/navigation";

async function getData(id:number){
 const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); 
const data = await response.json()

return data.body
}

 export default  function Props({params}){
   
    //const value =  getData(params.id)

    const value = useParams()
    console.log(value)
   // console.log({param:param})
     return (
        <div>
            <h1>
                {value.id}
            </h1>
        </div>
    )
}