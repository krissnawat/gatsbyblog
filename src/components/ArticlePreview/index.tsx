import * as React from "react"

export const ArticlePreview: React.SFC<ArticlePreviewProps> = ({title, url, blurb, date}) => (
    <a className="article-link" href={url}>
        <article className="box is-link post">
            <header className="post-header">
                <h2 className="post-title">{title}</h2>
            </header>
            <section className="post-excerpt" dangerouslySetInnerHTML={{__html: blurb}} />
            <footer className="post-meta">
                <time className="post-date" dateTime={date}>{date}</time>
            </footer>
        </article>
    </a>
)

export default ArticlePreview

export interface ArticlePreviewProps {
    title: string
    url: string
    blurb: string
    date: string
}
