import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FaCaretLeft, FaCaretRight, FaTimes } from 'react-icons/fa';
import pickBy from 'lodash/pickBy';
import { Link } from 'gatsby';

const ProductInfo = ({ product, closeTo }) => {
  const {
    smallImage, description, name, price, details = {},
  } = product;
  const { small } = smallImage.childImageSharp;

  const productDetails = pickBy(details, d => !!d);

  return (
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
  );
};

ProductInfo.propTypes = {
  product: PropTypes.shape({
    smallImage: PropTypes.object,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.string,
    details: PropTypes.object,
  }).isRequired,
  closeTo: PropTypes.string.isRequired,
};

export default ProductInfo;
