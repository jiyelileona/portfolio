---
title: HTML & CSS
date: 2020-10-15
---

## Introduction Of HTML and CSS

Basically, “HTML” is short of “HyperText Markup Language”. Don't be scared by the name, in fact, HTML is just a language designed to create websites, and most people can quickly master it. (Shannon, 2016) In the HTML file, we can set the structure of a web page, such as title, subtitle, text, etc. But what is the basic unit of HTML? The answer is HTML elements. Most HTML elements are inline or block elements. And tags can mark the beginning and end of elements. (“Tags, Attributes, and Elements.” ) There is an example of an unedited HTML document that can help you understand better.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <p>This is an <em>example</em> of HTML element.</p>
</body>
</html>
```

As you can see. You should be able to easily find tags such as <html></html>, <head></head> and <body></body>. In short, the tag without the “/” symbol is the beginning of the element, the tag with the “/” symbol marks the end of the element, and the entire content from the start tag to the end tag is a block element. 

Now, look at the element starting with the <p> tag. You will notice that there are two <em></em> tags, which represent the bold text font. The entire content from <em> to </em> is an inline element.

![](https://www.tutorialrepublic.com/lib/images/html-element.png)
[https://www.tutorialrepublic.com/lib/images/html-element.png](https://www.tutorialrepublic.com/lib/images/html-element.png)

Elements can have some attributes, such as the height and width of the image. The attribute is always set in the opening tag of the element, consisting of the attribute name and its corresponding value, connected by an equal sign, and the value is enclosed in double-quotes.(“HTML Attributes”) 

Now you know most of the HTML structure, but if a web page only has text, imagine how boring it would be. Therefore, we have to edit the style of the webpage through the CSS file. The language of CSS is very different from HTML. The picture below explains the basic structure of a CSS file which is the CSS rule.

CSS rules are composed of CSS selectors and a set of CSS properties. (Jencov, 2014) In the example in the above picture, you can see that the CSS selector points to the <p> element and the colour and background-colour below the selector set attributes to the <p> element, followed by the value. CSS values are set for CSS properties. The following types of values are allowed in CSS 2.1: integer and real numbers, length, percentage, URL and URI, counter, colour, string, unsupported value. (“CSS Values”, 2020)

**References**

“CSS Values.” w3resource, 2020, [www.w3resource.com/css/CSS-values.php.](https://www.w3resource.com/css/CSS-values.php)
“HTML Attributes.” TutorialRepublic, www.tutorialrepublic.com/html-tutorial/html-attributes.php.

Jenkov, Jakob. “CSS Properties and CSS Rules.” Tutorials, 2014, [tutorials.jenkov.com/css/css-properties-css-rules.html](http://tutorials.jenkov.com/css/css-properties-css-rules.html).

Shannon, Ross. “HTML Source : HTML Tutorials.” What Is HTML? | HyperText Markup Language Explained, 21 Aug. 2012, [www.yourhtmlsource.com/starthere/whatishtml.html](https://www.yourhtmlsource.com/starthere/whatishtml.html).

“Tags, Attributes, and Elements.” Tags, Attributes, and Elements | HTML Dog, [htmldog.com/guides/html/beginner/tags/](https://htmldog.com/guides/html/beginner/tags/). 
