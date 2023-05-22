import React from "react"

export default function Comparametro(props){
    console.log(props)
    return(
        <div>
            <h2>Oi</h2>
            <h2>{props.título}</h2>
            <h3>{props.subtítulo}</h3>
        </div>

    )
}