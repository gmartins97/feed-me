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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Xau Laura",
        short_name: "Xau Laura",
        start_url: "/",
        background_color: "#292b2c",
        theme_color: "#292b2c",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    }
  ],
};
