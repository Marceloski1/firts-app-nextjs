export const runtime = "edge";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8 font-serif">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Encabezado */}
        <div className="bg-pink-600 px-6 py-8 text-center">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Para Adriana <span className="text-yellow-300">💪</span>
          </h1>
          <div className="mt-4 border-t-2 border-pink-400 w-20 mx-auto"></div>
        </div>

        {/* Mensaje principal */}
        <div className="px-6 py-8 sm:px-10">
          <h3 className="text-xl leading-relaxed text-gray-800 italic text-center mb-8">
            "Sé que estos días han sido como un partido bajo la lluvia: pesado, resbaladizo y agotador. 
            Pero si hay algo que <span className="font-bold text-pink-600">ya sabes</span> de mí, 
            es que nunca subestimo tu capacidad para ganar en cancha difícil."
          </h3>

          {/* Lista de motivación */}
          <ul className="space-y-8">
            <li className="border-l-4 border-pink-500 pl-6">
              <h4 className="text-2xl font-bold text-pink-700 mb-2">
                Eres más fuerte que tus obstáculos
              </h4>
              <p className="text-gray-700 leading-relaxed">
                ¿Recuerdas en segundo año cuando estabas estresadísima por esos exámenes? Si pudiste con eso 
                (que parecía imposible), esto es solo otro reto que <span className="font-semibold">vas a superar</span>.
              </p>
            </li>

            <li className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-2xl font-bold text-amber-700 mb-2">
                Los mundiales no se ganan en un día
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Como en el fútbol, los grandes campeonatos se juegan partido a partido. 
                Hoy puede ser 0-1, pero mañana vendrá tu <span className="italic">gol de empate</span>.
              </p>
            </li>

            <li className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-2xl font-bold text-purple-700 mb-2">
                Creo en ti
              </h4>
              <p className="text-gray-700 leading-relaxed">
                "Flaca, si el universo te puso este reto es porque sabe que eres 
                la <span className="font-extrabold">única</span> que puede superarlo... 
                y salir con <span className="font-bold">historia para contar</span>."
              </p>
            </li>
          </ul>
        </div>

        {/* Pie de página */}
        <div className="bg-gray-50 px-6 py-4 text-right border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Con todo mi cariño,<br />
            <span className="text-lg font-medium text-pink-600">Tu ex</span>
          </p>
        </div>
      </div>
    </div>
  );
}