# Claude Code + DSFR - Configuration et Application Démo

Ce projet démontre comment configurer **Claude Code** pour développer efficacement des applications utilisant le **DSFR** (Système de Design de l'État français) avec `@codegouvfr/react-dsfr`.

## Contenu du projet

### 1. Configuration Claude Code

Instructions et commandes personnalisées pour optimiser le développement DSFR :

| Fichier | Description |
|---------|-------------|
| `CLAUDE.md` | Instructions principales (~360 lignes) avec patterns, règles et bonnes pratiques |
| `.claude/settings.local.json` | Permissions pour les outils et domaines DSFR |
| `.claude/commands/dsfr/` | 5 commandes slash personnalisées (`/dsfr:component`, `/dsfr:page`, etc.) |
| `docs/DSFR_COMPONENTS.md` | Référence rapide des composants avec exemples de code |

### 2. Application Démo

Application React complète avec 9 pages démontrant les composants DSFR :

```
demo-app/
├── src/
│   ├── components/     # Layout (Header, Footer) + Auth
│   ├── consent/        # RGPD consent management
│   ├── pages/          # 9 pages (Home, Services, Dashboard, etc.)
│   └── hooks/          # Authentification simulée
```

## Démarrage rapide

### Tester l'application démo

```bash
cd demo-app
npm install
npx react-dsfr copy-static-assets
npm run dev
```

Identifiants : `demo@example.fr` / `demo123`

### Utiliser la configuration dans votre projet

1. Copiez `CLAUDE.md` à la racine de votre projet
2. Copiez `.claude/` pour les commandes et permissions
3. Copiez `docs/DSFR_COMPONENTS.md` pour la référence composants

## Commandes slash disponibles

| Commande | Description |
|----------|-------------|
| `/dsfr:component` | Génère un composant DSFR avec imports corrects |
| `/dsfr:page` | Crée une page complète avec layout DSFR |
| `/dsfr:form` | Génère un formulaire accessible avec validation |
| `/dsfr:check` | Vérifie la conformité DSFR d'un fichier |
| `/dsfr:help` | Affiche l'aide des commandes |

## Fonctionnalités démontrées

### Composants DSFR
- **Navigation** : Header, Footer, Breadcrumb, Tabs, SkipLinks
- **Contenu** : Card, Tile, CallOut, Alert, Notice, Highlight
- **Formulaires** : Input, Select, Checkbox, RadioButtons, PasswordInput
- **Interaction** : Button, ButtonsGroup, Accordion, Modal
- **Data** : Table, Badge, Tag, Stepper, Summary

### Conformité
- **RGAA** : Accessibilité niveau AA, navigation clavier, ARIA automatique
- **RGPD** : Bandeau cookies avec `createConsentManagement`, politique de confidentialité
- **Responsive** : Mobile-first avec grille `fr-col-*`

## Structure des pages

| Page | Route | Composants principaux |
|------|-------|----------------------|
| Accueil | `/` | CallOut, Card, Alert |
| Services | `/services` | Tabs, Tile |
| Détail | `/services/:id` | Stepper, Accordion |
| Contact | `/contact` | Input, Select, Checkbox, ButtonsGroup |
| Connexion | `/login` | PasswordInput, Alert |
| Dashboard | `/dashboard` | Table, Badge, Tag, Notice |
| Profil | `/profil` | RadioButtons, ToggleSwitch |
| Accessibilité | `/accessibilite` | Summary, Table, Highlight |
| Confidentialité | `/politique-confidentialite` | Accordion, Highlight |

## Le DSFR en bref

Le **Système de Design de l'État** est le design system officiel de l'administration française :

- **Cohérence visuelle** entre les services publics numériques
- **Accessibilité** conforme au RGAA (niveau AA minimum)
- **Identité de l'État** reconnaissable par les citoyens
- **Qualité technique** avec des composants testés et maintenus

### Ressources

| Ressource | Lien |
|-----------|------|
| react-dsfr Documentation | https://react-dsfr.codegouv.studio/ |
| react-dsfr Storybook | https://components.react-dsfr.codegouv.studio/ |
| DSFR officiel | https://www.systeme-de-design.gouv.fr/ |
| GitHub react-dsfr | https://github.com/codegouvfr/react-dsfr |
| RGAA | https://accessibilite.numerique.gouv.fr/ |

## Prérequis

- Claude Code installé et configuré
- Node.js 18+
- Context7 MCP (optionnel, pour documentation à jour)

## Licence

MIT - Libre d'utilisation et de modification.
