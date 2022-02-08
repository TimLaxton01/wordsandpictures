import React from 'react'
import Card from '../Card/Card'
import {Container} from "react-bootstrap"

function CardDisplay({comics}) {

    return (
        <div className="card-display">
            <Container className="card-display-container">
                {comics.map(comic => {
                    return <Card comic={comic} />
                })}
            </Container>
        </div>
    )
}

export default CardDisplay