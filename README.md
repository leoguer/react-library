# React Component Library

Une librairie de composants React minimaliste et moderne, stylisée avec **Tailwind CSS**. Conçue pour être légère, flexible et facile à personnaliser.

## 🎨 Design Philosophy

- **Minimaliste** : Design épuré sans surcharge visuelle
- **Moderne** : Animations fluides et transitions subtiles
- **Accessible** : Focus rings et support clavier
- **Responsive** : Hooks media queries intégrés
- **Flexible** : Tailwind CSS pour la personnalisation

## Installation

```bash
pnpm install
```

## Scripts disponibles

- `pnpm storybook` - Lance Storybook en mode développement (port 6006 ou 6008)
- `pnpm build-storybook` - Construit Storybook pour la production
- `pnpm build` - Compile TypeScript et génère les bundles (ESM + CJS)
- `pnpm dev` - Lance le serveur de développement Vite

## Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Button/
│   ├── Card/
│   ├── Input/
│   ├── Badge/
│   ├── Spinner/
│   └── index.ts
├── hooks/              # Hooks React personnalisés
│   ├── useMediaQuery.ts
│   └── index.ts
├── styles/
│   └── globals.css     # Styles Tailwind CSS
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
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary" size="lg">Large Secondary</Button>
      <Button variant="success" loading>Loading...</Button>
    </>
  );
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
    <Card variant="elevated" padding="lg" hoverable>
      <h3>Titre</h3>
      <p>Contenu de la card</p>
    </Card>
  );
}
```

### Input

Champ de saisie avec support des labels, erreurs et texte d'aide.

**Props:**
- `label`: string
- `error`: string
- `helperText`: string
- `fullWidth`: boolean
- Tous les attributs HTML input standard

**Exemple:**
```tsx
import { Input } from 'react-library';

export default function App() {
  return (
    <Input
      label="Email"
      type="email"
      placeholder="your@email.com"
      helperText="We'll never share your email"
    />
  );
}
```

### Badge

Badge pour afficher des statuts, tags ou labels.

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
- `size`: 'sm' | 'md'

**Exemple:**
```tsx
import { Badge } from 'react-library';

export default function App() {
  return (
    <>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning" size="sm">Pending</Badge>
    </>
  );
}
```

### Spinner

Indicateur de chargement animé.

**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `color`: 'primary' | 'neutral'

**Exemple:**
```tsx
import { Spinner } from 'react-library';

export default function App() {
  return <Spinner size="md" color="primary" />;
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

## Tailwind CSS

Cette librairie utilise **Tailwind CSS v3** pour le styling. Les composants sont entièrement stylisés avec des classes Tailwind.

### Personnalisation

Vous pouvez personnaliser les composants en passant des classes Tailwind supplémentaires via la prop `className`:

```tsx
import { Button } from 'react-library';

export default function App() {
  return (
    <Button 
      variant="primary" 
      className="shadow-lg hover:shadow-xl"
    >
      Custom Button
    </Button>
  );
}
```

### Couleurs utilisées

- **Primary**: Sky (sky-500, sky-600, sky-700)
- **Success**: Emerald (emerald-500, emerald-600, emerald-700)
- **Warning**: Amber (amber-500, amber-600, amber-700)
- **Error**: Red (red-500, red-600, red-700)
- **Neutral**: Gray (gray-200, gray-300, gray-400, gray-500, gray-700)

## Utilisation dans d'autres projets

### Installation via npm/pnpm

```bash
pnpm add react-library
```

### Import des composants

```tsx
import { Button, Card, Input, Badge, Spinner } from 'react-library';
import { useIsMobile } from 'react-library';

export default function App() {
  const isMobile = useIsMobile();
  
  return (
    <Card variant="elevated" padding={isMobile ? 'sm' : 'lg'}>
      <Input label="Name" placeholder="Your name" fullWidth />
      <Button variant="primary" fullWidth className="mt-4">
        Submit
      </Button>
    </Card>
  );
}
```

## Breakpoints

- **Mobile**: < 640px
- **Tablet**: 641px - 1024px
- **Desktop**: > 1024px

## Développement

1. Créer un nouveau composant dans `src/components/`
2. Créer les fichiers `.tsx` et `.stories.tsx`
3. Exporter le composant dans `src/components/index.ts`
4. Lancer Storybook pour tester: `pnpm storybook`
5. Documenter avec des stories Storybook

### Exemple de nouveau composant

```tsx
// src/components/MyComponent/MyComponent.tsx
import React from 'react';

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined';
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ variant = 'default', children, className = '', ...props }, ref) => {
    const baseStyles = 'rounded-lg transition-all duration-base';
    const variantClass = variant === 'default' ? 'bg-white border border-gray-200' : 'border-2 border-gray-300';
    
    return (
      <div ref={ref} className={`${baseStyles} ${variantClass} ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

MyComponent.displayName = 'MyComponent';
```

## Build

La librairie est compilée en deux formats:
- **ESM** (ES Modules): `dist/react-library.mjs`
- **CJS** (CommonJS): `dist/react-library.js`

Les styles Tailwind CSS sont inclus dans `dist/style.css`.

## License

MIT
