---
layout: post
title:  "Draft exemple Markdown multi-auteurs"
auteurs: 
- antoinesabotdurand
- jeanmicheldoudoux
date:   2022-11-02 15:40:19 +0100
tags: Welcome
excerpt: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes.
toc: false
---

# Draft exemple Markdown multi-auteurs

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

## H2

### H3

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}


## Formattage des caractères

ligne1 en **gras** et en *italique* avec du texte ***important*** a mettre en evidence  

Dans un terminal DOS, tapez la commande `dir`.

~~Prendre une rue à sens unique à contre sens.~~

I need to highlight these ==very important words==.

H~2~O 

H<sub>2</sub>O

## Paragraphes

ligne1
ligne2
ligne3<br>
ligne4

&nbsp;&nbsp;&nbsp;&nbsp;Une ligne indentée.

> blockquote

## Listes

1. Element 1
2. Element 2
3. Element 3


- Element 1
- Element 2
- Element 3
    - Element 3 1
    - Element 3 2
- Element 4

---

## Liens

[Site Sciam](https://sciam.fr/fr/)

![texte alternatif](image.jpg)

[![Site Sciam]( /images/logo_sciam.jpg "Le site de Sciam")](https://sciam.fr/fr/)


`http://www.sciam.fr`

## Caractères spéciaux

Copyright (©) — &copy;
Registered trademark (®) — &reg;
Trademark (™) — &trade;
Euro (€) — &euro;
Left arrow (←) — &larr;
Up arrow (↑) — &uarr;
Right arrow (→) — &rarr;
Down arrow (↓) — &darr;
Degree (°) — &#176;
Pi (π) — &#960;

## Tableaux

| Syntaxe | Description |
| ----------- | ----------- |
| En-tête | Titre |
| Paragraphe | Texte |
| Liste | La liste contient : <ul><li>Element 1.</li><li>Element 2.</li></ul> |

| Titre a gauche | Titre centre | Titre a droite |
| :--- | :----: | ---: |
| A gauche | Centre | A Droite |
| A gauche | Centre | A Droite |

## Titre avec ancre {#mon-id}

## Définition de termes

terme
: definition


## Notes de bas de pages

une phrase avec une note de bas de page. [^1]

[^1]: La note de bas de page.

## Schémas

```mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
```


### H3

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
