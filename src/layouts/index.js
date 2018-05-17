import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import '../assets/scss/index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'millen enterprises' },
        { name: 'keywords', content: 'kuat harimau, millenenterprises' },
      ]}
    />
    <Header 
      siteTitle={ data.site.siteMetadata.title }
      siteMenu = { data.site.siteMetadata.menu } />
    
      {children()}



    <Footer />
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title,    
        menu {
          key,
          title,
          url,
          type
        }
      }
    }
  }
`
