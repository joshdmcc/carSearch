import React from 'react'
import CarDetail from './CarDetail'

export default class Car extends React.Component {

    toggleAccordion = (event) => {
        event.currentTarget.classList.toggle('active')
        event.currentTarget.nextSibling.classList.toggle('active')
    }
    
    render() {
        const car = this.props.car
        return (
            <div>
                <div className="title" onClick={this.toggleAccordion} style={{display: 'flex'}}>
                    <i className="dropdown icon" style={{marginTop: '3px'}}></i>
                    <div className="ui grid" style={{width: '100%'}}>
                        <div className="five wide computer eight wide mobile column">
                            {car.build.year} {car.build.make} {car.build.model}
                        </div>
                        <div className="five wide computer eight wide mobile column">
                            Vin: {car.vin}
                        </div>
                        <div className="two wide computer eight wide mobile column">
                            {car.dist ? car.dist + " miles away" : ""}
                        </div>
                        <div className="two wide computer six wide mobile column">
                            Price: {car.price ? "$" + car.price : "N/A"}
                        </div>
                        <div className="two wide computer two wide mobile column">
                            <div style={{ float: 'right' }}><a href={car.vdp_url}><i className="linkify icon"></i></a></div>
                        </div>
                    </div>
                </div>
                <div className="ui content segment" style={{margin: '0px 10px 10px 10px', padding: '10px'}}>
                    <div className="ui grid">
                        <img className="ui small image six wide computer sixteen wide mobile column" src={car.media.photo_links[0]} />
                        <div className="three wide computer six wide mobile column" style={{ margin: '10px 5px' }}>
                            <h5 className="ui header">Dealer Address:</h5>
                            {car.dealer.name} <br />
                            {car.dealer.city}, {car.dealer.state} <br />
                            {car.dealer.zip} <br />
                        </div>
                        <div className="three wide computer eight wide mobile column" style={{ margin: '10px 5px' }}>
                            <h5 className="ui header">Car details:</h5>
                            <CarDetail propName="Miles" value={car.miles} />
                            <CarDetail propName="Trim" value={car.build.trim} />
                            <CarDetail propName="Type" value={car.build.body_type} />
                            <CarDetail propName="Transmission" value={car.build.transmission} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}