import { useState } from "react"
import CarritoHijo from "./CarritoHijo"

function Carrito() {

    const [selectedCant,setSelectedCant] = useState(0)

    const onAdd = (cantidad) => { 
        if(cantidad === 0){
            setSelectedCant(cantidad)
        }else{
            setSelectedCant(cantidad)
        }
    }

    return (
        <div className="bg-gray-100 p-4 rounded shadow-md">
            <p className="text-xl font-semibold">Cantidad seleccionada desde el componente hijo : {selectedCant}</p>
            <CarritoHijo
                onAdd={onAdd}
            />
        </div>
    )
}

export default Carrito