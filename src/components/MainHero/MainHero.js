import React from 'react'
import "./MainHero.css"
import comics from "../../assets/images"
import {Container} from "reactstrap"

function MainHero() {

    return (
        <div className="MainHero">
            <Container>
                    <div className="header-container">
                        <h2>Find your <br/> new book <br/> to read</h2>
                        <img src={comics.akira} />
                    </div>
                    <div className="cards-container">
                        {[].map(card => {
                            return (
                                <div className="card">
                                    <h3>{card.title}</h3>
                                    <img src={comics[card.img]} style={{width: "100%"}} alt="comics"/>
                                </div>
                            )
                        })}
                    </div>
            </Container>
        </div>
    )
}

export default MainHero