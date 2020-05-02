import React from 'react';
import PropTypes from 'prop-types';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { Link } from 'gatsby';

const ProductDetail = ({ id }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div
        style={{
          display: 'flex',
          positon: 'relative',
          height: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            width: '100%',
          }}
        >
          <div style={{ backgroundColor: '#fff' }}>
            <h1>Product Detail</h1>
            {modal && <p>This is modal</p>}
            Product:
            {' '}
            {id}
            <Link
              to={closeTo}
              state={{
                noScroll: true,
              }}
            >
              Close [x]
            </Link>
          </div>
        </div>
      </div>
    )}
  </ModalRoutingContext.Consumer>
);

ProductDetail.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductDetail;
