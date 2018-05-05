import * as React from "react"
import ShareButton from "../ShareButton"


export const ArticleShare = ({ link, title }: ArticleShareProps) => (
    <section className="share">
      <h4>Sharing is caring. Help spread the word &amp; share this post!</h4>
      <ShareButton shareTo="twitter" link={link} title={title} />
      <ShareButton shareTo="linkedin" link={link} title={title} />
      <ShareButton shareTo="reddit" link={link} title={title} />
      <ShareButton shareTo="facebook" link={link} title={title} />
      <ShareButton shareTo="hacker-news" link={link} title={title} />
    </section>
  )

  export default ArticleShare

  export interface ArticleShareProps {
    link: string
    title: string
  }