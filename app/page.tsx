import Link from "next/link";

export default function Home() {
    const p = {
      edad:23 , 
      nombre:'pedro' , 
      tipo_sangre: 'O+'
    }

    const p2 = {
      edad:32 , 
      nombre:'pedrito' , 
      tipo_sangre: 'O-'
    }


   return (
    <div className="font-sans items-center justify-items-center sm:p-20 ">
     <main className="grid grid-cols-2">
          <div className="m-2 p-2 text-red-400 bg-blue-100 rounded-xl">
            {p.edad}
          </div>
   </main>
     <footer className="">
      <div>
        <span>Hola como estas </span>
      </div>
     </footer>
    </div>
  );
}
