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
import Comments from "../components/Comments"

export const Content = ({ content, className }) => <div className={className}>{content}</div>

export const HTMLContent = ({ content, className }) => <div
  className={className}
  dangerouslySetInnerHTML={{ __html: content }}
/>

export const BlogPostTemplate = ({ content, contentComponent, description, title, date, tags, path, cover }: BlogPostTemplateProps) => {
  const PostContent = contentComponent || Content
  const d = new Date(date)
  const firstTag = (tags !== null && tags.length > 0) ? tags[0] : config.DOMAIN
  const dateTime = d.getFullYear().toString() + "-" +
    padStart((d.getMonth() + 1).toString(), 2, "0") + "-" +
    padStart(d.getDate().toString(), 2, "0")
  const coverImage = cover ?
    `${config.DOMAIN}${cover}` :
    `https://via.placeholder.com/1024x512/2bbdf7/FFF?text=${title}`

  //TODO: Add publisher logo (just name) https://developers.google.com/search/docs/data-types/article
  const googleStructuredData: ArticleStructuredData = {
    "@context": "http://schema.org",
    "@type": "Article",
    "name": title,
    "headline": title,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": config.DOMAIN
    },
    "author": {
      "@type": "Person",
      "name": config.AUTHOR
    },
    "datePublished": dateTime,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": config.AUTHOR,
      "logo": {
        "@type": "ImageObject",
        "url": `${config.DOMAIN}/img/publisher-logo.gif`
      }
    }
  }

  if (cover) {
    googleStructuredData.image = coverImage
  }

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
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(googleStructuredData)}</script>
      </Helmet>
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
        <Comments
          link={path}
          title={title}
          category_id={firstTag}
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
export interface BlogPostTemplateProps {
  content: any
  contentComponent: any
  description: string
  title: string
  date: string
  tags: string[] | null
  path: string
  cover: string
}

export interface ArticleStructuredData {
  "@context": string
  "@type": string
  "mainEntityOfPage": {
    "@type": string
    "@id": string
  }
  "name": string
  "headline": string
  "author": {
    "@type": string
    "name": string
  },
  "datePublished": string
  description: string
  image?: string
  "publisher": {
    "@type": string
    "name": string
    "logo": {
      "@type": string
      "url": string
    }
  }
}