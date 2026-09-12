# Reflet — Document maître de conception

> **Référence de conception produit et technique — septembre 2026 — V2.1**
>
> Ce document consolide le document initial **AI Search Visibility Tracker Recap.md** et les décisions prises ensuite pendant la conception de Reflet.
>
> **Mise à jour V2.1 :** verrouillage du protocole d'interrogation du moteur mesuré (ChatGPT via API OpenAI) et du choix de stack frontend (TanStack), suite à la revue de conception technique de septembre 2026. Voir §7.3, §29.3 et §47.
>
> **Statut :** document de référence vivant — version consolidée après revue de conception.  Les éléments marqués **DÉCIDÉ** sont à considérer comme les choix actuels. Les éléments marqués **PROPOSÉ** sont la recommandation de conception à valider. Les éléments marqués **FUTUR** ne font pas partie du MVP immédiat.

---

## 0. Résumé exécutif

### 0.1 Ce qu’est Reflet

**Reflet est un système de mesure, d’analyse, de recommandation et de vérification de la visibilité d’une marque dans les réponses générées par ChatGPT.**

Le produit ne se contente pas de produire un score. Il doit établir une boucle :

```text
VOIR → COMPRENDRE → AGIR → VÉRIFIER
```

Reflet observe ce que ChatGPT répond lorsque des questions importantes pour un marché sont posées à propos d’une catégorie, d’un problème, d’un besoin ou d’une décision d’achat. Il compare ensuite ces réponses avec les informations réellement présentes sur le site de la marque, identifie des écarts ou opportunités lorsqu’ils sont étayés par des preuves, puis mesure l’évolution au fil du temps.

### 0.2 Promesse produit

> **Reflet mesure la visibilité d’une marque dans les réponses générées par ChatGPT selon un protocole de mesure contrôlé.**

Formulation à éviter :

> « Reflet mesure exactement ce que ChatGPT affiche à chaque utilisateur. »

La mesure de Reflet concerne des **réponses observées dans un protocole défini**. Elle ne prétend pas représenter toutes les réponses possibles produites pour tous les utilisateurs.

### 0.3 Ce que Reflet n’est pas

Reflet n’est pas :

- un outil SEO généraliste ;
- un générateur massif de contenu ;
- un chatbot ;
- un outil de scraping de chatgpt.com ;
- un moteur de classement universel de toutes les IA ;
- un système d’édition automatique du site ;
- un simple score produit par une IA sans preuves.

### 0.4 Boucle fondamentale

```text
SITE DU CLIENT
    ↓
COMPRÉHENSION DE LA MARQUE
    ↓
GÉNÉRATION DE QUESTIONS PERTINENTES
    ↓
MESURE DANS CHATGPT
    ↓
ANALYSE STRUCTURÉE DES RÉPONSES
    ↓
SCORE + CONCURRENTS + OPPORTUNITÉS
    ↓
ACTIONS / MODIFICATIONS DU SITE
    ↓
DÉTECTION AUTOMATIQUE DES CHANGEMENTS
    ↓
MESURES SUIVANTES
    ↓
ÉVOLUTION OBSERVÉE
```

---

# 1. Positionnement et principe produit

## 1.1 Problème

Une marque peut être correctement présente sur son propre site tout en étant peu ou mal représentée lorsqu’un prospect demande à ChatGPT :

- quel outil choisir ;
- quelle solution recommander ;
- quelle alternative utiliser ;
- quelle entreprise répond à un besoin précis ;
- quel produit convient à un profil donné ;
- quels acteurs existent dans une catégorie donnée.

Le problème fondamental est donc l’absence de visibilité sur **la représentation générée par les modèles**.

Le document initial formulait le besoin comme un équivalent de Google Search Console pour les réponses IA. Cette analogie reste utile pour comprendre le produit, mais Reflet doit aller plus loin qu’un simple outil de reporting. fileciteturn3file0L24-L35

## 1.2 Différenciation

Le cœur de la différenciation n’est pas seulement :

> « Nous interrogeons ChatGPT. »

C’est :

> **« Nous savons quelles questions mesurer, pourquoi elles sont pertinentes, ce que les réponses disent réellement, quelles informations du site peuvent expliquer certaines observations, et comment suivre les évolutions dans le temps. »**

Cela implique cinq briques différenciantes :

1. **Question Engine** spécifique à chaque marque ;
2. **Measurement Engine** contrôlé et reproductible ;
3. **Evidence Chain** pour justifier les conclusions ;
4. **Change Detection Engine** pour observer les évolutions du site sans travail manuel ;
5. **Historical Analysis** reliant les modifications observées aux mesures futures, sans surpromettre de causalité.

---

# 2. Périmètre MVP actuel

## 2.1 Moteur observé

**DÉCIDÉ : ChatGPT uniquement au démarrage.**

Raison :

- surface technique plus petite ;
- message commercial plus clair ;
- coût et instrumentation maîtrisables ;
- possibilité de construire correctement le protocole avant d’ajouter plusieurs moteurs.

Perplexity, Google AI Overviews, Gemini, Copilot et d’autres surfaces sont futures. Le document initial prévoyait déjà ce séquencement mono-moteur puis multi-moteur. fileciteturn3file0L51-L65 fileciteturn3file0L108-L113

## 2.2 Produit vendu

**PROPOSÉ / à verrouiller selon validation finale du pricing :**

- 1 site ;
- jusqu’à 30 questions suivies ;
- mesure ChatGPT ;
- score de visibilité ;
- détail par question ;
- détection des concurrents observés ;
- opportunités étayées ;
- historique ;
- détection des changements du site ;
- mesure hebdomadaire officielle ;
- monitoring quotidien adaptatif ;
- mesure manuelle limitée.

Le pricing de référence actuellement retenu est un plan unique à **75 €/mois**, avec 30 questions suivies et 1 site. Les anciennes versions commerciales ne servent plus de référence. fileciteturn3file0L78-L100

---

# 3. Parcours utilisateur

## 3.1 Onboarding

Le parcours de base reste volontairement très court :

```text
SIGN UP
  ↓
SITE WEB
  ↓
ANALYSE AUTOMATIQUE
  ↓
MARQUE / SECTEUR / OFFRE / AUDIENCE
  ↓
QUESTIONS PROPOSÉES
  ↓
VALIDATION / AJUSTEMENT
  ↓
PREMIÈRE MESURE
  ↓
DASHBOARD
```

Le document initial retenait comme principe UX : **un champ en moins vaut toujours mieux qu’un champ en plus**. Les informations déductibles doivent être déduites. fileciteturn3file0L67-L76

## 3.2 Ce que l’utilisateur doit décider

La décision humaine principale reste la validation de l’ensemble des questions suivies.

Il peut :

- accepter toutes les questions ;
- retirer celles qui sont faibles ;
- modifier une formulation ;
- ajouter ses propres questions ;
- demander une nouvelle génération.

L’IA propose ; **l’utilisateur contrôle ce qui devient une unité de mesure suivie**.

---

# 4. Site Intelligence

## 4.1 Principe

Reflet ne doit pas demander à Gemini de « regarder un site et inventer des questions ».

Le site est d’abord transformé en données structurées et en preuves exploitables.

```text
URL
 ↓
CRAWLER
 ↓
EXTRACTION STRUCTURÉE
 ↓
BRAND INTELLIGENCE
 ↓
QUESTION ENGINE
```

## 4.1bis Stratégie de crawl — DÉCIDÉ

Les sites clients varient énormément (WordPress, Webflow, Shopify, Next.js, SPA React pure, sites codés à la main). Le crawler doit s'adapter automatiquement, sans configuration manuelle par site.

### Étapes

1. **Découverte via sitemap.** Lecture de `/sitemap.xml` en priorité (§10.3) pour obtenir la liste réelle des pages, avec priorité aux pages stratégiques (accueil, pricing, services, à propos).
2. **Première passe en requête HTTP simple**, toujours — rapide et quasi gratuite, suffisante pour la majorité des sites (WordPress, Webflow, Next.js en SSR font tous du rendu serveur par défaut).
3. **Classification automatique de chaque page**, à partir du HTML récupéré :
   - Ratio texte visible / taille du HTML anormalement bas → suspect.
   - Empreintes de SPA côté client pur (`<div id="root">` quasi vide + gros bundle JS, sans `__NEXT_DATA__` ni équivalent SSR) → suspect.
   - **JSON-LD structuré (schema.org)** présent dans le HTML — fréquent sur les sites WordPress avec plugin SEO (Yoast, RankMath) — extrait en priorité : c'est une source fiable pour enrichir les "preuves" du Brand Intelligence (§4.2).
4. **Bascule ciblée en navigateur headless** (Playwright, cohérent avec la stack TanStack/Node) uniquement pour les pages classées suspectes à l'étape 3. Un plafond de pages en mode headless par cycle de crawl est appliqué (proposé : 15), pour garder le coût maîtrisable, avec priorité aux pages stratégiques en cas de dépassement.

### Règles transverses

- Respect strict de `/robots.txt`.
- Rate limiting par domaine.
- User-Agent identifiable (`RefletBot/1.0`), pour rester transparent vis-à-vis des sites crawlés.

### Portée et limites assumées

Cette stratégie améliore la précision de **ce que Reflet comprend du site du client** (Brand Intelligence plus complète, moins de champs `null` injustifiés, questions générées mieux ancrées). Elle n'a **aucun effet** sur la fidélité de la mesure ChatGPT (§7.3) — ce sont deux systèmes indépendants dans la chaîne. Restent hors de portée, quel que soit le mode de crawl : le contenu derrière authentification, et les sites bloquant explicitement les bots.

## 4.2 Brand Intelligence

Reflet doit extraire au minimum :

### Identité

- nom de marque ;
- type d’entreprise ;
- secteur ;
- pays ;
- marchés ;
- langues.

### Offre

- produits ;
- services ;
- fonctionnalités ;
- plans ;
- pricing ;
- intégrations ;
- différenciateurs.

### Positionnement

- catégorie ;
- sous-catégorie ;
- proposition de valeur ;
- USP ;
- promesses centrales.

### Audience

- audience primaire ;
- audience secondaire ;
- profils d’acheteurs ;
- cas d’usage.

### Problèmes / Jobs-to-be-Done

- problèmes résolus ;
- besoins ;
- pain points ;
- motivations d’achat.

### Contexte concurrentiel

- alternatives ;
- concurrents déjà cités par le site ;
- catégories voisines.

### Preuves

Chaque fait important doit pouvoir remonter à une source :

```json
{
  "claim": "SIKKA permet de créer des devis, factures et reçus",
  "source_url": "/",
  "source_excerpt": "...",
  "confidence": 0.98
}
```

**Règle : une donnée importante utilisée dans une conclusion doit être traçable.**

## 4.3 Prompt de référence — Brand Intelligence Extraction

**DÉCIDÉ.** Prompt utilisé par le Question Engine (via Gemini) pour transformer le contenu crawlé en Brand Intelligence structurée, conformément au schéma de §4.2.

Entrée : contenu structuré du crawl (pages avec URL, titre, meta, headings, texte). Sortie : JSON strict.

```text
Tu es un système d'extraction structurée. Tu ne dois JAMAIS inventer une
information qui n'est pas présente dans le contenu fourni. Si une donnée
n'est pas déductible du contenu, mets la valeur à null plutôt que de
supposer ou d'extrapoler.

CONTENU DU SITE (pages crawlées, avec URL source pour chaque bloc) :
{{CRAWLED_CONTENT}}

Analyse ce contenu et retourne un objet JSON unique avec exactement cette
structure :

{
  "identite": {
    "brand_name": string,
    "type_entreprise": string,
    "secteur": string,
    "pays": string | null,
    "marches": string[],
    "langues": string[]
  },
  "offre": {
    "produits": string[],
    "services": string[],
    "fonctionnalites": string[],
    "plans": string[],
    "pricing": string | null,
    "integrations": string[],
    "differenciateurs": string[]
  },
  "positionnement": {
    "categorie": string,
    "sous_categorie": string | null,
    "proposition_de_valeur": string,
    "usp": string[],
    "promesses_centrales": string[]
  },
  "audience": {
    "audience_primaire": string,
    "audience_secondaire": string[],
    "profils_acheteurs": string[],
    "cas_usage": string[]
  },
  "problemes": {
    "problemes_resolus": string[],
    "besoins": string[],
    "pain_points": string[],
    "motivations_achat": string[]
  },
  "contexte_concurrentiel": {
    "alternatives_citees": string[],
    "concurrents_cites": string[],
    "categories_voisines": string[]
  },
  "preuves": [
    {
      "claim": string,
      "source_url": string,
      "source_excerpt": string,
      "confidence": number (0 à 1)
    }
  ]
}

RÈGLES STRICTES :
- Chaque "claim" important listé dans "preuves" doit être directement
  vérifiable dans le contenu fourni (source_url + source_excerpt exact).
- "confidence" reflète la clarté du texte source, pas ta certitude
  générale sur la marque.
- N'ajoute aucun champ hors de cette structure.
- Réponds UNIQUEMENT avec le JSON, sans texte avant/après, sans balises
  markdown.
```

**Principe de conception :** ce prompt force explicitement `null` plutôt que l'hallucination — cohérent avec l'Evidence Chain (§23) et la règle de traçabilité ci-dessus.

---

# 5. Question Engine — cœur du protocole

## 5.1 Problème résolu

Les questions suivies ne doivent pas être arbitraires, génériques ou inventées à la dernière minute.

Elles doivent être :

- spécifiques au site ;
- réalistes ;
- liées à un besoin réel ;
- suffisamment discriminantes ;
- compréhensibles sans connaître la marque ;
- reliées au marché, à l’offre ou à l’audience du projet.

## 5.2 Architecture

```text
SITE
 ↓
CRAWLER
 ↓
STRUCTURED EXTRACTION
 ↓
BRAND INTELLIGENCE
 ↓
QUESTION FRAMEWORK
 +
BRAND / AUDIENCE / OFFER / PROBLEM / MARKET CONTEXT
 ↓
GEMINI
 ↓
50–100 QUESTIONS CANDIDATES
 ↓
VALIDATION
 ↓
DÉDUPLICATION
 ↓
SCORING
 ↓
30 QUESTIONS RETENUES
```

Gemini est le moteur interne de génération/structuration. **Gemini n’est pas le moteur de mesure observé.**

## 5.3 Question Framework

### Intentions

- découverte ;
- problème ;
- comparaison ;
- recommandation ;
- alternative ;
- cas d’usage ;
- décision.

### Contextes

- audience ;
- secteur ;
- localisation ;
- taille d’entreprise ;
- cas d’utilisation.

### Formulations

- « Quel… » ;
- « Comment… » ;
- « Quelle alternative… » ;
- « Que recommandez-vous… » ;
- « Quel outil pour… » ;
- formulations naturelles proches d’une vraie question d’utilisateur.

### Contraintes

- question non promotionnelle ;
- question réaliste ;
- question compréhensible sans connaître la marque ;
- besoin identifiable ;
- potentiel décisionnel.

### Distribution

Les 30 questions doivent être diversifiées, avec un poids important donné aux questions de marché :

- marché / découverte ;
- problèmes ;
- catégorie ;
- cas d’usage ;
- décision ;
- local / marché spécifique.

## 5.4 Pourquoi les questions de marché sont particulièrement importantes

Une question comme :

> « SIKKA est-il un bon logiciel de facturation ? »

est utile, mais elle part déjà du fait que l’utilisateur connaît SIKKA.

Une question comme :

> « Quel logiciel de facturation recommander à un artisan au Bénin ? »

est plus proche d’un scénario réel de découverte.

Si la marque apparaît spontanément dans ce second scénario, le signal de visibilité est beaucoup plus intéressant.

## 5.5 Métadonnées d’une question

Chaque question doit conserver sa provenance :

```json
{
  "question": "Quel logiciel de facturation recommander à un artisan au Bénin ?",
  "intent": "recommendation",
  "audience": "artisan",
  "market": "Benin",
  "category": "logiciel de facturation",
  "related_offers": ["devis", "factures", "reçus"],
  "source_evidence": [
    {
      "page": "/",
      "claim": "Solution de devis, factures et reçus"
    }
  ],
  "relevance_score": 0.94
}
```

## 5.6 Scoring des candidats

Le score de sélection doit combiner notamment :

- pertinence commerciale ;
- pertinence audience ;
- pertinence offre ;
- intention de décision ;
- spécificité marché ;
- diversité ;
- proximité avec les preuves du site.

**Règle : Gemini propose ; le code décide quelles questions entrent réellement dans le protocole.**

## 5.7 Prompt de référence — Génération des questions candidates

**DÉCIDÉ.** Prompt utilisé par le Question Engine (via Gemini) pour générer les questions candidates à partir de la Brand Intelligence (§4.3), conformément au Question Framework (§5.3-5.5).

Entrée : le JSON de sortie du prompt Brand Intelligence (§4.3). Sortie : 50 à 100 questions candidates.

```text
Tu génères des questions réalistes qu'un prospect pourrait poser à
ChatGPT — jamais des questions promotionnelles sur la marque elle-même.

BRAND INTELLIGENCE :
{{BRAND_INTELLIGENCE_JSON}}

Génère entre 50 et 100 questions candidates réparties selon cette
distribution approximative :
- 30% marché / découverte (l'utilisateur ne connaît pas la marque)
- 20% problème / besoin
- 15% catégorie
- 15% cas d'usage
- 10% décision / comparaison
- 10% local / marché spécifique (si pertinent selon "marches")

CONTRAINTES pour chaque question :
- Compréhensible sans connaître la marque.
- Formulation naturelle, proche d'une vraie question d'utilisateur
  ("Quel...", "Comment...", "Quelle alternative...", "Que
  recommandez-vous...", "Quel outil pour...").
- Non promotionnelle, réaliste, avec un besoin identifiable et un
  potentiel décisionnel.
- Priorité aux questions de marché où la marque n'est pas nommée
  explicitement — le signal de visibilité y est le plus fort.

Pour CHAQUE question, retourne :

{
  "question": string,
  "intent": "decouverte" | "probleme" | "comparaison" | "recommandation"
             | "alternative" | "cas_usage" | "decision",
  "audience": string,
  "market": string | null,
  "category": string,
  "related_offers": string[],
  "source_evidence": [
    { "page": string, "claim": string }
  ],
  "relevance_score": number (0 à 1, ton auto-évaluation de la pertinence
    commerciale et de la spécificité de cette question pour cette marque)
}

Retourne un tableau JSON de ces objets, rien d'autre. Aucun texte avant
ou après, aucune balise markdown.

RAPPEL : tu proposes des candidates. La déduplication, le scoring final
et la sélection des 30 questions retenues sont faits par du code
déterministe, pas par toi.
```

**Principe de conception :** le rappel final dans le prompt renforce directement la règle de §5.6 ("Gemini propose ; le code décide") pour éviter que le modèle tente lui-même une sélection finale.

---

# 6. Prompt vs Run vs Measurement

Cette distinction est fondamentale.

## Prompt

Une **question suivie** par le client.

Exemple :

> « Quel logiciel de facturation recommander à un artisan au Bénin ? »

## Run

Une **exécution technique** d’un prompt contre le moteur observé.

Une même question peut avoir plusieurs runs car les réponses générées peuvent varier.

## Measurement

Une **campagne de mesure** regroupant l’exécution et l’analyse d’un ensemble de questions à un moment donné.

### Le client ne doit pas acheter ou voir des runs

Interface recommandée :

> **Questions suivies : 30 / 30**

et non :

> 90 runs utilisés.

Les runs sont des ressources internes utilisées pour obtenir une mesure plus fiable.

---

# 7. Measurement Engine

## 7.1 Principe

Reflet doit optimiser :

> **l’information gagnée par génération**

et non :

> **le nombre de générations exécutées.**

Il ne faut donc pas figer artificiellement : « trois runs par question ».

## 7.2 Mesure adaptative

Exemple interne :

```text
30 questions actives
        ↓
DECISION ENGINE
        ↓
Q1 → 3 runs
Q2 → 1 run
Q3 → 1 run
Q4 → 2 runs
Q5 → 0 run aujourd’hui
...
```

Le nombre de runs peut dépendre de :

- volatilité historique ;
- stabilité de la réponse ;
- importance de la question ;
- confiance actuelle ;
- proximité d’une modification importante ;
- valeur informative attendue ;
- budget technique interne.

## 7.3 Protocole d'appel du moteur mesuré (ChatGPT) — DÉCIDÉ

Cette section verrouille un point auparavant non spécifié : **comment Reflet interroge concrètement ChatGPT.**

### Accès

**Reflet interroge le moteur mesuré exclusivement via l'API officielle d'OpenAI (Responses API).**

- Aucun scraping de chatgpt.com, aucune automatisation de l'interface grand public.
- Aucun agrégateur tiers (type DataForSEO ou équivalent) pour le MVP : l'intégration à l'API OpenAI est faite directement, pour garder un contrôle total sur le protocole (versioning, paramètres, coûts) et éviter d'ajouter une boîte noire entre Reflet et le modèle.
- Cette décision est cohérente avec le principe déjà posé en §0.3 : Reflet n'est pas un outil de scraping de chatgpt.com.

### Modèle de référence

- Le modèle appelé au lancement du MVP est **`gpt-5.6-luna`**, le modèle par défaut du tier gratuit de ChatGPT — choisi car il représente le scénario le plus fréquent d'un prospect qui découvre une marque via une question naturelle.
- Chaque `measurement_campaign` et chaque `ai_run` enregistrent l'identifiant précis du modèle/snapshot appelé (le champ `model` existe déjà dans le data model, §30). Jamais d'alias "latest" non tracé.
- **OpenAI change le modèle par défaut de ChatGPT tous les 2 à 3 mois environ.** Reflet doit surveiller ces changements et les annoter explicitement comme un **changement de protocole** dans l'historique des mesures — au même titre qu'un changement de version du scoring ou de l'analyse (§40). Un changement de score après un changement de modèle par défaut ne doit jamais être attribué au site du client sans cette annotation.

### Configuration de l'appel

- **Recherche web activée** (outil `web_search` de la Responses API), pour se rapprocher du comportement réel de ChatGPT sur les questions de découverte/recommandation. Chaque réponse conserve si la recherche a été déclenchée, et les citations structurées renvoyées par l'API (annotations `url_citation` : URL, titre, position) alimentent directement l'Evidence Chain.
- **Aucune mémoire, aucun historique de conversation, aucune instruction personnalisée.** Chaque appel est stateless : c'est ce qui rend la mesure comparable dans le temps, contrairement à l'expérience d'un vrai utilisateur qui peut être influencée par sa mémoire ou son historique.
- **Aucun system prompt custom, température par défaut du modèle.** Reflet ne force pas artificiellement le comportement du modèle au-delà de l'activation de la recherche web.

### Limite assumée

L'appel API ne reproduit pas à l'identique l'expérience ChatGPT.com : le produit grand public ajoute une couche de personnalité invisible, décide seul quand déclencher une recherche web, et peut afficher des éléments d'interface (résultats shopping, cartes produits) absents d'une réponse API. Reflet mesure donc **une réponse observée selon un protocole défini et reproductible**, pas une copie pixel-perfect de ce que voit chaque utilisateur — formulation déjà retenue en §0.2.

### Contrôle qualité manuel

- Un contrôle occasionnel compare un échantillon (5 à 10 questions) de réponses API à de vraies sessions ChatGPT.com, pour vérifier que l'écart reste raisonnable.
- Fréquence : au minimum une fois par mois, et systématiquement après chaque changement détecté du modèle par défaut de ChatGPT.
- Ce contrôle reste manuel pour le MVP (effort minime, ~15-20 minutes) ; il ne s'agit pas d'une donnée produit mais d'un audit interne, à documenter quelque part à côté de la Definition of Done (§46).

---

# 8. Politique de mesure et fréquences

## 8.1 Principe de séparation

Il faut séparer :

> **fréquence de surveillance du site**

et :

> **fréquence de mesure de ChatGPT.**

Ce ne sont pas le même problème ni le même coût.

## 8.2 Politique actuelle recommandée pour le MVP

| Fonction | Fréquence | Rôle |
|---|---:|---|
| **Mesure complète** | 1× / semaine | Score officiel + référence |
| **Monitoring** | 1× / jour | Détecter évolutions / anomalies importantes |
| **Détection des changements du site** | automatique, adaptative | Construire l’historique du site |
| **Mesure manuelle** | max. 1× / 7 jours | Mesure exceptionnelle demandée par l’utilisateur |

### Règle essentielle

> **Une modification du site ne déclenche aucune mesure ChatGPT automatiquement dans le MVP.**

Cette décision supprime le risque qu’un utilisateur fasse 15 modifications et génère 15 mesures coûteuses.

---

# 9. Change Detection Engine — mémoire du site

## 9.1 Problème

Le modèle initial imaginait un utilisateur déclarant chaque modification :

> « J’ai modifié ma page Services. »

Ce fonctionnement est trop contraignant et dépend de la discipline de l’utilisateur.

### Décision actuelle

**Reflet doit détecter automatiquement les changements du site.**

L’utilisateur ne doit pas avoir à déclarer chaque modification.

## 9.2 Concept

Reflet construit son propre système de versionnement du site.

Éviter le terme « Snapshot » dans l’interface. Le vocabulaire préféré est :

- **Version du site** ;
- **Historique des versions** ;
- **Modification détectée** ;
- éventuellement **État du site** selon le contexte.

Le concept technique est similaire à une succession de commits, mais Reflet n’est pas Git et ne dépend pas de GitHub.

```text
VERSION DU SITE #001
        ↓
VERSION DU SITE #002
        ↓
VERSION DU SITE #003
```

Entre chaque version, Reflet conserve les changements détectés.

---

# 10. Comment détecter les changements

Reflet doit utiliser plusieurs signaux complémentaires.

## 10.1 Crawl contrôlé

Le crawl reste le mécanisme universel de secours.

Mais il ne doit pas être conçu comme :

> « télécharger tout le site toutes les 10 minutes ». 

Il doit être :

- sélectif ;
- adaptatif ;
- caché derrière des vérifications peu coûteuses ;
- focalisé sur les pages et zones pertinentes.

## 10.2 ETag / Last-Modified

Lorsque disponibles, les headers HTTP conditionnels peuvent permettre une vérification légère.

Réponse :

```text
304 Not Modified
```

→ aucune récupération lourde du contenu.

Ces mécanismes sont des optimisations, pas des garanties universelles.

## 10.3 Sitemap

Surveiller `/sitemap.xml` permet notamment de repérer :

- nouvelles URLs ;
- URLs supprimées ;
- modifications de structure ;
- évolution du nombre de pages.

## 10.4 Webhooks / APIs

Lorsque le client utilise un CMS ou une plateforme capable d’émettre des événements, Reflet peut recevoir :

```json
{
  "type": "content.updated",
  "url": "/pricing"
}
```

Reflet vérifie alors directement la ressource concernée.

## 10.5 Git / GitHub / GitLab

**Intégration optionnelle, jamais une dépendance.**

Un push ou commit peut servir de signal :

```text
Git commit
  ↓
webhook
  ↓
Reflet
  ↓
vérification de la version publiée
```

Mais un commit de code n’équivaut pas forcément à une modification visible. Reflet doit vérifier l’état réellement publié.

## 10.6 Principe multi-signaux

```text
                    SITE CLIENT
                         │
          ┌──────────────┼──────────────┐
          │              │              │
        HTTP           Sitemap       Webhook
       signals                         / API
          │              │              │
          └──────────────┼──────────────┘
                         │
                     Git signal
                         │
                         ▼
                 CHANGE DETECTOR
                         │
                         ▼
                  PAGE VERIFICATION
```

---

# 11. Détection par empreintes

Reflet ne doit pas comparer uniquement le HTML brut.

Pour une page, il peut construire des empreintes structurées :

```text
PAGE /
├── title_hash
├── meta_hash
├── headings_hash
├── body_hash
├── pricing_hash
├── cta_hash
├── links_hash
└── structure_hash
```

Ainsi :

- une différence insignifiante peut être détectée sans déclencher d’analyse lourde ;
- une modification de pricing peut être identifiée comme telle ;
- une modification de CTA ou de positionnement peut être distinguée d’un changement technique du HTML.

---

# 12. Détection technique vs compréhension sémantique

Deux couches doivent rester distinctes.

## 12.1 Détection

Question :

> **La page a-t-elle changé ?**

Réponse déterministe autant que possible.

## 12.2 Interprétation

Question :

> **Qu’est-ce qui semble avoir changé ?**

Gemini peut classifier le changement :

- texte ;
- offre ;
- pricing ;
- positionnement ;
- audience ;
- structure ;
- CTA ;
- technique ;
- autre.

### Exemple

Avant :

> « Logiciel simple de facturation. »

Après :

> « Devis, factures et reçus professionnels pour les artisans. »

Reflet peut interpréter :

```text
Positionnement : modifié
Audience : précisée
Offre : précisée
Cas d’usage : explicité
```

---

# 13. Aucun changement ne doit disparaître silencieusement

**DÉCIDÉ.**

Même lorsqu’un changement est jugé non pertinent pour la visibilité IA, Reflet doit conserver la preuve de sa détection.

Exemple dashboard :

> **Modification détectée**
>
> `/`
>
> Le pied de page a été modifié.
>
> **Importance pour votre visibilité IA : faible**
>
> Aucun impact potentiel identifié.

Ainsi, l’utilisateur comprend :

> Reflet a vu le changement, mais considère qu’il n’a probablement pas d’importance.

Il ne faut jamais confondre :

> **non important**

avec :

> **non détecté**.

---

# 14. Niveaux d’importance

Reflet peut classer les changements comme suit :

| Niveau | Signification |
|---|---|
| **Faible** | Changement détecté, probablement sans lien avec la visibilité IA |
| **À surveiller** | Changement susceptible de modifier une information analysée |
| **Important** | Offre, audience, positionnement, pricing ou page stratégique modifiés |
| **Critique** | Page stratégique supprimée, contenu majeur retiré, site inaccessible, etc. |

Le changement est **toujours enregistré** ; le niveau influence surtout l’affichage, les alertes et l’analyse ultérieure.

---

# 15. Détection structurée des zones stables et volatiles

Reflet peut progressivement apprendre le comportement du site.

Exemple :

```text
/pricing   → change 3× / mois
/          → change 1× / semaine
/blog      → change 20× / semaine
/legal     → change 1× / an
```

La surveillance devient alors adaptative.

### Objectif

Ne pas traiter toutes les pages avec la même fréquence.

La fréquence peut dépendre de :

- volatilité historique ;
- importance métier ;
- importance pour le protocole de mesure ;
- signaux externes ;
- coût de récupération ;
- disponibilité de signaux HTTP/webhook.

---

# 16. Historique des modifications

Le journal des changements devient une composante de premier ordre.

Exemple :

| Date | Événement | Page | Importance |
|---|---|---|---|
| 08 sept. | Modification détectée | `/` | Important |
| 10 sept. | Modification détectée | `/pricing` | Important |
| 12 sept. | Modification détectée | `/services` | À surveiller |
| 15 sept. | Mesure #12 | — | — |

Le système sait ainsi :

```text
MESURE A
↓
MODIFICATIONS
↓
MESURE B
```

Cela permet de comparer les périodes correctement.

---

# 17. Contexte utilisateur facultatif

L’utilisateur peut toujours expliciter une modification importante, mais ce n’est plus obligatoire.

Exemple :

> **Modification détectée**
>
> `/pricing`
>
> Reflet a détecté une modification importante.
>
> [Ajouter une note]

L’utilisateur peut écrire :

> « J’ai repositionné l’offre pour les petites entreprises. »

La note sert de contexte analytique, pas de déclencheur de mesure obligatoire.

---

# 18A. Cycles de vie et objets canoniques

Cette section formalise les objets et transitions qui rendent le fonctionnement de Reflet cohérent dans le temps.

## 18.1 Cycle de vie d’une question

Une question suivie n’est pas une simple chaîne de caractères. Elle possède une identité, des métadonnées, une provenance et des versions.

```text
CANDIDATE
   ↓
VALIDATED
   ↓
ACTIVE
   ↓
MONITORED
   ↓
REVIEWED / UPDATED
   ↓
PAUSED ou RETIRED
```

Une modification importante de formulation crée une **nouvelle version de la question**. On ne réécrit jamais silencieusement l’historique.

```text
QUESTION #12
├── Version 1
├── Version 2
└── Version 3 (active)
```

Les mesures historiques restent liées à la version exacte utilisée au moment de leur exécution. Cela protège la comparabilité historique.

## 18.2 Cycle de vie d’une mesure

Une mesure est une campagne de collecte et d’analyse, distincte des runs individuels.

```text
SCHEDULED
   ↓
PLANNED
   ↓
RUNNING
   ↓
COLLECTING
   ↓
ANALYZING
   ↓
SCORING
   ↓
COMPLETED
```

États d’exception :

```text
PARTIAL
FAILED
RETRYING
CANCELLED
```

Une mesure partielle ne doit jamais être présentée comme une mesure complète.

## 18.3 Objet Observation

L’**Observation** est l’unité canonique produite lorsqu’une réponse du moteur observé est analysée. Elle sépare les données brutes du résultat interprété.

```text
OBSERVATION
├── measurement_id
├── run_id
├── query_id
├── brand_mentioned
├── recommended
├── position
├── citation_status
├── context
├── competitors
├── evidence
├── confidence
└── analysis_version
```

Une Observation doit toujours pouvoir remonter à :

```text
Observation
 ↓
Run
 ↓
Réponse brute
 ↓
Question + version
 ↓
Campagne de mesure
```

## 18.4 Provenance complète

Toute information analytique importante doit pouvoir être retracée jusqu’à sa source.

```text
OPPORTUNITÉ
   ↓
OBSERVATION
   ↓
RUN
   ↓
RÉPONSE BRUTE
   ↓
QUESTION / VERSION
   ↓
SITE EVIDENCE
   ↓
PAGE / VERSION DU SITE
```

La provenance doit permettre de répondre à la question :

> **« D’où vient exactement cette conclusion ? »**

## 18.5 Version globale du site

**DÉCIDÉ :** Reflet crée une nouvelle **version globale du site** lorsqu’un changement est confirmé.

```text
VERSION SITE #41
      ↓
modification détectée
      ↓
VERSION SITE #42
      ↓
modification détectée
      ↓
VERSION SITE #43
```

La version globale représente l’état observé du site à un instant donné. Les différences internes restent détaillées par page et par zone, mais l’historique principal repose sur un numéro de version global.

Exemple :

```text
VERSION #42
├── /             → inchangée
├── /pricing      → modifiée
├── /services     → inchangée
└── /blog/post-7  → nouvelle
```

Ainsi, Reflet peut dire :

> **Version du site #42 — modification détectée sur /pricing**

sans obliger l’utilisateur à gérer lui-même des versions.

## 18.6 Boucle de vie complète

Le cycle produit de Reflet peut être résumé par :

```text
SITE
  ↓
VERSION DU SITE
  ↓
BRAND INTELLIGENCE
  ↓
QUESTION / VERSION
  ↓
MESURE
  ↓
RUNS
  ↓
RÉPONSES BRUTES
  ↓
OBSERVATIONS
  ↓
SCORE / CONCURRENTS
  ↓
EVIDENCE CHAIN
  ↓
OPPORTUNITÉ
  ↓
RECOMMANDATION
  ↓
MODIFICATION DU SITE
  ↓
VERSION DU SITE SUIVANTE
  ↺
```

## 18.7 Séparation des horloges

Reflet possède plusieurs temporalités qui ne doivent pas être confondues :

```text
HORLOGE DU SITE
→ détection des changements

HORLOGE DU MONITORING
→ surveillance quotidienne / adaptative

HORLOGE DE MESURE
→ mesure officielle hebdomadaire

HORLOGE UTILISATEUR
→ mesure manuelle occasionnelle
```

Une modification détectée n’implique donc pas automatiquement une nouvelle mesure ChatGPT.

---

# 18B. Schémas de conception de référence

## 19.1 Architecture globale

```text
                       SITE DU CLIENT
                             │
                             ▼
                    SITE INTELLIGENCE
                             │
              ┌──────────────┴──────────────┐
              ▼                             ▼
      BRAND INTELLIGENCE              VERSION DU SITE
              │                             │
              ▼                             ▼
       QUESTION ENGINE               CHANGE ENGINE
              │                             │
              ▼                             ▼
      QUESTIONS SUIVIES            MODIFICATIONS DÉTECTÉES
              │                             │
              └──────────────┬──────────────┘
                             ▼
                    MEASUREMENT ENGINE
                             │
                             ▼
                           CHATGPT
                             │
                             ▼
                      RÉPONSES BRUTES
                             │
                             ▼
                      GEMINI ANALYSIS
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
          OBSERVATIONS   CONCURRENTS     CONTEXTE
              │              │              │
              └──────────────┼──────────────┘
                             ▼
                        SCORING ENGINE
                             │
                             ▼
                      VISIBILITY SCORE
                             │
                             ▼
                     OPPORTUNITY ENGINE
                             │
                             ▼
                       EVIDENCE CHAIN
                             │
                             ▼
                       RECOMMANDATION
                             │
                             ▼
                    MODIFICATION DU SITE
                             │
                             ▼
                   CHANGE DETECTION ENGINE
                             │
                             ↺
```

## 19.2 Boucle de valeur

```text
MESURE
  ↓
OBSERVATION
  ↓
PREUVE
  ↓
INSIGHT
  ↓
OPPORTUNITÉ
  ↓
ACTION
  ↓
MODIFICATION DU SITE
  ↓
NOUVELLE VERSION
  ↓
MESURE SUIVANTE
```

## 19.3 Architecture de confiance

```text
DONNÉE BRUTE
  ↓
DÉTECTION
  ↓
OBSERVATION
  ↓
INTERPRÉTATION
  ↓
CONFIANCE
  ↓
RECOMMANDATION
```

Règle :

```text
DÉTECTION ≠ INTERPRÉTATION
INTERPRÉTATION ≠ CAUSALITÉ
OBSERVATION ≠ RECOMMANDATION
```

---

# 18C. Règles de conception consolidées

1. Reflet observe avant de conseiller.
2. Toute modification confirmée du site génère une nouvelle version globale du site.
3. Aucun changement détecté ne disparaît silencieusement, même s’il est classé faible.
4. L’importance d’un changement influence l’alerte et l’analyse, pas son existence dans l’historique.
5. L’utilisateur n’a pas à déclarer chaque modification.
6. Les questions suivies sont versionnées et traçables.
7. Les mesures officielles sont séparées des runs internes.
8. Une observation est toujours reliée à une réponse brute, une question et une campagne.
9. Toute conclusion forte doit avoir une chaîne de preuves.
10. Une mesure de site et une mesure ChatGPT sont des processus distincts.
11. Une modification du site ne déclenche pas automatiquement une mesure coûteuse dans le MVP.
12. Les mesures officielles doivent rester comparables dans le temps.
13. Le score est déterministe et versionné.
14. Gemini interprète ; le système valide, calcule, limite et vérifie.
15. GitHub est une intégration possible, jamais une dépendance.
16. Reflet ne doit pas demander à l’utilisateur de croire une conclusion qu’il peut inspecter.
17. Le système optimise la valeur informative de ses générations, pas leur volume.
18. Aucune causalité ne doit être affirmée sans protocole expérimental permettant de la soutenir.

---

# 18D. Conséquences pour la conception UI

Le dashboard doit rendre visibles quatre questions complémentaires :

```text
QU’EST-CE QUI SE PASSE ?
→ score / tendance

POURQUOI ?
→ observations / preuves / concurrents

QU’EST-CE QUI A CHANGÉ ?
→ historique des versions / modifications détectées

QU’EST-CE QUI S’EST PASSÉ ENSUITE ?
→ comparaison avec les mesures suivantes
```

Une modification faible doit pouvoir apparaître simplement :

> **Modification détectée — faible importance**
>
> `/footer`
>
> Le contenu légal a changé.

Une modification importante doit rendre l’analyse accessible :

> **Modification détectée — importance élevée**
>
> `/pricing`
>
> La présentation de l’offre a changé.
>
> Voir avant / après →

La page Historique doit permettre d’ouvrir :

- version du site ;
- page concernée ;
- méthode de détection ;
- avant / après ;
- résumé du changement ;
- importance ;
- confiance d’interprétation ;
- mesure précédente et suivante associées lorsqu’elles existent.

---

# 18E. Schéma temporel de référence

```text
08 SEPT
MESURE #11
Score 64
    │
    │
10 SEPT
MODIFICATION DÉTECTÉE
Version site #42
/pricing modifiée
    │
    │
12 SEPT
MODIFICATION DÉTECTÉE
Version site #43
/ repositionnement modifié
    │
    │
15 SEPT
MESURE #12
Score 68
    │
    ▼
ÉVOLUTION OBSERVÉE
```

Formulation autorisée :

> « Évolution observée depuis les dernières modifications détectées. »

Formulation interdite sans expérimentation :

> « Cette modification a causé +4 points. »

---

---

# 18. Analyse des réponses ChatGPT

## 18.1 Runner

Chaque run doit enregistrer :

- question ;
- moteur ;
- modèle ;
- timestamp ;
- réponse brute ;
- statut ;
- retries ;
- campagne de mesure ;
- version de configuration/prompt.

## 18.2 Analyse structurée

Gemini transforme la réponse brute en données structurées.

Exemple :

```json
{
  "query_id": "uuid",
  "run_id": "uuid",
  "mention": true,
  "recommended": true,
  "position": 3,
  "cited": true,
  "competitors_detected": ["Abby", "Indy"],
  "confidence_note": "position déduite d'une liste explicite dans la réponse"
}
```

## 18.2bis Prompt de référence — Analyse d'une réponse ChatGPT

**DÉCIDÉ.** Prompt utilisé pour transformer une réponse brute (`ai_responses.raw_text`) en analyse structurée (`response_analysis`), conformément au principe de §24 : **détection déterministe séparée de l'interprétation.**

**Répartition des responsabilités :**
- **Gemini interprète** : mention, recommandation, position, concurrents détectés — des jugements sémantiques qui nécessitent de comprendre le texte.
- **Le code détermine `cited`** : en comparant, de façon déterministe, le domaine de la marque aux annotations `url_citation` réellement renvoyées par l'API OpenAI (§7.3). Gemini n'invente jamais cette valeur — elle n'est même pas demandée dans le prompt ci-dessous.

Entrée : la réponse brute d'un run, la question posée, le nom de la marque et ses variantes connues.

```text
Tu analyses une réponse générée par ChatGPT à une question posée par un
utilisateur. Tu dois déterminer comment une marque précise apparaît dans
cette réponse — sans jamais supposer qu'elle apparaît si ce n'est pas
écrit.

QUESTION POSÉE :
{{QUESTION}}

RÉPONSE DE CHATGPT (texte brut) :
{{RAW_RESPONSE_TEXT}}

MARQUE ANALYSÉE :
Nom : {{BRAND_NAME}}
Variantes/orthographes connues : {{BRAND_ALIASES}}

Réponds avec exactement cet objet JSON :

{
  "mention": boolean,
  "mention_confidence": number (0 à 1),
  "recommended": boolean,
  "recommended_confidence": number (0 à 1),
  "position": number | null,
  "position_confidence": number | null,
  "competitors_detected": [
    {
      "name": string,
      "recommended": boolean,
      "position": number | null
    }
  ],
  "rationale": string (1 à 2 phrases maximum, factuel)
}

RÈGLES STRICTES :
- "mention" = true UNIQUEMENT si la marque (ou une variante listée) est
  explicitement nommée dans le texte. Ne jamais déduire une mention à
  partir d'une catégorie ou d'une description générique.
- "recommended" ne peut être true que si "mention" est true. Une
  recommandation implicite compte seulement si la réponse la formule
  clairement comme un conseil ou un choix suggéré.
- "position" n'est renseignée QUE si la réponse contient une liste
  explicite et ordonnée d'options. Sinon, laisser à null — ne jamais
  inventer un rang.
- "competitors_detected" liste toute entreprise/produit alternatif
  explicitement nommé dans la réponse, mentionné ou non par l'utilisateur.
- "rationale" cite la partie du texte qui justifie ta décision, sans
  paraphraser toute la réponse.
- Réponds UNIQUEMENT avec le JSON, sans texte avant/après, sans balises
  markdown.
```

**Après l'appel Gemini, le code :**
1. Calcule `cited` en comparant le domaine de la marque aux `url_citation` de l'API (jamais demandé à Gemini).
2. Calcule le `confidence` unique stocké dans `response_analysis` comme le minimum de `mention_confidence`, `recommended_confidence` et `position_confidence` (approche conservatrice, cohérente avec le principe "le code décide").
3. Exclut du calcul du score (§20) tout run dont ce `confidence` est sous le seuil retenu (proposé : 0,6).

## 18.3 Ne pas écraser la donnée brute

Toujours conserver :

```text
réponse brute
+
interprétation structurée
```

L’interprétation peut évoluer. La réponse originale doit rester disponible pour audit.

---

# 19. Mentions, recommandations, positions et citations

## Mention

La marque apparaît-elle ?

## Recommendation

La marque est-elle présentée comme une solution recommandée ?

## Position

Si la réponse contient une liste explicite, quelle position est déduite ?

## Citation

La marque ou son site est-il réellement cité/mentionné comme source ?

### Règle importante

> **Mention ≠ citation.**

Sans surface de recherche enrichie, la métrique de citation peut être peu significative. Elle ne doit pas être utilisée comme métrique centrale tant que sa définition n’est pas robuste.

---

# 20. Score de visibilité

Le score global doit être **déterministe**, calculé par code à partir des observations, et non « inventé » par Gemini.

## 20.1 Formule de référence — v0

**DÉCIDÉ (v0, poids à recalibrer sur données réelles — voir §48).**

### Niveau 1 — par question, sur les runs complétés de la campagne

- **`mention_rate`** = (runs où `mention = true`) / (runs complétés)
- **`recommendation_rate`** = (runs où `recommended = true`) / (runs complétés)
- **`position_score`** — calculé uniquement sur les runs où `mention = true` ET `position` connue :
  `position_score = max(0, 1 − (position − 1) / 9)`, plafonné à la position 10.
  Si aucun run de la question n'a de position exploitable, `position_score` est **absent** pour cette question (pas égal à 0).
- **`citation_rate`** = (runs où `cited = true`) / (runs où **la recherche web a été déclenchée**, §7.3) — pas le total des runs. Si aucun run n'a déclenché de recherche web pour cette question, `citation_rate` est absent. Cohérent avec la règle "mention ≠ citation" de §19 : sans recherche web, l'absence de citation ne signifie rien.

### Niveau 2 — score global (0 à 100)

```text
global_score = 100 × (
    0.35 × mention_rate
  + 0.30 × recommendation_rate
  + 0.15 × position_score
  + 0.10 × citation_rate
  + 0.10 × competitive_presence
)
```

Chaque composant est moyenné sur les 30 questions, **mais uniquement sur celles où il est calculable** — les poids des composants absents sont réattribués proportionnellement pour cette mesure, plutôt que de faire baisser artificiellement le score.

**`competitive_presence`** (v0) = `mention_rate` de la marque / (`mention_rate` de la marque + moyenne des `mention_rate` des concurrents détectés sur cette question). Proche de 1 : la marque domine la part de voix ; proche de 0 : elle est éclipsée.

### Règles de robustesse

- **Mesure partielle (§41)** : si la campagne n'est pas `completed`, le score est marqué `partiel`, jamais présenté comme officiel.
- **Seuil de confiance** : les runs dont le `confidence` de `response_analysis` (§18.2bis) est sous 0,6 sont exclus du calcul, pas pondérés à la baisse.
- **Versionné** : chaque score porte un `scoring_version` explicite (ex. `v0.1`), stocké avec la mesure (§40). Seule la **structure** du calcul est verrouillée pour le MVP ; les poids (0,35 / 0,30 / 0,15 / 0,10 / 0,10) restent à calibrer sur données réelles (§48).

## 20.2 Exemple de drilldown

```text
63 / 100

├── Mention rate : 72%
├── Recommendation rate : 54%
├── Avg position : 2,8
├── Citation rate : 41% (si valide)
└── Competitive presence : 59%
```

Le score officiel ne doit pas être recalculé arbitrairement après chaque petit changement du site.

**La référence officielle reste attachée aux mesures complètes.**

---

# 21. Concurrents

## 21.1 Détection

Les concurrents doivent être découverts à partir des réponses réellement observées.

Reflet ne doit pas demander à l’utilisateur de saisir une longue liste de concurrents pour fonctionner.

## 21.2 Matrice concurrentielle

Exemple :

```text
              SIKKA   Indy   Abby   Freebe
Mention         23      61     47      31
Recommendation  18      42     29      17
Position avg    2.9     2.1    2.5     3.1
Coverage        17      24     21      14
```

### Formulation à utiliser

> « Dans les réponses observées sur vos requêtes, Indy apparaît plus fréquemment que SIKKA. »

### Formulation à éviter

> « Indy est le concurrent numéro 1 du marché. »

Reflet mesure ce qu’il observe dans son protocole ; il ne doit pas extrapoler au marché entier sans données spécifiques.

L’utilisateur peut :

- valider un concurrent proposé ;
- masquer un concurrent non pertinent.

---

# 22. Opportunity Engine

Une opportunité ne doit exister que lorsqu’elle est suffisamment étayée.

Conditions possibles :

```text
INTENT IMPORTANT
       ↓
CONCURRENT MIEUX POSITIONNÉ
       ↓
INFORMATION INSUFFISANTE SUR LE SITE
       ↓
ÉCART CONFIRMÉ SUR PLUSIEURS OBSERVATIONS
       ↓
OPPORTUNITÉ
```

Si les signaux sont trop faibles :

> **« Rien de significatif détecté cette semaine. »**

C’est un résultat valide.

## 22.1 Une opportunité doit contenir

- titre ;
- priorité ;
- confiance ;
- nombre de preuves ;
- questions concernées ;
- extraits de réponses ;
- pages du site concernées ;
- exemples concurrents ;
- recommandation exploitable.

## 22.2 Recommandation exploitable

Chaque recommandation doit préciser :

- page cible ;
- élément cible ;
- état actuel ;
- direction proposée ;
- raison ;
- preuves.

Reflet ne doit pas produire :

> « Faites plus de contenu. »

sans indiquer :

> pour quelle page, quelle information manque, quelle question est concernée, quel concurrent bénéficie de cette information et sur quelles preuves la recommandation repose.

---

# 23. Evidence Chain — système de confiance

Principe directeur :

> **Ne demandez pas à l’utilisateur de croire l’IA ; montrez-lui les preuves.**

Chaque insight important doit pouvoir ouvrir une chaîne :

```text
OPPORTUNITÉ
 ├── preuve question
 ├── preuve réponse ChatGPT
 ├── preuve concurrent
 ├── preuve site
 └── preuve historique
```

Une vue de détail peut montrer :

- extrait réel de la réponse ;
- URL et extrait du site ;
- concurrent détecté ;
- logique de l’inférence ;
- niveau de confiance ;
- nombre d’observations.

---

# 24. Confiance : détection vs interprétation

Reflet doit distinguer :

## Détection

> **La page a changé.**

Confiance potentiellement très élevée si la comparaison est déterministe.

## Interprétation

> **Le changement semble correspondre à une clarification du positionnement.**

Confiance exprimée séparément.

Exemple :

```text
DÉTECTION
✓ La page a changé

INTERPRÉTATION
✓ Le positionnement semble avoir évolué

CONFIANCE
82 %
```

Cette distinction évite de présenter une hypothèse comme un fait.

---

# 25. Analyse historique et causalité

Reflet peut relier les modifications du site à l’évolution des mesures dans le temps.

Exemple :

```text
08 sept.
MESURE
Score : 64

10 sept.
Modification détectée
/pricing

12 sept.
Modification détectée
/

15 sept.
MESURE
Score : 68
```

Reflet peut dire :

> **« Évolution observée depuis les dernières modifications. »**

ou :

> **« Le score est passé de 64 à 68 entre ces deux mesures. »**

Il ne doit pas affirmer :

> « La modification de `/pricing` a causé +4 points. »

sauf si une méthodologie expérimentale permet réellement d’établir cette causalité.

---

# 26. Mesure manuelle

Une mesure manuelle peut exister pour l’utilisateur qui veut vérifier un changement plus tôt.

Exemple :

> **Mesurer maintenant**
>
> Une mesure complète sera lancée avec vos questions suivies.
>
> Prochaine mesure manuelle disponible dans 7 jours.

Cela reste contrôlé et ne devient pas un moyen de contourner les limites techniques.

---

# 27. Détection des changements et mesure ne sont pas couplées

C’est une règle d’architecture essentielle :

```text
MODIFICATION DU SITE
        ↓
DÉTECTION
        ↓
HISTORISATION
        ↓
PAS DE MESURE AUTOMATIQUE
```

Puis, à la date prévue :

```text
MESURE HEBDOMADAIRE
        ↓
OBSERVATIONS
        ↓
COMPARAISON À L’HISTORIQUE
```

Cette séparation :

- protège les coûts ;
- simplifie le comportement du produit ;
- évite les attentes absurdes ;
- donne une timeline lisible ;
- conserve les modifications même lorsqu’aucune mesure n’a été déclenchée au moment du changement.

---

# 28. Coûts et protection du système

## 28.1 Le client ne contrôle pas directement les générations

Les ressources de mesure sont internes.

Le client contrôle :

- les 30 questions suivies ;
- les paramètres de son projet ;
- éventuellement les mesures manuelles autorisées.

Il ne contrôle pas directement le nombre de runs adaptatifs.

## 28.2 Budget technique

Le backend doit conserver un ledger interne des coûts :

```text
project_id
measurement_id
run_id
provider
model
estimated_cost
actual_cost (si disponible)
created_at
```

Il doit être possible d’appliquer :

- budget par client ;
- budget par campagne ;
- budget quotidien/mensuel ;
- arrêt préventif ;
- alertes internes.

## 28.3 Idempotence et retries

Toutes les tâches coûteuses doivent être conçues avec :

- identifiants stables ;
- idempotence ;
- retries exponentiels ;
- statuts de jobs ;
- logs ;
- échec explicite.

---

# 29. Architecture backend cible

## 29.1 Principe général

Le navigateur ne doit pas attendre synchroniquement :

- le crawl ;
- les dizaines de runs ;
- l’analyse Gemini ;
- le calcul des opportunités.

Il doit soumettre un job et consulter son état.

## 29.2 Modules

```text
REFLET BACKEND
├── Site Intelligence
├── Query Engine
├── ChatGPT Runner
├── Gemini Analysis Engine
├── Competitor Engine
├── Scoring Engine
├── Opportunity Engine
├── Change Detection Engine
├── Measurement Engine
├── Scheduler / Jobs
└── Cost Ledger / Budget Enforcement
```

## 29.3 Stack recommandée

**DÉCIDÉ : le frontend/app utilise TanStack.** Ce point était encore ouvert ("Next.js ou TanStack") et a été tranché pendant la revue de conception de septembre 2026.

```text
Frontend / App
→ TanStack (DÉCIDÉ)

Database / Auth / Storage
→ Supabase

Workers / Jobs
→ service asynchrone dédié

IA interne
→ Gemini

Moteur mesuré
→ ChatGPT via API officielle OpenAI (Responses API) — voir §7.3 pour le protocole détaillé

Deploy
→ Vercel pour l’app + infrastructure worker adaptée
```

### Python / FastAPI

Python est justifié si le moteur devient réellement riche en :

- traitement de texte ;
- scoring ;
- analyse ;
- orchestration data ;
- traitements asynchrones.

**FastAPI est plus adapté que Flask** si l’on choisit volontairement un backend Python moderne orienté API/async. Mais il ne faut pas ajouter Python uniquement pour « avoir un serveur ».

Flask n’est pas un système d’apprentissage ; c’est un framework web. La logique d’adaptation appartient aux moteurs de Reflet.

---

# 30. Data model de référence

Le modèle initial est à enrichir. Une structure cible peut être :

## projects

```text
id
user_id
name
created_at
```

## sites

```text
id
project_id
url
brand_name
industry
country
languages
last_checked_at
last_successful_check_at
created_at
```

## pages

```text
id
site_id
url
title
meta_description
content_text
content_hash
structure_hash
semantic_fingerprint
last_seen_at
status
```

## site_versions

Version logique de l’état observé du site.

```text
id
site_id
created_at
source
crawl_job_id
version_hash
```

## site_changes

Événement de changement détecté.

```text
id
site_id
page_id
detected_at
detection_method
change_type
importance
confidence
before_version_id
after_version_id
diff_data
semantic_summary
```

## site_evidence

```text
id
site_id
page_id
claim
source_excerpt
source_url
confidence
detected_at
```

## queries

```text
id
project_id
text
intent
audience
market
category
status
source
topic
relevance_score
created_at
```

## query_evidence

```text
id
query_id
page_id
claim
source_excerpt
```

## measurement_campaigns

Entité distincte des runs.

```text
id
project_id
type
status
started_at
completed_at
configuration_version
```

Types possibles :

```text
weekly_full
manual
monitoring
```

## ai_runs

```text
id
measurement_campaign_id
query_id
engine
model
run_number
status
executed_at
retry_count
estimated_cost
```

## ai_responses

```text
id
run_id
raw_text
created_at
```

## response_analysis

```text
id
response_id
mention
recommended
position
cited
confidence
analysis_version
```

## competitors

```text
id
project_id
name
first_detected_at
status
```

Statuts :

```text
suggested
validated
hidden
```

## competitor_observations

```text
id
response_id
competitor_id
context
position
recommended
```

## opportunities

```text
id
project_id
title
priority
confidence
status
evidence_json
created_at
```

## recommendations

```text
id
opportunity_id
page_target
element
current_state
proposed_direction
```

## measurements

Résultat dérivé d’une campagne.

```text
id
measurement_campaign_id
project_id
mention_rate
recommendation_rate
citation_rate
avg_position
competitive_presence
global_score
created_at
```

## jobs

```text
id
project_id
type
status
attempts
scheduled_at
started_at
finished_at
error
idempotency_key
```

## cost_ledger

```text
id
project_id
measurement_campaign_id
run_id
provider
model
estimated_cost
actual_cost
created_at
```

## billing / subscriptions

À implémenter lorsque la boucle produit est validée.

## public_scans

Pour le scan gratuit sans inscription :

```text
id
url
public_token
created_at
expires_at
status
rate_limit_key
score
result_json
```

---

# 31. Pipeline complet de données

```text
                    URL CLIENT
                        │
                        ▼
                     CRAWLER
                        │
                        ▼
               STRUCTURED EXTRACTION
                        │
                        ▼
                BRAND INTELLIGENCE
                        │
            ┌───────────┴───────────┐
            │                       │
            ▼                       ▼
    QUESTION ENGINE          SITE VERSIONING
            │                       │
            ▼                       ▼
    QUESTIONS SUIVIES          CHANGE EVENTS
            │
            ▼
     MEASUREMENT ENGINE
            │
      ┌─────┴─────┐
      ▼           ▼
   RUNNER       ADAPTATION
      │
      ▼
   CHATGPT
      │
      ▼
 RAW RESPONSE
      │
      ▼
 GEMINI ANALYSIS
      │
      ├──────────────┐
      ▼              ▼
   SCORING      COMPETITORS
      │              │
      └──────┬───────┘
             ▼
      OPPORTUNITY ENGINE
             │
             ▼
          DASHBOARD
```

---

# 32. MVP vertical slice recommandé

Avant de construire toute la plateforme, le cerveau doit être démontré de bout en bout.

```text
URL
 ↓
Crawler
 ↓
Brand Intelligence
 ↓
Question Framework
 ↓
5 questions
 ↓
1 run / question
 ↓
Gemini analysis
 ↓
Score
 ↓
Dashboard
```

Une fois ce slice fiable :

```text
30 questions
 ↓
adaptive runs
 ↓
measurement campaigns
 ↓
competitor engine
 ↓
opportunities
 ↓
change detection
 ↓
daily / weekly scheduler
 ↓
billing
 ↓
public scan
 ↓
emails
```

---

# 33. Dashboard cible

Le dashboard doit répondre rapidement à :

### 1. Quelle est ma visibilité actuelle ?

Score global + tendance.

### 2. Où ma marque apparaît-elle ?

Détail par question.

### 3. Comment les concurrents apparaissent-ils ?

Comparaison observable.

### 4. Qu’est-ce qui semble poser problème ?

Opportunités avec preuves.

### 5. Qu’est-ce qui a changé ?

Historique du site et changements détectés.

### 6. Que s’est-il passé depuis la dernière mesure ?

Chronologie :

```text
MESURE
↓
MODIFICATIONS DU SITE
↓
MESURE SUIVANTE
```

---

# 34. UX de l’historique

Exemple :

```text
Historique

15 sept.
Mesure #12
Score 68

12 sept.
Modification détectée
/
Positionnement modifié
Importance : élevée

10 sept.
Modification détectée
/pricing
Tarification modifiée
Importance : élevée

08 sept.
Mesure #11
Score 64
```

Une modification peut être ouverte pour voir :

- page ;
- date ;
- méthode de détection ;
- avant/après ;
- résumé du changement ;
- importance ;
- confiance ;
- lien éventuel vers une mesure ultérieure.

---

# 35. Alertes

Le système peut alerter lorsqu’un événement mérite une action.

Exemples :

> **Baisse de visibilité détectée**

> **Modification importante détectée sur votre homepage**

> **Nouvelle page détectée**

> **Site indisponible lors de la dernière vérification**

Mais les alertes doivent être séparées de l’historique :

```text
TOUT CE QUI CHANGE
→ HISTORIQUE

CHANGEMENTS IMPORTANTS
→ ALERTES
```

---

# 36. Public Scan

Le scan gratuit sans inscription reste un levier d’acquisition fort du document original. Il peut afficher une mesure simplifiée, partageable, avec un périmètre très limité. fileciteturn3file0L115-L122

Version MVP possible :

```text
URL
 ↓
analyse légère
 ↓
quelques questions
 ↓
quelques runs
 ↓
score simplifié
 ↓
CTA vers Reflet
```

Le scan public doit avoir :

- limitation de fréquence ;
- expiration des résultats ;
- protection contre l’abus ;
- faible coût par scan ;
- distinction claire entre scan gratuit et mesure suivie.

---

# 36B. Architecture du site public et contenu de la landing page

La landing page est la principale surface de découverte de Reflet. Elle doit expliquer le produit avec suffisamment de profondeur pour être comprise sans exposer toute l’architecture technique. Les fonctionnalités détaillées vivent dans des pages dédiées ou des dropdowns de navigation.

## 36B.1 Navigation publique

La navigation doit rester classique, directe et peu chargée.

```text
REFLET

Produit ▾   Ressources ▾   Tarifs

Connexion   [Commencer]
```

### Dropdown Produit

- Vue d’ensemble
- Visibilité IA
- Questions et mesures
- Preuves et opportunités
- Historique du site

### Dropdown Ressources

- Blog
- Guides
- Études
- Glossaire

Les intitulés trop conversationnels comme « Comment ça marche » ne sont pas des éléments prioritaires de la navbar. Ils peuvent exister comme sections de la landing ou comme contenu de la page Produit.

## 36B.2 Architecture des pages publiques

```text
/
├── /product
├── /pricing
├── /scan
├── /resources
│   ├── /blog
│   ├── /guides
│   ├── /studies
│   └── /glossary
├── /login
├── /register
├── /privacy
└── /terms
```

Le MVP peut commencer avec `/`, `/pricing`, `/scan`, `/login`, `/register`, `/privacy` et `/terms`. Les autres pages peuvent être ajoutées lorsqu’elles disposent d’un contenu réel.

## 36B.3 Landing page — structure complète

### Section 1 — Hero

**Badge**

> Visibilité IA

**H1**

> **Voyez comment votre marque apparaît dans ChatGPT.**

**Sous-texte**

> Reflet pose les questions que vos prospects pourraient réellement poser, analyse les réponses générées par ChatGPT et vous montre où votre marque apparaît, qui apparaît à sa place et ce qui peut être amélioré.

**CTA principal**

> Analyser mon site

**CTA secondaire**

> Voir le produit

**Réassurance**

> 1 site · jusqu’à 30 questions · mesure continue

### Visuel du Hero

Le visuel doit montrer le produit réel, pas une illustration abstraite. Exemple : score, métriques de mention/recommandation/position et une réponse observée contenant plusieurs marques.

## 36B.4 Section — Le problème

**Titre**

> **Votre site sait ce que vous vendez. ChatGPT, lui, peut en dire autre chose.**

Trois cas illustrés :

- **Invisible** — votre marque n’apparaît pas dans les recommandations pertinentes.
- **Mal positionnée** — elle apparaît derrière d’autres solutions.
- **Mal comprise** — votre site exprime une offre claire, mais les réponses observées ne la reflètent pas correctement.

Conclusion :

> Reflet mesure cet écart au lieu de vous demander de le deviner.

## 36B.5 Section — Fonctionnement

```text
Votre site
   ↓
Reflet comprend votre marque
   ↓
Reflet construit vos questions
   ↓
ChatGPT est interrogé
   ↓
Les réponses sont analysées
   ↓
Score + preuves + opportunités
   ↓
Évolution dans le temps
```

Phrase clé :

> **Vous choisissez les questions. Reflet s’occupe du reste.**

## 36B.6 Section — Question Engine

**Titre**

> **Les bonnes questions avant les bonnes réponses.**

Reflet n’invente pas des requêtes au hasard. Il analyse l’activité, l’offre, l’audience, le marché et les besoins auxquels la marque répond pour générer des questions réalistes et discriminantes.

Exemple :

```text
✕ « Parlez-moi de SIKKA »

✓ « Quel logiciel de facturation recommander
   à un artisan au Bénin ? »
```

Le visiteur comprend que les questions sont orientées découverte et décision, pas seulement marque.

## 36B.7 Section — Ce que Reflet mesure

### Présence

> Votre marque est-elle mentionnée ?

### Recommandation

> Est-elle proposée comme solution ?

### Position

> Où apparaît-elle lorsqu’une liste est générée ?

### Concurrence

> Qui apparaît à sa place ou plus fréquemment ?

La métrique de citation ne doit être mise en avant que lorsqu’elle repose sur une définition robuste adaptée à la surface observée.

## 36B.8 Section — Preuves

**Titre**

> **Pas de score sans preuves.**

Visuellement :

```text
QUESTION
↓
RÉPONSE OBSERVÉE
↓
OBSERVATION
↓
SITE / PREUVES
↓
CONSTAT
↓
OPPORTUNITÉ
```

Message :

> Chaque insight important peut être remonté à la réponse observée, au contenu du site et aux éléments qui ont conduit à la conclusion.

## 36B.9 Section — Historique et changements

**Titre**

> **Votre visibilité n’est pas un chiffre isolé.**

Exemple :

```text
08 sept.   Mesure #11 — Score 64
10 sept.   Modification détectée — /pricing
12 sept.   Modification détectée — /
15 sept.   Mesure #12 — Score 68
```

Message :

> Reflet surveille automatiquement votre site. Vous n’avez pas besoin de déclarer chaque modification.

Même un changement jugé faible reste enregistré dans l’historique.

## 36B.10 Section — Boucle de valeur

```text
VOIR
↓
COMPRENDRE
↓
AGIR
↓
VÉRIFIER
```

**Voir** — ce que ChatGPT dit réellement.

**Comprendre** — pourquoi certaines marques apparaissent davantage.

**Agir** — quelles opportunités méritent votre attention.

**Vérifier** — ce qui a évolué à la mesure suivante.

## 36B.11 Section — Pricing

La landing affiche une seule offre Reflet avec un sélecteur :

```text
[ Mensuel ] [ Annuel ]
```

La modalité mensuelle affiche **75 €/mois**. La modalité annuelle affiche le tarif annuel définitif une fois celui-ci validé ; elle ne crée pas un second plan.

## 36B.12 Section — FAQ

Questions de réassurance :

- Qu’est-ce que Reflet mesure exactement ?
- Est-ce que Reflet utilise ChatGPT directement ?
- Pourquoi les réponses peuvent-elles varier ?
- Comment Reflet choisit-il les questions ?
- Est-ce que Reflet détecte les modifications de mon site ?
- Est-ce que je dois déclarer chaque modification ?
- Reflet garantit-il une position dans ChatGPT ?

## 36B.13 CTA final

**Titre**

> **Découvrez ce que ChatGPT dit de votre marque.**

**Sous-texte**

> Analysez votre site, sélectionnez vos questions et obtenez votre première mesure.

**CTA**

> Analyser mon site

## 36B.14 Footer

```text
Produit
- Vue d’ensemble
- Visibilité IA
- Questions et mesures
- Opportunités
- Historique

Ressources
- Blog
- Guides
- Études
- Glossaire

Entreprise
- À propos
- Contact

Légal
- Confidentialité
- Conditions
- Cookies
```

Bas de footer :

> © 2026 Reflet

> Mesurer. Comprendre. Améliorer.

## 36B.15 Direction éditoriale et visuelle

La landing doit présenter Reflet comme un **instrument de mesure analytique** : sobre, précis, premium, crédible. Éviter les conventions visuelles génériques des produits « AI » : surcharge de gradients, orbites 3D, promesses vagues et répétition de « powered by AI ». Le produit réel et les preuves doivent être les principaux éléments visuels.

---


# 36C. Visual System & Frontend Design Direction

Cette section définit le langage visuel à utiliser avant toute implémentation finale de la landing ou du dashboard. Elle vise à empêcher les décisions UI improvisées et à maintenir une cohérence entre marketing, application et composants.

## 36C.1 Direction artistique

**DÉCIDÉ : produit dark-only.**

Reflet doit être perçu comme un **instrument analytique** : précis, calme, premium, crédible et orienté données.

Références de direction, sans clonage :

- **Linear** : navigation, densité, hiérarchie et dark-first ;
- **Vercel** : sobriété, surfaces neutres, borders fines, usage parcimonieux de la couleur ;
- **Stripe** : structuration des données, métriques, tableaux et graphiques ;
- **PostHog** : logique d’analytics, monitoring et exploration des données.

À éviter :

- esthétique « AI flashy » générique ;
- gradients décoratifs omniprésents ;
- néons gratuits ;
- illustrations abstraites sans rôle produit ;
- accumulation artificielle de cartes ;
- composants visuellement différents selon les pages.

## 36C.2 Principe de construction visuelle

L’UI doit donner la priorité à :

```text
HIÉRARCHIE
→ DONNÉES
→ CONTEXTE
→ PREUVE
→ ACTION
```

Le design ne doit pas simplement « remplir l’espace ». Il doit organiser l’espace pour que les données importantes aient une hiérarchie claire.

## 36C.3 Mode de thème

**DÉCIDÉ : dark mode uniquement pour l’application Reflet.**

Il n’est pas nécessaire de maintenir une variante light dans le MVP.

Le système doit néanmoins utiliser des tokens sémantiques afin que les surfaces et les contrastes restent cohérents :

```text
background
surface
surface-elevated
border
text-primary
text-secondary
text-muted
brand
brand-hover
success
warning
danger
info
```

## 36C.4 Typographie

La police doit être une sans-serif moderne adaptée à une application analytique. Les candidats prioritaires sont **Geist** et **Inter** ; le choix final doit être effectué lors de la mise en place du design system.

Priorités :

- excellente lisibilité à petite taille ;
- chiffres bien lisibles ;
- distinction nette entre titres, labels, valeurs et annotations ;
- tailles et hauteurs de ligne systématisées ;
- aucune multiplication de familles typographiques sans justification.

Hiérarchie indicative :

```text
Display / Hero
H1
H2
H3
Body
Body small
Caption
Metric
```

## 36C.5 Couleurs

La palette exacte sera verrouillée lors de la phase de Design System, mais son architecture est définie :

```text
NEUTRALS
→ canvas très sombre
→ surfaces sombres
→ borders neutres
→ textes blancs/gris

BRAND
→ une couleur d’accent principale

SEMANTIC
→ success
→ warning
→ danger
→ info
```

La couleur de marque doit rester suffisamment rare pour conserver sa force visuelle.

## 36C.6 Grille, spacing et largeur

Le système utilise une échelle cohérente de spacing, idéalement basée sur des multiples courts :

```text
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64
```

Les pages desktop doivent exploiter l’espace horizontal disponible, particulièrement pour les dashboards et les graphiques.

La composition peut utiliser :

- pleine largeur pour les visualisations majeures ;
- deux colonnes pour des blocs complémentaires ;
- trois ou quatre colonnes pour des métriques secondaires ;
- sections empilées lors du scroll ;
- responsive collapse sur tablette et mobile.

## 36C.7 Cards et surfaces

Les cartes sont utilisées lorsqu’elles créent une unité d’information claire.

Types de surfaces prévus :

- KPI card ;
- analytics card ;
- opportunity card ;
- activity card ;
- evidence card ;
- system/status card.

Règle : **une carte doit regrouper une idée ; elle ne doit pas exister uniquement pour décorer une grille.**

## 36C.8 Graphiques et data visualisation

Les graphiques sont des éléments de premier ordre de Reflet.

Le MVP doit prévoir notamment :

- courbe d’évolution du score ;
- évolution des mentions ;
- évolution des recommandations ;
- position moyenne ;
- comparaison des concurrents ;
- couverture des questions ;
- timeline des événements.

Chaque graphique doit posséder :

- titre explicite ;
- période ;
- unités ;
- légende lorsque nécessaire ;
- tooltip utile ;
- état sans données ;
- état de chargement ;
- indication claire lorsque la donnée est partielle.

## 36C.9 Navigation et composants

Stack UI cible :

```text
Tailwind CSS
↓
shadcn/ui
↓
Radix UI
↓
Motion / Framer Motion
↓
21st.dev pour certains composants ou patterns sélectionnés
```

Chaque bibliothèque doit avoir un rôle précis. Les bibliothèques qui se chevauchent ne doivent pas être ajoutées sans justification.

## 36C.10 Animation et motion

Les animations servent à rendre les états et les interactions compréhensibles :

- transitions de navigation ;
- ouverture de drawers/dropdowns ;
- apparition de données ;
- feedback d’action ;
- changement de score ;
- chargements.

Éviter toute animation purement décorative qui ralentit l’analyse ou détourne l’attention des données.

## 36C.11 Templates, starters et références prédéfinies

**DÉCIDÉ : l’implémentation ne part pas de zéro.**

Références possibles :

- Next.js SaaS Starter officiel de Vercel ;
- Next.js + shadcn/ui Admin Dashboard officiel de Vercel ;
- autres templates premium ou communautaires seulement après validation.

Un template est un **socle ou une référence**, pas une identité visuelle à recopier.

## 36C.12 Skills et ressources de conception

Les workflows de conception peuvent s’appuyer sur :

- **Impeccable** pour l’audit et la qualité UI/UX ;
- **Promax** pour les règles de conception et l’aide au design system ;
- **Frontend Design** pour l’orientation de la conception web ;
- **21st.dev** pour rechercher et sélectionner des composants/patterns prêts à intégrer.

Ces ressources servent à produire des options contrôlées, pas à déléguer le choix final à l’IA.

## 36C.13 Méthode de conception par variante

Pour chaque section importante de la landing ou du dashboard :

```text
BESOIN DE LA SECTION
        ↓
RÉFÉRENCES VALIDÉES
        ↓
3–5 VARIANTES
        ↓
COMPARAISON
        ↓
DÉCISION HUMAINE
        ↓
IMPLEMENTATION
```

Exemple pour le hero :

```text
Hero Reflet
├── Variante A — inspiration Linear
├── Variante B — inspiration Vercel
└── Variante C — inspiration Stripe / analytics
```

Une variante retenue devient une décision de design documentée.

## 36C.14 Assets et références visuelles

Un dossier de références doit être maintenu dans le projet :

```text
/design
├── references/
│   ├── landing/
│   ├── dashboard/
│   └── components/
├── images/
├── screenshots/
└── selected/
```

Les images Pinterest ou autres références visuelles fournies par le designer servent de **moodboard et de références**, pas nécessairement d’assets finaux.

Les illustrations fonctionnelles de la landing doivent, autant que possible, dériver des **écrans réels de Reflet**.

## 36C.15 Principe « produit d’abord, illustration ensuite »

Pour les sections qui expliquent une fonctionnalité :

```text
VRAI COMPOSANT / VRAI ÉCRAN REFLET
                 ↓
SCREENSHOT / CROP / MOCKUP
                 ↓
VISUEL DE LANDING
```

Exemples :

- Question Engine → liste réelle de questions ;
- mesure → réponse observée et analyse ;
- concurrence → graphique réel ;
- Evidence Chain → panneau de preuves ;
- historique → timeline réelle ;
- score → composant réel de visibilité.

Cette règle garantit que la promesse visuelle de la landing correspond au produit réellement livré.

---

# 36D. Dashboard — architecture UX détaillée

## 36D.1 Navigation interne

La sidebar doit utiliser des intitulés simples et classiques :

```text
Accueil
Performance
Concurrents
Opportunités
Historique
────────────
Paramètres
```

Les concepts techniques comme `Run`, `Measurement Engine`, `Change Detection` ou `Observation` ne doivent pas apparaître comme éléments principaux de navigation.

## 36D.2 Accueil — cockpit

Objectif : comprendre l’état du produit sans devoir ouvrir plusieurs pages.

Structure visuelle :

```text
┌─────────────────────────────────────────────────────────┐
│ Score actuel                    Graphique d’évolution   │
├──────────┬──────────┬──────────┬────────────────────────┤
│ Mention  │ Reco.    │ Position │ Présence concurrente  │
├──────────┴──────────┴──────────┴────────────────────────┤
│ Opportunités                    Activité récente        │
├─────────────────────────────────────────────────────────┤
│ Performance des questions                              │
├─────────────────────────────┬───────────────────────────┤
│ Concurrents                  │ Surveillance du site      │
├─────────────────────────────┴───────────────────────────┤
│ Dernière mesure / prochaine mesure                     │
└─────────────────────────────────────────────────────────┘
```

Le haut de page doit exploiter pleinement la largeur disponible : score à gauche, grand graphique à droite.

### Hero de l’accueil

À gauche :

```text
Bonjour, [marque]

Visibilité IA
68 / 100
↑ +4 depuis la dernière mesure

Dernière mesure : 15 septembre
```

À droite : graphique principal avec sélecteur `7 jours / 30 jours / 3 mois`.

### Métriques secondaires

- Mentions ;
- Recommandations ;
- Position moyenne ;
- Présence concurrentielle.

### Attention

Afficher :

- opportunités importantes ;
- changements importants détectés ;
- mesures récemment terminées ;
- anomalies éventuelles.

### Surveillance

Afficher :

- statut du site ;
- nombre de pages suivies ;
- dernière vérification ;
- derniers changements détectés.

## 36D.3 Performance

Objectif : comprendre où et pourquoi la visibilité évolue.

Contenu :

- score et variation ;
- graphique principal ;
- sélecteur d’indicateur ;
- tableau des questions suivies ;
- historique par question ;
- détail d’une question dans un drawer.

Tableau :

| Question | Mention | Recommandation | Position |
|---|---:|---:|---:|
| … | … | … | … |

Une question ouverte montre :

- réponses observées ;
- concurrents ;
- position ;
- historique ;
- preuves pertinentes.

## 36D.4 Concurrents

Objectif : comprendre quelles marques apparaissent dans les réponses observées.

Contenu :

- graphique de comparaison ;
- tableau des concurrents ;
- mentions ;
- recommandations ;
- position moyenne ;
- couverture ;
- contextes où ils apparaissent ;
- possibilité de masquer un concurrent non pertinent.

## 36D.5 Opportunités

Objectif : transformer les observations en actions compréhensibles.

Chaque opportunité comporte :

- titre ;
- priorité ;
- confiance ;
- nombre d’observations ;
- questions concernées ;
- pourquoi l’opportunité existe ;
- ce que le site contient actuellement ;
- direction proposée ;
- preuves.

Le détail ouvre l’Evidence Chain :

```text
Question
↓
Réponse observée
↓
Observation
↓
Concurrent
↓
Site
↓
Écart
↓
Recommandation
```

Une opportunité peut devenir `resolved`, `dismissed` ou `no_longer_observed`.

## 36D.6 Historique

L’historique rassemble dans une même timeline :

- mesures ;
- modifications du site ;
- événements importants.

Filtres :

```text
Tout | Mesures | Modifications
```

Chaque modification affiche :

- page ;
- date ;
- méthode de détection ;
- avant/après ;
- type de changement ;
- importance ;
- confiance ;
- lien éventuel vers une mesure ultérieure.

Même un changement faible reste visible.

## 36D.7 Paramètres

Organisation classique :

```text
Compte
Site
Questions
Notifications
Abonnement
Sécurité
```

Les notifications sont une couche transversale du produit. Elles ne nécessitent pas une page principale supplémentaire dans le MVP.

## 36D.8 Notifications

Types possibles :

- baisse de visibilité détectée ;
- modification importante détectée ;
- nouvelle page détectée ;
- mesure terminée ;
- nouvelle opportunité ;
- site indisponible.

Règle :

```text
TOUT CE QUI CHANGE
→ HISTORIQUE

ÉVÉNEMENTS QUI MÉRITENT UNE ACTION
→ NOTIFICATION / ALERTE
```

## 36D.9 Toasts / feedback immédiat

Les toasts font partie du système d’interaction global de Reflet. Ils servent à confirmer une action, signaler un résultat immédiat ou informer brièvement l’utilisateur sans interrompre son travail. Ils ne remplacent pas les notifications persistantes ni l’historique.

### Principes

- chaque toast doit correspondre à un événement réel ;
- aucun toast de succès ne doit être affiché si l’opération n’a pas réellement réussi ;
- les messages doivent être courts, explicites et orientés action ;
- les erreurs importantes doivent rester visibles plus longtemps ou être accompagnées d’un état persistant ;
- les toasts non critiques disparaissent automatiquement ;
- plusieurs événements identiques doivent être regroupés lorsque cela évite le bruit ;
- le toast doit être accessible au clavier et aux technologies d’assistance.

### Types

```text
SUCCESS
→ « Questions enregistrées. »

INFO
→ « Une nouvelle mesure est disponible. »

WARNING
→ « Votre mesure est partielle : 28/30 questions. »

ERROR
→ « Impossible de lancer la mesure. Réessayez. »
``

### Cas d’usage Reflet

```text
Question ajoutée
Question retirée
Questions enregistrées
Note ajoutée à une modification
Paramètre enregistré
Mesure manuelle lancée
Mesure terminée
Mesure partielle
Modification du site détectée
Erreur de crawl
Site momentanément indisponible
Déconnexion réussie
``

### Différence entre toast, notification et historique

```text
ACTION IMMÉDIATE
→ TOAST

ÉVÉNEMENT QUI PEUT NÉCESSITER UNE ATTENTION
→ NOTIFICATION

ÉVÉNEMENT À CONSERVER DANS LE TEMPS
→ HISTORIQUE
```

Un même événement peut avoir plusieurs représentations. Exemple : une modification importante détectée peut produire un toast au moment de la détection, une notification dans le centre d’alertes et une entrée permanente dans l’historique.

## 36D.10 États visuels du dashboard

Chaque page doit prévoir explicitement :

```text
Loading
Analyzing
Measuring
Partial
Success
No data
No change
No opportunity
Failed
Unavailable
Stale
```

Exemple :

> **Aucun changement détecté**

n’est pas équivalent à :

> **Reflet n’a pas encore vérifié le site.**

---

# 36E. Schémas conceptuels de conception

## 36E.1 Architecture globale

```text
SITE CLIENT
   ↓
SITE INTELLIGENCE
   ↓
┌───────────────┬────────────────┐
│ QUESTION      │ SITE VERSION   │
│ ENGINE        │ / CHANGE       │
└───────┬───────┴───────┬────────┘
        ↓               ↓
      MESURE         HISTORIQUE
        ↓
      CHATGPT
        ↓
   RAW RESPONSES
        ↓
      ANALYSIS
        ↓
┌───────┼────────┐
│       │        │
SCORE CONCURRENTS PREUVES
        │
        ↓
 OPPORTUNITY ENGINE
        ↓
 RECOMMANDATION
        ↓
 MODIFICATION SITE
        ↓
 NOUVELLE VERSION
        ↓
 MESURE SUIVANTE
```

## 36E.2 Cycle de vie d’une question

```text
CANDIDATE
   ↓
VALIDATED
   ↓
ACTIVE
   ↓
MEASURED
   ↓
REVIEWED
   ↓
ACTIVE / PAUSED / RETIRED
```

Une modification de formulation doit créer une nouvelle version afin de préserver la comparabilité historique.

## 36E.3 Cycle de vie d’une mesure

```text
SCHEDULED
   ↓
PLANNED
   ↓
RUNNING
   ↓
COLLECTING
   ↓
ANALYZING
   ↓
SCORING
   ↓
COMPLETED
```

États exceptionnels :

```text
PARTIAL
FAILED
RETRYING
CANCELLED
RATE_LIMITED
```

## 36E.4 Objet Observation

L’observation est l’unité canonique produite à partir d’une réponse analysée :

```text
Observation
├── question
├── measurement
├── run
├── brand_mentioned
├── recommended
├── position
├── cited
├── competitors
├── evidence
├── context
└── confidence
```

Les indicateurs de score et les informations de concurrence dérivent de ces observations.

## 36E.5 Provenance complète

Toute conclusion importante doit pouvoir remonter sa provenance :

```text
RECOMMANDATION
   ↓
OPPORTUNITÉ
   ↓
OBSERVATION
   ↓
RUN
   ↓
QUESTION VERSION
   ↓
SITE EVIDENCE
   ↓
PAGE
   ↓
SITE VERSION
```

La provenance permet d’auditer chaque résultat important et de distinguer les données observées des interprétations.

## 36E.6 Séparation des horloges

Reflet fonctionne avec plusieurs temporalités :

```text
HORLOGE DU SITE
→ détection des changements

HORLOGE DU MONITORING
→ signaux / anomalies

HORLOGE DE MESURE
→ score officiel

HORLOGE UTILISATEUR
→ mesure manuelle éventuelle
```

Une modification du site peut donc être détectée à 14h alors que la mesure officielle suivante n’a lieu que plusieurs jours plus tard.

## 36E.7 Cycle de vie global de l’information

```text
DONNÉE BRUTE
   ↓
DÉTECTION
   ↓
OBSERVATION
   ↓
INTERPRÉTATION
   ↓
CONFIANCE
   ↓
RECOMMANDATION
   ↓
ACTION / MODIFICATION
   ↓
NOUVELLE VERSION DU SITE
   ↓
MESURE SUIVANTE
```

## 36E.8 Historique global

```text
MESURE A
   ↓
CHANGEMENTS DU SITE
   ↓
MESURE B
   ↓
OBSERVATIONS COMPARÉES
   ↓
ÉVOLUTION OBSERVÉE
```

Cette chronologie ne doit pas être présentée automatiquement comme une preuve de causalité.

---


# 37. Pricing — état de référence

**DÉCIDÉ : un seul plan produit, avec deux modalités de facturation : mensuelle et annuelle.**

### Offre Reflet

| Élément | Offre |
|---|---|
| Site suivi | 1 |
| Questions suivies | Jusqu’à 30 |
| Moteur observé | ChatGPT |
| Mesure officielle | Hebdomadaire |
| Monitoring | Adaptatif |
| Historique | Inclus |
| Détection des changements | Incluse |
| Concurrents observés | Inclus |
| Opportunités avec preuves | Incluses |
| Support | Email |

### Facturation mensuelle

> **75 €/mois**

### Facturation annuelle

La facturation annuelle est une seconde modalité du **même plan Reflet**, et non un second produit. Le montant annuel et la remise exacte doivent être arrêtés avant publication commerciale définitive.

> **Principe : un seul plan, Mensuel / Annuel.**

La tarification annuelle ne doit pas introduire un nouveau niveau fonctionnel : elle apporte uniquement une modalité de paiement annuelle et, lorsque la remise est validée, une économie par rapport au paiement mensuel.

L’interface tarifaire ne doit jamais exposer les runs internes comme une unité commerciale.


---

# 38. Architecture de confiance

Reflet doit être conçu comme un produit d’observation vérifiable.

### Principe

> **Toute conclusion forte doit avoir une chaîne de preuves.**

### Niveau de preuve

```text
OBSERVATION
↓
INTERPRÉTATION
↓
CONFIANCE
↓
RECOMMANDATION
```

### Règles

- ne pas présenter une hypothèse comme un fait ;
- ne pas transformer une observation en causalité ;
- ne pas masquer un changement simplement parce qu’il est jugé peu important ;
- ne pas fabriquer une opportunité lorsque les preuves sont faibles ;
- conserver les réponses brutes ;
- conserver la provenance des données ;
- permettre au client d’inspecter les preuves importantes.

---

# 39. Séparation des responsabilités entre IA et code

## Gemini

Peut :

- extraire / structurer ;
- proposer des questions ;
- interpréter une réponse ;
- classer un changement ;
- résumer un diff ;
- proposer une direction d’action.

## Code déterministe

Doit contrôler :

- validation des schémas ;
- déduplication ;
- sélection finale des questions ;
- score ;
- budgets ;
- limites ;
- scheduling ;
- statuts ;
- idempotence ;
- calcul historique ;
- règles d’alerte.

## Principe

> **L’IA interprète ; le système décide et vérifie.**

---

# 40. Qualité du protocole de mesure

Le protocole doit être versionné.

Une mesure doit savoir avec quelle configuration elle a été réalisée :

```text
measurement_campaign
├── model
├── question_set_version
├── analysis_version
├── scoring_version
├── prompt/config version
└── timestamps
```

Ainsi, si le score évolue après une modification du système Reflet lui-même, il devient possible de savoir si l’évolution vient :

- du site ;
- des réponses observées ;
- du moteur ;
- de la configuration ;
- de l’algorithme d’analyse ;
- du scoring.

C’est essentiel pour la crédibilité historique.

---

# 41. États et erreurs

Aucun écran ne doit supposer que tout fonctionne.

Le produit doit gérer explicitement :

```text
PENDING
RUNNING
PARTIAL
SUCCESS
FAILED
RETRYING
RATE_LIMITED
CANCELLED
```

Exemple : si 28 questions sur 30 sont terminées :

> **Mesure partielle — 28/30 questions analysées**

et non un faux score complet présenté comme définitif.

---

# 42. Sécurité et exploitation

Le système doit prévoir :

- authentification ;
- séparation des projets ;
- contrôle d’accès ;
- protection des URLs ;
- protection contre l’abus du scan public ;
- stockage sécurisé des clés API ;
- absence de secrets dans le repository ;
- logs sans données sensibles inutiles ;
- quotas ;
- rate limiting ;
- timeouts ;
- retries ;
- monitoring des jobs.

---

# 43. Ce que Reflet doit apprendre avec le temps

Le mot « apprendre » doit rester concret.

Reflet ne doit pas devenir mystérieusement « plus intelligent ».

Il doit accumuler des données exploitables :

### Sur le site

- fréquence de changement par page ;
- types de modifications fréquents ;
- importance des pages.

### Sur les questions

- stabilité des réponses ;
- volatilité ;
- difficulté à détecter un signal ;
- importance commerciale.

### Sur les concurrents

- fréquence d’apparition ;
- co-occurrence ;
- positions observées ;
- domaines où ils apparaissent.

### Sur les opportunités

- quels gaps reviennent ;
- quelles pages sont liées aux gaps ;
- quelles modifications précèdent quelles évolutions observées.

---

# 44. V1 → V4

## V1 — MVP

- ChatGPT uniquement ;
- onboarding court ;
- Brand Intelligence ;
- Question Engine ;
- 30 questions ;
- mesure ;
- score ;
- concurrents observés ;
- historique ;
- Change Detection Engine ;
- dashboard ;
- 1 plan.

## V2

- autres surfaces d’IA ;
- meilleure analyse de ton / contexte ;
- alertes avancées ;
- intégrations supplémentaires ;
- signaux de recherche enrichis.

## V3

- recommandations plus profondes ;
- diagnostic contenu ;
- comparaison concurrentielle enrichie ;
- workflows de validation.

## V4

- multi-marques ;
- multi-utilisateurs ;
- rapports exportables ;
- API ;
- autres moteurs ;
- intégrations CMS/Git plus nombreuses.

Le document initial retenait déjà ce séquencement progressif. fileciteturn3file0L108-L113

---

# 45. Roadmap de conception

## Phase 1 — Brain / Vertical Slice

Objectif : démontrer que le protocole produit fonctionne réellement.

À construire :

1. crawl d’une URL ;
2. extraction ;
3. Brand Intelligence ;
4. génération de questions ;
5. validation ;
6. 5 questions ;
7. 1 run / question ;
8. analyse Gemini ;
9. score ;
10. dashboard minimal.

## Phase 2 — Measurement Engine

- campaigns ;
- runs ;
- adaptive sampling ;
- retries ;
- cost ledger ;
- score officiel ;
- historique.

## Phase 3 — Change Detection

- pages ;
- versions ;
- hashes ;
- ETag / Last-Modified ;
- sitemap ;
- diff ;
- classification ;
- historique ;
- surveillance adaptative.

## Phase 4 — Opportunity Engine

- evidence chain ;
- concurrents ;
- gaps ;
- recommandations ;
- niveaux de confiance.

## Phase 5 — Production

- billing ;
- quotas ;
- public scan ;
- email ;
- monitoring ;
- sécurité ;
- tests ;
- QA ;
- déploiement.

---

# 46. Definition of Done de Reflet

Une capacité n’est pas considérée comme terminée simplement parce que le code existe.

Elle doit être démontrée à travers :

```text
REQUIREMENT
→ DATA
→ BACKEND
→ UI
→ STATES
→ INTERACTIONS
→ ERROR HANDLING
→ TESTS
→ BROWSER QA
→ DOCUMENTATION
```

États possibles :

```text
VERIFIED
PARTIAL
NOT VERIFIED
SIMULATED
NOT CONNECTED
```

Ce principe reprend l’idée d’une chaîne de vérification utilisée dans la méthode de la SaaS Factory : une fonctionnalité ne doit pas être considérée comme validée uniquement parce que son code existe. fileciteturn1file7L557-L565 fileciteturn1file8L756-L799

---

# 47. Décisions actuellement verrouillées

## DÉCIDÉ

- Le nom produit est **Reflet**.
- Reflet commence par **ChatGPT** uniquement.
- Reflet mesure une représentation observée selon un protocole, pas une vérité universelle de ChatGPT.
- Les questions sont spécifiques au site et produites via un **Question Framework**.
- Gemini sert au raisonnement / à l’analyse interne, pas à la mesure observée.
- Les questions candidates sont générées puis validées, dédupliquées et scorées avant sélection.
- Le client suit jusqu’à **30 questions**.
- Les runs sont une ressource interne et ne doivent pas être exposés comme unité commerciale.
- Le score est calculé par le système, pas par Gemini.
- Les réponses brutes sont conservées.
- Les concurrents sont détectés à partir des réponses observées.
- Une opportunité doit être étayée par des preuves.
- Toute modification détectée doit être conservée dans l’historique, même si elle est jugée peu importante.
- L’utilisateur n’a pas besoin de déclarer chaque modification.
- Reflet doit détecter automatiquement les changements du site.
- GitHub est une source optionnelle, pas une dépendance.
- Les changements et la mesure ChatGPT sont séparés.
- Une modification du site ne déclenche pas automatiquement une nouvelle mesure dans le MVP.
- La mesure complète officielle reste hebdomadaire dans le modèle actuel.
- Une mesure manuelle est limitée.
- Reflet ne doit pas prétendre prouver une causalité sans protocole expérimental adéquat.
- Le moteur mesuré est interrogé exclusivement via l'API officielle OpenAI (Responses API) ; jamais de scraping de chatgpt.com, jamais d'agrégateur tiers pour le MVP.
- Le modèle de référence du MVP est `gpt-5.6-luna`, pinné par snapshot et tracé dans chaque mesure ; tout changement du modèle par défaut de ChatGPT côté OpenAI doit être annoté comme un changement de protocole.
- La recherche web (`web_search`) est activée systématiquement sur les appels de mesure ; les citations structurées renvoyées alimentent l'Evidence Chain.
- Les appels de mesure sont stateless : aucune mémoire, aucun historique, aucune instruction personnalisée.
- Un contrôle qualité manuel (échantillon de questions comparé à de vraies sessions ChatGPT.com) est effectué au moins une fois par mois et après chaque changement de modèle par défaut détecté.
- Le frontend/app utilise TanStack.
- Le prompt d'analyse d'une réponse ChatGPT (§18.2bis) laisse Gemini interpréter mention/recommandation/position/concurrents, mais jamais la citation : `cited` est calculé par du code déterministe à partir des `url_citation` de l'API, jamais demandé à Gemini.
- La formule de score v0 (§20.1) est verrouillée dans sa structure (mention/recommandation/position/citation/présence concurrentielle, avec exclusion des composants non calculables plutôt qu'un score à zéro) ; les poids restent à calibrer sur données réelles.
- Le crawler suit une stratégie adaptative (§4.1bis) : découverte par sitemap, HTTP simple par défaut, classification automatique des pages suspectes (SPA côté client, JSON-LD schema.org extrait en priorité), bascule ciblée en navigateur headless (Playwright) uniquement pour les pages qui le nécessitent.

---

# 48. Points encore à valider avant implémentation complète

## PROPOSÉ / À ARBITRER

### Fréquence exacte du Change Detection Engine

Le principe adaptatif est retenu, mais les intervalles précis doivent dépendre :

- de la volatilité ;
- des signaux disponibles ;
- du coût ;
- de l’importance de la page.

### Formule définitive du score

Les métriques de base sont identifiées, mais leurs pondérations exactes doivent être validées sur des données réelles.

### Nombre exact de runs adaptatifs

Le principe adaptatif est décidé ; les seuils opérationnels doivent être calibrés sur les premiers résultats.

### Pricing définitif

**75 €/mois est le pricing de référence actuel.** Sa validation finale doit être confrontée aux coûts de production réels après instrumentation complète et aux retours des premiers clients.

---

# 49. Principes directeurs finaux

### 1. Reflet doit observer avant de conseiller.

### 2. Reflet doit distinguer observation, interprétation et recommandation.

### 3. Reflet doit montrer les preuves plutôt que demander de croire l’IA.

### 4. Reflet doit détecter automatiquement les changements du site.

### 5. Un changement faible reste un changement détecté.

### 6. Une modification du site ne déclenche pas automatiquement une mesure coûteuse.

### 7. Les questions suivies doivent venir d’une méthodologie reproductible, pas d’une invention arbitraire.

### 8. Le client ne doit pas être responsable de nourrir manuellement Reflet avec tout ce qu’il fait sur son site.

### 9. Les runs sont une abstraction interne ; les questions et les mesures sont les concepts visibles.

### 10. Le score doit être reproductible, explicable et versionné.

### 11. Une conclusion forte doit être reliée à une chaîne de preuves.

### 12. L’optimisation du système vise l’information utile par génération, pas le volume de générations.

### 13. Les mesures officielles doivent rester comparables dans le temps.

### 14. Toute nouvelle complexité doit avoir une justification produit ou technique.

### 15. Reflet doit devenir une mémoire historique de la visibilité IA d’une marque, pas seulement un dashboard de score.

---

# 50. Formule de synthèse

> **Reflet observe le site, comprend la marque, choisit des questions pertinentes, mesure ce que ChatGPT répond, conserve les preuves, détecte ce qui change sur le site, identifie les écarts réellement observés et suit leur évolution dans le temps.**

La valeur du produit n’est donc pas simplement :

> « Voici votre score. »

La valeur complète est :

```text
VOILÀ CE QUE CHATGPT DIT
        ↓
VOILÀ À QUELLE FRÉQUENCE IL LE DIT
        ↓
VOILÀ QUI APPARAÎT À LA PLACE
        ↓
VOILÀ CE QUE VOTRE SITE DIT RÉELLEMENT
        ↓
VOILÀ L'ÉCART OBSERVÉ
        ↓
VOILÀ LES CHANGEMENTS QUI ONT EU LIEU SUR LE SITE
        ↓
VOILÀ CE QUI A ÉVOLUÉ À LA MESURE SUIVANTE
```

**C’est cette continuité entre observation, preuve, action, changement et nouvelle mesure qui doit constituer le cœur de Reflet.**
