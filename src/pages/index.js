import React from 'react'
import Link from 'gatsby-link'


import heroImage from '../assets/images/main-harimau-banner.jpg'

const IndexPage = () => (
  <div>

    <section className="overflow-hidden text-center bg-light"
      style={{backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center center', minHeight: '100vh', paddingTop: '120px'}}>      
      <div className="col-md-5 pt-5 mx-auto" style={{height: '100%'}}>
        <h1 className="display-4 font-weight-normal">Punny headline</h1>
        <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
        <a className="btn btn-outline-secondary" href="#">Coming soon</a>
      </div>
      <div className="product-device box-shadow d-none d-md-block"></div>
      <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </section>


  </div>
)

export default IndexPage
