import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Clients = () => {
  const data = useStaticQuery(graphql`
    query {
      logos: allFile(filter: { sourceInstanceName: { eq: "client-logos" } }) {
        nodes {
          id
          childImageSharp {
            fixed(height: 200, width: 200, fit: CONTAIN) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  // simplyfy images list
  const logos = data.logos.nodes.map(({ id, childImageSharp }) => ({
    id,
    fixed: childImageSharp.fixed,
  }));

  return (
    <section className="page-section">
      <div className="container">
        <h1>Our Clients</h1>
        <div className="col-12 pt-3 pb-3 d-flex flex-column flex-md-row justify-content-around">
          {logos.map(({ id, fixed }) => (
            <Img key={id} fixed={fixed} alt="Client Logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
