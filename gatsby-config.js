const config = require('./src/constants')
const csp = require('./csp-policy')

module.exports = {
  siteMetadata: {
    title: config.SITE_TITLE,
    siteUrl: config.DOMAIN,
    description: config.SITE_DESCRIPTION,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        path
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      }, 
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            `Strict-Transport-Security: max-age=63072000; includeSubdomains; preload`,
            `Expect-CT: max-age=0, report-uri=https://${config.REPORTURI}.report-uri.com/r/d/ct/reportOnly`,
            `Link: </screen.css>; rel=preload; as=style`,
            `Content-Security-Policy-Report-Only: ${csp.report} report-uri https://${config.REPORTURI}.report-uri.com/r/d/csp/wizard`,
            //`Content-Security-Policy: ${csp.policy} upgrade-insecure-requests; report-uri https://${config.REPORTURI}.report-uri.com/r/d/csp/enforce`,            
          ],
        },
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            if (
              edge.node.path.includes('tag/') ||
              config.DOMAIN + '/' === site.siteMetadata.siteUrl + edge.node.path
            ) {
              return {
                url: site.siteMetadata.siteUrl + edge.node.path,
                changefreq: `daily`,
                priority: 0.9,
              }
            }
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `monthly`,
              priority: 0.7,
            }
          }),
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://mattferderer.com`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-7360525-1',
        anonymize: true,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "GatsbyJS",
    //     short_name: "GatsbyJS",
    //     start_url: "/",
    //     background_color: "#f7f0eb",
    //     theme_color: "#a2466c",
    //     display: "minimal-ui",
    //     icons: [
    //       {
    //         // Everything in /static will be copied to an equivalent
    //         // directory in /public during development and build, so
    //         // assuming your favicons are in /static/favicons,
    //         // you can reference them here
    //         src: `/favicons/android-chrome-192x192.png`,
    //         sizes: `192x192`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `/favicons/android-chrome-512x512.png`,
    //         sizes: `512x512`,
    //         type: `image/png`,
    //       },
    //     ],
    //   },
    // },
  ],
}
