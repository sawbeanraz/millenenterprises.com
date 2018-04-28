import React from 'react'
import PropTypes from 'prop-types'


const Carousel = ({items}) => (    
  <div className="col-12 pt-3 pb-3 d-flex flex-column flex-md-row justify-content-around">
  {items.map((item) => (          
    <div key={item.key}
      className='carousel__item'
      style={item.image?{backgroundImage: `url(${item.image})`}:undefined}>
      {!item.image?item.title:undefined}  
    </div>
  ))}
  </div>
)

export default Carousel;

Carousel.propTypes = {
  items: PropTypes.array.isRequired
}
