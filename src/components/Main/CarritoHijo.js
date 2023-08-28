import { useState } from "react"

function CarritoHijo(props) {

    const [cantidad,setCantidad] = useState(0)

    const handleSumar = () => {
        setCantidad(cantidad + 1)
    }

    const handleConfirmar = () => {
        console.log("Confirmo cantidad")
        console.log("Cantidad es : " + cantidad)
        props.onAdd(cantidad)
    }

    return (
        <div>
            <p className="text-xl font-semibold">Cantidad : {cantidad}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2" onClick={handleSumar}>+</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-2 ml-2"
                    onClick={handleConfirmar}>confirmar</button>
        </div>
    )
}

export default CarritoHijo