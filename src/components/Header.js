import React from 'react'

const Header = () => {
    return (
        <div style={{margin: '10px 0px'}}>
            <h2 className="ui header">Search for a car</h2>
            <h3 className="ui header">How to use:</h3>
            Enter the year, make, and model of the car you would like to find.
            If you allow the browser to use your location, it will find cars near you. <br />
            Otherwise, enter a location in 'advanced options.' <br />
            Click on the link icon on the accordion to be taken to the posting.
        </div>
    )
}

export default Header