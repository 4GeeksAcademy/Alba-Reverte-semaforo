import React, {useState} from "react";

export const Semaforo = () => {
    const [color, setColor] = useState("");

    const changeColor = (colorActual) => {
        setColor(colorActual)
    }

    return (

        <div className="trafficTop container">
          <div className="palito"></div>
             <div className="caja d-flex flex-column align-items-center bg-dark w-25">
               <button onClick={()=> changeColor ("red")} 
                className={`red light bg-danger ${color === "red"?"selected" : ""}`}></button>
               <button onClick={()=> changeColor ("yellow")}
               className={`yellow light bg-warning ${color === "yellow"?"selected" : ""}`}></button>
               <button onClick={()=> changeColor ("green")}
               className={`green light bg-success ${color === "green"?"selected" : ""}`}></button>
            </div>
         </div>

)
}

