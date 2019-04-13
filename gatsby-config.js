require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const linkResolver = require(`./src/linkResolver`)

const {
  _pathPrefix,
  shortName,
  description,
  themeColor,
  backgroundColor,
  _title,
  _titleAlt,
  _url,
  author,
  logo,
  favicon,
  siteLanguage,
  twitter,
  facebook,
} = require(`./config/website`);

module.exports = {
  /* General Information */
  pathPrefix: _pathPrefix,
  siteMetadata: {
    title: _title,
    titleAlt: _titleAlt,
    shortName,
    author,
    siteLanguage,
    logo, // Logo for JSONLD
    url: _url,
    siteUrl: _url, // For gatsby-plugin-sitemap
    pathPrefix: _pathPrefix,
    description,
    banner: logo,
    twitter,
    facebook,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `Startabrand`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver,
      },
    },
    {
      resolve: `gatsby-plugin-prismic-preview`,
      options: {
        repositoryName: `Startabrand`,
        path: `/preview`,
        linkResolver,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PhaseCraft`,
        short_name: `phasecraft`,
        start_url: `/`,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `minimal-ui`,
        icon: favicon, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    // Must be placed at the end
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ],
};
