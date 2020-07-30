import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css'

export class Image extends Component {

    render() {
        const { state } = this.props
        const { alcoholic, category, images } = state
        console.log(images.length)
        var imagepreview = images.map((image) => {
            return (
                <div className="card" >
                    <img src={image.strDrinkThumb} alt="Card image cap" />
                    <div className="body">
                        <h1>{image.strDrink}</h1>
                        <span >{alcoholic}</span><span >{category}</span>
                    </div>
                </div>
            )
        })

        return (
            <div className="dispay" >
                {imagepreview}
            </div >
        )
    }
}

Image.propTypes = {
    images: PropTypes.array.isRequired
}
export default Image
