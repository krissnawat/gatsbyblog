import * as React from "react"
import Link from "gatsby-link"
import { createLinkToTag } from "../../helpers"

export const ArticleTags = ({ tags }: { tags: string[] }) => (
    <section className="post-tags">
        {tags && tags.map((tag, i) => (
            <span key={i}>
                <Link to={createLinkToTag(tag)}>{tag}</Link>
                {i !== (tags.length - 1) && <span> | </span>}
            </span>
        ))}
    </section>
)

export default ArticleTags