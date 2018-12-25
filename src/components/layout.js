import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import '../assets/scss/index.scss'
import { StaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => (
  <StaticQuery
     query={graphql`
       query LayoutQuery {
         site {
           siteMetadata {
             title,
             menu {
               key
               title
               url
               type
             }
           }
         }
       }
    `}
     render={({ site })=> (
       <>
         <Helmet
          defaultTitle={site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'millen enterprises' },
            { name: 'keywords', content: 'kuat harimau, millenenterprises' },
          ]}
        />
        <Header 
          siteTitle={ site.siteMetadata.title }
          siteMenu = { site.siteMetadata.menu } />
          {children}
        <Footer />
       </>
     )}
   />
);

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
