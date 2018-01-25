import * as React from "react"
import Helmet from "react-helmet"
import "prismjs/themes/prism.css"
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
    return (
        <div className="tag-container">
          <h1>{tag}</h1>
          <ArticleList articles={articles} />
          <SideBar />
          <Helmet
            title={`Matt Ferderer | ${tag}`}
            bodyAttributes={
              {class: "post-template"}
            }
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
            date
            title
            description
          }
        }
      }
    }
  }
`;
