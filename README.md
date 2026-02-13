# LuxeStay - Plateforme de Voyage & Hôtellerie de Luxe

Cette plateforme a été conçue pour offrir une expérience utilisateur immersive et raffinée, reflétant les codes du "Quiet Luxury". L'architecture est bâtie sur Next.js 14, Tailwind CSS et Framer Motion pour garantir performance, esthétique et fluidité.

## Choix UX & Stratégie de Conversion (CRO)

### 1. Design System "Quiet Luxury"
- **Minimalisme Sophistiqué** : Utilisation généreuse d'espaces blancs et typographie élégante (`Playfair Display` pour les titres, `Inter` pour le corps).
- **Palette de Couleurs** : Tons neutres (Champagne, Anthracite, Off-white) pour évoquer l'exclusivité et la sérénité sans surcharger l'utilisateur.

### 2. Approche Mobile-First
- L'interface a été pensée pour les terminaux mobiles dès le départ. La barre de recherche et les cartes de destinations s'adaptent parfaitement aux petits écrans tout en conservant leur élégance.

### 3. Tunnel de Réservation Sans Friction
- **Sticky Search Bar** : La barre de recherche devient flottante au scroll, permettant à l'utilisateur d'initier une réservation à tout moment sans remonter en haut de page.
- **Micro-interactions** : Utilisation de Framer Motion pour des transitions fluides (fade-in, hover effects sur les cartes) qui augmentent l'engagement émotionnel.

### 4. Optimisation des Performances (Core Web Vitals)
- **LCP (Largest Contentful Paint)** : Utilisation du composant `next/image` avec l'attribut `priority` sur la Hero section pour un chargement instantané du visuel principal.
- **Lazy-loading** : Chargement différé des images de la galerie et des sections secondaires.

### 5. Preuve Sociale & Localisation
- Section de témoignages épurée pour renforcer la confiance.
- Intégration d'une interface de carte (Map) pour rassurer sur la qualité des emplacements.

## Architecture Technique

- `/app` : App Router pour une navigation rapide et SEO-friendly.
- `/components` : Architecture modulaire divisée en `ui`, `sections`, `layout` et `booking`.
- `/lib` : Utilitaires pour la gestion des classes Tailwind (`cn` helper).
- `/public` : Assets et ressources statiques.

## Accessibilité (WCAG 2.1)

- Contrastes respectant les normes.
- Utilisation de balises sémantiques HTML5.
- Labels ARIA sur tous les éléments interactifs (boutons, champs de recherche).
- Navigation au clavier optimisée.

## Installation & Lancement

```bash
npm install
npm run dev
```
