import React from 'react'
import Link from 'gatsby-link'
import ArticleList from '../components/ArticleList'
import SideBar from '../components/SideBar'

const IndexPage = props => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  const list = posts
    .filter(post => post.node.frontmatter.templateKey === 'blog-post')
    .map(({ node: post }) => ({
      url: post.frontmatter.path,
      title: post.frontmatter.title,
      blurb: post.frontmatter.description,
      date: post.frontmatter.date,
    }))
  return (
    <div>
      <ArticleList articles={list} />
      <SideBar />
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
