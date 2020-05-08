import React from 'react';
import PropTypes from 'prop-types';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ProductInfo from '../components/ProductInfo';

const ProductDetail = ({ data }) => {
  const { product } = data;
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (modal ? (
        <ProductInfo closeTo={closeTo} product={product} />
      ) : (
        <Layout>
          <ProductInfo closeTo={closeTo} product={product} />
        </Layout>
      ))
      }
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
