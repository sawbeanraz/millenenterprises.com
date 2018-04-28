import React from 'react';
import Link from 'gatsby-link';



const Jumbotorn  = ({image, title, text}) => (

  <section
      style={Object.assign({}, jumbotornStyle.container, {backgroundImage: `url(${image})`})}>      
      <div style={jumbotornStyle.content}>
        {title?<h1 className="display-1">{title}</h1>:undefined}
        {text?<p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>:undefined}        
        <Link className="btn btn-outline-light" to="about-us">
          Learn more
        </Link>
      </div>
      <div className="product-device box-shadow d-none d-md-block"></div>
      <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </section>
)
export default Jumbotorn;






const jumbotornStyle = {
  container: {
    overflow: "hidden",
    textAlign: "center",
    backgroundSize: 'cover', 
    backgroundPosition: 'center center', 
    minHeight: '100vh',     
    display: "table"
  },
  content: {
    display: 'table-cell',
    verticalAlign: 'middle',
    color: '#fff'
  }
}