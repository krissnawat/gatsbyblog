---
templateKey: blog-post
path: /scrape-a-website-and-send-an-email-with-azure-functions
title: Scrape a Website & Send an E-mail with Azure Functions
date: 2018-05-27T20:12:23.000Z
cover: /cover/scrape-a-website-and-send-an-email-with-azure-functions.png
description: Serverless Functions are an awesome way to create small tasks that you can run on a schedule, with the click of a button or using your voice. We'll look at how to look at a website, get important data & send that via an e-mail on a schedule.
tags:
  - .NET
  - Cloud
  - Azure
---

The ability to create instructions & watch a computer do your bidding is often the thing that gets people addicted to writing software. These little one off tasks give you super human abilities to push a button & watch the magic unfold. One of the annoying things is you now need to run a computer 24/7. Otherwise you'll sit there waving your magic wand around watching nothing happen.

Azure, AWS & other providers offer awesome cloud services where you can run your magical instructions in the cloud without paying for a server to be on all the time. In fact, since you pay only for when you actually use it, a task that runs a few seconds once a day costs you almost nothing.

Let's take a look at how to create a task that get some data by making some requests to websites & then sending that data back to us via an e-mail once a day. 

## Wizard, Meet Azure Functions

TODO: Azure offers a free service....

Once you've signed up for an account, click to *Create a Resource*. Here you can search for *Functions* and add an *Azure Function*.

TODO: Fill in these steps....

Click the + sign that appears when you hover on Fuctions.

![Azure Functions Overview Screen.](img/scrape-a-website-and-send-an-email-with-azure-functions-1.gif)

Select *Timer* if you want to do this every so often or *Webhook+API* if you want a URL to send a request to so you can do it on demand. Also make sure C# is selected as the language below.

On the right side, click View Files.

![Click View Files on the right side of the screen.](img/scrape-a-website-and-send-an-email-with-azure-functions-2.gif)

Add a new `project.json` file and add the following text and then click the Save button:

```json
{
  "frameworks": {
    "net46":{
      "dependencies": {
        "HtmlAgilityPack": "1.8.2"
      }
    }
   }
}
```

only .NET Framework 4.6 is supported on Azure Functions. https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-csharp


Test scrapping your site.

```csharp
using System.Net;
using HtmlAgilityPack;

public static async Task Run(TimerInfo myTimer, TraceWriter log)
{
    HttpClient client = new HttpClient();
 
    string html = await client.GetStringAsync("https://www.gocomics.com/nancy/"+DateTime.Now.ToString(("yyyy/MM/dd")));    
 
    HtmlDocument doc = new HtmlDocument();
    doc.LoadHtml(html); 
     
    var image = doc.DocumentNode
        .SelectNodes("//picture")
        .Where(x => x.Attributes.Contains("class") && x.Attributes["class"].Value.Contains("item-comic-image"))
        .FirstOrDefault()
        .Element("img")
        .Attributes
        .Where(x => x.Name == "src")
        .FirstOrDefault()
        .Value;
 
    log.Info(image);
}

```

Now let's send this via email. 

SendGrid affiliate?? SendGrid offers easy Azure integration & a free developer plan. Beyond that, they have excellent service. For these reasons, they're my go to for fun apps, dev apps & especially production apps.

Create a SendGrid account and then go to settings > API Keys. Click create an API Key. Give it a name. Restricted access with Mail Send is all that is needed for access. Copy your API key.

Back in Azure, open your Functions Application Settings by clicking your app's name on the left menu and then Application Settings near the bottom under Configured features. (See highlighted links below)

![Click Application Settings under Configured features](img/scrape-a-website-and-send-an-email-with-azure-functions-2.gif)

Scroll down to the Application Settings, just above Connection strings and click Add new setting.

Add the key SendGridKey and a value of your API key Sendgrid gave you. Click save.

Under your functions name on the left, click Integrate & add a new Output. 

Select SendGrid from your list of Output options. 

In the SendGrid API Key drop down menu on the next screen, select SendGridKey.

Fill out the From address & subject as well if you want defaults for your function.  Make sure to Save. 

Your output settings will now be added to your function.json file that Azure created for you if you did a Timer Trigger app. You can also find your schedule using a Cron pattern in there. 

We'll now adjust our prior code. 
