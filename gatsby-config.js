module.exports = {
  siteMetadata: {
    title: `AZ ZenHeads`,
    description: `Wuddup Zenheads? ITS YA BOI LUIS!`,
    siteUrl: 'https://gallant-curran-ce94f5.netlify.com',
    author: `@MnstrPenguin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AZ Zen Heads Blog`,
        short_name: `ZenBlog`,
        start_url: `/`,
        background_color: `#f4f4f4`,
        theme_color: `#1fc8db`,
        display: `minimal-ui`,
        icon: `src/images/iconw.webp`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/images`,
          name: `images`
        }
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
  ],
}
