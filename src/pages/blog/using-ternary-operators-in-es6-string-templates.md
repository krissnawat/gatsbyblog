---
templateKey: blog-post
path: using-ternary-operators-in-es6-string-templates
title: Using Ternary Operators in ES6 String Templates
date: 2017-01-11T16:01:57:00.000Z
description: The new ES6 version of JavaScript introduced Template Strings which allow for improved readability of code when working with multiple line strings. 
---
The new ES6 version of JavaScript introduced Template Strings which allow for improved readability of code when working with multiple line strings. 

This allows us to avoid the following syntax:

```javascript
//Common method
let foo = '<table>' +
	'<tr>' +
		'<td>Tables are a pain</td>' +
	'</tr>' +
'</table>';
//Alternate equally painful & ugly method
let foo = '<table> \
	<tr> \
		<td>Tables are a pain</td> \
	</tr> \
</table>';
```

Instead we can now use the backtick character to create a string template. We can also include variables by wrapping them in ${}.

```javascript
let enjoyment = 'not so bad';
let foo = `<table>
	<tr>
		<td>Tables are ${enjoyment}</td>
	</tr>
</table>`;
```

We can even take this farther and use a ternary operator to do an if/else statement, call a function and solve some math.

```javascript
let displayAverages = true;
let totalSales = 500;
let sales = [50, 200, 125, 75, 25, 10, 15];
let tableTemplate = `<table id="sales">
	<tr>
		<th>Total</th>
		${displayAverages ? '<th>Averages</th>' : ''}
	</tr>
	<tr>
		<td>${totalSales}</td>
		${displayAverages ? `<td>${Math.round(totalSales/sales.length)}</td>` : ''}
	</tr>
</table>`;

```

Try it out for yourself on Plunker.

<iframe style="border: 1px solid #999;width: 100%; height: 300px"
src="//embed.plnkr.co/lzXUulsbNAFdnu8m2xDx/" frameborder="0"
allowfullscreen="allowfullscreen">
Loading plunk...
</iframe>
VM1600:2 ---
templateKey: blog-post
path: reasons-why-every-website-should-use-ssl-https-where-to-get-a-free-ssl
title: Reasons Why Every Website Should Use SSL/HTTPS & Where to Get a Free SSL
date: 2017-01-11T16:03:55:00.000Z
description: Looking for the TLDR version? 

> Go to [Let's Encrypt](https://letsencrypt.org/) to get a free SSL so that your site is safer, more accurate, faster & can offer more features for your visitors as well as report back correct data to you. 

An SSL is a certificate that allows you to have a secure website. Your address will use HTTPS instead of HTTP and the browser will show a lock symbol or color the address bar to signify this to your visitors. By now it's common knowledge that if your website h
---
Looking for the TLDR version? 

> Go to [Let's Encrypt](https://letsencrypt.org/) to get a free SSL so that your site is safer, more accurate, faster & can offer more features for your visitors as well as report back correct data to you. 

An SSL is a certificate that allows you to have a secure website. Your address will use HTTPS instead of HTTP and the browser will show a lock symbol or color the address bar to signify this to your visitors. By now it's common knowledge that if your website has financial transactions you need an SSL to help keep those transactions safe. You also should have an SSL if you have any type of login for users to help prevent user accounts from being hijacked. That includes sites powered by a CMS like WordPress as well where you login to edit the content. Simpler websites often feel they don't need an SSL though. Here are a few reasons why you may want to re-consider.

##SSL Certificates are Free

You can get a free SSL certificate from [Let's Encrypt](https://letsencrypt.org/). They have excellent [documentation to get you started](https://letsencrypt.org/getting-started/). 

##SEO Boost 

[Google has stated](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) that having a HTTPS site will boost your ranking score in their search engine rating.  

##HTTP/2

The second version of HTTP pretty much requires it. HTTP/2 offers a lot of performance gains for your website but you won't be able to enjoy those without an HTTPS website. It should be noted that while the HTTP/2 spec doesn't require HTTPS, most major web browsers are.

##Secure Web Forms

Do you have a contact form or any other type of web form on your website? An SSL will help prevent people from intercepting & reading the form's data or changing it before it gets to you.

##Prevent Your Content from Being Altered in Transaction

Forms are not the only target of hijacked data. An SSL certificate helps prevent someone from intercepting your content between your visitors and your web server. Once intercepted, the content on your website could be used to trick visitors, display someone else's ads or even install malicious content. This isn't something that only evil hackers do. Many Internet Service Providers have been caught injecting their own advertisments into the websites that their customers visit. 

##Better Website Analytics 

Websites that are not using HTTPS will be missing out on data. If an HTTPS site refers someone to your HTTP website, you will never know. Your analytics tool will report it as a direct link, as if someone just typed your website into the address bar. This is because HTTP websites can't receive referrer data from HTTPS sites. Fortunately it does work the other way around. If you have an HTTPS site you will be able to see this data no matter what website your visitors come from. 

##Web Browsers are Slowly Requiring HTTPS

You're going to need an SSL if you want to use a lot of the new features that browsers are enabling such as:

* local data storage on the visitor's pc
* user location access
* webcams
* microphones
* service workers

##Trusted Online Presence

Users will see that you put more care into your website and took the time to secure it with an SSL. This gives you more credability with your audience.

##Go Secure Your Websites

Hopefully this list will encourage you to secure your websites or give you a list of reasons to share with your boss or employer on why you need an SSL for your website.