import React from 'react';
import PropTypes from 'prop-types';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaCaretLeft, FaCaretRight, FaTimes } from 'react-icons/fa';
import pickBy from 'lodash/pickBy';

const ProductDetail = ({ data }) => {
  const { product } = data;
  const {
    smallImage, description, name, price, details = {},
  } = product;
  const { small } = smallImage.childImageSharp;

  const productDetails = pickBy(details, d => !!d);

  return (
    <ModalRoutingContext.Consumer>
      {({ closeTo }) => (
        <div className="modal-product-wrapper">
          <div className="modal-product">
            <FaCaretLeft className="product-icons-button" />
            <div className="modal-product-content">
              <div className="product-description">
                <h4>{name}</h4>
                <p>{description}</p>
                {price && <strong>{price}</strong>}
                {Object.keys(productDetails).map(detailKey => (
                  <p key={detailKey}>{`${detailKey} : ${productDetails[detailKey]}`}</p>
                ))}
              </div>
              <div className="product-image">
                <div className="product-image-wrapper">
                  <Img fluid={small} className="product-image-tag" />
                </div>
              </div>
            </div>
            <FaCaretRight className="product-icons-button" />
            <Link
              to={closeTo}
              state={{
                noScroll: true,
              }}
            >
              <FaTimes className="product-icons-button close-icon" />
            </Link>
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
      price: PropTypes.string,
      details: PropTypes.object,
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
