import React from 'react';
import Carousel from '../components/carousel';

import bigmartImage from '../assets/images/clients/bigmart.png';
import salesberryImage from '../assets/images/clients/salesberry.jpg';
import salewaysImage from '../assets/images/clients/saleways.png';


const clients = [{
  key: 'bigmart',
  title: 'Big Mart Supermarket',
  image: bigmartImage,
}, {
  key: 'salesberry',
  title: 'Sales Berry',
  image: salesberryImage,
}, {
  key: 'saleways',
  title: 'Saleways',
  image: salewaysImage,
}];


const Clients = () => (
  <section className="page-section">
    <div className="container">
      <h1>Our Clients</h1>
      <Carousel items={clients} />
    </div>
  </section>
);

export default Clients;
