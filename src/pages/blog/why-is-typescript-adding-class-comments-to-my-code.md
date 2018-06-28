---
templateKey: blog-post
path: /why-is-typescript-adding-class-comments-to-my-code
title: Why is TypeScript Adding Class Comments to my Code
date: 2018-06-02T20:12:23.000Z
modifiedDate: 2018-06-28T00:12:23.000Z
cover: /cover/why-is-typescript-adding-class-comments-to-my-code.png
description: I noticed all my TypeScript compiled files had been modified after a recent change. I hadn't changed anything in them so this gave me some concern. What I found was TypeScript added a /** @class */ comment to the modified files.
tags:
  - TypeScript
  - JavaScript
---

I noticed all my TypeScript compiled files had been modified after a recent change. I hadn't changed anything in them so this gave me some concern. What I found was TypeScript added a `/** @class */` comment to the modified files. This made no sense to me, so I did some digging.

## What is the Reason For /** @class */ in TypeScript Compiled Files

It appears the `/** @class */` [comment has a purpose](https://github.com/Microsoft/TypeScript/issues/13721). This comment helps with tree-shaking during code minification. It informs the minifier that this code block can be safely removed if no other code is referring to it. This ends up being a huge win in reducing code size.

In short, make sure to accept these changes into your repository. Then check to see if it did indeed shrink your file sizes at all.

If for some reason you want to get rid of the comment, you can compile your TypeScript with [--removeComments](https://www.typescriptlang.org/docs/handbook/compiler-options.html).