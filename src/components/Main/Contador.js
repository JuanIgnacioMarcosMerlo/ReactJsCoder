import { useState } from "react"


function Contador() {

    let [contador,setContador] = useState(0)
    
    const sumar = () => setContador(contador + 1)
    const restar = () => { if(contador > 0) {setContador(contador - 1)}}
    const resetear = () => setContador(0)
    const agregarCarrito = () => {
        console.log({contador});
        resetear();
    }

    return (
        <div className="p-2 grow">
            <p>Contador : {contador}</p>
            <button className="border bg-blue-500 text-white p-1 rounded" onClick={sumar}>sumar</button>
            <button className="border bg-red-500 text-white p-1 rounded ml-2" onClick={restar}>restar</button>
            <button className="border bg-green-500 text-white p-1 rounded ml-2" onClick={agregarCarrito}>Agregar</button> 
            <button className="border bg-black text-white p-1 rounded ml-2" onClick={resetear}>resetear</button>
        </div>
    )
}

export default Contador