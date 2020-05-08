import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import '../assets/scss/index.scss';

const Layout = ({
  children, showNavigation, fixedNav, title,
}) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          meta: siteMetadata {
            title
            menu {
              key
              title
              url
            }
          }
        }
      }
    `}
    render={({ site }) => (
      <Fragment>
        <Helmet
          defaultTitle={title ? `${title} | ${site.meta.title}` : site.meta.title}
          meta={[
            { name: 'description', content: 'millen enterprises' },
            { name: 'keywords', content: 'kuat harimau, millenenterprises' },
          ]}
        />
        <Header
          siteTitle={site.meta.title}
          siteMenu={site.meta.menu}
          showNavigation={showNavigation}
          fixed={fixedNav}
        />
        {children}
        <Footer />
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showNavigation: PropTypes.bool,
  fixedNav: PropTypes.bool,
  title: PropTypes.string,
};

Layout.defaultProps = {
  showNavigation: true,
  fixedNav: false,
  title: '',
};

export default Layout;
