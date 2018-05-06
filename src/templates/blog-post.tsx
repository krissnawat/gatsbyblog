import * as React from "react"
import { Helmet } from "react-helmet"
import Link from "gatsby-link"
import { padStart } from "lodash"
import NotFoundPage from "../pages/404"
import SideBar from "../components/SideBar"
import ArticleTags from "../components/ArticleTags"
import ArticleFooter from "../components/ArticleFooter"
import * as config from "../constants"
import { createLinkToTag } from "../helpers"

export const Content = ({ content, className }) => <div className={className}>{content}</div>

export const HTMLContent = ({ content, className }) => <div
  className={className}
  dangerouslySetInnerHTML={{ __html: content }}
/>

export const BlogPostTemplate = ({ content, contentComponent, description, title, date, tags, path, cover }) => {
  const PostContent = contentComponent || Content
  const d = new Date(date)
  const dateTime = d.getFullYear().toString() + "-" +
    padStart((d.getMonth() + 1).toString(), 2, "0") + "-" +
    padStart(d.getDate().toString(), 2, "0")
  const coverImage = cover ?
    `${config.DOMAIN}${cover}` :
    `https://via.placeholder.com/1024x512/2bbdf7/FFF?text=${title}`

  return (
    <div id="article" className="box post-template">
      <Helmet
        title={`${config.SITE_TITLE} | ${title}`}
        bodyAttributes={
          { class: "post-template" }
        }
        meta={[
          { name: "description", content: description },
          { property: "og:type", content: "website" },
          { property: "og:title", content: title },
          { property: "og:description", content: description },
          { property: "og:url", content: config.DOMAIN },
          { property: "og:image", content: coverImage },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: title },
          { name: "twitter:description", content: description },
          { name: "twitter:url", content: config.DOMAIN },
          { name: "twitter:image", content: coverImage },
        ]}
      />
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
        <ArticleTags tags={tags} />
        <ArticleFooter
          link={path}
          title={title}
        />
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
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        path={post.frontmatter.path}
        tags={post.frontmatter.tags}
        cover={post.frontmatter.cover}
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
        date(formatString: "MMMM D, YYYY")
        title
        description
        cover
        tags
      }
    }
  }
`
