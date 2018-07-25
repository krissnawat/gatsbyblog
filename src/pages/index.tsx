import * as React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import ArticleList from "../components/ArticleList"
import SideBar from "../components/SideBar"
import * as config from "../constants"

export const IndexPage = (props) => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark
  const now = new Date();

  const list = posts
    .filter((post) =>
      post.node.frontmatter.templateKey === "blog-post" &&
      new Date(post.node.frontmatter.date) < now
    )
    .map(({ node: post }) => ({
      url: post.frontmatter.path,
      title: post.frontmatter.title,
      blurb: post.frontmatter.description,
      date: post.frontmatter.date,
    }))
  //TODO: Change coverImage to 1200x1200 that crops nicely to 1200x630 on FB
  const coverImage = `${config.DOMAIN}/img/twitter-default.png`
  return (
    <div>
      <ArticleList articles={list} />
      <SideBar />
      <Helmet
        title={`${config.SITE_TITLE}`}
        meta={[
          { name: "description", content: config.SITE_DESCRIPTION },
          { property: "og:site_name", content: config.SITE_TITLE },
          { property: "og:type", content: "website" },
          { property: "og:title", content: config.SITE_TITLE },
          { property: "og:description", content: config.SITE_DESCRIPTION },
          { property: "og:url", content: config.DOMAIN },
          { property: "og:image", content: coverImage },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: config.SITE_TITLE },
          { name: "twitter:description", content: config.SITE_DESCRIPTION },
          { name: "twitter:url", content: config.DOMAIN },
          { name: "twitter:site", content: "@" + config.TWITTER },
          { name: "twitter:image", content: `${config.DOMAIN}/img/twitter-default.png` },
        ]}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": config.SITE_TITLE,
            "url": config.DOMAIN,
            "logo": `${config.DOMAIN}/img/profile-1.gif`,
            "sameAs": [
              "https://twitter.com" + config.TWITTER,
              "https://www.linkedin.com/in/" + config.LINKEDIN,
              "https://medium.com/@" + config.MEDIUM
              // "https://plus.google.com/+mattferderer",
              // "https://www.pinterest.com/mattferderer"
            ]
          })}
        </script>
      </Helmet>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
            description
          }
        }
      }
    }
  }
`
