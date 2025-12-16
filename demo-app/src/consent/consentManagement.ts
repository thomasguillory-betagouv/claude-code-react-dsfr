import { createConsentManagement } from "@codegouvfr/react-dsfr/consentManagement";

/**
 * RGPD Consent Management Configuration
 *
 * This creates the consent banner and management system for cookies.
 * Following RGPD (French GDPR) requirements for public service websites.
 *
 * Usage:
 * - ConsentBannerAndConsentManagement: Add to App.tsx for banner display
 * - FooterConsentManagementItem: Add to Footer for "Gestion des cookies" link
 * - useConsent: Hook to check consent status in components
 */
export const {
  ConsentBannerAndConsentManagement,
  FooterConsentManagementItem,
  FooterPersonalDataPolicyItem,
  useConsent
} = createConsentManagement({
  // Finalities define what types of cookies/trackers are used
  finalityDescription: () => ({
    // Analytics - for traffic measurement
    analytics: {
      title: "Mesure d'audience",
      description: "Ces cookies nous permettent de mesurer la fréquentation du site de manière anonyme afin d'améliorer nos services.",
    },
    // Personalization - for user preferences
    personalization: {
      title: "Personnalisation",
      description: "Ces cookies permettent de mémoriser vos préférences pour personnaliser votre expérience (mode sombre, langue, etc.).",
    },
    // Advertising - not used on public service sites but included for completeness
    // advertising: {
    //   title: "Publicité",
    //   description: "Ces cookies permettent d'afficher des publicités personnalisées.",
    // },
  }),

  // Personal data policy link
  personalDataPolicyLinkProps: {
    href: "/politique-confidentialite",
  },

  // Consent modal configuration
  consentCallback: async ({ finalityConsent, finalityConsent_prev }) => {
    // Handle consent changes
    // This callback is called when user accepts/refuses cookies

    if (finalityConsent.analytics && !finalityConsent_prev?.analytics) {
      // User accepted analytics - initialize Matomo or similar
      console.log("Analytics consent granted - initialize tracking");
      // Example: initMatomo();
    }

    if (!finalityConsent.analytics && finalityConsent_prev?.analytics) {
      // User refused analytics - disable tracking
      console.log("Analytics consent revoked - disable tracking");
      // Example: disableMatomo();
    }

    if (finalityConsent.personalization && !finalityConsent_prev?.personalization) {
      // User accepted personalization
      console.log("Personalization consent granted");
    }
  },
});
