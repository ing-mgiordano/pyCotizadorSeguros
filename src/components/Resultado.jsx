import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants"

const Resultado = () => {

    const {resultado, datos} = useCotizador()
    const {marca, year, plan} = datos

    const [nombreMarca] = MARCAS.filter(m => m.id === Number(marca))
    console.log(nombreMarca)

    if(resultado === 0) return null

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow-2xl">
            <h2 className="text-gray-600 font-black text-3xl">
                resumen
            </h2>

            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {nombreMarca.nombre}
            </p>
        </div>
    )
}

export default Resultado
