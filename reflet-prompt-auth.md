# Prompt de conception — Pages Auth Reflet

> Adapté de la disposition et du design du repo `Kesjs/zap-v1` (Next.js), transposé aux conventions **TanStack Start** conformément à la décision §29.3 du master doc Reflet. La logique fonctionnelle et le design visuel sont conservés à l'identique ; seule la couche routing/framework change.

---

## 1. Ce qui est repris à l'identique (design + comportement)

- Layout **split écran** : grid `lg:grid-cols-[1.02fr_0.98fr]`, panneau visuel à gauche (desktop) / en bas (mobile), panneau formulaire à droite (desktop) / en haut (mobile).
- Fond noir plein (`bg-black`), cards à `rounded-xl`, bordures `border-white/10`.
- Le **fond animé du panneau gauche** : shader `GrainGradient` (voir §3).
- Le **logo qui morphe en bouton retour** au survol (voir §4).
- Le flow d'auth complet : **OTP par défaut + option mot de passe**, inscription simplifiée, mot de passe oublié, reset password (voir §5).
- L'**OTP input animé** avec shake d'erreur et pulse de succès (voir §6).
- Typographies : **DM Sans** (texte courant), **DM Serif Display** (titre du panneau gauche), **Space Grotesk** (wordmark).

## 2. Ce qui change (adaptation TanStack)

| Next.js (zap-v1) | TanStack Start (Reflet) |
|---|---|
| `next/navigation` (`useRouter`, `useSearchParams`) | `useNavigate()` / `useSearch()` du router TanStack |
| `next/link` | `<Link>` de `@tanstack/react-router` |
| `next/image` | `<img>` natif ou composant image du starter TanStack (pas d'optimisation Next Image) |
| `next/dynamic(..., { ssr: false })` pour le shader | Chargement client-only équivalent : `lazy()` + garde de montage (`useEffect` + état `mounted`), ou tout mécanisme "render on client only" fourni par TanStack Start |
| `app/login/page.tsx`, `app/reset-password/page.tsx` | Routes fichiers TanStack : `routes/login.tsx`, `routes/reset-password.tsx` (adapter au conventions exactes du starter TanStack utilisé) |
| `"use client"` | Non applicable (pas de RSC en TanStack Start) — mais garder la distinction logique "ce composant a besoin du navigateur" pour le shader |

Le reste (appels Supabase, Framer Motion, Sonner pour les toasts, la logique métier) ne change pas : c'est du React standard, indépendant du framework de routing.

## 3. Fond animé — GrainGradient Shader

Package : `@paper-design/shaders-react`

```tsx
import { GrainGradient } from "@paper-design/shaders-react";

<GrainGradient
  speed={0.75}
  scale={1}
  rotation={0}
  offsetX={0}
  offsetY={0}
  softness={0.55}
  intensity={0.5}
  noise={0.22}
  shape="corners"
  colors={["#FFFFFF", "#71717A", "#27272A", "#FFFFFF"]}
  colorBack="#00000000"
  className="absolute inset-0 bg-black"
/>
```

Installation :
```bash
npm install @paper-design/shaders-react
```

- **Chargé uniquement côté client** (WebGL ne peut pas render côté serveur). En TanStack, encapsuler dans un composant qui ne monte le shader qu'après le premier render client (`useEffect` pour basculer un état `mounted`, fallback `<div className="absolute inset-0 bg-black" />` avant montage).
- **Overlay obligatoire par-dessus** pour garder le texte lisible :
```tsx
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60" aria-hidden="true" />
```
- Adapter les 4 couleurs (`colors`) à la palette Reflet définie dans le prompt landing (§3 de `reflet-prompt-landing.md`) plutôt que de garder le blanc/gris de zap-v1 tel quel — cohérence de marque.

### Contenu du panneau gauche (par-dessus le shader + overlay)
```
[Titre grande taille, DM Serif Display]
[Sous-texte, DM Sans, ton factuel Reflet — pas la value prop de zap-v1]
```
Exemple à adapter avec le contenu Reflet (cf. §36B.3 du master doc pour le ton) plutôt que reprendre "Vos devis & factures, tamponnés en 2 min."

## 4. Logo animé "morph vers bouton retour"

Comportement exact à reproduire :
- Au repos : flèche gauche discrète (`text-zinc-400`) + texte "Retour"
- Au survol : le texte "Retour" disparaît (fade + slide -3px), remplacé par le logo Reflet + wordmark (fade + scale spring depuis 0.85), la flèche glisse de -3px vers la gauche

```tsx
<motion.div
  animate={{ x: isBackHovered ? -3 : 0 }}
  transition={{ type: "spring", stiffness: 400, damping: 25 }}
>
  <ArrowLeftIcon className="w-4 h-4" />
</motion.div>

<AnimatePresence mode="wait" initial={false}>
  {!isBackHovered ? (
    <motion.span
      key="text"
      initial={{ opacity: 0, y: 3 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -3 }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
    >
      Retour
    </motion.span>
  ) : (
    <motion.div
      key="logo"
      initial={{ opacity: 0, scale: 0.85, y: 3 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -3 }}
      transition={{ type: "spring", stiffness: 450, damping: 25 }}
    >
      {/* logo + wordmark Reflet */}
    </motion.div>
  )}
</AnimatePresence>
```
Remplacer `/log.jpg` + "ZAP" par le logo et wordmark Reflet.

## 5. Flow d'authentification

### Écran Connexion (par défaut, méthode OTP)
1. Champ email → bouton **"Se connecter"** (envoie le code OTP, libellé simplifié — pas "Recevoir mon code")
2. Lien "Vous préférez un mot de passe ? → Utiliser mot de passe" (bascule vers formulaire email + password)
3. Lien "Pas encore de compte ? → Créer un compte"
4. Bouton Google OAuth au-dessus (séparateur "ou")

### Étape code OTP (après envoi)
- Rappel de l'email avec lien "Modifier"
- Input OTP 6 chiffres (voir §6) — validation automatique dès que les 6 chiffres sont saisis
- Timer de renvoi 30s (`Renvoyer dans 00:XX` → passe à "Renvoyer le code" cliquable à 0)
- Lien retour vers méthode mot de passe

### Écran Inscription
- Champ email uniquement → envoie un code de confirmation (même mécanisme OTP), puis redirige vers l'étape code
- Message réassurance adapté au produit Reflet (zap-v1 disait "8 devis & factures offerts" — remplacer par l'équivalent Reflet, ex. essai/format à définir)

### Écran Mot de passe oublié
- Champ email → `supabase.auth.resetPasswordForEmail(email, { redirectTo: .../auth/callback?next=/reset-password })`
- Toast de confirmation, retour à l'écran login

### Page Reset Password (après clic sur le lien email)
- Nouveau mot de passe + confirmation → `supabase.auth.updateUser({ password })`
- Gestion du cas lien expiré/invalide : message clair + bouton "Demander un nouveau lien" vers `/login?tab=forgot`
- Redirection vers `/dashboard` après succès

### Comportement transverse
- Toasts (Sonner) pour chaque état : succès, erreur, rate-limit Supabase (message spécifique si quota d'emails atteint), erreur réseau
- Navbar globale : masquée sur `/login`, `/reset-password`, `/dashboard` ; affiche "Tableau de bord" si session active sinon "Connexion"/"Inscription"
- Bouton Google OAuth : `supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: .../auth/callback } })`

## 6. Input OTP animé

Composant custom (pas le shadcn `InputOTP` par défaut) — 6 inputs individuels avec :
- **Auto-avance** au focus suivant après chaque chiffre saisi
- **Backspace** recule au champ précédent si le champ courant est vide
- **Flèches gauche/droite** pour naviguer
- **Paste** : distribue automatiquement les chiffres collés sur tous les champs
- **Shake horizontal** sur erreur : `x: [-8, 8, -6, 6, -3, 3, 0]`, durée 0.4s, easeInOut
- **Pulse séquentiel vert** sur succès : chaque champ passe `scale: [1, 1.05, 1]` + bordure vers `#4ADE80`, avec un délai `index * 0.08s` (effet de vague de gauche à droite)
- Style : `44px × 52px`, police DM Serif Display 22px, bordure `1.5px`, coins `8px`

Adapter la couleur de succès (`#4ADE80`) à la palette sémantique Reflet (`success`) si elle diffère.

## 7. Pages légales à créer

- `/mentions-legales`
- `/confidentialite`
- `/cgu`

Contenu à adapter à Reflet (structure juridique, éditeur) — placeholders à faire relire par un juriste avant mise en prod, comme noté dans le repo source.

## 8. Installation — packages à ajouter au projet TanStack existant

(en complément de l'installation de base couverte dans `reflet-prompt-landing.md` §4)

```bash
npm install @paper-design/shaders-react
npm install framer-motion
npm install sonner
npm install @heroicons/react
npx shadcn@latest add input-otp   # optionnel si on garde le composant custom OtpInput plutôt que celui de shadcn
```

Le projet doit déjà avoir Impeccable installé et le MCP 21st connecté (§4 de `reflet-prompt-landing.md`) — ne pas les réinstaller, juste vérifier qu'ils sont bien actifs dans ce contexte de page avant de générer.

## 9. Direction visuelle — rappel

Cette page reste soumise à la direction générale du §2/§3 de `reflet-prompt-landing.md` (instrument analytique sobre, radius modérés 6-16px, palette Reflet) — le shader et les animations décrites ici sont les **seules exceptions explicitement voulues** à l'esthétique "sobre" par défaut, parce qu'elles reproduisent un composant déjà validé et voulu tel quel, pas une improvisation du générateur.

## 10. Séquence de génération recommandée pour l'agent

```
1. Vérifier Impeccable + MCP 21st actifs (déjà installés via reflet-prompt-landing.md)
2. Installer les packages §8
3. Créer le composant GrainGradientShader (client-only) — §3
4. Créer le composant OtpInput animé — §6
5. Créer la route /login avec le layout split + logo morphing — §1, §4
6. Implémenter les 4 modes (login OTP, login password, register, forgot) — §5
7. Créer la route /reset-password — §5
8. Créer les 3 pages légales — §7
9. /impeccable audit login
10. /impeccable polish login
```
