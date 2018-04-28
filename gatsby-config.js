module.exports = {
  siteMetadata: {
    title: 'Millen Enterprises',
    menu: [
      { key: 'home', title: 'Home', url: '/#home' }  ,
      { key: 'about', title: 'About', url: '/#about' },
      { key: 'product', title: 'Products', url: '/#products' },
      { key: 'contact', title: 'Contact', url: '/#contact' }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass', 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ],
}
