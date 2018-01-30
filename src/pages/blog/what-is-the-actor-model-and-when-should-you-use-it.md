---
templateKey: blog-post
path: /what-is-the-actor-model-and-when-should-you-use-it
title: What is the Actor Model & When Should You Use it?
date: 2017-07-23T19:38:58.000Z
description: The more things change, the more they stay the same. In the 1970's computer scientists were pushing hardware to its limits. The engineers of the day had all sorts of hacks to squeak out performance.
tags:
  - Functional Programming
  - Elixir
---

The more things change, the more they stay the same. In the 1970's computer scientists were pushing hardware to its limits. The engineers of the day had all sorts of hacks to squeak out performance. Today we have package.json files full of these. Still we run into scaling problems that force us to split our code base into microservices & pass messages between these microservices. 

This is exactly the same problem people like [Carl Hewitt](https://en.wikipedia.org/wiki/Carl_Hewitt) & [Alan Kay](https://en.wikipedia.org/wiki/Alan_Kay) faced in the 70's. They were running into memory issues & slow programs. The current hardware couldn't keep up. Their invention at the time was to create message passing systems. Alan Kay brought this idea into [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk), which helped popularize the style of object oriented programming. Carl Hewitt took the idea and created the actor model. Years later, these same ideas of message passing would influence Erlang to create an implementation of the actor model as well. Erlang is often quoted as the first & most successful implementation of the actor model. It was actually written without prior knowledge that the actor model existed. This is a sign of a great design pattern.

Several other projects use the actor model today. [Akka for the JVM](http://akka.io/), [Akka.NET](http://getakka.net/) & [Orleans](https://dotnet.github.io/orleans/) are some of the most well known projects. [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) in JavaScript also use the same core ideas of passing messages. Microsoft Azure implemented its own microservice architecture [Service Fabric](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-reliable-actors-introduction). Service Fabric uses virtual actors to handle communication between servers.

## What is the Actor Model

The basic Actor Model design pattern is simple. When you hear of an actor, think of it as a computer process or a function. It's some code that you're going to pass a message to, kind of like calling a function. Basically you send the actor instructions and it returns some information back to you. Now you're probably thinking that this isn't anything revolutionary. So let's break down some of the details. Bear in mind that every framework or language that implements the actor model does so with minor adjustments. 

## Properties of an Actor

An actor is a computer process with an address. The address is how you send a message to an actor. It's the equivalent of an e-mail address. Like e-mail addresses, actors can have multiple addresses or a single address. You can also assign one address to multiple actors. This way you can scale your application to meet traffic demands if one actor is not enough. 

An actor has a simple job:

* Store data
* Receive messages from other actors
* Pass messages to other actors
* Create additional child actors

The data that an actor stores cannot be changed or corrupted by another actor indirectly. For example Actor A can't run some processes that change Actor B's state without sending a message to Actor B asking Actor B to make adjustments & return a message back to Actor A. Think of it like using get & set methods in object oriented programming. It allows you to have some protections for your data.

The messages actors send to each other are typically asynchronous. That means they aren't guaranteed to happen in a sequential order. It's comparable to your local Postal Service or attaching messages to carrier pigeons. Some languages/frameworks do allow ways of synchronous message passing though. 

Actors only process one message at a time, which is why it can be helpful to spin up multiple actors to one address. Fortunately actors can create additional child actors when necessary. Not only can they create child actors though. In the case of a child actor that takes a while to create, a parent actor can send a message to that child to receive when it is done being created. Think of it like passing a function as a parameter to another function. If that doesn't make sense, you can think of it like a mother writing notes to her baby while she's pregnant. The mother than presents the messages to the child when they're old enough to understand.

## When Not to use the Actor Model

Like every tool, you need to know when to use it. We've already covered some instances where the Actor Model isn't ideal. Such as when you need a sequential order of things to happen. If you find yourself sending multiple messages and then needing to rollback those processes if one fails, you might want to reconsider using the Actor Model. A common example of this is a bank account. If I send you $100, the banking system should deduct that from my account and add it to your account. If either of those steps don't occur, the bank system should roll back the transaction and output an error. Of course you can use the Actor Model to send a message to something like a transactional SQL database to process this type of instruction. Some Actor Model frameworks like [Akka have additional tools to assist with transactions](http://doc.akka.io/docs/akka/1.3.1/scala/tutorial-chat-server.html) as well. It should be noted that some people may argue that you are no longer using the Actor Model once you process things outside of an actor. That's a discussion for another day though.

## Great! So how do you use actors?

If you're interested in using the actor model, I'm working on a series of [Elixir tutorials](https://mattferderer.com/tag/elixir/) that use the actor model in real world situations. You'll get a better understanding of how to implement it with these types of tutorials than if I were to show you a quick example here. I encourage you to check them out.

## Recap

If you are building an application that handles tasks asynchronously, using the Actor Model can help simplify your code. It will allow you to scale your application and process tasks in parallel. If you need to make sure transactions occur sequentially or roll back if certain tasks fail, look at adding something else to handle that part of your logic.
