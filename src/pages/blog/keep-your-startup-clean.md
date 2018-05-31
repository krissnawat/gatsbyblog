---
templateKey: blog-post
path: /keep-your-startup-clean
title: Keep Your Startup Clean
date: 2017-06-02T00:38:00.000Z
description: 
tags:
  - .NET Core
  - .NET
---

When I open up a .NET Core application I typically start at the Startup file. Unfortunately there is an ugly pattern out there that makes these look a long spaghetti code mess. They often look something like this:

```csharp
public void ConfigureServices(IServiceCollection services)
{

    services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

    services.AddSingleton<IJwtFactory, JwtFactory>();

    var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtOptions));

    services.Configure<JwtOptions>(options =>
    {
      options.Issuer = jwtAppSettingOptions[nameof(JwtOptions.Issuer)];
      options.Audience = jwtAppSettingOptions[nameof(JwtOptions.Audience)];
      options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
    });

    var tokenValidationParameters = new TokenValidationParameters
    {
      ValidateIssuer = true,
      ValidIssuer = jwtAppSettingOptions[nameof(JwtOptions.Issuer)],

      ValidateAudience = true,
      ValidAudience = jwtAppSettingOptions[nameof(JwtOptions.Audience)],

      ValidateIssuerSigningKey = true,
      IssuerSigningKey = _signingKey,

      RequireExpirationTime = false,
      ValidateLifetime = true,
      ClockSkew = TimeSpan.Zero
    };

    services.AddAuthentication(options =>
    {
      options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
      options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

    }).AddJwtBearer(configureOptions =>
    {
      configureOptions.ClaimsIssuer = jwtAppSettingOptions[nameof(JwtOptions.Issuer)];
      configureOptions.TokenValidationParameters = tokenValidationParameters;
      configureOptions.SaveToken = true;
    });

    // api user claim policy
    services.AddAuthorization(options =>
    {
      options.AddPolicy("AuthorizedApiUsr", policy => policy.RequireClaim(Constants.Strings.JwtClaimIdentifiers.Rol, Constants.Strings.JwtClaims.ApiAccess));
    });

    services.AddMvc()
      .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
      .AddMetrics();
}
```

This is not fun to read. Since we spend most of our time reading code, it's not great to maintain. By using extension methods you can clean this up to something more readable.

Adding a simple file named something like `servicesExtensions.cs`, you can extend the IServiceCollection and add custom methods. Here's a quick example.

```csharp
public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddDataStores(this IServiceCollection services, IConfiguration configuration)
    {
        //TODO: New EF Core 2.0 Feature Data Pooling - https://docs.microsoft.com/en-us/ef/core/what-is-new/ef-core-2.0#dbcontext-pooling
        services
            .AddDbContextPool<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            });
        return services;
    }
}
```

Now in your `Startup.cs` file you can simply use `services.AddDataStores(Configuration);`. Eventually you turn the mess above into something much more readable.

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddDataStores(Configuration);
    services.AddIdentityCustom();
    services.AddAuthenticationCustom(Configuration);
    services.AddAuthorizationCustom();
    services.AddMvcCustom();
}
```
