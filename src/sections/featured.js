import React from 'react';

import kuatDetergentLemon from '../assets/images/products/kuat_detergent_lemonzest.png';
import kuatWashingLemon from '../assets/images/products/kuat_washing_paste_lemon.png';

const Featured = () => (
  <section className="page-section" id="products">
    <div className="container">
      <h1>Featured Products</h1>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Kuat Harimau Detergent
          </h2>
          <p className="lead">
            {`With <strong>Colour Safe Oxygen Cleaning Power</strong>, it helps 
            to oxidise and remove stubborn stains without any damaging effect 
            on your clothes. It also protects your coloured clothes by staying 
            brighter.`}
          </p>
          <p>Available in 4 exciting variants.</p>
          <ul>
            <li>Zesty Lemon</li>
            <li>Spring Floral</li>
            <li>Zingy Lime</li>
            <li>Aromatherapy</li>
          </ul>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="featurette-image img-fluid mx-auto"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            src={kuatDetergentLemon}
            data-holder-rendered="true"
          />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Kuat Harimau Dishwashing Paste</h2>
          <p className="lead">
            {`Suitable for all types of dishes and
            cooking utensils. Effective in
            removing all types of grime and
            grease especially on pots and pans.`}
          </p>
          <p>
            {`Apart from the conventional Lemon and Lime variants, Kuat Harimau 
            has added two revolutionary innovations - with natural micro 
            scrubbers (baking soda) and with natural power cleaner (vinegar).`}
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            src={kuatWashingLemon}
            data-holder-rendered="true"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Featured;
