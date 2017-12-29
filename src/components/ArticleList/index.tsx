import * as React from "react"
import {ArticlePreview, ArticlePreviewProps} from "../ArticlePreview"

export const ArticleList: React.SFC<ArticleListProps> = ({articles}) => (
    <div id="articles">
        {articles.map((props) => (
            <ArticlePreview {...props} />
        ))}
    </div>
)

export default ArticleList

export interface ArticleListProps {
    articles: ArticlePreviewProps[]
}
