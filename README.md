# Reflet — Landing Page

> Mesurer votre visibilité dans ChatGPT

## 🎯 Contexte

Reflet est un système de mesure, d'analyse et de suivi de la visibilité d'une marque dans les réponses générées par ChatGPT. C'est un "Search Console pour les réponses IA" qui explique pourquoi une marque apparaît ou non, et vérifie l'évolution dans le temps.

**Boucle produit :** VOIR → COMPRENDRE → AGIR → VÉRIFIER

**Cible :** PME françaises, produit B2B analytique.

## 🎨 Design System

### Direction artistique

**Instrument de mesure analytique — sobre, précis, premium, crédible.**

Références : Linear (navigation/densité), Vercel (sobriété), Stripe (structuration de données), PostHog (logique analytics).

### Design Tokens

- **Typographie :** Geist (décidé — voir reflet-brand-tokens.md)
- **Couleur d'accent :** Jaune soufre `#c9ab1e` / accent texte `#f2d94e` (décidé — voir reflet-brand-tokens.md)
- **Palette :** Noir profond (`#0b0b0b` surface-1 / `#111111` surface-2)
- **Radius :** Échelle modérée (6px → 16px), pas de style "pill"
- **Spacing :** Échelle courte (4/8/12/16/20/24/32/40/48/64)

### Anti-patterns évités

❌ Gradients décoratifs omniprésents  
❌ Glows lumineux / néons gratuits  
❌ Illustrations abstraites sans rôle produit  
❌ Style "pill" (radius 30px+)  
❌ Animations purement décoratives  
❌ Copy "AI-generic" promotionnel-vague

## 🛠️ Stack Technique

```
TanStack Start (routing par fichiers)
  ↓
Tailwind CSS
  ↓
shadcn/ui + Radix UI
  ↓
Framer Motion
  ↓
Heroicons (pas d'emojis)
```

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Installer Impeccable (audit design)
npx impeccable install

# Démarrer le dev server
npm run dev
```

Le site sera disponible sur `http://localhost:3000`

## 🏗️ Structure du Projet

```
reflet/
├── app/
│   ├── routes/
│   │   ├── __root.tsx       # Layout racine
│   │   └── index.tsx         # Landing page assemblée
│   └── styles/
│       └── globals.css       # Variables CSS + Tailwind
├── components/
│   ├── ui/                   # Composants atomiques
│   │   ├── section-wrapper.tsx
│   │   ├── section-title.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   └── grid.tsx
│   ├── sections/             # Sections de la landing
│   │   ├── hero.tsx
│   │   ├── problem.tsx
│   │   ├── how-it-works.tsx
│   │   ├── question-engine.tsx
│   │   ├── what-we-measure.tsx
│   │   ├── evidence.tsx
│   │   ├── history.tsx
│   │   ├── value-loop.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   └── final-cta.tsx
│   ├── navigation.tsx        # Navigation sticky
│   └── footer.tsx            # Footer 4 colonnes
├── PRODUCT.md                # Contexte produit (Impeccable)
├── PLAN_IMPLEMENTATION.md    # Plan complet d'implémentation
└── package.json
```

## 📄 Sections de la Landing Page

1. **Navigation** — Sticky avec dropdowns Produit/Ressources
2. **Hero** — Badge + H1 + sous-texte + 2 CTAs + composant produit mock
3. **Le problème** — 3 colonnes (Invisible / Mal positionnée / Mal comprise)
4. **Fonctionnement** — Schéma vertical en 7 étapes
5. **Question Engine** — Contraste entre bonnes/mauvaises questions
6. **Ce que Reflet mesure** — 4 métriques (Présence / Recommandation / Position / Concurrence)
7. **Preuves** — Chaîne verticale (Question → Réponse → Opportunité)
8. **Historique** — Timeline avec événements
9. **Boucle de valeur** — 4 blocs (Voir / Comprendre / Agir / Vérifier)
10. **Pricing** — Carte unique + toggle Mensuel/Annuel
11. **FAQ** — Accordéon avec 7 questions
12. **CTA final** — Bande pleine largeur
13. **Footer** — 4 colonnes + ligne de bas

## 🎬 Animations

Toutes les animations utilisent Framer Motion avec des patterns purposeful :

- **Stagger** — Sur les listes de cards (fade-up progressif)
- **Fade + slide-up** — Pour les sections au scroll
- **Reveal progressif** — Pour les chaînes/timelines
- **Smooth transitions** — Pour les interactions (toggle, accordion)

Easing : `[0.16, 1, 0.3, 1]` (expo-out naturel, pas de bounce/elastic)

`prefers-reduced-motion` respecté sur toutes les animations.

## 🔍 Audit Design avec Impeccable

Après avoir installé Impeccable, utiliser les commandes :

```bash
# Audit complet
/impeccable audit

# Normaliser les tokens
/impeccable normalize

# Polish final
/impeccable polish

# Critique UX experte
/impeccable critique
```

## 📝 Scripts Disponibles

```bash
npm run dev        # Dev server (Vinxi)
npm run build      # Build production
npm start          # Start production server
npm run preview    # Preview du build
```

## 🚀 Build Production

```bash
# Créer le build
npm run build

# Vérifier le build
npm run preview
```

Le build génère une application optimisée avec :
- SSR complet via TanStack Start
- Tree-shaking Tailwind (classes inutilisées supprimées)
- Code splitting automatique
- Optimisation des assets

## ✅ Critères de Succès

### Fonctionnels
- ✅ Page complète assemblée (13 sections + navigation + footer)
- ✅ Responsive (Mobile 375px / Tablet 768px / Desktop 1280px+)
- ✅ Navigation sticky avec dropdowns animés
- ✅ Toutes les animations fonctionnelles
- ✅ Build production réussi

### Qualité
- ✅ Audit Impeccable passé (aucun anti-pattern)
- ✅ Design system cohérent (tokens utilisés partout)
- ✅ Accessibilité (Contraste WCAG AA, navigation clavier, ARIA)
- ✅ Performance (Lighthouse > 90)
- ✅ TypeScript (aucune erreur de type)

### Direction Artistique
- ✅ Sobre, précis, premium, crédible
- ✅ Pas de gradients décoratifs
- ✅ Pas de glows/néons gratuits
- ✅ Pas d'illustrations abstraites
- ✅ Hiérarchie claire
- ✅ Geist font partout

## 📚 Documentation

- [Plan d'implémentation complet](./PLAN_IMPLEMENTATION.md)
- [Contexte produit](./PRODUCT.md)
- [TanStack Start](https://tanstack.com/router/latest/docs/framework/react/start/getting-started)
- [Framer Motion](https://www.framer.com/motion/)
- [Heroicons](https://heroicons.com/)

## 📄 Licence

Propriétaire — © 2026 Reflet
