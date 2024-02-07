import React from "react"
import "./card.css"
import CardTitle from "../cardTitle/cardtitle.js"
import CardImage from '../cardImage/cardImage.js'
import CardInfo from '../cardInfo/cardinfo.js'


const Card = ({title,image,info,price}) => {
    return(
          <div className="card">
                  <div className="card-body">
                     <CardTitle title={title} />
                     <CardImage url={image} />
                     <CardInfo info={info} />
                     <CardInfo info={price + " TL"} />
                  </div>
          </div>
    )
}

export default Card