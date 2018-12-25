import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Jumbotorn from '../components/jumbotron';

import heroImage from '../assets/images/main-harimau-banner.jpg';

const Products = () => (
  <Layout>
    <Jumbotorn
      image={heroImage}
      title="Products"
      text="Our products"
      id="home"
    />
    <section className="page-section" id="products">
      <div className="container">
        <h1>Products</h1>
        <StaticQuery
          query={graphql`
            query  ProductQuery {
              allMarkdownRemark {
                totalCount    
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      image       
                    }
                    excerpt
                    html
                    timeToRead
                  }
                }
              }
            }
          `}
          render={({ allMarkdownRemark }) => (
            allMarkdownRemark.edges.map(({ node }, index) => (
              <div
                className="row featurette"
                style={{
                  borderBottom: '1px solid #ddd',
                  paddingBottom: '20px',
                  marginBottom: '20px',
                }}
              >
                <div className={index % 2 === 0 ? 'col-md-7 order-md-2' : 'col-md-7'}>
                  <h2 className="featurette-heading">{node.frontmatter.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: node.html }} />
                </div>
                <div className={index % 2 === 0 ? 'col-md-5 order-md-1' : 'col-md-5'}>
                  <img
                    className="featurette-image img-thumbnail mx-auto"
                    data-src="holder.js/500x500/auto"
                    alt={node.frontmatter.title}
                    src={node.frontmatter.image}
                    data-holder-rendered="true"
                    style={{ maxWeight: '500px', maxHeight: '500px' }}
                  />
                </div>
              </div>
            )))
        }
        />
      </div>
    </section>
  </Layout>
);

export default Products;
