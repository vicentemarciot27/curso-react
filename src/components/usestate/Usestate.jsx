import React, { useState } from "react";

export default props =>{

    const [texto, setTexto] = useState("")
    return(
        <div className="Input">
            <input type="text" value={texto} onChange={(e)=>{setTexto()}}/>
        </div>
    )
}