import React from 'react';

import Layout from '../components/layout';
import Jumbotorn from '../components/jumbotron';
import SectionText from '../components/section-text';

import Clients from '../sections/clients';
import Featured from '../sections/featured';
import Map from '../sections/map';

import heroImage from '../assets/images/main-harimau-banner.jpg';

const IndexPage = () => (
  <Layout>
    <Jumbotorn
      image={heroImage}
      title="Kuat Harimau"
      text="Delivered by Millen Enterprises"
      id="home"
    />
    <SectionText
      title="About"
      shaded={false}
      content={`
        <p>Official dealer for Kuat-Harimau in Nepal</p>
        <p>
          <strong>Millien Enterprises</strong> offers highest levels
          of service to our valued customer. Whether you are a small
          shop or big supermarket, you can be confident of getting
          quick and quality service.
        </p>`}
      id="about"
    />
    <Featured />
    <Map />
    <Clients />
  </Layout>
);

export default IndexPage;
