module.exports = {
  siteMetadata: {
    title: `svachmic.cz`,
    author: {
      name: `Michal Švácha`,
      summary: `Přemýšlím, tvořím a píšu o tom.`,
    },
    hyperlinks: {
        pixeesoft: `https://pixeesoft.blog`,
        github: `https://github.com/svachmic`,
        stackoverflow: `https://stackoverflow.com/users/1196908/michal`,
    },
    description: `Osobní blog Michala Šváchy.`,
    siteUrl: `https://svachmic.netlify.app/`,
    social: {
      twitter: `miguelitinho`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Osobní blog Michala Šváchy`,
        short_name: `svachmic.cz`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#8a02bc`,
        display: `minimal-ui`,
        icon: `content/assets/blog-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-dark-mode',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}