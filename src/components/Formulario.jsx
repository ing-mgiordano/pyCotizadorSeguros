import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"

const Formulario = () => {

   
  return (
    <>  
        <form>
            <div className="my-5">
                <label className="block mb-5 font-bold text-gray-400 uppercase">
                    Marca
                </label>
                <select 
                    name="marca"
                    id="marca"
                    className="w-full p-3 text-center bg-white border border-gray-200"
                >
                    <option value="">-- Selecciona Marca --</option>
                    
                    {MARCAS.map(marca => (
                        <option
                            key={marca.id}
                            value={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-5 font-bold text-gray-400 uppercase">
                    Año
                </label>
                <select 
                    name="ano"
                    id="ano"
                    className="w-full p-3 text-center bg-white border border-gray-200"
                >
                    <option value="">-- Selecciona Año --</option>
                    
                    {YEARS.map(year => (
                        <option
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-5 font-bold text-gray-400 uppercase">
                    Selecciona Plan
                </label>
                <div className="flex gap-3 items-center">
                    {PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label>
                                {plan.nombre}
                            </label>
                            <input 
                                type="radio"
                                name="plan"
                                value={plan.id}
                                className="cursor-pointer"
                            />
                        </Fragment>
                    ))}
                </div>
            </div>

            <input 
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-800 transition-colors text-black hover:text-white uppercase font-bold rounded-lg p-3 cursor-pointer"   
                value="Cotizar"
            />
        </form>
    </>
  )
}

export default Formulario
