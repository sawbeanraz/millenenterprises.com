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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
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
  ],
  pathPrefix: '/millenenterprises.com',
};
