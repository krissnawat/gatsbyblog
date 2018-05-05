import * as React from "react"
import * as config from "../../constants"
import ArticleShare from "../ArticleShare"

export const ArticleFooter = ({ link, title }: ArticleFooterProps) => (
    <footer className="post-footer">
      <ArticleShare
        link={`${config.DOMAIN}${link}`}
        title={title}
      />
      <section className="author">
        <figure className="author-image">
          <span
            className="img"
            style={
              {
                backgroundImage: "url(/img/profile-1.jpg)",
              }
            }
          >
            <span className="hidden">{config.AUTHOR}'s Picture. Just imagine something really nice &amp; it'll be a win win for both of us.</span>
          </span>
        </figure>
        <div className="bio">
          <h4>
            <span>{config.AUTHOR}</span>
          </h4>
          <p>{config.BIO}</p>
        </div>
      </section>
    </footer>
  )

  export default ArticleFooter

  export interface ArticleFooterProps {
    link: string
    title: string
  }