module.exports = {
  siteMetadata: {
    title: 'Millen Enterprises',
    menu: [
      {
        key: 'home',
        title: 'Home',
        url: '#home',
        type: 'scroll-link',
      },
      {
        key: 'about',
        title: 'About',
        url: '#about',
        type: 'scroll-link',
      },
      {
        key: 'product',
        title: 'Products',
        url: '#products',
        type: 'scroll-link',
      },
      {
        key: 'contact',
        title: 'Contact',
        url: '#contact',
        type: 'scroll-link',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'banners',
        path: `${__dirname}/src/assets/images/banners`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'client-logos',
        path: `${__dirname}/src/assets/images/clients`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'products',
        path: `${__dirname}/products`,
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-modal-routing',
      options: {
        modalProps: {
          style: {
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              zIndex: 99999,
            },
            content: {
              position: 'absolute',
              border: 'none',
              background: 'none',
              padding: 0,
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
            },
          },
          contentLabel: 'Modal',
        },
      },
    },
  ],
  pathPrefix: '/millenenterprises.com',
};
