import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ( { title, url } ) => {

    return (
        <div className="card animate__bounceIn">
            <img src={url} alt={title} />
            <p>{title}</p>
            {/* {img.title} */}
        </div>
    )
}

GifGridItem.propTypes={
    title: PropTypes.string.isRequired
}

GifGridItem.propTypes ={
    url: PropTypes.string.isRequired
}