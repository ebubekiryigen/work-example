import React from "react"
import './cardinfo.css'

const CardInfo = ({info}) => {
    return (
       <div className="card-info">
           {info}
       </div>
    )
}

export default CardInfo