import * as React from "react"
import Helmet from "react-helmet"
import "prismjs/themes/prism.css"

export const TagTemplate = ({pathContext, data}) => {
    const tag = pathContext.tag
    const postEdges = data.allMarkdownRemark.edges
    console.log(tag)
    console.log(postEdges)
    return (
        <div className="tag-container">
        </div>
    )
}

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
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`;
