---
templateKey: blog-post
path: /difference-between-array-types-in-typescript
title: Difference Between Array<Type>, Type[], [Type] in TypeScript
date: 2017-09-13T19:38:58.000Z
cover: /public/cover/difference-between-array-types-in-typescript.jpg
description: When defining an array in TypeScript you might think it is okay to define it using `[string]`. I have made this mistake several times & I find others making it often as well. This is actually defining a tuple, which is probably not the array you are wanting.
tags:
  - TypeScript
---
Here are the TLDR common methods of defining arrays in TypeScript.

[string] = Tuple (fixed size array)  
string[] = Array (most common array)  
Array <string> = Array (same as the 2nd but preferred if you need different types in the array)

When defining an array in TypeScript you might think it is okay to define it using `[string]`. I have made this mistake several times & I find others making it often as well. This is actually defining a tuple, which is probably not the array you are wanting.

The TypeScript handbook does a great job of defining a tuple, which is common in many other languages.

"Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same." https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple

```Typescript
let x: [string, number];
x = ["hello", 10];
```

A common use of tuples is storing output after running a function, especially for short status messages like writing to a file or submitting an HTTP request. 

```Typescript
let status: [string, number] = submitContent(text, urlPath);
console.log(status);
//(2) ["error", 400]
```

On a side note, the above example would be a great situation to use [destructuring](/the-power-of-destructuring-in-javascript/).

The proper way to do the more common JavaScript array is to use the following:

```Typescript
let x: string[];
x = ["hello", "world"]
```

In cases where the array is mixed with different types you would use the `Array <string>` version. Otherwise you may get an [error stating Typescript cannot Invoke an expression whose type lacks a call signature](/typescript-cannot-invoke-an-expression-whose-type-lacks-a-call-signature/). Here's an example of an array with multiple types.

```Typescript
let x: Array<string | number>
x = ["hello", "world", 2]
```

This second version is common if your array consists of different types of objects. For example:

```Typescript
let inventory: Array<Boat, SpaceShip, Wagon> 
```
You might notice that the list of types above are all vehicle types that could possibly share a parent type called `Vehicle` or `Transportation`. Depending on your exact problem, you could solve it with [Generics](https://www.typescriptlang.org/docs/handbook/generics.html).  Another possible solution is to define a type like the following:

```Typescript
type Vehicle = Boat | SpaceShip | Wagon
let inventory: [Vehicle]
```

In short, use the `Array<string | number>` version if you don't know how many items will be in your Array. Use the tuple `[string, number]` version for small arrays with a fixed number of items that always have the same type in the order specified.
