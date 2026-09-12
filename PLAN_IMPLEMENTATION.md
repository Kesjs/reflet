# Plan d'implémentation — Landing Page Reflet

> **Version :** 1.0  
> **Date :** 12 septembre 2026  
> **Décisions de design :** Typographie Geist · Accent Cyan `#06b6d4` · Palette noir profond style Vercel

---

## Table des matières

1. [Contexte produit](#1-contexte-produit)
2. [Stack technique](#2-stack-technique)
3. [Design tokens (décidés)](#3-design-tokens-décidés)
4. [Architecture de la landing page](#4-architecture-de-la-landing-page)
5. [Outils et workflows](#5-outils-et-workflows)
6. [Tasks détaillées](#6-tasks-détaillées)
7. [Critères de succès](#7-critères-de-succès)

---

## 1. Contexte produit

### Qu'est-ce que Reflet ?

Reflet est un système de mesure, d'analyse et de suivi de la visibilité d'une marque dans les réponses générées par ChatGPT. C'est un "Search Console pour les réponses IA" qui explique pourquoi une marque apparaît ou non, et vérifie l'évolution dans le temps.

**Boucle produit :** VOIR → COMPRENDRE → AGIR → VÉRIFIER

**Cible :** PME françaises, produit B2B analytique.

### Direction artistique

**Instrument de mesure analytique — sobre, précis, premium, crédible.**

#### Références d'inspiration
- **Linear** — navigation, densité, hiérarchie, dark-first
- **Vercel** — sobriété, surfaces neutres, borders fines, couleur parcimonieuse
- **Stripe** — structuration des données, métriques, tableaux, graphiques
- **PostHog** — logique analytics, monitoring, exploration de données

#### Anti-patterns à éviter explicitement

❌ **Esthétique "AI flashy" générique**
- Gradients décoratifs omniprésents (violet→bleu)
- Glows lumineux autour des boutons/inputs
- Néons gratuits, effets de halo
- Illustrations abstraites sans rôle produit
- Accumulation artificielle de cartes
- Style "pill" (radius 30px+)
- Animations purement décoratives
- Copy "AI-generic" promotionnel-vague

#### Principe de construction

```
HIÉRARCHIE → DONNÉES → CONTEXTE → PREUVE → ACTION
```

Le design organise l'espace pour que l'information importante ait une hiérarchie claire — il ne remplit pas l'espace pour faire joli.

---

## 2. Stack technique

### Frontend/app

```
TanStack Start (routing par fichiers)
  ↓
Tailwind CSS
  ↓
shadcn/ui + Radix UI
  ↓
Framer Motion
  ↓
Composants 21st.dev (sélectionnés au cas par cas)
```

Chaque bibliothèque a un rôle précis ; pas de doublons non justifiés.

### Installation complète

```bash
# 1. Projet TanStack Start
npx create-tsrouter-app@latest reflet --template file-router --tailwind
cd reflet

# 2. UI Stack
pnpm dlx shadcn@latest init -t start
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs @radix-ui/react-accordion
npm install framer-motion
npm i geist

# 3. Impeccable (skill design + audit anti-patterns)
npx impeccable install

# 4. MCP 21st.dev (configuration fournie)
```

---

## 3. Design tokens (décidés)

### Typographie

**Police principale :** Geist (Vercel)

**Raison :** Font propriétaire Vercel, excellente lisibilité en petite taille (crucial pour les métriques/tableaux), chiffres très nets, distinction claire entre les niveaux hiérarchiques. Plus "premium" qu'Inter tout en restant sobre.

**Échelle typographique :**

```css
--text-display:  clamp(3rem, 5vw, 4.5rem);       /* Hero titles */
--text-h1:       clamp(2.25rem, 4vw, 3rem);      /* Section titles */
--text-h2:       clamp(1.875rem, 3vw, 2.25rem);  /* Subsection titles */
--text-h3:       clamp(1.5rem, 2.5vw, 1.875rem); /* Card titles */
--text-body:     1rem;                            /* Body text */
--text-small:    0.875rem;                        /* Small text */
--text-caption:  0.75rem;                         /* Captions, metadata */
--text-metric:   clamp(2rem, 3vw, 3rem);         /* Data metrics */
```

### Couleur d'accent

**Brand :** Cyan analytique `#06b6d4` (Tailwind cyan-500)

**Raison :**
- Évite le bleu trop standard des SaaS génériques
- Suffisamment froid pour rester analytique et crédible
- Se distingue visuellement de Linear (violet) et Vercel (noir/blanc)
- Fonctionne bien en dark mode avec parcimonie
- Connotation "mesure, précision, clarté" sans tomber dans le cliché "AI bleu électrique"

### Palette neutre — Noir profond Vercel-style

```css
/* Dark Theme Only */
--background:        #0a0a0a;  /* Canvas principal */
--surface:           #171717;  /* Cards, panels */
--surface-elevated:  #262626;  /* Modales, dropdowns */
--border:            #2a2a2a;  /* Borders subtiles */
--border-hover:      #404040;  /* États interactifs */

--text-primary:      #fafafa;  /* Titres, labels importants */
--text-secondary:    #a3a3a3;  /* Body, descriptions */
--text-muted:        #737373;  /* Annotations, metadata */
```

### Couleurs sémantiques

```css
--brand:             #06b6d4;  /* Cyan-500 */
--brand-hover:       #0891b2;  /* Cyan-600 */
--success:           #10b981;  /* Green-500 */
--warning:           #f59e0b;  /* Amber-500 */
--danger:            #ef4444;  /* Red-500 */
--info:              #3b82f6;  /* Blue-500 */
```

### Spacing

Échelle courte (multiples de 4) :

```css
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  20px;
--space-6:  24px;
--space-8:  32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
```

### Border Radius

Échelle modérée, **pas de style "pill"** :

```css
--radius-sm:  6px;   /* inputs, tags, badges */
--radius-md:  8px;   /* boutons, petits composants */
--radius-lg:  12px;  /* cards, panneaux */
--radius-xl:  16px;  /* grandes surfaces, modales */
```

---

## 4. Architecture de la landing page

### Structure complète (13 sections)

#### Navigation
```
REFLET     Produit ▾   Ressources ▾   Tarifs     Connexion   [Commencer]
```

**Dropdowns :**
- **Produit :** Vue d'ensemble / Visibilité IA / Questions et mesures / Preuves et opportunités / Historique du site
- **Ressources :** Blog / Guides / Études / Glossaire

**Features :**
- Sticky en scroll avec background blur
- Animation d'ouverture : fade + slide-down

---

#### Section 1 — Hero

**Layout :** 2 colonnes asymétriques (55% texte / 45% visuel)

**Contenu :**
- Badge : **Visibilité IA**
- H1 : **Voyez comment votre marque apparaît dans ChatGPT.**
- Sous-texte : *Reflet pose les questions que vos prospects pourraient réellement poser, analyse les réponses générées par ChatGPT et vous montre où votre marque apparaît, qui apparaît à sa place et ce qui peut être amélioré.*
- CTA principal : **Analyser mon site**
- CTA secondaire : **Voir le produit**
- Réassurance : *1 site · jusqu'à 30 questions · mesure continue*

**Visuel :** Composant produit réel (score + mention/recommandation/position + une réponse observée avec plusieurs marques). Pas d'illustration abstraite.

**Animation :** Titre stagger par mot, preview slide-up avec delay

---

#### Section 2 — Le problème

**Layout :** 3 colonnes égales (→2→1 en mobile)

**Contenu :**
- **Titre :** Votre site sait ce que vous vendez. ChatGPT, lui, peut en dire autre chose.
- **Colonne 1 :** Invisible — votre marque n'apparaît pas dans les recommandations pertinentes
- **Colonne 2 :** Mal positionnée — elle apparaît derrière d'autres solutions
- **Colonne 3 :** Mal comprise — votre site exprime une offre claire, mais les réponses observées ne la reflètent pas correctement
- **Conclusion centrée :** *Reflet mesure cet écart au lieu de vous demander de le deviner.*

**Animation :** Stagger sur les 3 cards (fade-up)

---

#### Section 3 — Fonctionnement

**Layout :** Colonne unique centrée, schéma vertical

**Contenu :** Schéma en étapes (pas de gradient décoratif)

```
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

**Phrase clé :** **Vous choisissez les questions. Reflet s'occupe du reste.**

**Animation :** Reveal progressif des étapes avec stagger (scroll-triggered)

---

#### Section 4 — Question Engine

**Layout :** 2 colonnes (texte 50% / composant 50%)

**Contenu :**
- **Titre :** Les bonnes questions avant les bonnes réponses.
- **Visuel :** Liste de questions avec contraste :
  ```
  ✕ « Parlez-moi de SIKKA »
  ✓ « Quel logiciel de facturation recommander à un artisan au Bénin ? »
  ```

**Animation :** Fade-up

---

#### Section 5 — Ce que Reflet mesure

**Layout :** Grille 4 colonnes (→2→1 en mobile)

**Contenu :** Card pour chaque métrique
- **Présence** — Votre marque est-elle mentionnée ?
- **Recommandation** — Est-elle proposée comme solution ?
- **Position** — Où apparaît-elle lorsqu'une liste est générée ?
- **Concurrence** — Qui apparaît à sa place ou plus fréquemment ?

**Animation :** Fade-up stagger

---

#### Section 6 — Preuves

**Layout :** Colonne centrale, chaîne verticale

**Contenu :** Chaîne de preuves avec connecteur visuel

```
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

**Message :** *Chaque insight important peut être remonté à la réponse observée, au contenu du site et aux éléments qui ont conduit à la conclusion.*

**Animation :** Reveal progressif au scroll

---

#### Section 7 — Historique et changements

**Layout :** 2 colonnes (texte 50% / timeline 50%)

**Contenu :**
- **Titre :** Votre visibilité n'est pas un chiffre isolé.
- **Timeline :** 
  ```
  08 sept.   Mesure #11 — Score 64
  10 sept.   Modification détectée — /pricing
  12 sept.   Modification détectée — /
  15 sept.   Mesure #12 — Score 68
  ```
- **Message :** *Reflet surveille automatiquement votre site. Vous n'avez pas besoin de déclarer chaque modification.*

**Source composant :** Rechercher un composant timeline sur 21st.dev

**Animation :** Items apparaissent progressivement

---

#### Section 8 — Boucle de valeur

**Layout :** 4 blocs horizontaux pleine largeur

**Contenu :**
- **Voir** — ce que ChatGPT dit réellement
- **Comprendre** — pourquoi certaines marques apparaissent davantage
- **Agir** — quelles opportunités méritent votre attention
- **Vérifier** — ce qui a évolué à la mesure suivante

**Animation :** Fade-up

---

#### Section 9 — Pricing

**Layout :** Carte centrée unique

**Contenu :**
- Toggle **Mensuel / Annuel** au-dessus
- Mensuel affiche **75 €/mois**

**Source composant :** Rechercher un composant pricing sur 21st.dev

**Animation :** Smooth toggle avec Framer Motion

---

#### Section 10 — FAQ

**Layout :** Accordéon pleine largeur, colonne unique, max-width réduite

**Contenu :** 7 questions
- Qu'est-ce que Reflet mesure exactement ?
- Est-ce que Reflet utilise ChatGPT directement ?
- Pourquoi les réponses peuvent-elles varier ?
- Comment Reflet choisit-il les questions ?
- Est-ce que Reflet détecte les modifications de mon site ?
- Est-ce que je dois déclarer chaque modification ?
- Reflet garantit-il une position dans ChatGPT ?

**Source composant :** Rechercher un composant FAQ accordion sur 21st.dev

**Animation :** Ouverture accordion smooth

---

#### Section 11 — CTA final

**Layout :** Bande pleine largeur centrée

**Contenu :**
- Fond `surface-elevated` (pas de glow)
- **Titre :** Découvrez ce que ChatGPT dit de votre marque.
- **Sous-texte :** *Analysez votre site, sélectionnez vos questions et obtenez votre première mesure.*
- **CTA :** Analyser mon site

**Animation :** Fade-in

---

#### Footer

**Layout :** 4 colonnes classiques (Produit / Ressources / Entreprise / Légal)

**Ligne de bas :**
> © 2026 Reflet — Mesurer. Comprendre. Améliorer.

---

## 5. Outils et workflows

### 21st.dev MCP

**Configuration fournie :**

```json
{  
  "mcpServers": {  
    "21st": {  
      "url": "https://21st.dev/api/mcp",  
      "headers": {  
        "x-api-key": "21st_sk_411f37c64b707e2210641fc41970d22c274dd9aefe549aadded559d4074ff689"  
      }  
    }  
  }  
}
```

**Usage :** Rechercher et installer des composants ciblés (pricing table, FAQ accordion, timeline, stat counter) plutôt qu'un template complet.

**⚠️ Attention :** Ne pas reproduire l'esthétique générique "AI SaaS" que 21st peut proposer par défaut. Adapter les composants pour respecter la direction artistique de Reflet.

---

### Impeccable — Skill design + détecteur d'anti-patterns

#### Installation

```bash
npx impeccable install
```

#### Commandes principales

| Commande | Usage | Quand l'utiliser |
|----------|-------|------------------|
| `/impeccable init` | Setup initial — crée `PRODUCT.md` | Première fois sur le projet |
| `/impeccable audit` | Détecte les anti-patterns (AI slop, a11y, performance) | Après génération de chaque section |
| `/impeccable normalize` | Aligne avec le design system (tokens, spacing, typography) | Après audit, pour corriger les incohérences |
| `/impeccable polish` | Nettoyage final (alignment, spacing, micro-détails) | Avant de considérer une section terminée |
| `/impeccable critique` | Feedback UX expert (hiérarchie, cohérence, émotions) | Sur la page complète assemblée |
| `/impeccable typeset` | Vérifie la hiérarchie typographique | Si problèmes de lisibilité détectés |
| `/impeccable colorize` | Ajoute de la couleur stratégique | Si la page est trop monochrome |
| `/impeccable distill` | Simplifie et retire la complexité | Si accumulation de contenu |
| `/impeccable animate` | Ajoute des animations purposeful | Après polish, si besoin de motion |

#### Workflow recommandé pour chaque section

```
1. Génération de la section (contenu + direction artistique)
2. /impeccable audit [section]       → repérer les anti-patterns
3. /impeccable normalize [section]   → corriger les incohérences de tokens
4. /impeccable polish [section]      → nettoyage final
```

En fin de parcours :
```
5. /impeccable critique              → revue complète de la landing
6. /impeccable redo [section]        → reprise ciblée si nécessaire
```

#### Ce qu'Impeccable détecte automatiquement

- Gradients violet-bleu
- Inter par défaut (on veut Geist)
- Cards imbriquées
- Icônes rounded-square au-dessus des titres
- Texte gris sur fond coloré
- Easing bounce/elastic
- Copy AI-generic ("seamless", "robust", "empower", etc.)

#### PRODUCT.md — Référence de contexte

Impeccable crée un `PRODUCT.md` qui documente :
- Audience (PME françaises)
- Ton (analytique, sobre, crédible)
- Contraintes de design (§2 anti-patterns)
- Platform (web)
- Mode (Persuade pour la landing, Operate pour l'app)

Ce fichier sert de référence persistante pour toutes les générations futures.

---

### Framer Motion — Patterns d'animation

#### Stagger sur listes

```jsx
const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
}

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
}

<motion.ul variants={list} initial="hidden" whileInView="visible">
  <motion.li variants={item} />
  <motion.li variants={item} />
  <motion.li variants={item} />
</motion.ul>
```

#### Fade + slide-up

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
>
  {/* Contenu */}
</motion.div>
```

#### Number counting (pour métriques/scores)

```jsx
import { useMotionValue, useSpring, useTransform } from "framer-motion"

const count = useMotionValue(0)
const rounded = useTransform(count, Math.round)
const spring = useSpring(count, { stiffness: 100, damping: 30 })
```

---

## 6. Tasks détaillées

### Task 1: Initialisation du projet TanStack Start + Stack UI

**Objectif :** Créer le projet de base avec toute la stack technique configurée.

**Actions :**
1. Créer le projet TanStack Start :
   ```bash
   npx create-tsrouter-app@latest reflet --template file-router --tailwind
   cd reflet
   ```

2. Installer shadcn/ui + Radix UI :
   ```bash
   pnpm dlx shadcn@latest init -t start
   npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs @radix-ui/react-accordion
   ```

3. Installer Framer Motion et Geist :
   ```bash
   npm install framer-motion
   npm i geist
   ```

4. Configurer Tailwind avec les design tokens :
   - Éditer `tailwind.config.ts` pour ajouter les tokens (couleurs, spacing, radius)
   - Configurer Geist comme font principale

5. Créer `app/styles/globals.css` avec les variables CSS

6. Vérifier le dev server :
   ```bash
   npm run dev
   ```

**Critère de succès :**
- ✅ Dev server démarre sans erreur
- ✅ Page blanche avec Geist font active
- ✅ Tailwind tokens disponibles (tester avec `bg-brand` dans un div)

---

### Task 2: Installation et configuration Impeccable + 21st.dev MCP

**Objectif :** Installer les outils de qualité et de sourcing de composants.

**Actions :**
1. Installer Impeccable :
   ```bash
   npx impeccable install
   ```

2. Exécuter l'initialisation :
   ```
   /impeccable init
   ```

3. Renseigner `PRODUCT.md` avec :
   - **Audience :** PME françaises
   - **Platform :** web
   - **Mode :** Persuade (landing page)
   - **Ton :** Analytique, sobre, premium, crédible
   - **Anti-patterns à éviter :** (copier la liste du §2)

4. Créer `.mcp.json` à la racine avec la configuration fournie

5. Vérifier la connexion MCP :
   ```
   /mcp
   ```
   → Doit lister `21st` comme connecté

6. Ajouter `.mcp.json` au `.gitignore`

**Critère de succès :**
- ✅ Impeccable initialisé (`PRODUCT.md` existe)
- ✅ MCP 21st.dev connecté et fonctionnel
- ✅ `/impeccable audit` fonctionne (tester sur un fichier vide)

---

### Task 3: Design system — Composants atomiques

**Objectif :** Créer les composants de base réutilisables.

**Composants à créer :**

1. **`components/ui/section-wrapper.tsx`**
   - Container responsive avec max-width
   - Padding cohérent (px-6 md:px-8)
   - Max-width : 1280px

2. **`components/ui/section-title.tsx`**
   - Variants : H1, H2, H3
   - Typography scale respectée
   - Color : text-primary

3. **`components/ui/badge.tsx`**
   - Petit label avec brand color
   - Radius-sm, padding cohérent
   - Variants : default, outline

4. **`components/ui/card.tsx`**
   - Surface avec border
   - Radius-lg
   - Padding cohérent (p-6)

5. **`components/ui/button.tsx`**
   - Variants : primary (brand), secondary (outline)
   - States : hover, focus, disabled
   - Radius-md

6. **`components/ui/grid.tsx`**
   - Layout responsive
   - Variants : cols-2, cols-3, cols-4
   - Gap cohérent (gap-6)

**Après chaque composant :**
```
/impeccable audit components/ui/[composant].tsx
```

**Critère de succès :**
- ✅ Tous les composants créés et typés (TypeScript)
- ✅ Audit Impeccable passé pour chaque composant
- ✅ Page de test affichant tous les composants avec variants

---

### Task 4: Navigation + Footer

**Objectif :** Créer la navigation sticky et le footer.

**Navigation (`components/navigation.tsx`) :**
- Logo "REFLET" à gauche
- Dropdowns "Produit" et "Ressources" (Radix `DropdownMenu`)
- Liens "Tarifs" et "Connexion"
- CTA "Commencer" (bouton primary)
- Sticky en scroll avec `backdrop-blur-md`
- Animation d'ouverture dropdown : fade + slide-down (Framer Motion)

**Footer (`components/footer.tsx`) :**
- 4 colonnes : Produit / Ressources / Entreprise / Légal
- Responsive : 4→2→1 colonnes
- Ligne de bas : `© 2026 Reflet — Mesurer. Comprendre. Améliorer.`

**Audit :**
```
/impeccable audit components/navigation.tsx
/impeccable audit components/footer.tsx
```

**Critère de succès :**
- ✅ Navigation sticky fonctionnelle
- ✅ Dropdowns animés (fade + slide-down)
- ✅ Footer responsive
- ✅ Audit Impeccable passé

---

### Task 5: Section Hero

**Objectif :** Créer la section hero avec layout 2 colonnes.

**Fichier :** `components/sections/hero.tsx`

**Structure :**
- Layout 2 colonnes : 55% texte / 45% visuel (stack vertical en mobile)
- Badge "Visibilité IA" animé (fade-in)
- H1 : "Voyez comment votre marque apparaît dans ChatGPT."
- Sous-texte (text-secondary, max-width réduite)
- 2 CTAs : "Analyser mon site" (primary) + "Voir le produit" (secondary)
- Ligne de réassurance : "1 site · jusqu'à 30 questions · mesure continue"
- Visuel : composant produit mock (score + mention + réponse observée)

**Animation :**
- Titre stagger par mot (Framer Motion `staggerChildren`)
- Preview slide-up avec delay

**Workflow :**
```
1. Créer la section
2. /impeccable audit components/sections/hero.tsx
3. /impeccable normalize components/sections/hero.tsx
4. /impeccable polish components/sections/hero.tsx
```

**Critère de succès :**
- ✅ Hero complet, responsive
- ✅ Animation orchestrée (titre stagger + preview slide-up)
- ✅ Audit/normalize/polish Impeccable passés

---

### Task 6: Section Le problème (3 colonnes)

**Objectif :** Créer la section problème avec grille 3 colonnes.

**Fichier :** `components/sections/problem.tsx`

**Structure :**
- Titre : "Votre site sait ce que vous vendez. ChatGPT, lui, peut en dire autre chose."
- Grid 3 colonnes (→2→1 en mobile)
- 3 cards :
  1. **Invisible** — votre marque n'apparaît pas dans les recommandations pertinentes
  2. **Mal positionnée** — elle apparaît derrière d'autres solutions
  3. **Mal comprise** — votre site exprime une offre claire, mais les réponses observées ne la reflètent pas correctement
- Conclusion centrée sous les cards : "Reflet mesure cet écart au lieu de vous demander de le deviner."

**Animation :**
- Stagger sur les 3 cards (fade-up)

**Workflow :**
```
1. Créer la section
2. /impeccable audit components/sections/problem.tsx
3. /impeccable normalize components/sections/problem.tsx
4. /impeccable polish components/sections/problem.tsx
```

**Critère de succès :**
- ✅ Section problème responsive
- ✅ Animation stagger fonctionnelle
- ✅ Audit/normalize/polish Impeccable passés

---

### Task 7: Section Fonctionnement (schéma vertical)

**Objectif :** Créer le schéma vertical en étapes.

**Fichier :** `components/sections/how-it-works.tsx`

**Structure :**
- Colonne unique centrée
- Schéma vertical avec ligne connectrice (pas de gradient décoratif)
- Étapes :
  1. Votre site
  2. Reflet comprend votre marque
  3. Reflet construit vos questions
  4. ChatGPT est interrogé
  5. Les réponses sont analysées
  6. Score + preuves + opportunités
  7. Évolution dans le temps
- Phrase clé centrée en bas : "Vous choisissez les questions. Reflet s'occupe du reste."

**Animation :**
- Reveal progressif des étapes avec stagger (scroll-triggered avec `whileInView`)

**Workflow :**
```
1. Créer la section
2. /impeccable audit components/sections/how-it-works.tsx
3. /impeccable normalize components/sections/how-it-works.tsx
4. /impeccable polish components/sections/how-it-works.tsx
```

**Critère de succès :**
- ✅ Schéma animé au scroll
- ✅ Ligne de connexion progressive
- ✅ Audit/normalize/polish Impeccable passés

---

### Task 8: Section Question Engine + Ce que Reflet mesure

**Objectif :** Créer 2 sections complémentaires.

#### Section Question Engine

**Fichier :** `components/sections/question-engine.tsx`

**Structure :**
- 2 colonnes : texte 50% / composant 50%
- Titre : "Les bonnes questions avant les bonnes réponses."
- Liste de questions avec contraste visuel :
  ```
  ✕ « Parlez-moi de SIKKA »
  ✓ « Quel logiciel de facturation recommander à un artisan au Bénin ? »
  ```

#### Section Ce que Reflet mesure

**Fichier :** `components/sections/what-we-measure.tsx`

**Structure :**
- Grille 4 colonnes (→2→1 en mobile)
- 4 cards :
  1. **Présence** — Votre marque est-elle mentionnée ?
  2. **Recommandation** — Est-elle proposée comme solution ?
  3. **Position** — Où apparaît-elle lorsqu'une liste est générée ?
  4. **Concurrence** — Qui apparaît à sa place ou plus fréquemment ?

**Animation :**
- Fade-up stagger sur les cards

**Workflow :**
```
1. Créer les 2 sections
2. /impeccable audit components/sections/question-engine.tsx
3. /impeccable audit components/sections/what-we-measure.tsx
4. /impeccable normalize (×2)
5. /impeccable polish (×2)
```

**Critère de succès :**
- ✅ 2 sections fonctionnelles et animées
- ✅ Responsive
- ✅ Audit/normalize/polish Impeccable passés

---

### Task 9: Section Preuves (chaîne verticale)

**Objectif :** Créer la chaîne de preuves verticale.

**Fichier :** `components/sections/evidence.tsx`

**Structure :**
- Colonne centrale
- Chaîne verticale avec connecteur :
  ```
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
- Message explicatif en bas : "Chaque insight important peut être remonté à la réponse observée, au contenu du site et aux éléments qui ont conduit à la conclusion."

**Animation :**
- Reveal progressif au scroll (stagger sur les items)

**Workflow :**
```
1. Créer la section
2. /impeccable audit components/sections/evidence.tsx
3. /impeccable normalize components/sections/evidence.tsx
4. /impeccable polish components/sections/evidence.tsx
```

**Critère de succès :**
- ✅ Chaîne de preuves animée
- ✅ Visuel dérivé d'un vrai composant (pas d'illustration abstraite)
- ✅ Audit/normalize/polish Impeccable passés

---

### Task 10: Section Historique + Boucle de valeur

**Objectif :** Créer 2 sections complémentaires.

#### Section Historique

**Fichier :** `components/sections/history.tsx`

**Structure :**
- 2 colonnes : texte 50% / timeline 50%
- Titre : "Votre visibilité n'est pas un chiffre isolé."
- Timeline réelle à droite :
  ```
  08 sept.   Mesure #11 — Score 64
  10 sept.   Modification détectée — /pricing
  12 sept.   Modification détectée — /
  15 sept.   Mesure #12 — Score 68
  ```
- Message : "Reflet surveille automatiquement votre site. Vous n'avez pas besoin de déclarer chaque modification."

**Source composant :**
```
Rechercher sur 21st.dev : timeline vertical component
```

#### Section Boucle de valeur

**Fichier :** `components/sections/value-loop.tsx`

**Structure :**
- 4 blocs horizontaux pleine largeur
- Blocs :
  1. **Voir** — ce que ChatGPT dit réellement
  2. **Comprendre** — pourquoi certaines marques apparaissent davantage
  3. **Agir** — quelles opportunités méritent votre attention
  4. **Vérifier** — ce qui a évolué à la mesure suivante

**Animation :**
- Timeline : items apparaissent progressivement
- Boucle : fade-up

**Workflow :**
```
1. Rechercher composant timeline sur 21st.dev
2. Créer les 2 sections
3. /impeccable audit (×2)
4. /impeccable normalize (×2)
5. /impeccable polish (×2)
```

**Critère de succès :**
- ✅ Timeline fonctionnelle
- ✅ Boucle de valeur claire
- ✅ Audit/normalize/polish Impeccable passés

---

### Task 11: Section Pricing + FAQ

**Objectif :** Créer les sections pricing et FAQ avec composants 21st.dev.

#### Section Pricing

**Fichier :** `components/sections/pricing.tsx`

**Structure :**
- Carte centrée unique
- Toggle Mensuel/Annuel au-dessus
- Mensuel affiche **75 €/mois**

**Source composant :**
```
Rechercher sur 21st.dev : pricing table with toggle
```

#### Section FAQ

**Fichier :** `components/sections/faq.tsx`

**Structure :**
- Accordéon pleine largeur, colonne unique
- Max-width réduite pour lisibilité
- 7 questions :
  1. Qu'est-ce que Reflet mesure exactement ?
  2. Est-ce que Reflet utilise ChatGPT directement ?
  3. Pourquoi les réponses peuvent-elles varier ?
  4. Comment Reflet choisit-il les questions ?
  5. Est-ce que Reflet détecte les modifications de mon site ?
  6. Est-ce que je dois déclarer chaque modification ?
  7. Reflet garantit-il une position dans ChatGPT ?

**Source composant :**
```
Rechercher sur 21st.dev : FAQ accordion
```

**Animation :**
- Pricing : smooth toggle avec Framer Motion
- FAQ : ouverture accordion smooth

**Workflow :**
```
1. Rechercher composants sur 21st.dev
2. Adapter les composants à notre design system
3. Créer les 2 sections
4. /impeccable audit (×2)
5. /impeccable normalize (×2)
6. /impeccable polish (×2)
```

**Critère de succès :**
- ✅ Pricing avec toggle fonctionnel
- ✅ FAQ avec accordéon animé
- ✅ Composants adaptés au design system Reflet
- ✅ Audit/normalize/polish Impeccable passés

---

### Task 12: Section CTA final + Assembly de la page

**Objectif :** Créer le CTA final et assembler toutes les sections.

#### Section CTA final

**Fichier :** `components/sections/final-cta.tsx`

**Structure :**
- Bande pleine largeur centrée
- Fond `surface-elevated` (pas de glow)
- Titre : "Découvrez ce que ChatGPT dit de votre marque."
- Sous-texte : "Analysez votre site, sélectionnez vos questions et obtenez votre première mesure."
- CTA : "Analyser mon site"

**Animation :**
- Fade-in

#### Assembly

**Fichier :** `app/routes/index.tsx`

**Structure :**
```tsx
import Navigation from '@/components/navigation'
import Hero from '@/components/sections/hero'
import Problem from '@/components/sections/problem'
// ... tous les imports

export default function LandingPage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <QuestionEngine />
        <WhatWeMeasure />
        <Evidence />
        <History />
        <ValueLoop />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
```

**Workflow :**
```
1. Créer le CTA final
2. Assembler toutes les sections dans index.tsx
3. Vérifier le scroll fluide
4. /impeccable audit app/routes/index.tsx
```

**Critère de succès :**
- ✅ Page complète assemblée
- ✅ Navigation fluide entre sections
- ✅ Toutes les sections visibles et fonctionnelles
- ✅ Scroll fluide

---

### Task 13: Audit Impeccable complet + Polish

**Objectif :** Passer l'audit final et polir la page complète.

**Workflow :**

1. **Critique complète :**
   ```
   /impeccable critique
   ```
   → Feedback UX expert sur la page entière

2. **Corriger les anti-patterns détectés :**
   - Gradients décoratifs
   - Glows lumineux
   - Inter par défaut (remplacer par Geist)
   - Copy AI-generic
   - Etc.

3. **Normaliser :**
   ```
   /impeccable normalize
   ```
   → Cohérence des tokens (couleurs, spacing, typography)

4. **Polish final :**
   ```
   /impeccable polish
   ```
   → Alignment, spacing, micro-détails

5. **Vérifications accessibilité :**
   - Contraste (WCAG AA minimum)
   - Navigation clavier
   - ARIA labels
   - Alt text sur images
   - Focus states

6. **Vérifications responsivité :**
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1280px+)

7. **Vérifications animations :**
   - Pas de janky
   - 60fps minimum
   - `prefers-reduced-motion` respecté

**Commandes supplémentaires si nécessaire :**
```
/impeccable typeset       # Si problèmes de hiérarchie typo
/impeccable colorize      # Si trop monochrome
/impeccable distill       # Si accumulation de contenu
/impeccable animate       # Si besoin d'animation supplémentaire
```

**Critère de succès :**
- ✅ Audit Impeccable passé (aucun anti-pattern détecté)
- ✅ Page responsive sur mobile/tablet/desktop
- ✅ Accessibilité validée (contraste, navigation clavier, ARIA)
- ✅ Animations fluides (60fps, pas de janky)

---

### Task 14: Optimisations performance + Build production

**Objectif :** Optimiser la page et créer le build de production.

**Actions :**

1. **Lazy-loading des sections :**
   ```tsx
   import { lazy, Suspense } from 'react'
   
   const Hero = lazy(() => import('@/components/sections/hero'))
   // ... autres sections
   
   <Suspense fallback={<div>Loading...</div>}>
     <Hero />
   </Suspense>
   ```

2. **Optimiser les images (si présentes) :**
   - Formats modernes (WebP, AVIF)
   - Compression
   - Lazy loading

3. **Vérifier la taille du bundle :**
   ```bash
   npm run build
   ```
   → Analyser les chunks générés

4. **Build production :**
   ```bash
   npm run build
   ```
   → Vérifier qu'il n'y a pas d'erreurs TypeScript
   → Vérifier que Tailwind purge les classes inutilisées

5. **Tester le build en local :**
   ```bash
   npm run preview
   ```
   → Vérifier que tout fonctionne en mode production

6. **Optimisation Impeccable (optionnel) :**
   ```
   /impeccable optimize
   ```
   → Suggestions d'optimisation performance

**Critère de succès :**
- ✅ Build production réussi (pas d'erreurs)
- ✅ Page fonctionne en mode production
- ✅ Bundle optimisé (taille raisonnable)
- ✅ Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)

---

## 7. Critères de succès

### Critères fonctionnels

- ✅ **Page complète assemblée** — 13 sections + navigation + footer
- ✅ **Responsive** — Mobile (375px) / Tablet (768px) / Desktop (1280px+)
- ✅ **Navigation fonctionnelle** — Sticky, dropdowns animés
- ✅ **Toutes les animations** — Fade-up, stagger, scroll-triggered
- ✅ **Build production** — Réussi, bundle optimisé

### Critères de qualité

- ✅ **Audit Impeccable passé** — Aucun anti-pattern détecté
- ✅ **Design system cohérent** — Tous les tokens utilisés (pas de couleurs en dur)
- ✅ **Accessibilité** — Contraste WCAG AA, navigation clavier, ARIA labels
- ✅ **Performance** — Lighthouse score > 90 sur tous les critères
- ✅ **TypeScript** — Aucune erreur de type

### Critères de direction artistique

- ✅ **Sobre, précis, premium, crédible** — Pas d'esthétique "AI flashy"
- ✅ **Pas de gradients décoratifs** — Couleur parcimonieuse (accent cyan uniquement)
- ✅ **Pas de glows/néons gratuits** — Effets visuels purposeful uniquement
- ✅ **Pas d'illustrations abstraites** — Visuels dérivés de vrais composants Reflet
- ✅ **Hiérarchie claire** — Information importante facilement identifiable
- ✅ **Geist font** — Utilisée partout (pas d'Inter par défaut)

### Critères d'animation

- ✅ **60fps minimum** — Aucune animation janky
- ✅ **purposeful** — Chaque animation a un rôle (pas de décoration gratuite)
- ✅ **prefers-reduced-motion** — Respecté
- ✅ **Stagger cohérent** — Délais entre 0.1s et 0.15s
- ✅ **Easing naturel** — expo/quint, pas de bounce/elastic

---

## Ressources

### Documentation

- [TanStack Start](https://tanstack.com/router/latest/docs/framework/react/start/getting-started)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Geist Font](https://vercel.com/font)
- [21st.dev](https://21st.dev)
- [Impeccable](https://github.com/pbakaus/impeccable)

### Design

- [Linear](https://linear.app) — Référence navigation/densité
- [Vercel](https://vercel.com) — Référence sobriété
- [Stripe](https://stripe.com) — Référence structuration de données
- [PostHog](https://posthog.com) — Référence analytics

---

## Notes finales

### Ordre d'exécution recommandé

```
1. Tasks 1-2 : Setup complet (projet + outils)
2. Task 3 : Design system (composants atomiques)
3. Task 4 : Navigation + Footer
4. Tasks 5-11 : Sections (Hero → CTA final)
5. Task 12 : Assembly
6. Task 13 : Audit + Polish
7. Task 14 : Performance + Build
```

### Points d'attention

- **Ne jamais coder en dur les couleurs** — Toujours utiliser les tokens Tailwind
- **Toujours auditer après chaque section** — `/impeccable audit` → `/impeccable normalize` → `/impeccable polish`
- **Adapter les composants 21st.dev** — Ne pas les utiliser tels quels, les adapter au design system Reflet
- **Tester en responsive** — Mobile-first, tester chaque section sur mobile/tablet/desktop
- **Respecter la direction artistique** — Sobre, analytique, pas de décoration gratuite

### Maintenance

Une fois la landing page livrée :
- Exécuter `/impeccable audit` après chaque modification
- Vérifier le Lighthouse score régulièrement
- Maintenir le `PRODUCT.md` à jour si changement de direction

---

**Version du plan :** 1.0  
**Date de création :** 12 septembre 2026  
**Dernière mise à jour :** 12 septembre 2026
