---
templateKey: blog-post
path: /understand-the-risks-of-not-having-a-secure-website
title: 80% of the Top Million Websites are Making this Mistake
date: 2017-06-29T02:37:46.000Z
description: You put some trust in me by clicking a sensational headline I wrote. In return let me cut to the chase because your time is important. Over 80% of the top million websites either don't have a secure HTTPS website or they have one and don't force all their traffic to use it. This can cripple your business, even if you're not doing any financial transactions. 
tags:
  - SSL
  - Security
  - Business
---
You put some trust in me by clicking a sensational headline I wrote. In return let me cut to the chase because your time is important. [Over 80%](https://docs.google.com/spreadsheets/d/1IvrkNgwBLf88XQUoUUHmgNeIJAGKZPdA5HRJ6_KoUe8/edit#gid=1080831907&range=R254) of the top million websites either don't have a secure HTTPS website or they have one and don't force all their traffic to use it. This can cripple your business, even if you're not doing any financial transactions. 

An HTTPS website creates a secure channel between you & your audience. Without it, anyone can intercept & change the conversation you're having. Imagine if you sent a letter to someone & the mail carrier opened it, read it, and then either modified it or inserted a completely different letter. That is exactly the kind of thing that happens to websites that are not secured with HTTPS. 

For the sake of abbreviate, there are two types of websites I want to talk about - HTTP and HTTPS. HTTPS websites often have a combination of green text in the browser's address bar and a padlock next to the website address. An HTTP site will have none of that. 

![Clear Sans typeface](../../img/secure-url.jpg)
![Clear Sans typeface](non-secure-url.jpg)

<figure style="text-align:center;"> 
<img src="https://s3-us-west-2.amazonaws.com/mf-content/secure-url.jpg" alt="Secure HTTPS Website in the Chrome web browser"> 
<figcaption>Secure HTTPS Website in the Chrome web browser.</figcaption> 
</figure>

<figure style="text-align:center;"> 
<img src="https://s3-us-west-2.amazonaws.com/mf-content/non-secure-url.jpg" alt="Not Secure HTTP Website in the Chrome web browser"> 
<figcaption>Not Secure HTTP Website in the Chrome web browser.</figcaption> 
</figure>


Now maybe you're not a bank or a store that sells products on your website. It's common to think because you don't fall into one of these categories you don't need a secure website. Your website is still akin to the storefront of your company's brand or your personal brand. You are at least trying to sell your ideas to people. It's kind of like how I'm trying to sell you on securing your website. Needless to say you probably don't want to see someone taking your message & messing with it.

I keep mentioning someone messing with your website content and changing it. Without an HTTPS website, anyone can intercept your website's content & alter it before it gets to your visitors. [Countries do it](https://arstechnica.com/security/2015/04/meet-great-cannon-the-man-in-the-middle-weapon-china-used-on-github/) and [Internet Service Provider's](http://www.infoworld.com/article/2925839/net-neutrality/code-injection-new-low-isps.html) love to do it. From your local home internet provider, to hotels, gyms & even airplanes. You may not have even realized you experienced it. Many Internet Service Providers love to inject advertisements on to websites as a way to boost profits. My own internet provider tries to steal search results & get you to use their search engine. 

<figure> 
<img src="https://s3-us-west-2.amazonaws.com/mf-content/apple-store.jpg" alt="Not Secure HTTP Website in the Chrome web browser"> 
<figcaption>Apple's Store website at one time allowed you to browse the site before you ordered products with HTTP. <a href="http://zmhenkel.blogspot.com/2013/03/isp-advertisement-injection-cma.html">Zachary Henkel</a> captured this image of his Internet Service Provider CMA Communications injecting an H&R Block ad on to Apple's website. 
</figcaption> 
</figure>
Let me stop you before you run away thinking "this isn't happening on my website, I just looked at it yesterday." Just because you don't see it when you visit your website, doesn't mean it's not happening to your customers. You may also be thinking that an H&R Block advertisement isn't going to stop people from buying the latest iMac. What if that H&R Block advertisement had been for a Windows Surface laptop instead? 

Insecure websites aren't only bad for your business, they're bad for your customers as well. If a customer fills out a form, someone at the same coffee shop or in the same airport could easily intercept the form. The website may never even receive the form submission. It's still common to see banks host login forms to the "secure" part of their website on a non-secure webpage. This has prompted companies like Google & Mozilla to start alerting users of Chrome & Firefox web browsers. 

<figure> 
<img src="https://s3-us-west-2.amazonaws.com/mf-content/firefox-http-login.jpg" alt="Firefox browser warning the website login is not secure"> 
<figcaption>Firefox tries to warn users of insecure websites by showing a symbol next to the URL. Firefox also has a pop up as soon as you click on a username or password field on an insecure site.</figcaption> 
</figure>

<figure>  
<img src="https://s3-us-west-2.amazonaws.com/mf-content/chrome-http-login.jpg" alt="Chrome browser warning the website is insecure with the words Not Secure in the address bar">  
<figcaption>Chrome browsers label the website as not secure next to the address.</figcaption>  
</figure>

This becomes a huge problem for websites selling products and financial institutions. Customers will question doing business with websites that have any of the above warnings. There is also a high chance of getting called out on Twitter.

<div style="margin:0 auto; max-width:500px"><blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/FedExHelp">@FedExHelp</a> INSECURE login form on your homepage? Absolutely unacceptable! <a href="https://t.co/N8A2w1Re9v">pic.twitter.com/N8A2w1Re9v</a></p>&mdash; David (@kayhadrin) <a href="https://twitter.com/kayhadrin/status/873730104240754688">June 11, 2017</a></blockquote></div>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Creating a secure website is a fairly easy process. You can get a free SSL Certificate at [Let's Encrypt](https://letsencrypt.org/). Once you have it installed, you can test your implementation with services like [SSL Labs](https://www.ssllabs.com/ssltest/). SSL Labs will give you suggestions on what to improve and how to do it. You can skip both these steps if you use a free service like [CloudFlare](https://cloudflare.com). CloudFlare is a CDN that has an awesome free tier. You not only get a free SSL certificate but their implementation scores high marks on SSL Labs' tests.

## Any HTTP Traffic is Bad Traffic

Simply enabling HTTPS is only half the battle. We also need to make sure to prevent any HTTP traffic at all. 

Security researcher Troy Hunt did a demo showing what is possible if you simply try to redirect your visitors to the HTTPS website. 

<figure>  
<img src="https://s3-us-west-2.amazonaws.com/mf-content/american-express.jpg" alt="Chrome browser warning the website is insecure with the words Not Secure in the address bar">  
<figcaption>A demo of the <a href="https://www.troyhunt.com/understanding-http-strict-transport/">American Express website's content being redirected to a different website by Troy Hunt</a> for anyone on the same network as him.
</figcaption>  
</figure>

In the above image, Troy Hunt captures any HTTP requests to American Express and redirects them before the web server can. Troy did this by being on the same network as the computer trying to access American Express's website. In this demo, Troy makes the new website very obvious. If Troy was doing this for malicious reasons though, he could have made a clone of American Express's website that sends all the visitor's data to him instead.

Once again there is an easy fix to this. It's an item in the SSL Labs test that is easy to overlook called HSTS & HSTS preloading. SSL Labs gives you a nice kudos if you implement this but it doesn't warn you if you don't. HSTS is a header (additional information) your website sends to the browser that says "only load this site using HTTPS, do *not* load this as a regular HTTP insecure website." HSTS tells the web browser to skip the HTTP request & send it directly to the HTTPS version of your website. HSTS prevents anyone from sneaking into your traffic conversation during the original HTTP request. If you use CloudFlare they offer a button to enable HSTS. Otherwise, you simply need to [add the header to your website's responses](https://https.cio.gov/hsts/).

## One More Small Problem

Unfortunately HSTS has one problem. A user needs to visit your website at least once before your web browser learns of your HTTPS only requirement. That means on the first visit, someone who types in http://yourwebsite.com would still be sent to your HTTP version of your website before being redirected to the HTTPS version. We want to prevent that because it still provides a small opportunity for someone to intercept your website like Troy did. This is where the aforementioned HSTS preloading comes in. You can register your website at [https://hstspreload.org/](https://hstspreload.org/). By doing this, you are requesting the major web browsers to add you into a special list. That list tells their web browsers to never attempt an insecure HTTP request to your site. 

There is one caveat to be aware of with HSTS Preload. When you add it on a domain, all sub-domains are included in the list automatically. That means if you register https://mywebsite.com, web browsers will expect sub-domains like https://dev.mywebsite.com to be HTTPS as well. For most websites, this is not a big deal. Especially since you can do it for free.

## Additional Safety Nets 

If you have any type of form or if your site has sensitive data, you can run an extra set of tests at [SecurityHeaders.io](https://securityheaders.io/). Remember that statistic about less than 80% of the top million sites being secure? The majority of the ones that are secure, [score low](https://scotthelme.co.uk/alexa-top-1-million-crawl-aug-2016/) on this test.  SecurityHeaders.io gives great guides on how to fix any test your site fails. Scoring a perfect score on this site can be a bit difficult though. Most of the tests are easy to pass for anyone with web server configuration experience. 

[Public-Key-Pins](https://scotthelme.co.uk/hpkp-http-public-key-pinning/) is one you may not want to implement. The risk of messing it up often outweighs the risk of someone using it to damage your website. Adding this incorrectly can [wreck your website's domain name](https://blog.qualys.com/ssllabs/2016/09/06/is-http-public-key-pinning-dead). At the same time, a [recent exploit left all .io domains vulnerable to being hijacked](https://thehackerblog.com/the-io-error-taking-control-of-all-io-domains-with-a-targeted-registration/). The only sites not vulnerable were sites that had HTTP Public Key Pinning and had been visited by the visitor's web browser at an earlier time.

## Additional Benefits like Speed

Besides security, a faster website is one of the biggest impacts having a secure HTTPS website brings. Once you have a secure website you can use [HTTP/2](https://mattferderer.com/switch-to-http2-the-easiest-way-to-speed-up-your-site/) which dramatically increases the speed of your website. Using HTTP/2 is like flying across the country instead of driving.

A common misconception is that secure websites are slower and cause more work on your web server due to encrypting traffic. Fortunately, [they're not](https://istlsfastyet.com/)! It's a myth.

Besides speed you'll get [several other perks when you implement HTTPS](https://mattferderer.com/reasons-why-every-website-should-use-ssl-https-where-to-get-a-free-ssl/). Search engines like Google rank HTTPS sites higher. You will also have more reliable analytics on who visits your site. 

If you're a business you need to make sure your entire site is secure using HTTPS only. Remember, HTTP traffic is bad traffic. HTTPS is free, easy & it protects both you & your customers. If you don't have an HTTPS certificate for your site, get one from [Let's Encrypt](https://letsencrypt.org/). If Let's Encrypt looks complicated, try [CloudFlare](https://cloudflare.com).