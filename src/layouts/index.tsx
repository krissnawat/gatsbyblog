import * as React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import Header from "../components/Header"
import Footer from "../components/Footer"
import * as config from "../constants"

import "../sass/screen.scss"

const menuLinks = [
  { url: "/", title: "Home" },
  { url: "/tag/javascript", title: "JavaScript" },
  { url: "/tag/elixir", title: "Elixir" },
  { url: "/tag/security", title: "Security" },
]

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      link={[
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "//fonts.googleapis.com/css?family=Merriweather:300,700,700italic,300italic|Open+Sans:700,400",
        },
      ]}
      meta={[
        { name: "HandheldFriendly", content: "True" },
        { name: "description", content: config.SITE_DESCRIPTION },
        { property: "og:site_name", content: config.SITE_TITLE },
        { property: "og:type", content: "website" },
        { property: "og:title", content: config.SITE_TITLE },
        { property: "og:description", content: config.SITE_DESCRIPTION },
        { property: "og:url", content: config.DOMAIN },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: config.SITE_TITLE },
        { name: "twitter:description", content: config.SITE_DESCRIPTION },
        { name: "twitter:url", content: config.DOMAIN },
        { name: "twitter:site", content: "@" + config.TWITTER },

      ]}
    >
	<html lang="en" />
    </Helmet>
    <Header siteTitle={config.SITE_TITLE} tagList={menuLinks} />
    <main id="content" className="content clearfix" role="main">
      {children()}
    </main>
    <Footer title={config.SITE_TITLE} />
  </div>
)

export default TemplateWrapper
