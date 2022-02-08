import React from 'react'
import akira from "../../assets/image/AkiraVol1.jpg"
import "./Card.css"
import star from "../../assets/svg/star.svg"
import comics from "../../assets/images"
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <Link to={`/product/${props.comics.slug}`} className="Card">
            <img className="main-img" src={comics[props.comics.img]}/>
            <h4>
                {props.comics.title}
            </h4>
            <div className="card-start">
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
            </div>
            <div className="card-price" >
                <p>CAD $</p>
                <h4>{props.comics.price}</h4>
            </div>
            <div className="card-prime">
                <span>prime</span> FREE delivery by <span className="bold">Tuesday, Feb 16</span>
            </div>
        </Link>
    )
}

export default Card