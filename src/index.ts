import './styles/globals.css';

// Components
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Card } from './components/Card';
export type { CardProps } from './components/Card';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';

export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { Spinner } from './components/Spinner';
export type { SpinnerProps } from './components/Spinner';

// Hooks
export {
  useMediaQuery,
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useIsTouchDevice,
} from './hooks';
