import * as React from "react"

export const Header: React.SFC<HeaderProps> = ({siteTitle, tagList}) => (
    <header id="header">
        <nav className="header-nav">
          <div className="blog-title"><a href="/">Matt Ferderer</a></div>
          <div className="taglist-wrapper clearfix">
            <ul id="taglist" className="taglist">
              {tagList.map(({url, title}) => (
                <li><a href={url}>{title}</a></li>
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
