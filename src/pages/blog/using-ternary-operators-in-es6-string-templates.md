---
templateKey: blog-post
path: /using-ternary-operators-in-es6-string-templates
title: Using Ternary Operators in ES6 String Templates
date: 2017-01-11T16:01:57.000Z
description: The new ES6 version of JavaScript introduced Template Strings which allow for improved readability of code when working with multiple line strings. 
---
The new ES6 version of JavaScript introduced Template Strings which allow for improved readability of code when working with multiple line strings. 

This allows us to avoid the following syntax:

```javascript
//Common method
let foo = '<table>' +
	'<tr>' +
		'<td>Tables are a pain</td>' +
	'</tr>' +
'</table>';
//Alternate equally painful & ugly method
let foo = '<table> \
	<tr> \
		<td>Tables are a pain</td> \
	</tr> \
</table>';
```

Instead we can now use the backtick character to create a string template. We can also include variables by wrapping them in ${}.

```javascript
let enjoyment = 'not so bad';
let foo = `<table>
	<tr>
		<td>Tables are ${enjoyment}</td>
	</tr>
</table>`;
```

We can even take this farther and use a ternary operator to do an if/else statement, call a function and solve some math.

```javascript
let displayAverages = true;
let totalSales = 500;
let sales = [50, 200, 125, 75, 25, 10, 15];
let tableTemplate = `<table id="sales">
	<tr>
		<th>Total</th>
		${displayAverages ? '<th>Averages</th>' : ''}
	</tr>
	<tr>
		<td>${totalSales}</td>
		${displayAverages ? `<td>${Math.round(totalSales/sales.length)}</td>` : ''}
	</tr>
</table>`;

```

Try it out for yourself on Plunker.

<iframe style="border: 1px solid #999;width: 100%; height: 300px"
src="//embed.plnkr.co/lzXUulsbNAFdnu8m2xDx/" frameborder="0"
allowfullscreen="allowfullscreen">
Loading plunk...
</iframe>
