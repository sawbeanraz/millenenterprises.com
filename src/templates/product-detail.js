import React from 'react';
import PropTypes from 'prop-types';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProductDetail = ({ data }) => {
  const { product } = data;
  const { smallImage, description, name } = product;
  const { small } = smallImage.childImageSharp;
  return (
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
            <div style={{ backgroundColor: '#fff', maxWidth: '500px' }}>
              <Img fluid={{ ...small }} className="product-image" />

              <h1>{name}</h1>
              <p className="lead">{description}</p>
              {modal && <p>This is modal</p>}

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
};

ProductDetail.propTypes = {
  data: PropTypes.shape({
    product: PropTypes.shape({
      smallImage: PropTypes.object,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query($id: String!) {
    product: productsYaml(id: { eq: $id }) {
      ...ProductDetails
    }
  }
`;

export default ProductDetail;
