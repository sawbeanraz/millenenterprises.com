import React from 'react';

import Layout from '../components/layout';
import SectionText from '../components/section-text';

import Clients from '../sections/clients';
import Featured from '../sections/featured';
import Map from '../sections/map';
import Banners from '../components/Banners';

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
    <Featured />
    <Map />
    <Clients />
  </Layout>
);

export default IndexPage;
