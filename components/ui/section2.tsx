import a7 from '../../public/adri-images/a7.jpg'
import a2 from '../../public/adri-images/a2.jpg'
import a18 from '../../public/adri-images/a18.jpg'
import Card from "@/components/ui/card";
import { Card1 } from "@/types/curency-data";

export default function Section2() {
 const cardsItems = [
{
   image: a7, 
   title: 'Adriana con casco en la Cujae', 
   description: 'tú personalidad me encanta', 

} ,
 {
   image: a2, 
   title: 'Adriana sonriendo en mi pecho', 
   description: 'siempre encuentro en ti un motivo para sonreír' ,

} , 
{
   image: a18, 
   title: 'Adriana comiendo comida china', 
   description: 'eres mi mejor casualidad', 
} ,
]
 
    return (
      <section className="justify-items-center space-y-1 bg-white w-[100%]" id="section2">
   <h4 className="text-xl text-center p-4 uppercase">
    Y a pesar de todo...
   </h4>
   <div className="grid grid-cols-3 gap-3">
   {
    cardsItems.map((item:Card1 , i:number) => (
     
          <Card key={i} param={item}/>
  
    ))
   }
   </div>
     </section>
  )
}
