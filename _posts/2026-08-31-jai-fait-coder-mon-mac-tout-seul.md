---
layout: post
title: "J'ai fait coder mon Mac tout seul pendant deux semaines"
author: yannblazart
toc: true
tags: ['IA locale', 'LLM', 'Jakarta Persistence', 'Développement assisté par IA', 'Java']
excerpt: "Deux semaines à faire tourner un modèle d'IA entièrement en local sur un MacBook, coupé d'internet, pour implémenter une des spécifications Java les plus retorses. Ça chauffe, ça dit des bêtises, et parfois ça a raison. Récit honnête, mesures à l'appui."
vignette: 2026/mac-code-tout-seul.png
categories: software news
---

_Il a chauffé. Il a dit des bêtises. Et parfois, il a eu raison._

Il faut que je commence par un aveu, sinon la suite n'a aucun sens. Vidocq, le truc sur lequel je passe mes nuits, c'est une pile logicielle Java écrite en grande partie avec de l'IA. Pas de l'IA qui tourne sur mon bureau : de l'IA qui tourne dans des centres de données à l'autre bout du monde. Claude, Copilot, ce genre de bestioles. Je tape une intention, un cerveau géant quelque part me renvoie du code, je relis, je corrige, on avance. Ça marche, et je n'ai pas honte de le dire.

Alors pourquoi diable essayer de faire la même chose sur ma propre machine, avec un modèle rapatrié sur mon disque dur, coupé d'internet ?

Parce qu'un jour on m'a posé la question qui pique. « L'IA locale, ça marche ? » Et je n'avais que des intuitions, pas de réponse. Alors j'ai débranché le câble et j'ai regardé ce qui se passait.

Spoiler : ça marche, avec des guillemets partout, un astérisque en gras, et une facture d'électricité.

## Le décor, et pourquoi vous n'allez pas me croire

Ma machine, c'est un MacBook avec une puce M5 Max et 128 gigaoctets de mémoire. Autant vous le dire tout de suite : c'est de la triche. C'est comme raconter qu'on a fait Paris-Marseille en voiture électrique sans préciser qu'on roulait en berline de luxe avec trois batteries. Un ordinateur normal, celui que vous avez sur les genoux là maintenant, ne fait pas tourner ce dont je vais parler. Gardez ça en tête à chaque phrase. Ce n'est pas une expérience reproductible dans le salon de tout le monde. C'est une expérience de laboratoire, et le laboratoire coûte le prix d'une petite voiture d'occasion.

Deuxième détail que la brochure marketing oublie de mentionner : ça chauffe. Un modèle d'intelligence artificielle, c'est des milliards de multiplications par seconde. Quand tout ça se met à mouliner, la machine se transforme en radiateur d'appoint et les ventilateurs entonnent leur petit chant. Mon bureau a gagné quelques degrés, ce qui, un après-midi de beau temps, n'était pas franchement le bienvenu. On code, et on entend la machine forcer, comme un vieux réfrigérateur qui redémarre.

Le modèle en question s'appelle Qwen3.6, un descendant chinois de la grande famille des grands modèles de langage. Sa version compacte pèse 35 milliards de paramètres, dont seulement 3 milliards qui travaillent à chaque instant. Imaginez une entreprise de 35 000 personnes où, pour chaque tâche, on ne réveille que les 3 000 spécialistes concernés. Le reste dort. C'est ce qui permet de le faire tenir sur une machine personnelle : compressé, il occupe une vingtaine de gigaoctets, soit à peu près une saison de série en haute définition.

Pour le piloter, j'utilise deux outils. Un serveur local qui héberge le modèle et répond aux questions, et un assistant de programmation qui joue les chefs d'orchestre : il lit mes fichiers, lance les compilations, écrit le code, relance les tests. Le modèle est le cerveau, l'assistant est les mains. Mon travail à moi, dans tout ça, se résume de plus en plus à celui d'un contremaître un peu méfiant.

L'objectif, tant qu'à faire, n'était pas de générer un « bonjour le monde ». Puisque je trichais déjà sur le matériel, autant ne pas tricher sur le reste. J'ai donc visé une bête de concours, une des spécifications les plus retorses de tout l'écosystème Java : implémenter Jakarta Persistence, la norme officielle qui permet à un programme de discuter avec une base de données. Un monument aride, doté de sa propre suite de tests de conformité : 269 familles de tests, environ 1 745 vérifications individuelles, chacune impitoyable. Le genre de montagne qu'on ne gravit pas en un week-end, et que la plupart des gens sensés n'iraient pas attaquer avec une petite IA posée sur un ordinateur portable. Appelez ça de la folie. Moi j'appelle ça refuser de me faciliter la tâche : pour savoir si l'IA locale tient vraiment la route, il faut la mettre face à quelque chose de dur, pas lui tendre une perche. Une démonstration facile ne prouve que la facilité.

## Ce qui marche, et qui m'a bluffé

Commençons par les bonnes nouvelles, parce qu'il y en a.

C'est rapide, mais laissez-moi être honnête sur les chiffres, parce que c'est exactement là que se cache un piège dans lequel je suis tombé le premier. À froid, sur une question courte, le modèle crache environ 140 mots par seconde. Un humain en lit quatre. La machine écrit donc plus vite que vous ne relisez, ce qui est grisant et un peu inquiétant. Sauf qu'au fil d'une vraie séance, quand la conversation s'alourdit et que le modèle doit garder en tête des milliers de lignes, ce chiffre fond. En moyenne réelle, on tombe plutôt autour de 65 à 90 mots par seconde. Le tableau de bord affiche fièrement le grand chiffre du départ, et il faut se souvenir que c'est une moyenne d'endurance, pas un record du cent mètres. Les deux sont vrais. C'est juste que la publicité préfère toujours le second, et j'ai failli me faire avoir par mon propre enthousiasme avant de recompter.

Et le meilleur pour la fin : le tout fonctionne hors ligne. J'ai coupé le wifi, par acquit de conscience. La machine a continué comme si de rien n'était. Aucune donnée ne partait nulle part, aucun abonnement mensuel, aucun serveur distant qui pourrait fermer boutique du jour au lendemain. Rien que moi, le silicium, et le ronronnement des ventilateurs.

## La chasse au meilleur modèle

Petit retour en arrière, parce que cette histoire résume assez bien l'aventure.

Avant même de commencer, il fallait choisir le modèle. Et là, un choix se pose : on peut compresser un modèle plus ou moins fort pour le faire tenir sur une machine. Comprimer, ça veut dire arrondir ses chiffres internes ; plus on arrondit, plus il est léger et rapide, mais en théorie plus il perd en finesse. Mon intuition d'ingénieur était limpide : moins je compresse, plus le modèle reste intelligent. J'ai donc récupéré trois versions du même modèle, de la plus tassée à la plus généreuse, et je les ai mises en compétition.

Petit aparté, parce que les noms de ces modèles ressemblent à des plaques d'immatriculation et que personne ne vous explique jamais comment les lire. Le mien s'appelle, tenez-vous bien, `Qwen3.6-35B-A3B-MTPLX-Optimized-Speed`. Décortiquons. `Qwen3.6`, c'est la famille et la génération, comme une marque et un millésime de voiture. Vient ensuite la taille, et c'est là que ça se corse un peu.

| dans le nom | ce que ça veut dire |
| --- | --- |
| `7B`, `35B`, `70B` | le nombre de neurones, en milliards. Plus c'est gros, plus c'est savant, et plus c'est lourd à trimballer |
| `MoE` | « mélange d'experts » : le modèle est découpé en spécialistes internes, et n'en réveille que quelques-uns pour chaque mot, au lieu de tout allumer |
| `A3B` | « 3 milliards actifs » : sur les 35 du modèle, seuls 3 travaillent à un instant donné. C'est exactement ce qui le rend tenable sur une machine de bureau, et c'est aussi la signature d'un `MoE` : le sigle lui-même n'apparaît pas dans le nom, mais ce `A3B` le trahit |

Ensuite, séparément, le taux de compression, qu'on repère à un petit code du genre `Q8` ou `Q4`, parfois écrit `8bit`, `4bit`. C'est le curseur dont je parlais : combien on arrondit les chiffres internes.

| dans le nom | précision | poids relatif | en clair |
| --- | --- | --- | --- |
| `FP16` | 16 bits | le plus lourd | la version d'origine, non compressée, pleine finesse |
| `Q8` / `8bit` | 8 bits | moitié | légèrement arrondi |
| `Q6` / `6bit` | 6 bits | plus léger | bien arrondi |
| `Q4` / `4bit` | 4 bits | le plus léger | fortement arrondi, le pari de la souplesse |

Le reste, `MTPLX`, `MLX`, et les noms de gens collés devant avec une barre oblique comme `Youssofal/`, ce sont des détails de format et d'atelier : dans quel garage la version a été préparée, pour quelle sorte de machine. Utile pour s'y retrouver, dispensable pour comprendre. Une fois ce décodeur en main, un nom qui ressemblait à un mot de passe devient une fiche technique lisible : Qwen version 3.6, trente-cinq milliards de neurones dont trois qui bossent à la fois, taillé pour la vitesse. Déjà moins intimidant.

Sauf qu'une intuition ne vaut rien tant qu'on ne l'a pas confrontée aux chiffres. On a donc monté un banc d'essai. Pas seulement pour mesurer la vitesse, ç'aurait été trop facile, mais la qualité : est-ce que le modèle appelle correctement ses outils, connaît-il la norme Java sur le bout des doigts, sait-il enchaîner trois actions qui dépendent l'une de l'autre sans se perdre en route. Une petite batterie d'épreuves, exactement la même pour les trois candidats.

Verdict : la version la plus lourde, celle qui pesait presque le double, a perdu. Sur toute la ligne. Même qualité de réponses que les autres, mais deux fois plus lente et deux fois plus gourmande en mémoire. Pire, c'est la seule des trois à s'être franchement plantée sur une épreuve. La plus légère faisait le même travail en presque moitié moins de temps. J'avais parié sur le muscle, c'est la souplesse qui a gagné.

Mais le plus instructif n'est pas le résultat, c'est ce qui a failli me le faire rater. Au tout premier essai, le classement était inversé : la version lourde semblait meilleure, et j'allais le croire. Sauf que les trois modèles n'étaient pas réglés de la même façon, un détail de configuration traînait sur l'un et pas sur les autres. Une fois tout le monde ramené à la même ligne de départ, le classement s'est retourné. La leçon m'est restée : un banc d'essai bâclé ne reste pas sagement silencieux, il vous ment avec aplomb, et vous repartez tout content avec la mauvaise conclusion sous le bras.

C'est là que le costaud distant, Claude, gagne vraiment son salaire. Ce n'est pas tant qu'il code vite. C'est qu'il tient le banc d'essai avec une rigueur que je n'ai plus, moi, à onze heures du soir. C'est lui qui a repéré que ma première comparaison était faussée, qui a insisté pour tout re-mesurer à égalité, qui a consigné chaque chiffre avec ses réserves plutôt que de me raconter ce que j'avais envie d'entendre. Une croyance qui ne survit pas à la mesure ne mérite pas qu'on la garde ; encore faut-il quelqu'un d'assez méticuleux pour appliquer ce principe sans flancher, surtout quand la croyance en question est la vôtre. Toutes les mesures dont je vous parle depuis le début, les vitesses, les comparaisons, les chiffres qui démentent mes intuitions, elles viennent de ce banc-là, tenu à quatre mains avec une machine plus patiente que moi.

## Ce qui a déraillé, et là on rigole

Bon. Maintenant la vraie vie.

Une IA qui code, ça a une mémoire de travail. Une sorte de bureau sur lequel elle pose tout ce dont elle a besoin : le code en cours, les résultats des tests, mes instructions. Ce bureau a une taille. Quand il déborde, tout tombe par terre et la séance s'arrête net. Un jour, sur une seule tâche, mon assistant a rempli son bureau jusqu'au crash. En enquêtant, j'ai découvert le coupable : pour lire les sources d'un test, il avait décompressé la même archive 34 fois de suite, en s'étalant à chaque fois des milliers de mots inutiles sous les yeux. Comme quelqu'un qui, pour vérifier un numéro de téléphone, réimprimerait l'annuaire entier à chaque appel. Solution : je lui ai tout bonnement interdit de décompresser quoi que ce soit. On délègue ça à un assistant secondaire dont la mémoire, elle, part à la poubelle après usage.

Ensuite il y a eu l'épisode du stagiaire fantôme, et celui-là je l'ai vécu depuis mon téléphone, avachi dans le canapé, en pilotant la machine restée dans le bureau. Petite parenthèse, parce qu'elle me plaît : la machine tourne à la maison, et je la commande depuis mon iPhone via un réseau privé chiffré. Le cerveau reste au chaud sur le bureau, moi je supervise du canapé. On vit une drôle d'époque.

Bref, le stagiaire. Après un moment de conversation, mon IA s'est mise à faire une chose fascinante et exaspérante : au lieu d'exécuter une action, elle l'annonçait. Elle écrivait « je procède au plan : d'abord le test qui échoue, puis le code » et puis... rien. Point final. Comme un stagiaire qui vous décrit consciencieusement la tâche qu'il s'apprête à accomplir, puis part chercher un café et ne revient pas. Je lui répondais « eh bien vas-y », il me redécrivait poliment son intention, et repartait au café.

![Une IA qui annonce consciencieusement ce qu'elle va faire, puis disparaît chercher un café.](/images/2026/jai-fait-coder-mon-mac-tout-seul/stagiaire-fantome.png)
*Le stagiaire fantôme : il décrit la tâche avec zèle, puis s'évapore avant de l'accomplir.*

J'avais pourtant fini par lui inscrire noir sur blanc dans ses consignes : « Tu ne racontes pas ce que tu vas faire, tu le fais. » Il replongeait quand même. Un modèle de cette taille imite ce qu'il vient de lire plus qu'il n'obéit à ses instructions, et quand il vient d'écrire trois phrases de belles intentions, la pente naturelle est d'en écrire une quatrième. Ce qui l'a réveillé, finalement, ce n'est pas la supplication, ni « tu continues ? », ni le fait d'appuyer sur Entrée en soupirant. C'est l'ordre carré : la commande `/next`, qui rouvre sèchement sa feuille de route et lui dit « tâche suivante, exécution ». Pas de « s'il te plaît ». Un ordre de mission. Depuis, quand il rêvasse, je ne discute pas et je ne le relance pas gentiment, ce qui ne fait qu'empirer les choses en lui donnant encore de la prose à imiter. Je lui redonne sa feuille de route, point, et il repart au travail. Il y a là-dedans une leçon de management que je vous laisse méditer.

Mon préféré, celui qui m'a fait perdre le plus de temps et rire le plus fort, c'est l'histoire de la version qui ne plaisait pas. Mon assistant a besoin d'un outil d'analyse du code Java pour s'y retrouver, l'équivalent de l'autocomplétion de votre traitement de texte, mais pour les programmes. Cet outil refusait obstinément de démarrer. Des heures d'enquête. Et la cause, la voilà : pour vérifier quelle version de Java était installée, mon assistant posait la question, et attendait une réponse du genre « 25 point 0 point 3 ». Sauf que les versions récentes de Java répondent simplement « 25 ». Sans les points. Et devant cette réponse trop courte, le programme concluait qu'il n'y avait pas de Java du tout, et débranchait tout l'outillage en silence. Toute une chaîne bloquée par un logiciel qui boude parce qu'un numéro n'a pas la ponctuation attendue. J'ai réglé le problème en installant une version de Java dont le numéro contenait les fameux points. C'est d'une bêtise magnifique. C'est aussi, très exactement, le quotidien de l'ingénierie logicielle.

Il y a eu d'autres joyeusetés. Une technologie d'accélération censée doubler la vitesse, magnifique sur le papier, que le serveur refusait catégoriquement de charger, et que j'ai cru active pendant une journée entière avant de m'apercevoir que je réglais les boutons du mauvais jumeau du modèle. Ou encore ce détail savoureux : le modèle que j'utilise sait, en théorie, regarder des images. Il a les circuits pour. Mais la façon dont il a été compressé a cassé cette capacité, et le serveur ne le sert plus qu'en aveugle. Je lui envoyais une capture d'écran, il me répondait poliment « je ne vois aucune image dans votre message ». J'ai fini par télécharger un second modèle, plus petit, dont le seul métier est de lire mes captures d'écran et de me les dicter. Une IA pour coder, une autre pour regarder par-dessus son épaule. On s'organise.

Dans le même registre, il y a eu l'histoire du mot de passe chez moi. J'ai voulu brancher un outil qui surveille la qualité du code, un logiciel que je fais tourner dans un petit bac à sable sur ma propre machine, coupé du monde comme le reste. Je lance l'analyse, et l'outil me répond poliment qu'il lui faut un jeton d'authentification. Un mot de passe. Chez moi, pour parler à un programme qui ne cause qu'à lui-même. Ma première réaction a été un haussement d'épaules : c'est local, enfin, à qui veux-tu que je me présente, à moi-même ? Sauf que le logiciel n'en démordait pas, et il avait raison à sa manière : le local protège vos données, pas votre accès. Le programme veut quand même savoir qui l'appelle, exactement comme votre box internet réclame un mot de passe alors qu'elle est posée dans votre salon. Il a fallu que je me fabrique un laissez-passer pour ma propre machine. On sourit, mais la leçon est juste sur ce que veut dire tourner en local : moins de dépendance au monde extérieur, oui ; l'anarchie, non.

## Alors, on en est où ?

Soyons honnêtes, parce que c'est le seul angle qui m'intéresse.

Je n'ai pas gagné. Loin de là. Ce que la machine et moi avons construit jusqu'ici, ce sont les fondations : le squelette du projet, le harnais qui lance les 1 745 tests officiels, la base de données de conformité qui se dresse toute seule avec ses 185 tables. Et une pièce dont je suis assez fier : à partir de simples annotations posées sur le code, l'IA génère automatiquement tout un pan de tuyauterie interne, sans tricher, sans les raccourcis paresseux que ce genre d'outil adore prendre en douce. Vidocq s'interdit certaines facilités, et le modèle local a appris à respecter ces règles, à condition qu'on les lui rappelle fermement et souvent.

Mais la suite de tests officielle, elle, est encore quasiment toute rouge. Le moteur ne fait presque rien pour l'instant, donc les tests échouent en masse, et c'est parfaitement normal à ce stade. Nous sommes au pied de la montagne, les crampons aux pieds, la carte dépliée. Le sommet est très loin et très haut.

Ce qui m'intéresse, ce n'est pas d'annoncer une victoire que je n'ai pas. C'est ce que le parcours révèle. Un modèle qui tient dans mon sac à dos, coupé du monde, a écrit du vrai code Java conforme à une norme industrielle, a débogué ses propres erreurs de compilation, et a suivi des règles d'architecture exigeantes. Il a aussi tourné en rond comme un stagiaire distrait, saturé sa mémoire par maladresse, et déclaré forfait devant des broutilles. Les deux à la fois. C'est ça, la vérité de l'affaire.

## Ce qui se passe vraiment dans la machine

Jusqu'ici je vous ai parlé du modèle comme d'un cerveau unique. La réalité est plus organisée, et plus amusante. Ce n'est pas un génie solitaire penché sur son clavier, c'est une petite équipe. Le jargon technique appelle ça des « agents » ; je préfère vous les présenter comme le personnel d'un petit atelier, chacun à son poste et avec ses propres clés.

![Une petite entreprise d'agents spécialisés, chacun à son poste, autour d'un développeur en chef.](/images/2026/jai-fait-coder-mon-mac-tout-seul/petite-entreprise.png)
*Pas un génie solitaire, mais une petite entreprise : chaque rôle a son poste et ses droits d'accès.*

Un modèle lâché seul sur un projet de cette taille se perd. Il oublie ce qu'il faisait, il tourne en rond, il refait trois fois la même erreur avec la même bonne foi. Pour en tirer quelque chose d'utile, il a fallu bâtir autour de lui toute une organisation. Des postes, des droits d'accès, un règlement intérieur, des procédures. Laissez-moi vous présenter le personnel.

Il y a le développeur en chef. C'est lui qui écrit le code, lance les tests, et a le droit de tout modifier. Le gros du travail passe par ses mains. Mais il a une consigne de fer : une seule tâche à la fois, puis il ferme boutique et on repart à neuf. Un développeur qui garde trop de dossiers ouverts sur son bureau finit par tout mélanger, et le sien déborde vite.

Autour de lui, des spécialistes. L'érudit connaît la norme par cœur : quand le développeur a un doute sur ce que la règle exige, il lui pose la question, l'érudit va lire les documents officiels et revient avec la réponse et la citation exacte. L'érudit n'a pas le droit d'écrire une seule ligne de code. Il lit, il cite, il repart. Et sa mémoire à lui est jetée après chaque consultation, pour ne pas encombrer celle du développeur.

Il y a l'inspecteur, dont le seul métier est la méfiance. Après chaque étape, il relit le travail à la recherche des raccourcis honteux : le code qui fait semblant de fonctionner, la fonction vide qu'on a laissée là en jurant d'y revenir, le test qu'on a discrètement débranché pour que les chiffres aient meilleure allure. L'IA adore ces petites triches, comme un élève qui recopie la dernière ligne du corrigé sans faire le calcul. L'inspecteur les débusque, et surtout, il n'a le droit de rien réparer. Il constate, il signale, un point c'est tout. Sinon il serait juge et partie.

Il y a l'archiviste, qui tient le journal de bord : où on en est, ce qui est fait, quel est le prochain chantier. C'est grâce à lui qu'on peut fermer une séance le soir et en rouvrir une le lendemain sans avoir tout oublié. La mémoire du projet ne vit pas dans la tête du modèle, qui est courte, mais dans des fichiers qu'on relit à chaque réveil. Un cerveau électronique qui a appris à écrire sur sa main pour ne rien oublier.

Et il y a le sage, celui qu'on ne dérange qu'en dernier recours, quand le développeur s'est cogné deux fois de suite au même mur. Le sage réfléchit lentement, plus lentement que les autres, et rend un verdict : voilà la décision, voilà pourquoi. On ne l'appelle presque jamais. C'est le vieux qui fume tranquillement au fond de l'atelier et qu'on va chercher quand plus personne ne comprend rien.

Il y en a d'autres. Un qui veille à ce qu'on n'ajoute pas de pièces interdites au moteur. Un qui surveille la façon dont le code jongle avec plusieurs tâches à la fois, là où les erreurs sont les plus sournoises. Un éclaireur qu'on envoie en reconnaissance pour répondre à « où est rangé tel machin » sans que le développeur ait à fouiller lui-même. Et, on l'a vu, celui qui sert d'yeux. Une douzaine de rôles en tout, chacun avec ses droits taillés sur mesure. Le développeur peut tout casser ; l'inspecteur ne peut toucher à rien. Cette séparation n'est pas une coquetterie : c'est elle qui empêche chacun de déborder de son rôle, et croyez-moi, ils adorent déborder.

À côté de cette équipe, deux autres ingrédients : des fiches et des boutons.

Les fiches sont des notes thématiques rangées dans un classeur : comment le projet est organisé, comment lancer la grande suite de tests, comment produire du code sans tricher, comment le modèle doit gérer sa propre mémoire quand la séance s'alourdit. Plutôt que de tout garder en permanence dans la tête du modèle, ce qui l'encombrerait pour rien, on sort la bonne fiche au bon moment, et on la range après. Un bureau bien tenu, pas un bureau vide.

Les boutons sont les gestes qu'on répète dix fois par jour, transformés en raccourcis. Un pour ouvrir la journée de travail, qui réveille l'outillage et prépare le terrain. Un pour tout vérifier avant de valider quoi que ce soit : est-ce que ça compile, est-ce que les tests passent, est-ce que l'inspecteur a trouvé quelque chose à redire. Un pour interroger l'érudit. Un pour lire une capture d'écran. Chaque bouton déclenche la bonne procédure et convoque le bon spécialiste, sans que j'aie à tout réexpliquer depuis le début.

## L'atelier en clair, pour ceux que ça démange

La métaphore, c'est bien pour la conversation, mais si vous êtes du métier vous voulez voir les vrais boulons. Les voici. Tout tient dans un dossier discret à la racine du projet, `.opencode`, plus quelques fichiers texte. Rien de propriétaire, rien de magique : du Markdown et un peu de JSON, versionnés dans le dépôt comme le reste du code.

```
.opencode/
  agents/     13 rôles, un fichier chacun : jpa-dev (le chef),
              spec-reader, tck-runner, sonar-runner, codegen,
              auditor, explore, tracker, module-guardian,
              dependency-gatekeeper, virtual-threads-reviewer,
              thinker, vision
  commands/   /next /gate /commit /tck /tck-fix /sonar /audit
              /spec /see /status /session-end /log-bug /log-bench
  skills/     mansart-jpa, mansart-jpa-tck, vidocq-codegen,
              context-discipline
  OPERATING.md   les règles communes, injectées dans chaque agent
opencode.json    le modèle, les limites, la gestion de la mémoire
PLAN.md  TASKS.md  STATUS.md   la feuille de route et le journal de bord
```

Chaque agent est un simple fichier Markdown : un en-tête qui fixe ses droits et son modèle, puis un texte qui lui explique son métier. Le chef d'atelier, celui que j'ai appelé `jpa-dev`, est le seul autorisé à tout modifier et à lancer n'importe quelle commande, sauf les gestes vraiment dangereux comme effacer l'historique, qui réclament une confirmation. Les autres sont bridés à dessein : l'inspecteur et l'érudit n'ont carrément pas l'outil pour écrire un fichier, on le leur a retiré. Ce n'est pas une politesse qu'on leur demande, c'est une serrure. Et on a vérifié qu'elle tient : sommé d'écrire un fichier, l'inspecteur en est physiquement incapable, l'outil n'est pas dans sa trousse.

Voici comment le chef distribue le travail. Quand il a besoin de lire la norme, de fouiller le code ou de lancer les tests, il ne le fait pas lui-même : il passe commande à un spécialiste, dont le brouillon mental part à la corbeille une fois la réponse rendue. C'est ce qui garde son propre bureau dégagé.

![Le développeur en chef délègue à chaque spécialiste : lecture de la norme, recherche, tests, audit, génération de code, journal.](/images/2026/jai-fait-coder-mon-mac-tout-seul/equipe-agents.png)
*Le chef d'atelier délègue chaque tâche volumineuse à un spécialiste dont la mémoire est jetée après usage.*

Les commandes, ce sont les fichiers du dossier `commands`. Chacune est encore un bout de Markdown : une consigne toute prête que je déclenche en tapant son nom précédé d'une barre oblique. Elles orchestrent la journée. Le squelette d'une session tient en cinq gestes, et la boucle du milieu est du développement piloté par les tests dans sa version la plus stricte : on écrit d'abord le test qui échoue, puis le minimum de code pour le faire passer.

![La boucle d'une session : /next réveille l'outillage, prend une tâche, écrit le test qui échoue, implémente le minimum, /gate vérifie, puis /commit et /session-end.](/images/2026/jai-fait-coder-mon-mac-tout-seul/boucle-session.png)
*Une session en cinq gestes, avec au centre la boucle rouge puis vert du développement piloté par les tests.*

Les fiches, enfin, dans le dossier `skills`, sont la mémoire longue du projet : l'architecture, la façon de lire les tests sans se noyer, les règles de génération de code, la discipline à tenir quand la séance s'alourdit. Le modèle les sort du tiroir à la demande ; elles ne l'encombrent pas en permanence.

Un dernier chiffre, pour les maniaques dans mon genre. Tout ce que le modèle a en tête en permanence au début de chaque tour, son mode d'emploi de chef, les règles communes, la liste des fiches disponibles, tient en gros à cinq mille mots. C'est volontairement maigre : sur une machine où chaque mot chargé coûte du temps, on ne garde sous les yeux que l'essentiel et on va chercher le reste seulement quand il sert. Toute la philosophie du montage se résume à ce nombre : ne rien porter qu'on n'utilise pas tout de suite.

## Pourquoi tout ce fatras : une mémoire courte, et qui ralentit

Si vous vous demandez pourquoi je m'encombre de treize agents, de fiches et d'un journal de bord au lieu de bavarder tranquillement avec une seule IA, la réponse tient dans une contrainte que je vous ai servie plus haut par petites touches, et qu'il est temps d'expliquer pour de bon. Elle commande tout le reste.

Le modèle a une mémoire de travail. Les informaticiens l'appellent la fenêtre de contexte, et pour le mien elle fait 131 072 jetons. Un jeton, c'est environ trois quarts d'un mot. Disons cent mille mots. Tout ce dont le modèle a besoin pour le tour en cours doit y tenir en même temps : ses instructions, le code qu'il regarde, le résultat des tests, notre conversation. Au-delà, ça déborde, et il faut faire de la place.

Premier geste de la recette : on ne remplit jamais la fenêtre jusqu'au bord. On garde une réserve d'environ douze mille jetons, intouchable, pour une raison toute bête. Quand le modèle répond, il écrit, et cette écriture consomme aussi de la place dans la fenêtre. S'il ne reste plus rien au moment où il se met à rédiger, sa réponse est tranchée en plein milieu, en général au pire endroit, pendant qu'il écrit un fichier. On l'a vécu : une réponse coupée net, un fichier à moitié écrit, un tour perdu. La réserve, c'est le coussin qui lui garantit d'avoir toujours de quoi finir sa phrase. Simple, mais il fallait y penser, et surtout mesurer le bon montant : trop petit, on coupe les réponses ; trop gros, on gâche de la fenêtre utile.

Deuxième contrainte, plus sournoise, et c'est le cœur de l'affaire. Plus la mémoire est pleine, plus le modèle est lent. Pas un peu : beaucoup. Pour produire chaque nouveau mot, il doit en quelque sorte relire tout ce qu'il a déjà en tête. À bureau vide, il file. À bureau plein, il peine. Les chiffres de ma propre machine, relevés au banc d'essai :

| ce qu'il a en mémoire | sa vitesse |
| --- | --- |
| presque rien | 140 mots par seconde |
| l'équivalent d'un gros fichier | 90 mots par seconde |
| une longue séance de travail | 65 mots par seconde |
| la mémoire quasi pleine | 55 mots par seconde |

Un modèle à moitié rempli travaille à moitié vitesse. Ce n'est pas un défaut à corriger, c'est la nature de la bête. Et ça change tout, parce qu'une conversation qui s'éternise n'est pas seulement risquée pour la lucidité du modèle, elle devient aussi de plus en plus lente, mot après mot.

![Un bureau qui se remplit de dossiers : plus la mémoire est pleine, plus la machine ralentit.](/images/2026/jai-fait-coder-mon-mac-tout-seul/bureau-memoire.png)
*Plus le bureau se remplit, plus le modèle ralentit. Toute l'organisation vise à le garder dégagé.*

De là découle toute l'organisation, et voici la recette proprement dite. Puisqu'un gros contexte est lent, coûteux et abrutissant, on garde celui du chef le plus vide possible, coûte que coûte. Comment ? En lui interdisant de lire lui-même tout ce qui est volumineux. Les six mégaoctets de sources des tests officiels, par exemple : le chef n'y touche jamais. Il envoie l'érudit les lire, dans la mémoire de l'érudit, et l'érudit ne revient qu'avec quarante lignes de réponse ciblée. Les six mégaoctets ont existé, ont été lus, puis jetés avec la mémoire du sous-agent. Le chef, lui, n'a vu que le résumé. Chaque spécialiste est une mémoire jetable qu'on remplit et qu'on vide pour épargner celle du patron.

C'est ça, le vrai rôle des sous-agents. On les prend pour une affaire d'organisation, de division du travail. En réalité c'est une ruse d'économie de mémoire. Déléguer, ici, ce n'est pas se décharger d'une corvée, c'est empêcher son propre bureau de se remplir. Et un bureau qui reste dégagé, c'est un modèle qui reste rapide et lucide jusqu'à la fin de la séance.

Le reste des règles coule de la même source. Une seule tâche par séance, pour ne pas accumuler. L'état du projet écrit dans des fichiers plutôt que retenu de tête, pour pouvoir fermer et rouvrir à froid sans rien traîner. Naviguer dans le code avec un outil qui répond en dix mots au lieu de relire des fichiers entiers. Tout, absolument tout, vise à garder la fenêtre légère. Une fois qu'on a saisi ça, le fatras d'agents cesse d'être un fatras. C'est une machine soigneusement conçue pour ne pas se souvenir de trop de choses à la fois.

Et malgré tout ça, une de mes tâches finit en moyenne autour de quatre-vingt-dix mille jetons en mémoire, sur les cent trente et un mille que la machine peut tenir. Les trois quarts du bureau occupés. Toute cette discipline, ces spécialistes jetables, ces règles obsédées par la légèreté, et on remplit quand même presque tout. C'est peut-être ça, la vraie mesure de la difficulté : une seule tâche de programmation, menée sérieusement, suffit à saturer les trois quarts de la mémoire d'une machine. La discipline n'accomplit aucun miracle. Elle empêche juste que ça déborde, et vu ce que coûterait le débordement, ce n'est déjà pas rien.

## Le secret le moins glorieux

Maintenant, la question qui gratte. Toute cette belle organisation, l'équipe, les fiches, les boutons, les règles ajustées au millimètre : qui l'a construite ?

Pas le modèle local, en tout cas pas cette fois. Pour aller vite, j'ai confié la conception à Claude, un des gros modèles distants, celui-là même dont je vous disais qu'il fait tourner le reste de Vidocq. C'est lui qui a mené les mesures de vitesse, qui a diagnostiqué l'affaire du numéro de version sans les points, qui a rédigé les consignes de chaque membre de l'équipe, qui a inventé un nouveau garde-fou après chaque plantage. Pendant des jours, un modèle installé dans un centre de données à des milliers de kilomètres a fabriqué, pièce par pièce, l'atelier dans lequel un petit modèle local allait pouvoir travailler seul.

Et je veux être honnête sur ce point, parce que c'est tentant d'en tirer une morale trop nette. Je n'ai pas prouvé que le modèle local était incapable de bâtir sa propre maison. Je ne lui ai simplement pas demandé. J'ai pris le raccourci du costaud parce qu'il était là, sous la main, et qu'il allait plus vite, pas parce que j'aurais fait la démonstration que le petit n'y arriverait pas. Peut-être qu'il en serait capable, bien guidé, plus lentement. Je n'en sais rien encore.

C'est justement la prochaine expérience, et la vraie marche qui reste à gravir vers le tout-local : non plus seulement faire travailler l'IA locale dans un atelier construit pour elle, mais lui faire construire l'atelier. Pour l'instant, disons-le comme c'est : le costaud a fabriqué les béquilles du petit, le petit tient debout et marche. Reste à savoir s'il peut apprendre à se fabriquer ses propres béquilles. Je vous raconterai.

## Le jour où je l'ai laissé s'organiser tout seul

Je vous disais que je raconterais plus tard s'il savait se fabriquer ses propres béquilles. Je n'ai pas tenu une journée.

Voilà le contexte. Le travail avance par petites tâches que je découpe une à une, en général avec l'aide du gros modèle distant. Un soir, la liste s'est vidée. Il fallait attaquer le morceau suivant, un gros chapitre, et le débiter en tâches assez fines pour tenir dans la courte mémoire du petit. Plutôt que de le faire moi-même, je me suis demandé : et si je laissais le local se donner ses propres ordres ? Je lui ai posé une seule règle, mais ferme : avant d'inventer quoi que ce soit, va lire les tests officiels qui décrivent ce qu'il faut construire. Ensuite, découpe.

Le résultat m'a scié, dans les deux sens.

Le bon d'abord. Il est vraiment allé lire les tests. Il ne les a pas inventés, il a cité les vrais, à la ligne près, et il en a tiré une liste de tâches dans un ordre qui tenait debout : poser les fondations avant de bâtir dessus, ne pas essayer de modifier une donnée avant de savoir la créer. Pour quelque chose qu'on présente partout comme le domaine réservé des gros modèles, l'ossature était étonnamment juste.

Le moins bon ensuite. Il a débordé. Il a glissé dans la liste des tâches qui appartenaient à un chapitre situé bien plus loin, entraîné par des tests qui mélangeaient les sujets. Il a pondu deux ou trois tâches monstrueuses, du genre une seule ligne annonçant tranquillement « implémenter l'interface entière », soit des semaines de travail déguisées en case à cocher. Et surtout, il a oublié une règle qu'on venait de fixer ensemble vingt minutes plus tôt, une règle qu'il avait sous les yeux, et qu'il a superbement ignorée.

La morale du premier jet tient en une phrase : il sait ébaucher, pas finaliser. Il pose une charpente correcte, mais il faut ensuite quelqu'un pour couper le hors-sujet, ramener les tâches monstres à taille humaine, et rattraper les règles qu'il a laissées filer. Il se fabrique bien des béquilles, sauf qu'elles sont un peu de travers, et qu'un adulte doit repasser resserrer les vis avant qu'il ose s'appuyer dessus.

Sauf que je n'allais pas me contenter de corriger sa copie. Ce qui m'intéressait, c'était de savoir s'il pouvait apprendre. Alors j'ai fait ce qu'on fait avec un apprenti : j'ai pris chacune de ses bourdes et je l'ai transformée en règle écrite, noir sur blanc dans ses consignes. Ne mets pas dans ta liste ce qui appartient à un chapitre futur. Ne fabrique pas de tâche géante. Range tes tests au bon endroit. Et relis-toi avant de me rendre ta copie. Puis j'ai effacé son premier jet, et je l'ai laissé tout recommencer, ces règles sous les yeux.

C'était nettement mieux. Les tâches démesurées avaient disparu, le gros du hors-sujet aussi, la liste était plus courte et mieux rangée. Les règles écrites l'avaient tenu. Mais pas complètement : il gardait encore une ou deux fonctions qui appartenaient visiblement à un chapitre lointain, et il avait discrètement recréé une tâche fourre-tout, la case où l'on jette ce qu'on ne sait pas classer. Les fautes grossières corrigées, les nuances fines continuaient de lui filer entre les doigts. On peut lui apprendre de ses erreurs, et il apprend pour de vrai. Mais il reste une frontière que la règle écrite ne franchit pas : ce petit jugement qui vous fait dire « ça, ça n'a rien à faire ici ». Passé une certaine finesse, il faut encore quelqu'un qui sait, et ce quelqu'un, pour l'instant, n'est pas lui.

C'est peut-être ça, le vrai statut de l'IA locale aujourd'hui. Pas incapable de penser à votre place. Capable, même, d'apprendre de ses bourdes quand on les lui écrit noir sur blanc. Juste pas encore capable de se relire tout seul jusqu'au bout.

Alors je ne l'ai pas laissé se relire tout seul.

C'est là que j'ai eu mon idée, et je vais me permettre d'en être un peu fier, parce qu'elle est de moi. Pas du gros modèle distant qui a bâti tout l'atelier, pas du petit local qui y travaille. De moi, l'humain resté dans la boucle, avec une astuce toute bête que connaît n'importe quel écrivain : on relit toujours mieux le texte d'un autre que le sien. Le sien, on l'aime déjà, on glisse sur ses défauts sans les voir. Alors pourquoi ne pas faire relire le plan au modèle, mais dans une conversation neuve, cerveau vidé, en lui cachant qu'il en est l'auteur ? Le même modèle, convoqué cette fois comme correcteur, pas comme écrivain.

J'ai fabriqué une seconde commande pour ça, que j'ai appelée `/check-plan`. Elle relance le modèle à froid, avec une seule mission : voilà un plan que quelqu'un a écrit, déchire-le, trouve ce qui déborde, ce qui est trop gros, ce qui est mal rangé, et corrige.

Le résultat m'a bluffé. Cette fois, il a tout attrapé. Le hors-sujet renvoyé au bon chapitre, les tâches géantes découpées en morceaux digestes, les tests remis à leur place. Mieux : il a corrigé des choses que je ne lui avais même pas signalées, et il a eu l'élégance de finir par « ces deux points-là, honnêtement, je ne suis pas sûr, à vous de trancher ». Le correcteur a réussi là où l'écrivain s'était planté. Le même modèle, la même machine. La seule différence, c'est qu'on lui a fait relire le travail d'un inconnu qui se trouvait être lui-même.

Et voilà ce qui me réjouit, sans vouloir froisser les machines. Cette idée-là, ni le gros cerveau distant ni le petit local ne l'avaient eue. C'est l'humain de service qui l'a trouvée, en piochant dans un vieux réflexe de métier. Dans une histoire où une IA a dessiné l'atelier et une autre l'a fait tourner, c'est encore moi qui ai apporté le tour de main que ni l'une ni l'autre n'avait vu. On n'est peut-être pas tout à fait caducs, nous autres. Il nous reste des idées que les machines, pour l'instant, ne pensent pas à avoir.

## L'IA locale, ça marche ?

Oui. Avec les guillemets promis en début d'article.

Oui, si vous avez la machine qu'il faut, et cette machine coûte cher et chauffe. Oui, si vous acceptez de passer une partie de votre temps non pas à coder, mais à comprendre pourquoi votre assistant boude. Oui, si vous mesurez tout et ne croyez rien sur parole, y compris et surtout vos propres intuitions, qui se trompent plus souvent qu'on ne l'admet.

Mais que personne ne vous vende la simplicité. Télécharger un modèle et le regarder coder tout seul à votre place, c'est un fantasme de brochure. Ce que j'ai vécu ressemble bien davantage à monter une équipe projet : recruter les bons profils, écrire les fiches de poste, distribuer les clés, rédiger les procédures, et mesurer sans relâche pour distinguer ce qui marche vraiment de ce qu'on s'est raconté. Le modèle est le moteur, et un bon moteur. Mais un moteur posé sur un établi ne vous emmène nulle part. Il faut construire la voiture autour, et la voiture, c'est le plus gros du chantier. Faire de l'IA locale qui marche, ce n'est pas simple. C'est même exactement le contraire, et c'est le seul enseignement que je retiens sans la moindre réserve.

Ce qui a changé, en revanche, c'est que ce n'est plus de la science-fiction. Un modèle privé, sur une machine privée, sans facturation au clic et sans donnée qui s'échappe, peut aujourd'hui participer sérieusement à un projet logiciel sérieux. Il y a cinq ans, cette phrase aurait fait sourire. La plus grosse partie de Vidocq continue de s'écrire avec les gros modèles distants, parce qu'ils sont plus rapides et plus costauds, et je continuerai de les utiliser sans complexe, y compris pour construire la maison du petit. Mais l'écart se resserre, et l'idée qu'on puisse un jour tout faire chez soi n'est plus ridicule. Elle est juste chère, bruyante, et beaucoup plus compliquée qu'elle en a l'air.

Il y a une dernière chose, et elle m'a surpris. Avec les gros modèles distants, ceux qui font tourner Claude Code, Codex et les outils du même acabit, on peut se permettre d'être léger. On lance une intention un peu vague, la machine comble les trous, et le plus souvent ça marche. Il faut garder un oeil sur ce qui sort, évidemment, parce que ces modèles-là ont un travers discret : leur puissance leur permet de prendre des libertés qui passent inaperçues. Un petit arrangement avec la règle par-ci, un raccourci élégant par-là, dissimulés sous la masse de bon code autour. Ça tourne, alors on ne regarde pas de trop près. C'est confortable, et un peu traître.

L'IA locale ne vous laisse pas ce confort. Elle est trop juste pour combler vos trous à votre place. Si votre intention est floue, elle produit du flou. Si vous ne lui avez pas fabriqué de mémoire, elle oublie. Si vous ne l'avez pas structurée, elle part en vrille, et elle le fait de façon visible, bruyante, immédiate. Elle vous oblige à être précis, sérieux, méthodique, à écrire noir sur blanc ce que vous attendez, à vérifier chaque étape, à ne rien laisser au hasard. Ce n'est pas gratuit. C'est même franchement fatigant certains soirs.

Mais en y repensant, cette exigence porte un nom, et ce n'est pas une punition. Être précis, structuré, méfiant envers ce qu'on produit, vérifier au lieu de croire : c'est exactement le métier d'ingénieur. Le gros modèle vous laisse l'oublier tant que ça compile. Le petit vous y ramène de force. Et à tout prendre, je ne suis pas certain que ce soit le petit qui me rende moins bon.

Il y a d'ailleurs, à cette vitesse des gros modèles, un coût dont on parle peu. Quand une machine vous pond en trois minutes ce qui vous aurait pris trois heures, elle vous rend un fier service, mais elle vous laisse aussi une ardoise : du code qui marche, et que vous n'avez pas vraiment compris. On appelle ça la dette technique ; je dirais plutôt une dette de compréhension. Elle ne se voit pas tant que tout roule. Puis un jour ça casse, ou il faut modifier, ou quelqu'un vous demande pourquoi c'est fait comme ça, et il faut rembourser d'un coup ce qu'on n'a pas appris au fil de l'eau. C'est épuisant, et bien plus dur que de comprendre en avançant.

L'IA locale, elle, ne vous laisse pas filer aussi vite. Elle est plus lente, forcément, mais cette lenteur a un nom moins vexant qu'il n'y paraît : de l'attention. Vous restez dedans. Vous voyez passer les détails, vous gardez les mains dans le cambouis, vous comprenez ce qui se construit parce qu'il faut bien le guider pas à pas. Et malgré ça, sur toute la plomberie ingrate, le répétitif, le code qui ne mérite pas qu'on y passe la soirée, ça reste un gain de temps considérable. On cesse de s'user sur ce qui ne le vaut pas, sans s'endetter en compréhension.

Alors je me demande si le vrai bon compromis ne serait pas là, à mi-chemin. Pas l'artillerie lourde qui fait tout à votre place et vous laisse spectateur de votre propre code. Pas non plus le tout-à-la-main qui vous use sur des broutilles. Quelque chose entre les deux : assez puissant pour vous débarrasser du fastidieux, assez exigeant pour vous garder aux commandes. Le meilleur des deux mondes, peut-être bien. Et surtout l'endroit précis où l'ingénieur et le cerveau artificiel cessent de se disputer la place pour travailler à la même table, chacun à son rythme, l'un rapide, l'autre attentif. La vraie complémentarité, ce n'est pas l'homme qui surveille la machine, ni la machine qui remplace l'homme. C'est ça.

![Un ingénieur et une intelligence artificielle travaillant côte à côte à la même table, l'un attentif, l'autre rapide.](/images/2026/jai-fait-coder-mon-mac-tout-seul/complementarite.png)
*La vraie complémentarité : ni surveillance ni remplacement, mais deux façons de travailler à la même table.*

En attendant, mon Mac a maigri d'une bonne centaine de gigaoctets, j'ai appris à un logiciel qu'un numéro de version pouvait ne pas avoir de points, et j'ai deux intelligences artificielles qui se répartissent le boulot sur mon bureau, dont une qui sert d'yeux à l'autre.

Si ça, ce n'est pas le futur, ça y ressemble quand même beaucoup. Ne serait-ce que par la température de la pièce.

---

*Yann Blazart développe la pile logicielle Vidocq. Toutes les mesures citées dans cet article ont été relevées sur sa propre machine et consignées ; il les fournira volontiers à quiconque doute, ce qui est la moindre des choses quand on parle d'intelligence artificielle.*

*Transparence, tant qu'on y est : cet article a été écrit avec l'aide d'une IA, la même engeance que celle dont il parle. Pour nommer les modèles, puisque c'est justement le sujet : le petit modèle local du récit est Qwen3.6-35B-A3B, et le gros modèle distant qui a bâti l'atelier, mené les mesures et rédigé ce texte à mes côtés, c'est Claude. Je n'en ai aucune honte, et je préfère le dire que le cacher. La machine a tenu le clavier et proposé des tournures ; les idées, les mesures, les erreurs, les partis pris et les blagues douteuses restent les miens. Le jus de cerveau, c'est encore moi qui le fournis. Il fallait bien quelqu'un pour décider de quoi parler, trancher ce qui était vrai de ce qui m'arrangeait, et vérifier que la machine ne prenait pas, elle non plus, quelques libertés cachées sous la masse.*
