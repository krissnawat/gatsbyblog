---
templateKey: blog-post
path: /display-node-errors-in-iis
title: Display Node.js Errors on a Windows IIS Server?
date: 2018-04-26T22:12:23.000Z
description: If you are running IIS Node with a Node server on IIS and want your Node errors to show up instead of IIS errors, read this.
---
Today I was working on a Node server that runs on a Windows server with IIS. I ran into a problem where I wanted my 404 errors to actually send a 404 result with a custom page created in Node. Sending a 404 error made IIS want to display its custom 404 error page though.

I learned you can get around this by adjusting your web.config file. Locate your `<system.webServer>` settings and add the following snippet: `<httpErrors existingResponse="PassThrough" />`. This [leaves the response untouched if an existing response exists per](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/httperrors/).

Side note, I highly recommend using the [IIS Node package](https://github.com/Azure/iisnode) if you are one of the rare people who have to run this setup.