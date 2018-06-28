---
templateKey: blog-post
path: /typescript-cannot-invoke-an-expression-whose-type-lacks-a-call-signature
title: TypeScript Cannot Invoke an Expression whose Type Lacks a Call Signature
date: 2017-02-11T01:56:03.000Z
modifiedDate: 2018-06-28T00:12:23.000Z
cover: /cover/typescript-cannot-invoke-an-expression-whose-type-lacks-a-call-signature.png
description: I have a love|hate relationship with TypeScript. I love it when it works & hate it when it doesn't do what I think it should. I was trying to clean up some code and wrote the following
tags:
  - TypeScript
  - JavaScript
  - Errors
---
I have a love|hate relationship with TypeScript. I love it when it works & hate it when it doesn't do what I think it should. I was trying to clean up some code and wrote the following:

```typescript
function filterContent(content:ContentTypeA[]|ContentTypeB[]) {
    return content.filter((value) => {
        //a bunch of code to check if item should be removed or not
        return true;
    });
}
```

This resulted in a warning "Cannot invoke an expression whose type lacks a call signature". "Type 'blah' has no compatible call signatures". Parameter 'value' implicitly has an 'any' type.  In English, this means I used union types incorrectly. I was trying to say my content parameter could be either an array of ContentTypeA or ContentTypeB. TypeScript prefers you wrap them in an Array<> or in parenthesis with the array shortcut at the end:


```typescript
function filterContent(content:Array<ContentTypeA|ContentTypeB>) {
    return content.filter((value) => {
        //a bunch of code to check if item should be removed or not
        return true;
    });
}
```

```typescript
function filterContent(content:(ContentTypeA|ContentTypeB)[]) {
    return content.filter((value) => {
        //a bunch of code to check if item should be removed or not
        return true;
    });
}
```

I hope this prevents a headache for someone else who misunderstands how to properly do union arrays. 