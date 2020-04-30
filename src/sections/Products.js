import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import chunk from 'lodash/chunk';
import { Container } from 'reactstrap';

import Product from '../components/Product';

const Products = () => {
  const { allProductsYaml } = useStaticQuery(graphql`
    query {
      allProductsYaml {
        edges {
          node {
            ...ProductDetails
          }
        }
      }
    }
  `);

  const products = allProductsYaml.edges.map(e => e.node);

  return (
    <section className="page-section" id="products">
      <Container>
        <h1>Products</h1>
        <hr className="featurette-divider" />
        {chunk(products, 3).map((productChunk, i) => (
          <div className="products" key={`chunk-${i}`}>
            {productChunk.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Products;
