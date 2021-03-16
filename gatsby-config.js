module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: "feed-me",
    author: "@limadelrey, @thegoncalomartins",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-ngrok-tunneling`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout.js`
      }
    }
  ],
};
