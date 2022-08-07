module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `lato`,
        `open-sans`,
        `mulish`,
        `cookie`,
        `vollkorn`,
        `dancing-script`
      ],
      display: 'swap',
    }
  },
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-helmet`,
],
}
