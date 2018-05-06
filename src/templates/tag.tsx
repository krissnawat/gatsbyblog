import * as React from "react"
import Helmet from "react-helmet"
import * as config from "../constants"
import ArticleList from "../components/ArticleList"
import SideBar from "../components/SideBar"

export const TagTemplate = ({pathContext, data}) => {
    const tag = pathContext.tag
    const articles = data.allMarkdownRemark.edges.map(({node}) => (
      {
        url: node.frontmatter.path,
        title: node.frontmatter.title,
        blurb: node.frontmatter.description,
        date: node.frontmatter.date,
      }
    ))
    const pageTitle = `${tag} Articles | ${config.SITE_TITLE}`
    const description = `Articles about ${tag}`
    return (
        <div className="tag-container">
          <h1>{tag}</h1>
          <ArticleList articles={articles} />
          <SideBar />
          <Helmet
            title={pageTitle}
            bodyAttributes={
              {class: "post-template"}
            }
            meta={[
              { name: "description", content: description },
              { property: "og:type", content: "website" },
              { property: "og:title", content: pageTitle },
              { property: "og:description", content: description },
              { property: "og:url", content: `${config.DOMAIN}/${tag}` },
              { name: "twitter:card", content: "summary" },
              { name: "twitter:title", content: pageTitle },
              { name: "twitter:description", content: description },
              { name: "twitter:url", content: `${config.DOMAIN}/${tag}` },
            ]}
          />
        </div>
    )
}

export default TagTemplate

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            tags
            templateKey
            path
            date(formatString: "MMMM D, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
