import * as React from "react"
import Link from "gatsby-link"

export const Header: React.SFC<HeaderProps> = ({siteTitle, tagList}) => (
    <header id="header">
        <nav className="header-nav">
          <div className="blog-title"><Link to="/">Matt Ferderer</Link></div>
          <div className="taglist-wrapper clearfix">
            <ul id="taglist" className="taglist">
              {tagList.map(({url, title}, i) => (
                <li key={i}><Link to={url}>{title}</Link></li>
              ))}
            </ul>
          </div>
        </nav>
    </header>
)

Header.displayName = "Header"

export default Header

interface HeaderProps {
  siteTitle: string,
  tagList: HeaderTagList[]
}

interface HeaderTagList {
  url: string,
  title: string,
}
