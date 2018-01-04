---
templateKey: blog-post
path: what-is-pattern-matching-in-elixir
title: What is Pattern Matching in Elixir?
date: 2017-04-23T19:38:58:00.000Z
description: I was confused about pattern matching for quite a while. Every time someone spoke of it, they said how it was one of their favorite features. When they explained what it was though, it was always different from the last person. After finally learning what pattern matching is, it all made sense. Pattern matching is used for a lot of different reasons.
---
I was confused about pattern matching for quite a while. Every time someone spoke of it, they said how it was one of their favorite features. When they explained what it was though, it was always different from the last person. After finally learning what pattern matching is, it all made sense. Pattern matching is used for a lot of different reasons.

Elixir developers use pattern matching a lot. It's also one of the first things you learn how to do in most beginner Elixir tutorials. Here are some real world examples on when and how you might use it.

## Assign variables to a value

In a language like Elixir, you don't assign variables but you match them. In this case the variable `a` doesn't exist yet, so we're saying that `a` is the same as the number 3.

```Elixir
iex> a = 3
iex> a
Returns 3
```

We can do it again with destructuring. We might receive a tuple from a function. We can set new **undefined variables** to match values from a Tuple. In this example, will pretend that a function we called just returned a tuple with the value `{:error, "The website is down"}`. That would be equivilent to the following.

```Elixir
iex> {status, message} = {:error, "The website is down"}
iex> message
Returns "The website is down"
```

It's important to note that if status or message was already assigned to a value, Elixir would return a Match Error. Languages like C# and JavaScript have recently added similar destructuring features so that you can easily return multiple values from a function. In Elixir you can also use the underscore character `_` to ignore a value. In our example we could have used `{status, _}` if we didn't care what the second value was.

## Picking the right function

C# and many other languages have something similar to this where you can define a function multiple times with different input parameters. It's helpful for keeping clean code.

```Elixir
def eat_dinner(:soup, foodName), do: "Here is a spoon for your "<>foodName<>" soup."
def eat_dinner(:meat, foodName), do: "Here is a fork for your "<>foodName

iex> eat_dinner(:soup, "Chicken Noodle")
Returns "Here is a spoon for your Chicken Noodle soup."
```

This can be taken one step further. If we were developing a Poker game we could call one function to evaluate our hand and send that function our 5 cards. Here is an example with two possible hands a person could have in a Poker game. Elixir checks the functions in a top down order, so the first one will be checked first. If it doesn't match, it'll go to the next function. In our first function we check if the rank of the cards match 1 - 14. Side note, I'm using number 11-14 for the face cards value. We also check if the suit is the same in each card and if so, we'll assign that value to the variable `s`. If it all matches, it returns the atom `:royal_flush`, if not it goes on to the next function to test if we have a flush.


```Elixir
def evaluate_poker_hand([%{rank: 10, suit: s}, %{rank: 11, suit: s}, %{rank: 12, suit: s}, %{rank: 13, suit: s}, %{rank: 14, suit: s}]), do: :royal_flush

def evaluate_poker_hand([%{_, suit: s}, %{_, suit: s}, %{_, suit: s}, %{_, suit: s}, %{_, suit: s}]), do: :flush

iex> evaluate_poker_hand([%{rank: 10, suit: :hearts}, %{rank: 11, suit: :hearts}, %{rank: 12, suit: :hearts}, %{rank: 13, suit: :hearts}, %{rank: 14, suit: :hearts}])
Returns :royal_flush
```

Another example is to simplify recursion. Here we pass a list into a function named square. We want this to square each number in the list. The second square function matches a list with values. It assigns the variable `head` to the first item in the list and `tail` to the remaining list. The second square function calls the square function on just the tail to create a loop. When the tail is empty, we'll match the first square function pattern. The first square function pattern just returns an empty list and doesn't call the square function anymore, thus ending the recursion loop.

```Elixir
def square([]), do: []
def square([head | tail]) do
  [ head * head | square(tail) ]
end
iex> square([3, 9, 2, 8])
Returns [9, 81, 4, 64]
```

If you found this helpful or confusing, please let me know in the comments so I can tweak these examples to make it more useful for others.
VM1600:2 ---
templateKey: blog-post
path: what-is-the-actor-model-and-when-should-you-use-it
title: What is the Actor Model & When Should You Use it
date: 2017-05-20T17:57:48:00.000Z
description: The more things change, the more they stay the same. In the 1970's computer scientists were pushing hardware to its limits. The engineers of the day had all sorts of hacks to squeak out performance. Today we have package.json files full of these. Still we run into scaling problems that force us to split our code base into microservices & pass messages between these microservices. 

This is exactly the same problem people like [Carl Hewitt](https://en.wikipedia.org/wiki/Carl_Hewitt) & [Alan Kay](
---
The more things change, the more they stay the same. In the 1970's computer scientists were pushing hardware to its limits. The engineers of the day had all sorts of hacks to squeak out performance. Today we have package.json files full of these. Still we run into scaling problems that force us to split our code base into microservices & pass messages between these microservices. 

This is exactly the same problem people like [Carl Hewitt](https://en.wikipedia.org/wiki/Carl_Hewitt) & [Alan Kay](https://en.wikipedia.org/wiki/Alan_Kay) faced in the 70's. They were running into memory issues & slow programs. The current hardware couldn't keep up. Their invention at the time was to create message passing systems. Alan Kay brought this idea into [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk) which helped popularize the style of object oriented programming. Carl Hewitt took the idea and created the actor model. Years later, these same ideas of message passing would influence Erlang to create an implementation of the actor model as well. Erlang, which is often quoted as the first & most successful implementation of the actor model was actually written without prior knowledge that the actor model existed. 