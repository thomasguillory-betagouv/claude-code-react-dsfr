import { Footer } from "@codegouvfr/react-dsfr/Footer";
import {
  FooterConsentManagementItem,
  FooterPersonalDataPolicyItem
} from "../../consent/consentManagement";

export function AppFooter() {
  return (
    <Footer
      brandTop={
        <>
          RÉPUBLIQUE
          <br />
          FRANÇAISE
        </>
      }
      homeLinkProps={{
        href: "/",
        title: "Accueil - Service Public Démo"
      }}
      accessibility="partially compliant"
      accessibilityLinkProps={{ href: "/accessibilite" }}
      contentDescription="Application de démonstration du Système de Design de l'État (DSFR) avec React. Ce projet montre comment configurer Claude Code pour développer des applications conformes au DSFR."
      bottomItems={[
        {
          text: "Plan du site",
          linkProps: { href: "#" }
        },
        {
          text: "Accessibilité : partiellement conforme",
          linkProps: { href: "/accessibilite" }
        },
        {
          text: "Mentions légales",
          linkProps: { href: "#" }
        },
        // RGPD: Link to personal data policy
        <FooterPersonalDataPolicyItem key="privacy" />,
        // RGPD: Opens cookie consent management modal
        <FooterConsentManagementItem key="consent" />
      ]}
      termsLinkProps={{ href: "#" }}
      websiteMapLinkProps={{ href: "#" }}
    />
  );
}
