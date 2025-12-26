# React Component Library

Une librairie de composants React réutilisable, responsive et documentée avec Storybook. Conçue pour fonctionner sur web et mobile.

## Installation

```bash
pnpm install
```

## Scripts disponibles

- `pnpm storybook` - Lance Storybook en mode développement (port 6006)
- `pnpm build-storybook` - Construit Storybook pour la production
- `pnpm build` - Compile TypeScript et SCSS vers le dossier `dist`
- `pnpm test` - Lance les tests (à configurer)

## Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Button/
│   ├── Card/
│   └── index.ts        # Export centralisé
├── hooks/              # Hooks React personnalisés
│   ├── useMediaQuery.ts
│   └── index.ts
├── styles/             # Styles globaux et variables SCSS
│   ├── variables.scss
│   ├── responsive.scss
│   └── globals.scss
└── index.ts            # Point d'entrée principal
```

## Composants disponibles

### Button

Bouton réutilisable avec plusieurs variantes et tailles.

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `loading`: boolean
- `disabled`: boolean

**Exemple:**
```tsx
import { Button } from 'react-library';

export default function App() {
  return <Button variant="primary">Click me</Button>;
}
```

### Card

Conteneur de contenu avec plusieurs styles et options.

**Props:**
- `variant`: 'default' | 'outlined' | 'elevated'
- `padding`: 'sm' | 'md' | 'lg'
- `hoverable`: boolean

**Exemple:**
```tsx
import { Card } from 'react-library';

export default function App() {
  return (
    <Card variant="default" hoverable>
      <h3>Mon contenu</h3>
      <p>Description</p>
    </Card>
  );
}
```

## Hooks

### useMediaQuery

Hook pour détecter les changements de media queries.

```tsx
import { useMediaQuery } from 'react-library';

export default function Component() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}
```

### useIsMobile, useIsTablet, useIsDesktop

Hooks prédéfinis pour les breakpoints courants.

```tsx
import { useIsMobile, useIsDesktop } from 'react-library';

export default function Component() {
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();
  
  return (
    <div>
      {isMobile && <MobileLayout />}
      {isDesktop && <DesktopLayout />}
    </div>
  );
}
```

## Utilisation dans d'autres projets

### Installation via npm/pnpm

```bash
pnpm add react-library
```

### Import des composants

```tsx
import { Button, Card } from 'react-library';
import { useIsMobile } from 'react-library';

export default function App() {
  const isMobile = useIsMobile();
  
  return (
    <Card variant="default" padding={isMobile ? 'sm' : 'lg'}>
      <Button variant="primary" fullWidth={isMobile}>
        Bouton responsive
      </Button>
    </Card>
  );
}
```

## Breakpoints

- **Mobile**: < 640px
- **Tablet**: 641px - 1024px
- **Desktop**: > 1024px

## Styles SCSS

Les variables SCSS sont disponibles pour personnaliser les composants:

```scss
@import 'react-library/dist/styles/variables.scss';

.custom-component {
  color: $primary;
  padding: $spacing-md;
  border-radius: $radius-lg;
}
```

## Développement

1. Créer un nouveau composant dans `src/components/`
2. Créer les fichiers `.tsx`, `.scss` et `.stories.tsx`
3. Exporter le composant dans `src/components/index.ts`
4. Lancer Storybook pour tester: `pnpm storybook`
5. Documenter avec des stories Storybook

## License

MIT
