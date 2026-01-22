---
layout: post
title: "GitHub Issues Driven Development : terminer ses side projects pendant ses pauses café"
author: suntan
toc: true
tags: ['GitHub Copilot', 'IA', 'Développement assisté par IA', 'PWA', 'Productivité']
excerpt: "Découvrez comment j'ai enfin terminé un side project grâce à GitHub Copilot et une méthode que j'appelle GitHub Issues Driven Development. Un workflow où l'IA devient un véritable binôme de développement."
vignette: coffee_hourglass.png
categories: software news
---

# GitHub Issues Driven Development : terminer ses side projects pendant ses pauses café

Comme beaucoup de développeurs, ma vie est remplie de side projects inachevés. J'en commence un, ça me prend trois week-ends… puis il finit dans le cimetière des bonnes intentions. Mais cette fois, quelque chose a changé : j'ai enfin terminé un side project, et presque sans écrire de code moi-même.

Dans cet article, je présente une approche que j'appelle **GitHub Issues Driven Development (GIDD)** : un workflow où GitHub Copilot, associé à GitHub Issues, devient un véritable binôme. Pour chaque fonctionnalité ou correction de bug, je crée une issue, je l'assigne à Copilot, et je reviens lors de ma prochaine pause café pour faire la revue. Je lui fais des retours, il ajuste, et on avance ainsi de manière entièrement itérative… sans jamais ouvrir un IDE.

## Le problème : gérer mes cartes cadeaux

Mon épouse travaille chez Red Hat et, comme dans beaucoup d'entreprises, elle bénéficie d'un programme CSE (Comité Social et Économique). L'un des avantages est de recevoir des cartes cadeaux avec des réductions, notamment une remise de 5% chez une grande enseigne de supermarché. Super, non ?

Le souci, c'est que j'utilisais Google Wallet sur mon téléphone pour gérer ces cartes, sans jamais réussir à maintenir le solde à jour. Après chaque course, j'oubliais de le mettre à jour. Résultat : arrivé en caisse, je ne savais jamais si la carte était suffisamment approvisionnée. À la longue, cette situation est devenue assez frustrante pour que je décide de créer quelque chose de mieux : une application simple qui me permettrait d'afficher le code-barres à scanner en magasin et de mettre à jour le solde manuellement, sur place.

## Un énième side project… ou pas ?

"Allez, c'est reparti," ai-je pensé. Un autre side project que je commencerais avec enthousiasme et abandonnerais à mi-parcours. Mon cimetière numérique de projets inachevés était déjà plutôt bien rempli.

![Comic strip sur les side projects](/images/2025/github-issue-driven-development/side-project-comic.png)
*[Source: CommitStrip.com](https://www.commitstrip.com/en/2014/11/25/west-side-project-story/?setLocale=1) - Une histoire que nous connaissons tous trop bien.*

Mais cette fois, c'était différent. J'avais testé des outils d'IA pour le développement d'applications ou de site web. J'avais récemment utilisé ChatGPT pour créer le site web de mon club de tennis [tc11.fr](https://tc11.fr) en quelques jours seulement. C'était incroyablement efficace. Avant de commencer cette application de cartes cadeaux, j'ai même consulté ChatGPT sur la stack technologique : devrais-je créer une PWA (Progressive Web App) ou aller vers du natif avec Kotlin ? À la suite de ces échanges, j’ai opté pour une PWA pour ses avantages cross-platform et sa maintenance plus facile.

Néanmoins, j'étais sceptique. Allais-je vraiment terminer celle-ci ?

## Le game changer : la découverte de GitHub Copilot dans GitHub Issues

Puis j'ai découvert quelque chose qui a tout changé : la possibilité d'assigner des projets entiers à GitHub Copilot directement dans GitHub Issues. Pas seulement de la complétion de code ou des suggestions, mais une véritable création de projet et développement de fonctionnalités.

J'ai décidé de tenter le coup. J'ai créé une issue avec mes besoins et je l'ai assignée à Copilot. Mon premier prompt était simple :

> Créer une Progressive Web App pour gérer des cartes cadeaux. L'application doit permettre aux utilisateurs de :
> - Stocker les informations des cartes cadeaux (nom, numéro de code-barres)
> - Générer et afficher des codes-barres à scanner en magasin
> - Suivre et mettre à jour les soldes des cartes
> - Fonctionner hors ligne
> - S'installer comme une application mobile

Et ensuite… j'ai attendu. Copilot s'est mis au travail. Il a créé une structure de projet, mis en place l'infrastructure PWA, implémenté les fonctionnalités de base, le tout dans une Pull Request. C'était comme avoir un développeur junior qui travaillait incroyablement vite, mais avait parfois besoin d'assistance.

![Assigner une issue à Copilot](/images/2025/github-issue-driven-development/copilot-issue-assignment.png)
*Quand vous assignez une issue à Copilot, il crée immédiatement une Pull Request "[WIP]" et commence à travailler.*

![Prompt Copilot dans le formulaire de création de repository](/images/2025/github-issue-driven-development/new-repository-with-copilot-prompt.png)
*J’ai découvert plus tard qu’il y avait un champ « Prompt » pour Copilot dans le formulaire de création d’un repo, donc pas besoin de créer une issue la première fois : une PR est créée automatiquement.*

## La réalité : quand l'IA a besoin de direction

Bien sûr, ce n'était pas parfait. Le système de génération de codes-barres créé par Copilot était problématique. Au lieu d'utiliser une bibliothèque existante, Copilot a essayé de réimplémenter la génération de codes-barres Code128 from scratch. Bien que les codes-barres générés semblaient visuellement corrects, ils n'étaient pas compatibles avec les lecteurs de codes-barres réels des magasins. Il y a des nuances dans les standards de codes-barres (Code128, Code39, EAN-13, et d'autres), chacun avec des règles d'encodage spécifiques qui doivent être précises au pixel près.

J'ai créé une issue pour le corriger, mais les améliorations n'étaient toujours pas tout à fait bonnes. Je me suis senti frustré et j'ai fait ce que tout développeur ferait : j'ai demandé de l'aide à ChatGPT séparément, ouvert mon IDE, commencé à déboguer manuellement. Finalement, j'ai découvert [bwip-js](https://github.com/metafloor/bwip-js), une bibliothèque de génération de codes-barres fiable qui gère toute la complexité correctement. J'ai manuellement modifié [la PR de Copilot](https://github.com/sunix/gift-card/pull/3) pour intégrer bwip-js, et enfin, les codes-barres fonctionnaient parfaitement en magasin.

Ce n'est que plus tard que j'ai découvert ce que j'aurais dû faire dès le départ : simplement mentionner `@copilot` dans les commentaires de l'issue ! Quand vous avez besoin que Copilot ajuste quelque chose, effectue une action, ou corrige un problème, vous n'avez pas besoin de démarrer un tout nouveau workflow. Commentez simplement l'issue ou la PR, mentionnez @copilot, et il répondra et fera les changements nécessaires. Cela a été un game-changer pour moi.

## Trouver mon rythme : le workflow parfait

Une fois que j'ai compris comment travailler efficacement avec Copilot, j'ai développé un rythme qui me convenait vraiment :

1. **Créer une issue** : écrire ce que je veux en termes clairs et spécifiques
2. **L'assigner à @copilot** : le laisser faire le gros du travail
3. **Réviser la PR** : regarder ce que Copilot a créé
4. **Fournir des retours** : utiliser les mentions `@copilot` dans les commentaires pour les ajustements
5. **Itérer** : répéter les étapes 3-4 jusqu'à satisfaction
6. **Merger et avancer** : déployer et créer l'issue suivante

Ce que j'ai le plus aimé, c'était la visibilité sur le processus de "réflexion" de Copilot. Je pouvais voir les logs de session, le regarder raisonner sur les problèmes, et même voir les captures d'écran qu'il prenait lors des tests avec Playwright. C'était comme faire du pair programming avec quelqu'un qui documente tout ce qu'il fait.

![Checklist des étapes de Copilot](/images/2025/github-issue-driven-development/copilot-checklist.png)
*Copilot vous montre exactement quelles étapes il prend, avec des cases à cocher montrant la progression. Vous pouvez voir le prompt original et le regarder travailler sur chaque tâche.*

![Changements de code par Copilot](/images/2025/github-issue-driven-development/copilot-pr-diff.png)
*La Pull Request montre tous les changements que Copilot a faits, comme n'importe quelle autre PR. Vous pouvez réviser le diff et demander des modifications.*

Le workflow est devenu presque méditatif. Je créais des issues pendant ma pause café, je les confiais à Copilot, puis je revenais plus tard pour relire et commenter. Plus besoin de longues sessions de code.

## Le résultat : un projet terminé

Après plusieurs itérations sur quelques semaines, j'avais une application fonctionnelle. Pas seulement un PoC, mais quelque chose que j'ai réellement déployé et que j'utilise régulièrement :

- 📱 **Progressive Web App** qui s'installe sur mon téléphone
- 📊 **Génération de codes-barres** utilisant bwip-js qui fonctionne de manière fiable avec les scanners en magasin
- 💰 **Suivi de solde** que je peux mettre à jour en déplacement
- 🔒 **Support hors ligne** pour fonctionner partout
- 🎨 **UI épurée** qui est simple et fonctionnelle

Vous pouvez consulter le code sur [GitHub](https://github.com/sunix/gift-card) et essayer l'[application en ligne](https://sunix.github.io/gift-card/) vous-même.

Mais voici ce qui compte vraiment : **je l'ai terminé**. Pour la première fois depuis des années, j'ai finalisé un side project du début à la fin. Il est déployé. Il est utilisé. Il résout mon problème réel.

## Ce que j'en ai appris

Travailler avec GitHub Copilot m'a appris plusieurs choses :

1. **L'IA est un collaborateur, pas un remplacement** : vous devez toujours guider, réviser, et prendre des décisions
2. **La communication claire compte** : plus vos descriptions d’issues sont claires, meilleurs sont les résultats.
3. **L’itération est essentielle** : mieux vaut avancer, recueillir des retours et améliorer progressivement que chercher la perfection dès le départ.
4. **Exploitez pleinement les outils** : comprendre des fonctionnalités comme les mentions `@copilot` fait gagner énormément de temps
5. **Avancer par petites étapes** : diviser le travail en issues et laisser l'IA les gérer une par une fonctionne vraiment

## Le GitHub Issues Driven Development (GIDD)

Cette approche que j'ai développée, je l'appelle **GitHub Issues Driven Development (GIDD)**. C'est un workflow où :

- Chaque fonctionnalité ou bug devient une issue GitHub
- Copilot est assigné comme responsable de l'issue
- Vous revenez pendant vos pauses pour faire des revues de code
- Les retours sont donnés via des mentions @copilot dans les commentaires
- Le développement progresse de manière asynchrone et itérative

Le GIDD change fondamentalement la façon dont j'aborde les side projects. Au lieu de penser "J'ai besoin de consacrer un week-end pour coder ça," je pense "Je peux diviser ça en issues et progresser pendant mes pauses café."

## La cerise sur le gâteau

Envie d'une anecdote amusante ?
Cet article de blog a lui-même été rédigé avec l'aide de Copilot. J'ai simplement créé une issue décrivant l'article que je voulais écrire, fourni la structure souhaitée, puis itéré sur le brouillon à coups de mentions `@copilot` jusqu'à ce qu'il reflète fidèlement ma voix et mon expérience.

Bref, la boucle est bouclée.

## Réflexions finales

Je suis vraiment enthousiaste à l’idée de cette nouvelle façon de développer des applications. GitHub Copilot ne m'a pas seulement aidé à terminer un projet : il a changé la façon dont j'aborde entièrement les side projects. La barrière pour terminer des projets n'est plus seulement le temps ou les compétences. C'est d'avoir le bon modèle de collaboration. Pour moi, ce modèle est maintenant : moi et l'IA, travaillant de manière asynchrone, itérant sur des issues, et livrant vraiment.

Si vous avez déjà enterré différents side projects, peut-être que c'est le moment d'essayer GitHub Copilot. Créez une issue. Assignez-la à @copilot. Voyez ce qui se passe. Vous pourriez bien, pour une fois, aller au bout d'un projet.. 😆 

Et vous verrez, ça fait vraiment du bien !

## Pour aller plus loin

Si vous êtes intéressé par cette approche, voici quelques ressources :

- [Documentation GitHub Copilot](https://docs.github.com/en/copilot)
- [Mon projet de cartes cadeaux](https://github.com/sunix/gift-card) : exemple concret d'un projet terminé avec GIDD
- [Article original en anglais](https://blog.sunix.org/articles/howto/2025/11/14/building-gift-card-app-with-github-copilot.html) : la version détaillée de cette expérience

Que vous soyez sceptique ou déjà convaincu par le développement assisté par IA, j'espère que cet article vous a donné une méthode concrète, reproductible, et des astuces pour enfin, vous aussi, terminer votre prochain side project.

Bonnes pauses café productives ! ☕

---

*Avez-vous déjà utilisé GitHub Copilot ou d’autres assistants de codage basés sur l’IA dans vos projets ? Quel a été votre retour d’expérience ? N’hésitez pas à en parler dans les commentaires.*
