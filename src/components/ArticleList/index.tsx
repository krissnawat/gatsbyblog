import * as React from "react"
import {ArticlePreview, ArticlePreviewProps} from "../ArticlePreview"

export const ArticleList: React.SFC<ArticleListProps> = ({articles}) => (
    <div id="articles">
        {articles.map((props, i) => (
            <ArticlePreview key={i} {...props} />
        ))}
    </div>
)

export default ArticleList

export interface ArticleListProps {
    articles: ArticlePreviewProps[]
}
