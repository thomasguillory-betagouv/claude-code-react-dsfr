# Service Public Démo - Application DSFR React

Application de démonstration du Système de Design de l'État (DSFR) avec React.

## Stack technique

- **Framework** : Vite + React 18 + TypeScript
- **Design System** : @codegouvfr/react-dsfr
- **Routing** : react-router-dom v6

## Installation

```bash
# Install dependencies
npm install

# Run post-install commands (required for DSFR)
npx react-dsfr copy-static-assets
npx react-dsfr update-icons

# Start development server
npm run dev
```

## Structure du projet

```
src/
├── main.tsx                    # Entry point + startReactDsfr
├── App.tsx                     # Router configuration
├── components/
│   ├── auth/
│   │   └── AuthProvider.tsx    # Simulated authentication context
│   └── layout/
│       ├── AppHeader.tsx       # DSFR Header with navigation
│       ├── AppFooter.tsx       # DSFR Footer with legal links
│       └── PageLayout.tsx      # Layout wrapper with SkipLinks
├── consent/
│   └── consentManagement.ts    # RGPD cookie consent configuration
├── hooks/
│   └── useAuth.ts              # Authentication hook
├── pages/
│   ├── HomePage.tsx            # Landing page
│   ├── ServicesPage.tsx        # Services listing with Tabs
│   ├── ServiceDetailPage.tsx   # Service detail with Stepper
│   ├── ContactPage.tsx         # Contact form with validation
│   ├── LoginPage.tsx           # Login with PasswordInput
│   ├── DashboardPage.tsx       # Dashboard (protected)
│   ├── ProfilePage.tsx         # User profile (protected)
│   ├── AccessibilityPage.tsx   # Accessibility statement
│   └── PrivacyPolicyPage.tsx   # RGPD privacy policy
└── types/
    └── index.ts                # TypeScript type definitions
```

## Pages et composants DSFR

| Page | Route | Composants DSFR utilisés |
|------|-------|--------------------------|
| Accueil | `/` | Header, Footer, CallOut, Card, Alert, Button |
| Services | `/services` | Breadcrumb, Tabs, Tile |
| Détail Service | `/services/:id` | Stepper, Accordion, CallOut, Alert |
| Contact | `/contact` | Input, Select, Checkbox, ButtonsGroup, Alert |
| Connexion | `/login` | Input, PasswordInput, Button, Alert |
| Dashboard | `/dashboard` | Badge, Tag, Table, Card, Notice |
| Profil | `/profil` | Input, RadioButtons, ToggleSwitch, Button |
| Accessibilité | `/accessibilite` | Summary, Table, Highlight |
| Confidentialité | `/politique-confidentialite` | Accordion, Highlight, Summary |

## Identifiants de démonstration

- **Email** : demo@example.fr
- **Mot de passe** : demo123

## Fonctionnalités démontrées

### Navigation
- Header DSFR avec menu responsive
- Breadcrumb contextuel
- Footer avec liens légaux obligatoires
- SkipLinks pour l'accessibilité

### Authentification simulée
- Login/logout avec Context React
- Routes protégées (Dashboard, Profil)
- Persistance localStorage

### Formulaires
- Contact avec validation côté client
- Login avec gestion des erreurs
- Profil avec édition inline

### Responsive
- Mobile-first avec classes fr-col-*
- Menu hamburger sur mobile
- Grille DSFR responsive

### Accessibilité RGAA
- Navigation clavier complète
- Skip links
- ARIA géré automatiquement par react-dsfr
- Page de déclaration d'accessibilité

### Conformité RGPD
- Bandeau de consentement cookies (createConsentManagement)
- Lien "Gestion des cookies" dans le footer
- Page politique de confidentialité complète

## Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Build de production
npm run lint     # Vérification ESLint
npm run preview  # Prévisualisation du build
```

## Ressources

- [Documentation react-dsfr](https://react-dsfr.codegouv.studio/)
- [Storybook composants](https://components.react-dsfr.codegouv.studio/)
- [DSFR officiel](https://www.systeme-de-design.gouv.fr/)
- [RGAA (accessibilité)](https://accessibilite.numerique.gouv.fr/)
