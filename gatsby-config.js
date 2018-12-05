module.exports = {
  pathPrefix: '/sauron_reports',
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data`
      }
    }
  ]
}
