import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import HeartIcon from 'react-icons/lib/fa/heart';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Product = ({ product }) => {
  const [hovering, setHovering] = useState(false);
  const [touched, setTouch] = useState(false);
  const { smallImage, id, name } = product;
  const { small } = smallImage.childImageSharp;
  return (
    <Link
      data-testid="post"
      to={`product/${id}/`}
      onTouchStart={() => setTouch(true)}
      onMouseEnter={() => {
        if (!touched) {
          setHovering(true);
        }
      }}
      onMouseLeave={() => {
        if (!touched) {
          setHovering(false);
        }
      }}
      className="product-link"
    >
      <div className="product">
        <Img fluid={{ ...small }} className="product-image" />
        <div className="product-spacer" />
      </div>
      {hovering && <div className="product-overlay">{name}</div>}
    </Link>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    smallImage: PropTypes.object,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default Product;

export const prodctFragment = graphql`
  fragment ProductDetails on ProductsYaml {
    id
    name
    description
    details {
      Variant
      Weight
      Usage
    }
    price
    smallImage: image {
      childImageSharp {
        small: fluid(maxWidth: 292, maxHeight: 292) {
          src
          srcSet
          aspectRatio
          sizes
          tracedSVG
        }
      }
    }
  }
`;
