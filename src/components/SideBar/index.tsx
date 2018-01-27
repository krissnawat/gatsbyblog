import * as React from "react"
import SideBox from "../../components/SideBox"
import * as config from "../../constants"

export const SideBar = () => (
    <div id="sidebar">
        <SideBox className="social clearfix">
            <ul>
                <a href="/rss.xml" target="_blank" className="social-item rss">
                    <li>
                        <i className="fa fa-rss"></i>
                    </li>
                </a>
                <a href={`https://twitter.com/${config.TWITTER}`} target="_blank" className="social-item tw">
                    <li>
                        <i className="fa fa-twitter"></i>
                    </li>
                </a>
                <a href={`https://github.com/${config.GITHUB}`} target="_blank" className="social-item github">
                    <li>
                        <i className="fa fa-github"></i>
                    </li>
                </a>
                <a href={`https://linkedin.com/in/${config.LINKEDIN}`} target="_blank" className="social-item linkedin">
                    <li>
                        <i className="fa fa-linkedin"></i>
                    </li>
                </a>
                <a href={`https://stackoverflow.com/users/1824367/${config.STACKOVERFLOW}`} target="_blank" className="social-item stackoverflow">
                    <li>
                        <i className="fa fa-stack-overflow"></i>
                    </li>
                </a>
            </ul>
        </SideBox>
        <SideBox title="About" content={config.SITE_DESCRIPTION} className="about" />
        <SideBox title="Affiliate Sponsor" className="sponsor" content={
            <p>I'm constantly learning from a wide assortment of books & websites. The one subscription I never cancel though is Pluralsight. Their library is enormous & they have awesome learning paths that allow you to see how well you know your stuff. Check out my <a href="https://app.pluralsight.com/profile/mattferderer">Pluralsight profile to see what I'm learning &amp; how I rank</a>. If you're interested in giving them a try, they offer a <a href="http://shareasale.com/r.cfm?b=652749&amp;u=1522841&amp;m=53701&amp;urllink=&amp;afftrack=">10 day free trial</a>.</p>} />
    </div>
)

export default SideBar
