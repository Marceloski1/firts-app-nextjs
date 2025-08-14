import a9 from '../../public/adri-images/a9.jpg' 
import a10 from '../../public/adri-images/a10.jpg' 
import Image from 'next/image'

export default function SectionPrincipal() {
 const imagePreSection = {
    width: '10%' ,
    height: '100%'
  }
 
    return (
     <section className="m-1 justify-items-center" id="personalSection">
          
        
        <div className="flex flex-col md:flex-row bg-white rounded-3xl lg:rounded-4xl mt-10 mb-10 overflow-hidden shadow-lg">
  {/* Imagen izquierda - oculta en móvil */}
  <div className="hidden md:block md:w-1/4">
    <Image 
      src={a9} 
      alt="Saliendo juntos por ahí a coger fresco" 
      className="w-full h-full object-cover"
      priority
    />
  </div>

  {/* Contenido central */}
  <div className="flex-1 p-6 md:p-8 flex items-center justify-center">
    <div className="max-w-2xl">
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-600 font-serif">
        Cómo me enamoré de la chica que me decía "polín"
      </h3>
      <p className="text-gray-700 leading-relaxed md:leading-loose text-justify font-serif">
        Cada día me fui haciendo, por así decirlo, más presente en el chat de ella sin que yo lo notase. 
        Un día tan indiscreto como siempre salió de beca y me colé en su auto para un aventón. 
        A la semana siguiente esa misma muchacha estaba triste y yo, altruista y sin ganas de estudiar, 
        me decidí a levantarle el ánimo. Buena charla la de esa noche.<br /><br />
        
        Hablando con ella me lancé y, luego de un poco de rechazo por su parte, 
        ella aceptó finalmente mi propuesta. Dormimos juntos esa noche y casi la mato (jajaja). 
        Al día siguiente, ella, valiente después de casi desvivirla, se me acerca y vuelve a quedarse. 
        Esa noche nos acercamos más el uno al otro.<br /><br />
        
        Con el paso del tiempo la incluí cada vez más en mi rutina. Se preocupaba por mí, 
        me alimentaba, íbamos al gimnasio juntos, salíamos juntos. Decidí llevarla a mi casa 
        en la que le regalé una carta de Yu-Gi-Oh! que se parecía a ella. A los 2 días ella 
        había cambiado la foto de perfil y decidió poner la imagen de la carta que le di. 
        En ese momento lo supe: vale la pena, aunque ya me ha dolido otras veces quiero probar de nuevo. 
        La quiero como mi novia ya. Se lo pedí al día siguiente. <span className="font-bold text-green-600">Spoiler: aceptó.</span>
      </p>
    </div>
  </div>

 
  <div className="md:w-1/4">
    <Image 
      src={a10} 
      alt="Saliendo juntos por ahí a coger fresco" 
      className="w-full h-full object-cover"
      priority
    />
  </div>
</div>
          

        </section>

  )
}
