import React from 'react'
import Link from 'gatsby-link'
import ArticleList from '../components/ArticleList'
import SideBox from "../components/SideBox"
import { 
  SITE_TITLE,
  SITE_DESCRIPTION,
  TWITTER,
  STACKOVERFLOW,
  LINKEDIN,
  GITHUB
} from "../constants"

const list = [
  {
    url: "#",
    title: "Test",
    blurb: "blurb...",
    date: "12-12-2017",
  },
  {
    url: "#",
    title: "Test 2",
    blurb: "blurb. 2..",
    date: "12-12-2017",
  }
]

const IndexPage = () => (
  <div>
    <ArticleList articles={list} />
    <div id="sidebar">
      <SideBox className="social clearfix">
        <ul>
          <a href="/rss/" target="_blank" className="social-item rss">
            <li>
              <i className="fa fa-rss"></i>
            </li>
          </a>
          <a href={`https://twitter.com/${TWITTER}`} target="_blank" className="social-item tw">
            <li>
              <i className="fa fa-twitter"></i>
            </li>
          </a>
          <a href={`https://github.com/${GITHUB}`} target="_blank" className="social-item github">
            <li>
              <i className="fa fa-github"></i>
            </li>
          </a>
          <a href={`https://linkedin.com/in/${LINKEDIN}`} target="_blank" className="social-item linkedin">
            <li>
              <i className="fa fa-linkedin"></i>
            </li>
          </a>
          <a href={`https://stackoverflow.com/users/1824367/${STACKOVERFLOW}`} target="_blank" className="social-item stackoverflow">
            <li>
              <i className="fa fa-stack-overflow"></i>
            </li>
          </a>
        </ul>
      </SideBox>
      <SideBox title="About" content={SITE_DESCRIPTION} className="about" />
      <SideBox title="Affiliate Sponsor" className="sponsor" content={
        <p>I'm constantly learning from a wide assortment of books &amp; websites. The one subscription I never cancel though is Pluralsight. Their library is enormous &amp; they have awesome learning paths that allow you to see how well you know your stuff. Check out my <a href="https://app.pluralsight.com/profile/mattferderer">Pluralsight profile to see what I'm learning &amp; how I rank</a>. If you're interested in giving them a try, they offer a <a href="http://shareasale.com/r.cfm?b=652749&amp;u=1522841&amp;m=53701&amp;urllink=&amp;afftrack=">10 day free trial</a>.</p>} />
    </div>
  </div>
)

export default IndexPage
