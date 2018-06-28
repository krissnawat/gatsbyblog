---
templateKey: blog-post
path: /blazor-no-registered-service-of-type
title: Blazor Error - There is no Registered Service of Type
date: 2018-06-10T20:12:23.000Z
cover: /cover/blazor-no-registered-service-of-type.png
description: Experimenting with Blazor, I ran into this error. "There is no registered service of type...".
tags:
  - Blazor
  - Errors
---

Experimenting with Blazor, I ran into this error showing up in the console: "There is no registered service of type..." Fortunately there is a simple fix. In my case, I added a class & injected into a Razor view. What I forgot to do, was add it as a service in `Program.cs`. In my case, my well named class was named `Stuff` because I was truly experimenting & naming things is hard.

By injecting a service to my `Program.cs`, the error went away & my program executed without any issues.

```csharp
    public class Program
    {
        static void Main(string[] args)
        {
            var serviceProvider = new BrowserServiceProvider(services =>
            {
                services.AddSingleton<Stuff>();
            });

            new BrowserRenderer(serviceProvider).AddComponent<App>("app");
        }
    }
```