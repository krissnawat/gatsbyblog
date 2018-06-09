---
templateKey: blog-post
path: /fix-git-self-signed-certificate-in-certificate-chain-on-windows
title: Fix Git Self Signed Certificate in Certificate Chain on Windows
date: 2017-10-07T12:12:23.000Z
description: You are in the right place if you're trying to use git clone on a computer and running into one of the following errors. SSL certificate problem self signed certificate in certificate chain or SSL certificate problem unable to get local issuer certificate.
tags:
  - Security
  - SSL
  - Errors
---

You are in the right place if you're trying to use `git clone` on a computer and running into one of the following errors:

> *SSL certificate problem: self signed certificate in certificate chain*  
> *SSL certificate problem: unable to get local issuer certificate*


A popular workaround is to disable SSL Verification using `git config --global http.sslVerify false` but that creates large security risks. SSL is a good thing & we should use it, even in cases where your company makes it difficult. The solution is to add the certificates to Git's trusted certificates. 

I ran into a popular enterprise tool named Palo Alto that does a man in the middle on untrusted web traffic. While Palo Alto is great for securing your company's network, it can make using secure code repositories like GitHub more difficult if it intercepts the traffic. Let's look at an example using GitHub.

Using Google Chrome I see that GitHub has an SSL on it. I can view more information by clicking the *Secure* tab in the address bar.

On the drop down menu, click *Valid*

![Click Chrome secure tab in address bar](img\git-self-signed-cert-1.png)

In my example, you will notice two certification paths above GitHub. 

We'll need to do the following steps for both certification paths.

Click the first PaloAltoTrust (or your equivelant) certificate. 

On the same window click the View Certificate button.

![Certification Paths Window](img\git-self-signed-cert-2.png)

Click the Details tab on the new window & then the copy to file button.

![Certification Paths Window](img\git-self-signed-cert-3.png)

On the next window click Next on the Export Wizard

![Certification Paths Window](img\git-self-signed-cert-4.png)

Choose Base 64 Encoded

![Certification Paths Window](img\git-self-signed-cert-5.png)

Store the file temporarily somewhere & click Next & then Finish. You can delete the file after everything works.

![Certification Paths Window](img\git-self-signed-cert-6.png)

*Important: Repeat these steps if you had more than one level of certificates listed above GitHub.*

Git uses a file named `ca-bundle.crt` to list all the trusted certificates. We can find that file by typing the following in a terminal window:

```bash
git config --list --show-origin
```

This tells me my `ca-bundle.crt` file is listed in `C:\Program Files (x86)\Git\mingw32\ssl\certs\ca-bundle.crt`. Let's copy this to a new location. I'm going to copy mine to `C:\Users\Matt\ca-bundle.crt`. You can do this through the GUI or with a terminal like below:

```bash
copy "C:\Program Files (x86)\Git\mingw32\ssl\certs\ca-bundle.crt" c:\Users\Matt\ca-bundle.crt
```

You will want to change *Matt* to your username. 

Using your favorite text editor you can open up your `ca-bundle.crt` file that you copied & your `.cer` files you exported from the browser. Copy the entire `.cer` text including the `----BEGIN CERTIFICATE---` and `----END CERTIFICATE---` to the bottom of your `ca-bundle.crt` file. Do this for all the `.cer` files you exported. 

We have one last step to complete. Back in your terminal add your copied `curl-ca-bundle.crt
` to Git's config.

```bash
git config --global http.sslCAInfo C:/Users/Matt/curl-ca-bundle.crt
```

You should now be able to access GitHub using `git clone` without compromising security. Give it a shot. 
