# Prompt de conception — Dashboard Reflet

> Complète `reflet-prompt-landing.md` et `reflet-prompt-auth.md`. Référence obligatoire : `reflet-brand-tokens.md` (couleur d'accent jaune soufre — ne pas en redéfinir une autre). Compilé à partir du master doc Reflet V2.1, §36C (direction visuelle partagée) et §36D (architecture UX du dashboard).

---

## 1. Contexte

Le dashboard est l'application elle-même (pas la landing marketing) : c'est là que l'utilisateur connecté consulte son score de visibilité, ses concurrents, ses opportunités et l'historique de son site. Contrairement à la landing, ici la priorité absolue est la **lisibilité des données**, pas la persuasion.

Stack : TanStack Start (identique à landing/auth — voir §4 de `reflet-prompt-landing.md`, ne pas réinstaller).
Thème : **dark mode uniquement** (§36C.3 — pas de variante light dans le MVP).

---

## 2. Direction visuelle — rappel non négociable

Identique à la landing (§2-§3 de `reflet-prompt-landing.md`) :
- Instrument analytique sobre, inspiration Linear/Vercel/Stripe/PostHog
- Radius modérés (6/8/12/16px, pas de pill)
- Couleur d'accent jaune soufre (`reflet-brand-tokens.md`), un seul CTA visible à la fois
- Aucune animation décorative qui ralentit l'analyse (§36C.10)

Différence avec la landing : ici, **la densité d'information prime sur la respiration visuelle**. Le dashboard peut et doit exploiter pleinement la largeur desktop disponible pour les graphiques et tableaux.

---

## 3. Navigation interne

Sidebar avec intitulés simples, jamais de jargon technique interne :

```
Accueil
Performance
Concurrents
Opportunités
Historique
────────────
Paramètres
```

**Ne jamais faire apparaître** dans la navigation : `Run`, `Measurement Engine`, `Change Detection`, `Observation` — ce sont des concepts internes, pas des concepts utilisateur.

---

## 4. Page Accueil — cockpit

Objectif : comprendre l'état du produit sans ouvrir plusieurs pages.

### Disposition (grille)
```
┌─────────────────────────────────────────────────────────┐
│ Score actuel                    Graphique d'évolution    │
├──────────┬──────────┬──────────┬────────────────────────┤
│ Mention  │ Reco.    │ Position │ Présence concurrente   │
├──────────┴──────────┴──────────┴────────────────────────┤
│ Opportunités                    Activité récente         │
├─────────────────────────────────────────────────────────┤
│ Performance des questions                                │
├─────────────────────────────┬───────────────────────────┤
│ Concurrents                  │ Surveillance du site       │
├─────────────────────────────┴───────────────────────────┤
│ Dernière mesure / prochaine mesure                       │
└─────────────────────────────────────────────────────────┘
```

### Hero de l'accueil
Gauche :
```
Bonjour, [marque]

Visibilité IA
68 / 100
↑ +4 depuis la dernière mesure

Dernière mesure : 15 septembre
```
Droite : graphique principal, sélecteur `7 jours / 30 jours / 3 mois`.

### Métriques secondaires (4 KPI cards)
Mentions · Recommandations · Position moyenne · Présence concurrentielle

### Bloc Attention
- opportunités importantes
- changements importants détectés
- mesures récemment terminées
- anomalies éventuelles

### Bloc Surveillance
- statut du site
- nombre de pages suivies
- dernière vérification
- derniers changements détectés

---

## 5. Page Performance

Objectif : comprendre où et pourquoi la visibilité évolue.

Contenu :
- score et variation (rappel en haut de page)
- graphique principal avec sélecteur d'indicateur (mention / recommandation / position / citation)
- tableau des questions suivies :

| Question | Mention | Recommandation | Position |
|---|---:|---:|---:|
| … | … | … | … |

- une ligne ouverte dans un **drawer** (pas une nouvelle page) montre : réponses observées, concurrents détectés, position, historique de la question, preuves pertinentes

---

## 6. Page Concurrents

Objectif : comprendre quelles marques apparaissent dans les réponses observées.

Contenu :
- graphique de comparaison (barres ou lignes multi-séries)
- tableau des concurrents : mentions, recommandations, position moyenne, couverture
- contextes où ils apparaissent (extraits)
- action : masquer un concurrent non pertinent

Formulation à respecter dans l'UI (cohérent §21 du master doc) : *"Dans les réponses observées sur vos requêtes, [Concurrent] apparaît plus fréquemment que vous"* — jamais *"[Concurrent] est le numéro 1 du marché"* (Reflet ne mesure que son propre protocole, pas le marché entier).

---

## 7. Page Opportunités

Objectif : transformer les observations en actions compréhensibles.

Chaque **opportunity card** contient :
- titre
- priorité (low/medium/high)
- confiance
- nombre d'observations
- questions concernées
- pourquoi l'opportunité existe
- ce que le site contient actuellement
- direction proposée
- preuves

Le détail ouvre l'**Evidence Chain**, présentée comme une chaîne verticale cliquable :
```
Question → Réponse observée → Observation → Concurrent → Site → Écart → Recommandation
```

États possibles d'une opportunité : `open`, `resolved`, `dismissed`, `no_longer_observed` — visibles comme statut, pas supprimés silencieusement.

---

## 8. Page Historique

Timeline unique combinant mesures + modifications du site + événements importants.

Filtres : `Tout | Mesures | Modifications`

Chaque entrée "modification" affiche : page, date, méthode de détection, avant/après, type de changement, importance, confiance, lien vers une mesure ultérieure si elle existe.

**Règle absolue (§13 du master doc)** : même un changement classé "faible importance" reste visible dans l'historique — ne jamais le masquer silencieusement. Un changement faible s'affiche simplement avec moins d'emphase visuelle (pas de badge d'alerte), pas en étant absent.

---

## 9. Page Paramètres

Organisation classique en sous-sections :
```
Compte
Site
Questions
Notifications
Abonnement
Sécurité
```
Pas de page principale dédiée aux notifications dans la nav (§36D.7) — elles vivent en couche transversale (voir §10).

---

## 10. Notifications, toasts, historique — distinction stricte

Trois canaux différents pour trois durées de vie différentes :

```
ACTION IMMÉDIATE                        → TOAST (disparaît automatiquement)
ÉVÉNEMENT QUI PEUT NÉCESSITER ATTENTION  → NOTIFICATION (centre d'alertes)
ÉVÉNEMENT À CONSERVER DANS LE TEMPS      → HISTORIQUE (permanent)
```

Un même événement peut produire les trois représentations à la fois (ex. modification importante détectée → toast au moment T, notification dans le centre d'alertes, entrée permanente dans l'historique).

### Règles toasts (§36D.9)
- Un toast de succès n'apparaît que si l'opération a réellement réussi
- Messages courts, explicites, orientés action
- Erreurs importantes : durée d'affichage plus longue ou état persistant
- Toasts non critiques : disparition automatique
- Événements identiques groupés pour éviter le bruit
- Accessible clavier + lecteurs d'écran

Types : `success` / `info` / `warning` / `error` — utiliser les tokens sémantiques de `reflet-brand-tokens.md`, jamais la couleur d'accent de marque pour un toast.

---

## 11. Graphiques et data visualisation (§36C.8)

Graphiques prévus pour le MVP :
- courbe d'évolution du score
- évolution des mentions / recommandations
- position moyenne
- comparaison des concurrents
- couverture des questions
- timeline des événements

**Chaque graphique doit obligatoirement prévoir** :
- titre explicite
- période affichée
- unités
- légende si nécessaire
- tooltip utile
- état sans donnée (`no data`)
- état de chargement (`loading`)
- indication visuelle claire si la donnée est **partielle** (ex. mesure à 28/30 questions) — ne jamais afficher un résultat partiel comme s'il était définitif

---

## 12. Cards et surfaces (§36C.7)

Types de cards à disposition, chacune avec un rôle précis :
- **KPI card** — un chiffre + variation (mentions, recommandations...)
- **Analytics card** — contient un graphique
- **Opportunity card** — voir §7
- **Activity card** — flux d'événements récents
- **Evidence card** — un élément de preuve dans l'Evidence Chain
- **System/status card** — statut du site, de la mesure, du monitoring

Règle : une carte regroupe une idée ; elle n'existe pas juste pour remplir une grille.

---

## 13. États obligatoires (§36D.10)

Chaque page doit gérer explicitement, et jamais supposer que tout fonctionne :
```
Loading · Analyzing · Measuring · Partial · Success
No data · No change · No opportunity · Failed · Unavailable · Stale
```

Exemple de distinction à respecter : *"Aucun changement détecté"* (Reflet a vérifié, rien n'a changé) **n'est pas équivalent** à *"Reflet n'a pas encore vérifié le site"* (absence de donnée). Deux états visuels différents, jamais confondus.

---

## 14. Utilisation des outils (déjà installés)

Impeccable et le MCP 21st sont déjà installés et connectés (voir §4 de `reflet-prompt-landing.md`) — ne pas les réinstaller. Même séquence que pour la landing :

```
1. Génération de la page/section
2. /impeccable audit [nom de la page]
3. /impeccable normalize [nom de la page]
4. /impeccable polish [nom de la page]
```

Pour les composants de data viz complexes (graphiques multi-séries, drawers), rechercher via le MCP 21st avant de coder from scratch — mais rester dans la direction sobre du §2, ne pas reprendre un style de graphique "AI SaaS" par défaut.

---

## 15. Séquence de génération recommandée

```
1. Vérifier Impeccable + MCP 21st actifs
2. Layout global : sidebar + zone de contenu
3. Page Accueil (§4) — la plus complexe, sert de référence pour les cards/graphiques
4. Page Performance (§5)
5. Page Concurrents (§6)
6. Page Opportunités (§7)
7. Page Historique (§8)
8. Page Paramètres (§9)
9. Système de toasts/notifications transversal (§10)
10. /impeccable critique (revue complète du dashboard)
```

---

## 16. Livrable attendu

Génère le dashboard complet (sidebar + 6 pages) en respectant strictement le contenu, la disposition, les états obligatoires et la direction artistique ci-dessus. Utiliser exclusivement la couleur d'accent fixée dans `reflet-brand-tokens.md` — ne pas en proposer une nouvelle.
