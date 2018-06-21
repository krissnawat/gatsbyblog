---
templateKey: blog-post
path: /host-blazor-on-netlify
title: Hosting Blazor on Netlify
date: 2018-06-21T20:12:23.000Z
cover: /cover/host-blazor-on-netlify.png
description: Since Blazor is a frontend framework, we can host our Blazor apps on any serverless or static web host. The only requirement is that we can add minor configuration to redirect urls so that all urls point to our index.html page. Netlify fits this perfectly & also happens to be my favorite host for static websites.
tags:
  - Blazor
  - Netlify
  - Static Sites
  - Serverless
---

Since Blazor is a frontend framework, we can host our Blazor apps on any serverless or static web host. The only requirement is that we can add minor configuration to redirect urls so that all urls point to our index.html page. Netlify fits this perfectly & also happens to be my favorite host for static websites.

## Prerequisites

* [.NET Core 2.1 or later](https://go.microsoft.com/fwlink/?linkid=873092)

* Blazor templates should be installed. `dotnet new -i Microsoft.AspNetCore.Blazor.Templates`

## Create a Demo Blazor App

Create a new Blazor app with the command: `dotnet new blazor -o staticDemo`

Make sure your app works by running `dotnet run`

## Netlify Specific Steps

Add a file named `_redirects` in your `wwwroot` directory.

Add the following line to your `_redirects` file:

```text
/*    /index.html   200
```

This redirects any URL to the index.html file. Since Blazor is a SPA tool, if someone enters a URL such as oursite.com/counter we don't want the server to look for a counter file. Instead the server should direct the request to index.html which will take care of the routing.

If you publish on another static host or a serverless environment, check their docs for how to write a similar redirect.

## Publishing to Netlify

Once we're done with that, the easiest way to deploy to Netlify is to add this to a GitHub repo.

Netlify can't build this project for us. So we'll need to do that & add the files to our repository.

By default the .gitignore file created with our project ignores the default build directory. You can modify your .gitignore file to not ignore the default release directory. Then you can run `dotnet publish -c release`.

Another option is to publish to a different directory using the `-o` parameter. Here's an example: `dotnet publish -c release -o ./dist`

Once you've done either of the above, push your changes to a GitHub repository.

After that you can go to Netlify & create a new site from your GitHub repository. After linking your site to your repo, you'll be prompted with deploy settings. You can ignore the build command. For the publish directory, add the directory you published to. It should look like this:

```text
_framework
css
sample-data
_redirects
index.html
```

 Everytime you push changes to your repository, Netlify will re-deploy them.

 If you run into issues or you deploy this elsewhere, let me know in the comments below! 