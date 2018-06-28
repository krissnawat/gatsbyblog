---
templateKey: blog-post
path: /how-to-access-hosting-environment-in-configureservices
title: How to Access the Hosting Environment in ConfigureServices
date: 2018-06-13T20:12:23.000Z
modifiedDate: 2018-06-13T20:12:23.000Z
cover: /cover/how-to-access-hosting-environment-in-configureservices.png
description: It can be useful to run different services in Development vs Production. The .NET Core templates do this within certain methods, such as the Configure method in the Startup class but there is no example of how to do it in the ConfigureServices method within the Startup Class. 
tags:
  - .NET Core
  - .NET
---

It can be useful to run different services in Development vs Production. The .NET Core templates do this within certain methods, such as the Configure method in the Startup class but there is no example of how to do it in the ConfigureServices method within the Startup Class. The ConfigureServices method is where you often do a majority of additions.

Fortunately for us, the answer is simple. You can add it to your Startup constructor: `public Startup(IConfiguration configuration, IHostingEnvironment environment)`. This will inject an IHostingEnvironment that you can set as a property available to any Startup method.

```csharp
public class Startup
{
    public Startup(IConfiguration configuration, IHostingEnvironment environment)
    {
        Configuration = configuration;
        HostingEnvironment = environment;
    }

    public IConfiguration Configuration { get; }
    public IHostingEnvironment HostingEnvironment { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        if (HostingEnvironment.IsDevelopment())
        {
            services.AddIdentityServer()
                .AddDeveloperSigningCredential()
                .AddTestUsers(InMemoryConfiguration.Users().ToList())
                .AddInMemoryClients(InMemoryConfiguration.Clients())
                .AddInMemoryApiResources(InMemoryConfiguration.ApiResources());
        }
    }
}
```