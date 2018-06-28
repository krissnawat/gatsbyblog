---
templateKey: blog-post
path: /show-current-active-file-in-vs-studio-explorer
title: How to Show the Current Active File in Visual Studio Solution Explorer
date: 2018-06-28T20:00:00.000Z
modifiedDate: 2018-06-28T00:12:23.000Z
cover: /cover/show-current-active-file-in-vs-studio-explorer.png
description: Trying to find your current active file in Visual Studio's Solution Explorer can be a pain. Here's how to make it less painful.
tags:
  - Visual Studio
---

In VS Code, the file you are actively working on is always highlighted in the solution explorer. In Visual Studio this isn't the default. This makes comes a pain when working with large solutions, especially if those projects have multiple projects.

It turns out this is easy to fix!

In Visual Studio's menu go to Tools > Options > Projects and Solutions. Then check "Track Active Item in Solution Explorer".

![Select Track Active Item in Solution Explorer in Visual Studio Options](img/show-current-active-file-in-vs-studio.jpg)

## Add a Keyboard Shortcut to Change the Track Active Item in Solution Explorer Setting

This is great but sometimes this isn't ideal if you're temporarily opening up lots of files to look through them. In these cases it's nice to disable this setting. Keyboard shortcuts to the rescue!

We can add a shortcut to toggle this setting by going to Tools > Options > Environment > Keyboard. Search for and select the "View.TrackActivityinSolutionExplorer" setting.

 Here you can create a new keyboard shortcut. You can either assign it globally or create it for use in certain scenarios, such as only when you're in the solution explorer. I use `ctrl+alt+;` to toggle this setting.