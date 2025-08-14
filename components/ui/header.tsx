import Image from 'next/image'
import a14 from '../../public/adri-images/a14.jpg' 
import a21 from '../../public/adri-images/a21.jpg'

export default function Header() {
  
const imageStyle = {
  boderRadius: '50%' ,
  border: '1px solid #fff' , 

}

const headerImageStyle = { 
  width:'100%' ,  //Revisar si explotan las imagenes puede ser por esta anchura del width
  opacity:'70%' 
}


  return (
    <header className="text-center space-y-3 mb-4 font-serif justify-items-center"> 
      
       <div className="justify-items-center bg-gradient-to-r from-indigo-100 via-red-300 to-green-300">
       <h1 className="xl:text-5xl md:text-5xl text-3xl  absolute text-white font-extrabold z-1000 mt-[8%] ">Una promesa casi cumplida</h1>
    <Image
    src={a14}
    alt="Casual"
    style={headerImageStyle}
   
    />
    </div>
      
     <div className="grid grid-cols-2 font-serif text-black bg-white lg:w-[60%] w-[60%] h-[50%] p-5 rounded-xl mt-[-10%] relative opacity-80">
       <div>
       <h2 className="text-3xl text-justify mt-[10%] font-extrabold ">Para que hice está página web?</h2>  
       <h3 className="text-xl text-start  mt-[10%]"> Aquí encontraras recuerdos de nuestro tiempo juntos</h3>
       <h3 className="text-xl text-start "> Te lo prometí hace tanto tiempo que casi lo había olvidado, espero que tú no y me disculpes demorarme tanto</h3> 
       </div>
       <div className="justify-items-center p-5">
  <Image
           src={a21}
           alt={"Nuestro día de Sanvalentin"} 
           style={imageStyle}
           className=" corazon"
           />
       </div>
  </div>

      </header>
  )
}
