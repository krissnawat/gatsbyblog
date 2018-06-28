---
templateKey: blog-post
path: /how-to-add-a-header
title: How to add a Header
date: 2018-01-10T20:12:23.000Z
modifiedDate: 2018-01-10T20:12:23.000Z
cover: /cover/how-to-add-a-header.png
description: This a simple & short guide on how to add a header to different server architectures.
tags:
  - Security
---

This is a short guide on how to add a header to a web server. I'm creating this to use as a refence for other posts.

If you don't know what a header is, this won't help you. You should read about [HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) and [Response Headers](https://developer.mozilla.org/en-US/docs/Glossary/Response_header) first.

If you do know what a header is, but need a quick reminder on how to add one to a server you're not familiar with or haven't used in a while, see below.

## Apache Web Servers

For Apache, edit your httpd.conf or .htaccess file to the following:

```apacheconf
Header set Content-Security-Policy-Report-Only "default-src 'none'; form-action 'none'; frame-ancestors 'none';"
```

## IIS Web Servers

1. Open IIS Manager
1. Select the site
1. Go to HTTP Response Headers and under actions click "Add". 
1. Enter the name `Content-Security-Policy-Report-Only` and value `default-src 'none'; form-action 'none'; frame-ancestors 'none';`.

## Nginx Web Servers

For Nginx, edit your nginx.conf file to below:

```nginx
add_header Content-Security-Policy-Report-Only "default-src 'none'; form-action 'none'; frame-ancestors 'none';"
```

## Netlify

If you use something awesome like [Netlify](https://www.netlify.com), they have a [how to](https://www.netlify.com/docs/headers-and-basic-auth/). Plugins also exist for frameworks like [Gatsby on Netlify](https://www.npmjs.com/package/gatsby-plugin-netlify). As of writing this, I'm using this setup for my blog & love it. I highly recommend this setup for any front end of a website unless it has a long build time & frequent updates. You get a CDN, a performance optimized configuration, continous deployment, & A/B testing for free.