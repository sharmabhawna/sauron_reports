module.exports = {
  pathPrefix: '/sauron_reports',
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data`
      }
    }
  ]
}
