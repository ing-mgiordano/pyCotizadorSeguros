import { useCallback, useMemo, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants"

const Resultado = () => {

    const {resultado, datos} = useCotizador()
    const {marca, year, plan} = datos

    const yearRef = useRef(year)

    //useMemo y useCallback son similiaes, useMemo usa una arrowFuction y es mas rapido

    const [nombreMarca] = useMemo( () =>
        MARCAS.filter(m => m.id === Number(marca)
    ),[resultado])  //cuando cambie resultado, se hace el cambio de los datos
    //console.log(nombreMarca)

    const [nombrePlan] = useCallback(
        PLANES.filter(p => p.id === Number(plan)
    ), [resultado])
    //console.log(nombrePlan)
    //No puedo usar useCallback en year porque no tengo una funcion. Puedo usar useRef
    if(resultado === 0) return null

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow-2xl">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>

            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {nombreMarca.nombre}
            </p>

            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {nombrePlan.nombre}
            </p>

            <p className="my-2">
                <span className="font-bold">Año: </span>
                {yearRef.current}  {/* current es el valor actual */}
            </p>

            <p className="my-2 text-2xl">
                <span className="font-bold">Total Cotización: </span>
                {resultado}
            </p>
        </div>
    )
}

export default Resultado
