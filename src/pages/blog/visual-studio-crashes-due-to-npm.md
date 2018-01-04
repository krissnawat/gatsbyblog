---
templateKey: blog-post
path: visual-studio-crashes-due-to-npm
title: Visual Studio Crashes Due to NPM
date: 2017-01-11T15:59:59:00.000Z
description: I've just started using Visual Studio and so far the experience has been great. The Web Essentials plugin makes web development a lot better. Unfortunately Visual Studio has not been playing nice when I select to "Open a Website" that is using NPM.
---
## The Issue
I've just started using Visual Studio and so far the experience has been great. The Web Essentials plugin makes web development a lot better. Unfortunately Visual Studio has not been playing nice when I select to "Open a Website" that is using NPM. My assumption is that the issue is a result of NPM's deeply nested directory structure and Microsoft's software typically having limits on the length of directory paths. There is a long debate on this topic on [GitHub](https://github.com/joyent/node/issues/6960#issuecomment-46704998).

## Simple Fix
To get around this you can set your node_modules as a hidden folder by right clicking it, selecting properties and checking the Hidden box.
Hidden folders are not detected by Visual Studio and this simple fix made Visual Studio run just fine.