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
        `cookie`,
        `vollkorn`
      ],
      display: 'swap',
    }
  },
  `gatsby-plugin-sass`,
],
}
