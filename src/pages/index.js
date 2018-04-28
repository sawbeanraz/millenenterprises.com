import React from 'react'
import Link from 'gatsby-link'


import Jumbotorn from "../components/jumbotron"
import SectionText from '../components/section-text'

import heroImage from '../assets/images/main-harimau-banner.jpg'



const IndexPage = () => (
  <div>

    <Jumbotorn image={heroImage}
      title="Kuat Harimau"
      text="Delivered by Millen Enterprises"/>

    <SectionText title="About" 
      content='
      <p>Official dealer for Kuat-Harimau in Nepal.</p>
      <p><strong>Millien Enterprises</strong> offers highest levels of service to our valued customer. Whether you are a small shop or big supermarket, you can be 
        confident of getting quick and quality service.</p>'/>

  </div>
)

export default IndexPage
