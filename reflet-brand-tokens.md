# Reflet — Tokens de marque (référence unique)

> Ce fichier est la source de vérité pour la couleur d'accent et les tokens de marque. Tous les prompts de conception (`reflet-prompt-landing.md`, `reflet-prompt-auth.md`, `reflet-prompt-dashboard.md`) doivent le référencer plutôt que de redéfinir une couleur localement — pour éviter qu'un outil de génération choisisse une teinte différente d'un prompt à l'autre.

---

## Couleur d'accent — DÉCIDÉ

**Jaune soufre**

```css
--brand-fill: #c9ab1e;       /* fond des boutons/CTA principaux */
--brand-text-accent: #f2d94e; /* liens, texte d'emphase, valeurs positives */
--on-brand: #0b0b0b;          /* texte sur fond --brand-fill (noir, pas blanc — meilleur contraste sur jaune) */
```

### Règle d'usage — à respecter partout

Couleur volontairement peu commune pour un produit analytics B2B. Elle ne garde sa force que si elle reste rare :

- **Un seul CTA visible à la fois** par écran/section — jamais plusieurs boutons jaune soufre côte à côte
- Ne pas l'utiliser pour des surfaces larges (pas de bannière pleine largeur en jaune soufre)
- Réservée aux actions principales et aux valeurs/accents ponctuels (ex. une variation positive de score) — pas pour du texte courant ni des bordures décoratives

### Distinction avec le sémantique `warning`

`--brand-fill` (jaune soufre, action) et `--warning` (sémantique, alerte) doivent rester visuellement distincts pour éviter toute confusion entre "cliquez ici" et "attention, problème". `warning` doit être un ambre/orange plus terne, jamais la même teinte que l'accent de marque.

```css
--warning-fill: #b06b1c;   /* ambre/orange plus sourd que le brand */
--warning-text: #e0a15c;
```

---

## Neutrals (rappel — cohérent avec les 3 prompts existants)

```css
--surface-void: #000000;
--surface-1: #0b0b0b;
--surface-2: #111111;
--border: rgba(255,255,255,0.1);
--border-subtle: rgba(255,255,255,0.08);
--text-primary: #ffffff;
--text-secondary: #9a9a9a;
```

---

## Statut des autres décisions de marque

| Élément | Statut |
|---|---|
| Couleur d'accent | **DÉCIDÉ** — jaune soufre (ci-dessus) |
| Police principale | **DÉCIDÉ** — Geist (import via `@fontsource/geist` ou CDN Vercel) |
| Traitement typographique du panneau auth (DM Serif Display hérité de zap-v1 vs unification complète) | À trancher — voir §2 de `reflet-prompt-auth.md` |
| Couleurs `success` / `danger` / `info` | À définir avant génération du dashboard — non bloquant pour la landing |

Ce fichier doit être mis à jour dès qu'une de ces lignes passe à DÉCIDÉ, pour rester la référence unique.
