import React from 'react'

const CarDetail = (props) => {

    if (props.value) {
        return <div>{props.propName}: {props.value}<br /></div>
    } else {
        return <div></div>
    }
}

export default CarDetail