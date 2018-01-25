import * as React from "react"
import Helmet from "react-helmet"
import {padStart} from "lodash"
import "prismjs/themes/prism.css"
import NotFoundPage from "../pages/404"
import SideBar from "../components/SideBar"

export const Content = ({ content, className }) => <div className={className}>{content}</div>

export const HTMLContent = ({ content, className }) => <div
  className={className}
  dangerouslySetInnerHTML={{ __html: content }}
/>

export const BlogPostTemplate = ({ content, contentComponent, description, title, date, helmet }) => {
  const PostContent = contentComponent || Content
  const d = new Date(date)
  const dateTime = d.getFullYear().toString() + "-" +
  padStart((d.getMonth() + 1).toString(), 2, "0") + "-" +
  padStart(d.getDate().toString(), 2, "0")

  return (
    <div id="article" className="box post-template">
      { helmet ? helmet : ""}
      <header className="post-header post">
          <h1 className="post-title">{title}</h1>
          <section className="post-meta">
              <time className="post-date" dateTime={dateTime}>{date}</time>
          </section>
      </header>
      <article className="post">
          <section className="post-content">
            <PostContent content={content} />
          </section>
      </article>
    </div>
  )
}

const Post = ({ data }) => {
    if (typeof data === "undefined") {
      return NotFoundPage
    }
    const { markdownRemark: post } = data
    return (
        <div className="article-container">
          <BlogPostTemplate
              content={post.html}
              contentComponent={HTMLContent}
              description={post.frontmatter.description}
              helmet={
                <Helmet
                  title={`Matt Ferderer | ${post.frontmatter.title}`}
                  bodyAttributes={
                    {class: "post-template"}
                  }
                />
              }
              date={post.frontmatter.date}
              title={post.frontmatter.title}
          />
          <SideBar />
        </div>
    )
}

export default Post

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        description
      }
    }
  }
`
