---
templateKey: blog-post
path: /the-power-of-destructuring-in-javascript
title: The Power of Destructuring in JavaScript
date: 2017-06-29T03:14:31.000Z
description: In my free time, I've been messing around with a functional programming language built for the Erlang VM called Elixir. One of my favorite features of Elixir is pattern matching. As of ES6, we now have some pattern matching features in JavaScript. One of those is destructuring. Using destructuring will simplify your code & make it more readable. 
tags:
  - example
  - other..
---
In my free time, I've been messing around with a functional programming language built for the Erlang VM called Elixir. One of my favorite features of Elixir is [pattern matching](https://mattferderer.com/what-is-pattern-matching-in-elixir). As of ES6, we now have some pattern matching features in JavaScript. One of those is destructuring. Using destructuring will simplify your code & make it more readable. 

Here's a very simple example of what destructuring does:

```javascript
var {name, email} = {name: 'Sue', email: 'sue@company.com'}
console.log(name);
//Sue
console.log(email);
//sue@company.com
```

Let's look at some common patterns on how to use this. A great example is when you work with an API that uses something like string concatenation. MP3's use the [ID3 Layout](https://en.wikipedia.org/wiki/ID3#Layout) which does this.  SharePoint also does this with user data.

```javascript
var users = "Alice;alice@company.com;791-555-3931";
var [ name, email, phone ] = users.split(";");
```

Sometimes APIs give you a JSON object but the names are long & redundant for your purposes. With destructuring you can even rename the variables.

```javascript
var contact = {
  proper_first_last_name: "Bilbo Baggins",
  residence: "The Shire"
}

var {proper_first_last_name:name, residence:home} = contact;
var profileCard = document.createElement('div');
profileCard.innerText = `Customer Name: ${name}<br />Home: ${home}`;
```

The last line of the above example used destructuring to add variables to a JavaScript string template for much cleaner code.

In Elixir, there are no for loops. Recursion is used instead. While recursion isn't as popular in JavaScript, yet, you can use destructuring with recursion instead of a for loop. Here's a great example using desctructuring with the [spread operator], which basically does the opposite of destructuring. 

```javascript
function incrementList([head, ...tail]){
  return head === undefined ? [] : [head + 1, ...incrementList(tail)];
}

incrementList([3,6,8,11,9]);
//4,7,9,12,10
```

Okay, depending on your experience with recursion that may not be simpler to read than a for loop. If you've never used recursion before, the simplest way to see what is going on is to log out the head & the tail. 
```javascript
function incrementList([head, ...tail]){
  console.group();
  console.log(head);
  console.log(tail);
  console.groupEnd();
  return head === undefined ? [] : [head + 1, ...incrementList(tail)];
}
incrementList([3,6,8,11,9]);

// console.group
// 3
// [6, 8, 11, 9]

// console.group
// 6
// [8, 11, 9]

// console.group
// 8
// [11, 9]

// console.group
// 11
// [9]

// console.group
// 9
// []

// console.group
// undefined
// []

// [4, 7, 9, 12, 10]
```

In the above, we take the head (first array element) and add one. We then pass the rest of the list to the incrementList function to be ran again. You'll notice that there are three periods before the incrementList function. That's the spread operator. It's telling JavaScript to take the array that is returned from the function & spread out the values. Here's a quick demo of what the spread operator does:

```javascript
var foo = [9, 10]
var mergedArrays = [3, 5, ...foo]
console.log(mergedArrays);
// [3, 5, 9, 10]
```

You'll notice that the last time the recursion method is called, our head value is now `undefined`. That means we pass an empty array back & don't call the incrementList function again. This is how we end the recursion.