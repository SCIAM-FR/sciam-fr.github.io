---
layout: post
title: 'Toujours plus loin, toujours plus haut, toujours plus fort avec Java : Coder à la vitesse de l''éclair'
author: loichermann
date: 2021-09-29 
tags: ['Java', 'Pattern matching', 'Switch expressions', 'Java 14']
excerpt: 'Cet article vous dresse un panorama des évolutions majeures autour de Java au cours de ces dernières années. Parmi les nombreuses évolutions qui pourraient vous pousser à vouloir découvrir les versions récentes du langage, celles que je trouve particulièrement intéressantes sont celles permettant d''améliorer la vitesse de développement et la lisibilité du code.'
vignette: 1_wP4DCPy7MxRbZGkCQ1y7tw.jpeg
categories: software
---

# Toujours plus loin, toujours plus haut, toujours plus fort avec Java : Coder à la vitesse de l'éclair
Je souhaite vous dresser un panorama des évolutions majeures autour de Java au cours de ces dernières années.

Parmi les nombreuses évolutions qui pourraient vous pousser à vouloir découvrir les version récentes du langage, celles que je trouve particulièrement intéressantes sont celles permettant d'améliorer la vitesse de développement et la lisibilité du code.

Je vous propose donc d'entrevoir à travers cet article les nouveautés du langage Java qui ont amélioré l'expérience de développement en rendant la syntaxe du code toujours plus concise et plus lisible.

## JEP 361: Switch Expressions

Cette JEP introduit une nouvelle syntaxe pour les switch case depuis la version 14 de Java.

Cette syntaxe n'utilise plus le mot clé break, et il est possible de lister plusieurs labels au sein d'un seule case.

Ainsi le code suivant :

```java
switch (day) {
    case MONDAY:
    case FRIDAY:
    case SUNDAY:
        System.out.println("six");
        break;
    case TUESDAY:
        System.out.println("sevent");
        break;
    case THURSDAY:
    case SATURDAY:
        System.out.println("eight");
        break;
    case WEDNESDAY:
        System.out.println("nine");
        break;
}
```
se trouve ainsi réduit :
```java
switch (day) {
    case MONDAY, FRIDAY, SUNDAY -> System.out.println("six");
    case TUESDAY                -> System.out.println("seven");
    case THURSDAY, SATURDAY     -> System.out.println("eight");
    case WEDNESDAY              -> System.out.println("nine");
}
```
De plus, il est maintenant possible d'utiliser le switch comme une expression. Ainsi, On pourra encore simplifier le morceau de code précedent en utilisant qu'une fois le println :
```java
System.out.println(
        switch (k) {
            case MONDAY, FRIDAY, SUNDAY -> "six";
            case TUESDAY                -> "seven";
            case THURSDAY, SATURDAY     -> "eight";
            case WEDNESDAY              -> "nine";
        }
    );
```
Si la partie de droite d'un case devait contenir un bloc avec plusieurs expression, le resultat peut être retourner avec le nouveau mot clé "yield" :
```java
System.out.println(
        switch (k) {
            case MONDAY, FRIDAY, SUNDAY -> "six";
            case TUESDAY                -> "seven";
            case THURSDAY, SATURDAY     -> "eight";
            case WEDNESDAY              -> {
                                            //do some stuff
                                            yield "nine"
                                          };
        }
    );
```
## JEP 395 : Records

Disponible en preview depuis Java 14 et officiellement intégrés à la version 16 du langage, les records ont pour ambition de faciliter l'écriture de classes servant uniquement à transporter de la donnée immuable (DTO par exemple).

Pour le compilateur, il s'agit simplement d'un nouveau type de classe composée :

d'un constructeur dont la signature est la même que le header,

-   une implémentation de la méthode équals
-   une implémentation de la méthode hashcode
-   une implémentation de la methode toString

et pour chaque élément dans le header :

-   un getter public
-   un attribut final et privé.

Afin de se rendre compte du gain de place engendré par cette JEP, voici deux déclarations équivalentes :
```java
class Point {
    private final int x;
    private final int y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    int x() { return x; }
    int y() { return y; }

    public boolean equals(Object o) {
        if (!(o instanceof Point)) return false;
        Point other = (Point) o;
        return other.x == x && other.y == y;
    }

    public int hashCode() {
        return Objects.hash(x, y);
    }

    public String toString() {
        return String.format("Point[x=%d, y=%d]", x, y);
    }
}

record Point(int x, int y) { }
```
Il sera bien-sûr possible d'ajouter au record d'autres méthodes ou constructeurs.

## JEP 394 : Pattern Matching for instanceof

Cette JEP fait son apparition dans la version 16 du langage. Celle-ci permet d'économiser une ligne de code à chaque fois.
```java
if (obj instanceof String) {
    String s = (String) obj;    // grr...
    s.split(",")
}
```
En effet dans le bloc ci-dessus, le cast est redondant, mais nécessaire dans les précédentes versions de Java.

Ainsi dans l'exemple suivant, à l'intérieur du bloc "if" on pourra utiliser la nouvelle variable "s" ayant comme type String en s'abstrayant du cast.
```java
if (obj instanceof String s) {
 s.split(",")
}
```
Même si le gain ne saute pas aux yeux directement avec cet exemple, il reste néanmoins conséquent pour les gros projets, d'autant plus que la lisibilité se trouve grandement améliorée par cet artefact.

Cette JEP sera completée par une autre JEP permettant le pattern matching au seins d'un switch case. Cette fonctionnalité est d'ores et déjà présente en preview dans le JDK 17 à travers la JEP 406 : Pattern Matching for switch (Preview).

## JEP 378 : Text Blocks

Disponible depuis Java 15, cette fonctionnalité facilite grandement l'écriture de bloc de texte multi-ligne.

Avant cette JEP, pour introduire un bloc de texte dans le code on pouvait faire quelque chose comme ça :
```java
String s = "It was the best of times, it was the worst of times,\n"
         + "it was the age of wisdom, it was the age of foolishness,\n"
         + "it was the epoch of belief, it was the epoch of incredulity,\n"
         + "it was the season of Light, it was the season of Darkness,\n"
         + "it was the spring of hope, it was the winter of despair,\n"
         + "we had everything before us, we had nothing before us";
```
Très peu lisible me direz vous.

Avec cette JEP la syntaxe suivante est désormais possible :
```java
String s = """It was the best of times, it was the worst of times,
it was the age of wisdom, it was the age of foolishness,
it was the epoch of belief, it was the epoch of incredulity,
it was the season of Light, it was the season of Darkness,
it was the spring of hope, it was the winter of despair,
we had everything before us, we had nothing before us""";
```
Cette nouvelle syntaxe gère automatiquement les retours à la ligne (plus de "/n"), ainsi que l'indentation.

Ainsi le texte retourné par la méthode suivante sera indenté correctement. Les espaces en trop en début et en fin de ligne sont supprimés. Le bloc html de notre exemple sera donc décalé de 12 caractères par le compilateur.
```java
public String getBlockOfHtml() {
    return """
            <html>

                <body>
                    <span>example text</span>
                </body>
            </html>""";
}
```
Cette liste n'a pas la prétention d'être exhaustive, j'espère qu'elle vous aura tout de même permise d'entrevoir l'ampleur des évolutions ayant eu lieu sur le langage, et a quel point ces évolutions permettent d'améliorer l'expérience du développeur.

