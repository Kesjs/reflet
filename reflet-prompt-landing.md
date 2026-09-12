# Prompt de conception — Landing Page Reflet

> À utiliser tel quel dans un outil de génération de design (21st.dev AI generate, v0, ou équivalent).
> Compilé à partir du document maître Reflet_Conception_Master V2.1 (§36B, §36C) et des critiques de design system menées séparément (Dala, LaunchDarkly, Vetra).

---

## 1. Contexte produit

Reflet est un système de mesure, d'analyse et de suivi de la visibilité d'une marque dans les réponses générées par ChatGPT — un équivalent de "Search Console pour les réponses IA", mais qui va plus loin qu'un simple reporting : il explique pourquoi une marque apparaît ou non, et vérifie l'évolution dans le temps.

Boucle produit : **VOIR → COMPRENDRE → AGIR → VÉRIFIER**

Cible : PME françaises. Produit B2B analytique, pas un outil grand public.

---

## 2. Direction artistique — non négociable

**Instrument de mesure analytique : sobre, précis, premium, crédible.**

Références de direction (inspiration, jamais clonage) :
- **Linear** — navigation, densité, hiérarchie, dark-first
- **Vercel** — sobriété, surfaces neutres, borders fines, couleur parcimonieuse
- **Stripe** — structuration des données, métriques, tableaux, graphiques
- **PostHog** — logique analytics, monitoring, exploration de données

### À proscrire explicitement
- Esthétique "AI flashy" générique (le cliché du SaaS IA 2025-2026)
- Gradients décoratifs omniprésents, glows lumineux autour des boutons/inputs
- Néons gratuits, effets de halo
- Illustrations abstraites sans rôle produit (pas de constellation de particules, pas d'orbes 3D, pas de cerveau stylisé)
- Accumulation artificielle de cartes pour "remplir l'espace"
- Composants visuellement différents selon les pages
- Toute mascotte, wordmark ou signature visuelle qui rappellerait un produit existant (ne pas reproduire l'identité d'un produit concurrent ou d'un template tiers)

### Principe de construction
```
HIÉRARCHIE → DONNÉES → CONTEXTE → PREUVE → ACTION
```
Le design organise l'espace pour que l'information importante ait une hiérarchie claire — il ne remplit pas l'espace pour faire joli.

---

## 3. Thème et tokens

**Dark mode uniquement** pour l'app. La landing peut suivre la même base sombre.

Tokens sémantiques à respecter (pas de couleurs codées en dur) :
```
background / surface / surface-elevated / border
text-primary / text-secondary / text-muted
brand / brand-hover
success / warning / danger / info
```

Architecture couleur :
```
NEUTRALS  → canvas très sombre, surfaces sombres, borders neutres, textes blancs/gris
BRAND     → une seule couleur d'accent, utilisée avec parcimonie pour rester forte visuellement
SEMANTIC  → success / warning / danger / info
```

Typographie : sans-serif moderne adaptée à une app analytique — **Geist** ou **Inter**. Priorités : excellente lisibilité en petite taille, chiffres bien lisibles, distinction nette titres/labels/valeurs/annotations, aucune multiplication de familles sans justification.

Hiérarchie : Display/Hero → H1 → H2 → H3 → Body → Body small → Caption → Metric

Spacing : échelle courte `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64`

Radius : échelle modérée, **pas de style "pill"** (pas de radius 30px+ sur boutons/nav/cards) :
```
--radius-sm:  6px   /* inputs, tags, badges */
--radius-md:  8px   /* boutons, petits composants */
--radius-lg:  12px  /* cards, panneaux */
--radius-xl:  16px  /* grandes surfaces, modales */
```

---

## 4. Stack technique cible

**Frontend/app : TanStack** (décidé §29.3 du master doc — remplace un choix Next.js antérieur, ne pas partir sur App Router).

```
TanStack Start (routing par fichiers) → Tailwind CSS → shadcn/ui → Radix UI → Framer Motion (Motion) → composants 21st.dev sélectionnés au cas par cas
```
Chaque bibliothèque a un rôle précis ; pas de doublons non justifiés.

### Installation — à exécuter avant toute génération de code

**Étape 1 — projet TanStack (si pas déjà initialisé)**
```bash
npx create-tsrouter-app@latest reflet --template file-router --tailwind
cd reflet
```

**Étape 2 — UI stack**
```bash
npx shadcn@latest init
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs @radix-ui/react-accordion
npm install framer-motion
```
(compléter les packages `@radix-ui/*` au fur et à mesure des composants réellement utilisés — ne pas tout installer par précaution).

**Étape 3 — Impeccable (skill design + audit anti-patterns)**
```bash
npx impeccable install -y --providers=claude --scope=project
```
Puis, dans l'agent, avant toute génération :
```
/impeccable init
```

**Étape 4 — connexion du MCP 21st.dev (pas encore fait, dossier vide)**

Le serveur MCP n'est pas encore installé/connecté dans ce projet. À faire avant de s'en servir :

1. Créer le fichier de config MCP à la racine du projet (`.mcp.json`, ou l'emplacement attendu par le harness — vérifier avec `claude mcp` si Claude Code) :
```json
{
  "mcpServers": {
    "21st": {
      "url": "https://21st.dev/api/mcp",
      "headers": {
        "x-api-key": "TA_CLE_API_21ST"
      }
    }
  }
}
```
2. Recharger/redémarrer le harness (Claude Code, Cursor...) pour qu'il détecte le nouveau serveur MCP.
3. Vérifier la connexion (dans Claude Code : `/mcp` doit lister `21st` comme connecté) avant de lancer la génération — si le serveur n'apparaît pas connecté, ne pas continuer sur les composants 21st tant que ce n'est pas résolu.
4. Ne jamais committer la clé API en clair dans le repo (`.mcp.json` doit être dans `.gitignore` s'il contient la clé directement, ou passer par une variable d'environnement si le harness le permet).

**Ordre d'exécution recommandé pour l'agent** :
```
1. Installer le projet (étapes 1-2)
2. Installer et initialiser Impeccable (étape 3)
3. Installer et vérifier la connexion du MCP 21st (étape 4)
4. Seulement ensuite : génération des sections (§7) avec le cycle audit/normalize/polish (§8)
```

---

## 5. Animation et motion

Les animations servent à rendre les états et interactions **compréhensibles**, pas à décorer :
- transitions de navigation
- ouverture de drawers/dropdowns
- apparition de données (fade + léger slide-up, stagger sur listes)
- feedback d'action
- changement de score (animation de valeur numérique)
- états de chargement

**Éviter toute animation purement décorative qui ralentit l'analyse ou détourne l'attention des données.** Pas de parallax spectaculaire, pas de reveal cinématique gratuit.

---

## 6. Principe "produit d'abord, illustration ensuite"

Pour toute section qui illustre une fonctionnalité, le visuel doit dériver d'un **vrai composant/écran Reflet** — jamais un mockup abstrait ou une illustration générique :
```
VRAI COMPOSANT / VRAI ÉCRAN REFLET → SCREENSHOT / CROP / MOCKUP → VISUEL DE LANDING
```
Exemples : Question Engine → vraie liste de questions ; mesure → réponse observée + analyse ; concurrence → vrai graphique ; preuves → vrai panneau Evidence Chain ; historique → vraie timeline ; score → vrai composant de visibilité.

---

## 7. Structure complète de la landing page

### Navigation
```
REFLET     Produit ▾   Ressources ▾   Tarifs     Connexion   [Commencer]
```
Dropdown Produit : Vue d'ensemble / Visibilité IA / Questions et mesures / Preuves et opportunités / Historique du site
Dropdown Ressources : Blog / Guides / Études / Glossaire

### Section 1 — Hero
- Badge : **Visibilité IA**
- H1 : **Voyez comment votre marque apparaît dans ChatGPT.**
- Sous-texte : *Reflet pose les questions que vos prospects pourraient réellement poser, analyse les réponses générées par ChatGPT et vous montre où votre marque apparaît, qui apparaît à sa place et ce qui peut être amélioré.*
- CTA principal : **Analyser mon site**
- CTA secondaire : **Voir le produit**
- Réassurance : *1 site · jusqu'à 30 questions · mesure continue*
- Visuel : composant réel (score + mention/recommandation/position + une réponse observée avec plusieurs marques). Pas d'illustration abstraite.
- Disposition : 2 colonnes asymétriques, texte ~55% à gauche, composant produit à droite.

### Section 2 — Le problème
Titre : **Votre site sait ce que vous vendez. ChatGPT, lui, peut en dire autre chose.**
3 colonnes égales :
- **Invisible** — votre marque n'apparaît pas dans les recommandations pertinentes
- **Mal positionnée** — elle apparaît derrière d'autres solutions
- **Mal comprise** — votre site exprime une offre claire, mais les réponses observées ne la reflètent pas correctement

Conclusion centrée : *Reflet mesure cet écart au lieu de vous demander de le deviner.*

### Section 3 — Fonctionnement
Colonne unique centrée, schéma vertical en étapes (pas de gradient decor) :
```
Votre site → Reflet comprend votre marque → Reflet construit vos questions
→ ChatGPT est interrogé → Les réponses sont analysées
→ Score + preuves + opportunités → Évolution dans le temps
```
Phrase clé : **Vous choisissez les questions. Reflet s'occupe du reste.**

### Section 4 — Question Engine
Titre : **Les bonnes questions avant les bonnes réponses.**
2 colonnes : texte à gauche ; à droite, contraste dans un vrai composant "liste de questions" :
```
✕ « Parlez-moi de SIKKA »
✓ « Quel logiciel de facturation recommander à un artisan au Bénin ? »
```

### Section 5 — Ce que Reflet mesure
Grille 4 colonnes (collapse 2 puis 1 en mobile) :
- **Présence** — Votre marque est-elle mentionnée ?
- **Recommandation** — Est-elle proposée comme solution ?
- **Position** — Où apparaît-elle lorsqu'une liste est générée ?
- **Concurrence** — Qui apparaît à sa place ou plus fréquemment ?

### Section 6 — Preuves
Titre : **Pas de score sans preuves.**
Colonne centrale, chaîne verticale :
```
QUESTION → RÉPONSE OBSERVÉE → OBSERVATION → SITE / PREUVES → CONSTAT → OPPORTUNITÉ
```
Message : *Chaque insight important peut être remonté à la réponse observée, au contenu du site et aux éléments qui ont conduit à la conclusion.*

### Section 7 — Historique et changements
Titre : **Votre visibilité n'est pas un chiffre isolé.**
2 colonnes : texte à gauche, timeline réelle à droite :
```
08 sept.   Mesure #11 — Score 64
10 sept.   Modification détectée — /pricing
12 sept.   Modification détectée — /
15 sept.   Mesure #12 — Score 68
```
Message : *Reflet surveille automatiquement votre site. Vous n'avez pas besoin de déclarer chaque modification.*

### Section 8 — Boucle de valeur
4 blocs horizontaux pleine largeur :
- **Voir** — ce que ChatGPT dit réellement
- **Comprendre** — pourquoi certaines marques apparaissent davantage
- **Agir** — quelles opportunités méritent votre attention
- **Vérifier** — ce qui a évolué à la mesure suivante

### Section 9 — Pricing
Carte centrée unique, toggle **Mensuel / Annuel** au-dessus. Mensuel affiche 75 €/mois.

### Section 10 — FAQ
Accordéon pleine largeur, colonne unique, max-width réduite pour la lisibilité :
- Qu'est-ce que Reflet mesure exactement ?
- Est-ce que Reflet utilise ChatGPT directement ?
- Pourquoi les réponses peuvent-elles varier ?
- Comment Reflet choisit-il les questions ?
- Est-ce que Reflet détecte les modifications de mon site ?
- Est-ce que je dois déclarer chaque modification ?
- Reflet garantit-il une position dans ChatGPT ?

### Section 11 — CTA final
Bande pleine largeur centrée, fond `surface-elevated` (pas de glow) :
- Titre : **Découvrez ce que ChatGPT dit de votre marque.**
- Sous-texte : *Analysez votre site, sélectionnez vos questions et obtenez votre première mesure.*
- CTA : **Analyser mon site**

### Footer
4 colonnes classiques (Produit / Ressources / Entreprise / Légal) + ligne de bas :
> © 2026 Reflet — Mesurer. Comprendre. Améliorer.

---

## 8. Utilisation des outils pendant la génération

Les deux outils installés en §4 (étapes 3-4) ont des rôles distincts pendant la génération — un pour construire, un pour corriger.

### 21st.dev (MCP)
Une fois connecté (§4, étape 4) : **rechercher et installer des composants ciblés** (ex : pricing table, faq accordion, stat counter animé) plutôt que de partir d'un template complet. Utilisation : recherche par composant/section au fur et à mesure de la génération, jamais un template global type "landing AI SaaS" pris tel quel (voir exclusions §9 — ne pas reproduire l'esthétique générique que 21st peut proposer par défaut).

### Impeccable (skill design + détecteur d'anti-patterns)
Une fois `/impeccable init` exécuté (§4, étape 3) : fait enregistrer le contexte produit (audience PME françaises, ton analytique sobre, contraintes de §2 ci-dessus) dans un `PRODUCT.md` de référence pour l'agent.

Séquence recommandée pour chaque section générée :
```
1. Génération de la section (contenu §7 + direction §2-§6)
2. /impeccable audit [nom de la section]     → repérer les anti-patterns IA générique
3. /impeccable normalize [nom de la section]  → corriger les incohérences de tokens
4. /impeccable polish [nom de la section]     → nettoyage final
```
Utiliser `/impeccable critique` en fin de parcours pour une revue complète de la landing, et `/impeccable redo [section]` en langage libre pour toute reprise ciblée.

Impeccable détecte nativement une bonne partie des anti-patterns déjà listés en §9 (gradients violet-bleu, Inter par défaut, cards imbriquées, icônes rounded-square au-dessus des titres, texte gris sur fond coloré, easing bounce/elastic) — s'y fier en complément de la relecture manuelle, pas à sa place.

---

## 9. Ce que ce prompt exclut explicitement

- Pas de wordmark/logo/mascotte empruntée à un produit existant
- Pas de gradient signature façon LaunchDarkly (violet→bleu, glow autour des inputs)
- Pas de constellation de particules façon Dala
- Pas de copy "AI-generic" façon templates AI SaaS par défaut (Vetra et similaires) — le ton reste factuel, jamais promotionnel-vague
- Aucune animation dont la seule fonction est d'impressionner

---

## 10. Livrable attendu

Génère la landing page complète (les 11 sections + nav + footer) en respectant strictement le contenu, la disposition et la direction artistique ci-dessus. Propose la palette d'accent (une seule couleur de marque) et le nom de la police retenue (Geist ou Inter) comme decision explicite en tête de réponse, avant le code.
