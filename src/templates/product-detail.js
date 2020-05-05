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
        <div className="modal-product-wrapper">
          <div className="modal-product">
            <div className="modal-product-content">
              <div className="product-description">
                <h1>{name}</h1>
                <p className="lead">{description}</p>
                {/* {modal && <p>This is modal</p>} */}
                <Link
                  to={closeTo}
                  state={{
                    noScroll: true,
                  }}
                >
                  Close [x]
                </Link>
              </div>
              <div className="product-image">
                <div className="product-image-wrapper">
                  <Img fluid={small} className="product-image-tag" />
                </div>
              </div>
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
