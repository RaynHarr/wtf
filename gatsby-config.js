module.exports = {
  siteMetadata: {
    title: "Kiren's React Project",
    description: "My awesome site",
    keywords: "react, designers"
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'tjm9ck61gz6q',
        accessToken: 'cf064b24417d0539dd3ce11d7c1ac5f85080dfb5117dda97e34734704ebd63a0'
      }
    }
  ],
}
