# ASDIC Guide de modification du contenu

Ce document explique **où et comment modifier les textes, chiffres, images et liens du site**, sans avoir besoin de comprendre le code des composants.

> 📁 Règle d'or : **tout ce qui est du contenu (texte, chiffres, images, liens) se trouve dans le dossier `src/data/`** (et dans `src/i18n.ts` pour les textes traduits FR/EN). Les fichiers dans `src/sections/` et `src/components/` ne contiennent que la mise en page vous n'avez normalement jamais besoin d'y toucher.

---

## 🗂️ Où se trouve chaque contenu

| Section du site | Fichier à modifier | Contient |
|---|---|---|
| Nom du site, texte du héros, footer | `src/data/site.ts` | Sigle "ASDIC", nom complet, localisation, description du footer |
| Slogan, boutons du héros, textes de sections, formulaire (FR + EN) | `src/i18n.ts` | Tous les textes traduits en français et en anglais |
| Bandeau de statistiques ("5 villages...") | `src/data/stats.ts` | Les 4 chiffres animés et leurs légendes |
| Chronologie ("Nos actions") | `src/data/timeline.ts` | Les événements par année, avec icône |
| Projets ("Projets futurs") | `src/data/projects.ts` | Titre, description, coût, % financé, image |
| Équipe ("Notre équipe") | `src/data/team.ts` | Nom, rôle, photo de chaque membre |
| Coordonnées | `src/data/contact.ts` | Adresse, téléphones, email |
| Réseaux sociaux + liens rapides du footer | `src/data/navigation.ts` | Facebook/Twitter/LinkedIn/Instagram (URLs) + liens du footer |
| Points de la navigation par points (à droite de l'écran) | `src/data/nav.ts` | Labels des points de navigation |
| Ancres des sections (`#about`, `#projects`, `#contact`) | `src/data/anchors.ts` | ⚠️ Ne pas modifier sauf si vous savez ce que vous faites (voir plus bas) |
| Réglages du carrousel (Projets / Équipe) | `src/config/swiper.ts` | Espacement, nombre de cartes visibles par taille d'écran |

---

## ✏️ Comment modifier chaque section

### 1. Identité du site `src/data/site.ts`
```ts
export const SITE = {
  acronym: 'ASDIC',                 // le gros mot affiché dans le héros
  fullName: 'Actions Solidaires...', // nom complet (visible en dessous du sigle)
  locationLabel: 'Agoè Togblé, Lomé — Togo',
  footerDescription: 'Ensemble pour un développement durable et solidaire.',
  copyright: 'Tous droits réservés.'
};
```

### 2. Textes traduits (FR/EN) `src/i18n.ts`
Le site gère deux langues. Chaque texte existe **deux fois** : une fois sous `fr:` et une fois sous `en:`. Si vous changez un texte en français, pensez à mettre à jour la version anglaise juste en dessous (bloc `en:`), sinon le site affichera l'ancien texte anglais.

```ts
fr: {
  heroTagline: 'Actions Solidaires pour le Développement des Initiatives Communautaires.',
  aboutTitleA: 'Ensemble pour un développement intégral',
  ...
},
en: {
  heroTagline: 'Solidary Actions for the Development of Community Initiatives.',
  aboutTitleA: 'Together for integral',
  ...
}
```

### 3. Statistiques `src/data/stats.ts`
```ts
export const STATS: Stat[] = [
  { value: 5, suffix: '', label: 'Villages équipés en eau potable' },
  { value: 1000, suffix: '+', label: 'Élèves soutenus en 2023' },
  ...
];
```
- `value` : le nombre (s'anime automatiquement à l'affichage)
- `suffix` : ce qui s'affiche après le nombre (`+`, `€`, `FCFA`, vide `''`, etc.)
- `label` : la légende sous le nombre

Vous pouvez ajouter ou supprimer des lignes ; le bandeau s'adapte automatiquement (jusqu'à 4 par rangée sur ordinateur).

### 4. Chronologie `src/data/timeline.ts`
```ts
export const TIMELINE: TimelineEntry[] = [
  {
    year: '2023',
    title: 'Distribution de fournitures scolaires',
    description: 'Plus de 1000 élèves équipés pour la rentrée',
    icon: GraduationCap
  },
  ...
];
```
- `year`, `title`, `description` : texte libre
- `icon` : le nom d'une icône importée en haut du fichier (`GraduationCap`, `Droplets`, `Sprout`). Pour changer une icône, allez sur **[lucide.dev/icons](https://lucide.dev/icons)**, trouvez une icône, ajoutez son nom dans l'import en haut du fichier :
  ```ts
  import { GraduationCap, Droplets, Sprout, Heart } from 'lucide-react';
  ```
  puis utilisez `icon: Heart` sur l'entrée voulue.

### 5. Projets `src/data/projects.ts`
```ts
export const PROJECTS: Project[] = [
  {
    title: "Construction d'une école",
    description: "Construction d'une école primaire dans la région rurale",
    cost: '150,000€',
    progress: 65,
    image: 'https://images.unsplash.com/photo-...'
  },
  ...
];
```
- `cost` : texte libre (ex. `'150,000€'`, `'98 000 000 FCFA'`) écrivez-le exactement comme vous voulez qu'il apparaisse.
- `progress` : un nombre de 0 à 100 (pourcentage financé, anime la barre de progression).
- `image` : lien direct vers une image. Vous pouvez utiliser une image d'[Unsplash](https://unsplash.com) (clic droit → copier l'adresse de l'image) ou héberger vos propres photos et coller le lien ici.

### 6. Équipe `src/data/team.ts`
```ts
export const TEAM: TeamMember[] = [
  { name: 'Kofi KODJO', role: 'Président', image: 'https://...' },
  ...
];
```
Même principe : `name`, `role`, `image`. Ajoutez/supprimez des membres en copiant/retirant des blocs.

### 7. Coordonnées `src/data/contact.ts`
```ts
export const CONTACT = {
  address: {
    district: 'Agoè Togblé, Fidokpui',
    postal: '05BP 961, Lomé Togo'
  },
  phones: ['+228 90 02 55 78', '+228 90 23 60 90'],
  email: 'asdic.asso@gmail.com'
};
```

### 8. Réseaux sociaux + liens du footer `src/data/navigation.ts`
```ts
export const SOCIALS: SocialLink[] = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Twitter', href: '#', icon: Twitter },
  ...
];
```
Remplacez chaque `href: '#'` par l'URL réelle de la page (ex. `href: 'https://facebook.com/asdic'`). Les liens rapides du footer ("À propos", "Projets", "Contact") sont générés automatiquement à partir des ancres (`src/data/anchors.ts`) et des traductions (`src/i18n.ts`) pas besoin d'y toucher pour changer leur texte, modifiez plutôt `navAbout` / `navProjects` / `navContact` dans `src/i18n.ts`.

### 9. Points de navigation `src/data/nav.ts`
```ts
export const NAV_DOTS: NavDot[] = [
  { id: 'hero', label: 'Accueil' },
  { id: ANCHORS.about, label: 'Mission' },
  ...
];
```
Ce sont les petits points cliquables affichés sur le côté de l'écran pour naviguer rapidement entre les sections. Modifiez uniquement les `label`.

---

## ⚠️ Fichiers à ne pas modifier (sauf besoin technique)

- **`src/data/anchors.ts`** : définit les identifiants internes (`#about`, `#projects`, `#contact`) utilisés par plusieurs sections en même temps. Si vous le changez, plusieurs liens du site peuvent casser en même temps.
- **`src/config/swiper.ts`** : réglages techniques du carrousel (nombre de cartes visibles selon la taille d'écran). À modifier seulement si vous voulez changer le comportement du carrousel lui-même.
- **`src/data/nav.ts`** *(NAV_DOTS)* utilise déjà `ANCHORS` pour rester synchronisé ne changez pas les `id`, seulement les `label`.

---

## 🖼️ À propos des images

Toutes les images (projets, équipe) sont actuellement des liens vers Unsplash. Pour utiliser vos propres photos :
1. Déposez vos images dans le dossier `public/` du projet.
2. Remplacez le lien `image: 'https://images.unsplash.com/...'` par `image: '/nom-de-votre-image.jpg'`.

---

## 🌓 Thème sombre / clair et langue FR/EN

Ces deux fonctionnalités (bouton lune/soleil et bouton FR/EN, en bas à droite de l'écran) fonctionnent automatiquement vous n'avez rien à configurer. Elles se basent uniquement sur les textes que vous éditez dans `src/i18n.ts` pour le contenu en anglais.

---
