import { useState } from "react"
import "./miorg.css"

const MiOrg = (props) => {
    // Estados - hooks
    //useState
    //useState()
    //const[nombreVariable, funcionActualizarVariable] = useState(valorInicial)
    
    // const [mostrar,actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg