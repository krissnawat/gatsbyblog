---
templateKey: blog-post
path: /what-is-csp-and-how-to-add-it-to-your-website
title: What is CSP? Why & How to Add it to Your Website
date: 2018-04-22T20:12:23.000Z
cover: /cover/what-is-a-csp.png
description: Cross-Site Scripting (XSS) sucks! It's found in 2 out of 3 websites. A CSP policy can help you avoid most XSS attacks. Here's how to add one and monitor it with ease.
tags:
  - Security
---
Cross-Site Scripting (XSS) sucks! Someone sneaks some JavaScript into your site through a comment, a form, one of the ads you display or an NPM package that's part of your JavaScript build. Now they own every user's account that is visiting your website or app. XSS is such a common attack, [OWASP claims you can find it in 2 out of every 3 websites & apps](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project).

CSP (Content Security Policy) is a HTTP header you send that will shut down the majority of XSS attacks. Since CSP can block one of the most common attacks known, you think everyone would be using it, right? Nope! [Less than 2.5% of the top million visited sites use it](https://scotthelme.co.uk/alexa-top-1-million-analysis-february-2018/). The depressing fact, for most websites security is an afterthought. That is until someone steals all their data & the public rages on social media forcing the organization to fire someone.

Let's take a look at how we can avoid such a mess.

## How to Add a CSP Policy

The first step is to add a [header to your server configuration](https://mattferderer.com/how-to-add-a-header). We are going to create as strict of a CSP rule as possible from the start but set it to a report only mode. That way we can create a report on what would happen if we blocked everything possible. Once we have our report we can start picking which items we want to allow, which items to create alternate fixes for and which items, if any, we want to block.

Here's the header we want to add:

```
Content-Security-Policy-Report-Only: default-src 'none'; form-action 'none'; frame-ancestors 'none';
```

![Once added to your website, your CSP should appear with your other headers when viewing in your developer tools](img/csp-header-strict-example.png) Your CSP should appear along with your other headers when viewing your page in the browser's developer tools.

If we don't set it to report mode, you will see "The full power of CSP Policies" & it will block the majority of your website. That is the role of CSP, block anything you haven't allowed.

If you open up your developer tools in your browser (F12) you should see a lot of errors. The first error might complain about lacking a report-uri but we'll get to that later. The rest should all start with [Report Only]. Those will all tell you the CSP values to add if you want to allow that content. The old fashioned way of doing this is to go to each page on your site, check for these errors & fix them. If you have the free time to do it this way, great! You might even enjoy this nice [extension](https://chrome.google.com/webstore/detail/csp-mitigator/gijlobangojajlbodabkpjpheeeokhfa) that makes it a little less painful. The fine folks at [Tala Security](https://www.talasecurity.io/) pointed out to me a while back that a CSP is not a set it & forget it tool. As you update your site or the services you rely on get updated, your CSP will need to adjust. Fortunately we can include a url to send CSP errors to.

If you already have an error logging service, you could use that. If you're looking for a free & easy method though, I like the free service [Report-URI](https://report-uri.com/). Besides CSP, they also offer a ton of other free monitoring.

## Report URI

