---
templateKey: blog-post
path: /what-is-currency-and-parallelism
title: What is Currency and Parallelism?
date: 2017-07-23T19:38:58.000Z
description: Concurrency is the ability to break a job down into multiple tasks & work on those multiple tasks at the same time by switching back & forth between the tasks.
tags:
  - Functional Programming
  - Elixir
---

Concurrency is the ability to break a job down into multiple tasks & work on those multiple tasks at the same time by switching back & forth between the tasks. An obvious example is making dinner. You can break that into multiple tasks such as chopping vegetables, mixing certain ingredients, etc. You can then switch back and forth between tasks by when they need to be done. Often when people say they're good at multi-tasking, they usually mean they're good at concurrency. 

Parallelism is true multi-tasking. It's when multiple things can be done at exactly the same time.  If you somehow are able to chop vegetables with one hand & stir with the other hand, you've achieved parallelism. A much safer way might be to use a mixer or get someone to help you. Parallel computing can be achieved by using a multi-core processor or multiple computers. When each processor or computer has its own private memory instead of sharing memory it is often referred to as another fancy term known as distributed programming. An easy way to remember this is that the memory is distributed to each processor instead of being shared. 

You may have noticed that parallel computing accomplishes the definition of concurrent programming. So therefore, parallel programming is concurrent programming but concurrent programming is not necessarily parallel programming. It's that whole a square is a rectangle but a rectangle may not be a square thing all over again. Parallel programming, concurrent programming and distributed programming often get used interchangeably, so it never hurts to ask for clarification when someone is using the terms.

If you're interested in parallel programming, I suggest taking a look at the [Actor Model](/what-is-the-actor-model-and-when-should-you-use-it). Languages like C# employ the Actor Model through frameworks like [Orleans](https://en.wikipedia.org/wiki/Actor_model) & [Akka.Net](http://getakka.net/). Languages like Erlang & Elixir are based on the same concepts of Actor Model as well.
