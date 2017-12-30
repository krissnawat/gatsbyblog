import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/Footer"
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  TWITTER,
  DOMAIN
} from "../constants"

import './index.css'

const menuLinks = [
  {url: "/", title: "Home"},
  {url: "/tag/javascript", title: "JavaScript"},
  {url: "/tag/elixir", title: "Elixir"},
  {url: "/tag/security", title: "Security"}
]

const TemplateWrapper = ({ children }) => (
  <div>
    {/* TODO: Remove page specific parts from meta for og and twitter. Move them to home page layout & blog page layout */}
    <Helmet
      title={SITE_TITLE}
      meta={[
        { name: 'description', content: SITE_DESCRIPTION },
        { name: 'HandheldFriendly', content: 'True' },
        { property: "og:site_name", content: SITE_TITLE},
        { property: "og:type", content: "website"},
        { property: "og:title", content: SITE_TITLE},
        { property: "og:description", content: SITE_DESCRIPTION},
        { property: "og:url", content: DOMAIN},
        { name: "twitter:card", content: "summary"},
        { name: "twitter:title", content: SITE_TITLE},
        { name: "twitter:description", content: SITE_DESCRIPTION},
        { name: "twitter:url", content: DOMAIN},
        { name: "twitter:site", content: "@"+TWITTER},
      ]}
      link={[
        {rel: "stylesheet", type: "text/css", href: "//fonts.googleapis.com/css?family=Merriweather:300,700,700italic,300italic|Open+Sans:700,400"}
      ]}
    />
    <Header 
      siteTitle={SITE_TITLE}
      tagList={menuLinks}
    />
    <main id="content" className="content clearfix" role="main">
      {children()}
    </main>
    <Footer title={SITE_TITLE} />    
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
