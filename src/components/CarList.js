import React from 'react'
import Car from './Car'

const CarList = (props) => {
    const cars = props.cars.map((car) => {
        return <Car key={car.id} car={car}/>
    })

    if (props.numFound === null) {
        return <div></div>
    } else if (props.numFound === 0) {
        return <div className="ui header">No results found - try increasing search radius</div>
    } else {
        return (
            <div>
                <div className="ui header">Found {props.numFound} total result(s), showing {cars.length}</div>
                <div className="ui styled fluid accordion">{cars}</div>
            </div>
        )
    }
}

export default CarList