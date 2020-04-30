import React from 'react';

import Layout from '../components/layout';
import SectionText from '../components/section-text';

import Clients from '../sections/clients';
import Map from '../sections/map';
import Banners from '../components/Banners';
import Products from '../sections/Products';

const IndexPage = () => (
  <Layout title="Home">
    <Banners />
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
    <Products />
    <Map />
    <Clients />
  </Layout>
);

export default IndexPage;
