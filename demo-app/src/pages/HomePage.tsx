import { fr } from "@codegouvfr/react-dsfr/fr";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";
import { Card } from "@codegouvfr/react-dsfr/Card";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { Button } from "@codegouvfr/react-dsfr/Button";

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className={fr.cx("fr-py-8w")} style={{ backgroundColor: "var(--background-alt-blue-france)" }}>
        <div className={fr.cx("fr-container")}>
          <CallOut
            iconId="fr-icon-information-fill"
            title="Bienvenue sur le Service Public Démo"
          >
            Cette application démontre l'utilisation du Système de Design de l'État (DSFR)
            avec React et @codegouvfr/react-dsfr. Explorez les différentes pages pour voir
            les composants DSFR en action.
          </CallOut>
        </div>
      </div>

      <div className={fr.cx("fr-container", "fr-py-8w")}>
        {/* Alert */}
        <Alert
          severity="info"
          title="Application de démonstration"
          description="Cette application est un exemple pour montrer comment configurer Claude Code pour le développement DSFR. Les données affichées sont fictives."
          className={fr.cx("fr-mb-6w")}
          closable
        />

        {/* Services Section */}
        <h2 className={fr.cx("fr-h2", "fr-mb-4w")}>Nos services</h2>

        <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
          <div className={fr.cx("fr-col-12", "fr-col-md-4")}>
            <Card
              title="Démarches en ligne"
              desc="Effectuez vos démarches administratives en quelques clics. Simplifiez vos procédures avec nos services numériques."
              linkProps={{ href: "/services/demarches" }}
              imageUrl="https://picsum.photos/seed/demarches/800/450"
              imageAlt="Illustration démarches en ligne"
              footer={
                <ul className={fr.cx("fr-badges-group")}>
                  <li>
                    <p className={fr.cx("fr-badge", "fr-badge--green-emeraude")}>
                      En ligne
                    </p>
                  </li>
                </ul>
              }
            />
          </div>

          <div className={fr.cx("fr-col-12", "fr-col-md-4")}>
            <Card
              title="Informations pratiques"
              desc="Retrouvez toutes les informations utiles pour vos démarches : horaires, documents nécessaires, contacts."
              linkProps={{ href: "/services/informations" }}
              imageUrl="https://picsum.photos/seed/informations/800/450"
              imageAlt="Illustration informations pratiques"
              footer={
                <ul className={fr.cx("fr-badges-group")}>
                  <li>
                    <p className={fr.cx("fr-badge", "fr-badge--blue-cumulus")}>
                      Actualités
                    </p>
                  </li>
                </ul>
              }
            />
          </div>

          <div className={fr.cx("fr-col-12", "fr-col-md-4")}>
            <Card
              title="Aide et support"
              desc="Besoin d'aide ? Notre équipe est disponible pour vous accompagner dans toutes vos démarches."
              linkProps={{ href: "/services/aide" }}
              imageUrl="https://picsum.photos/seed/support/800/450"
              imageAlt="Illustration aide et support"
              footer={
                <ul className={fr.cx("fr-badges-group")}>
                  <li>
                    <p className={fr.cx("fr-badge", "fr-badge--yellow-tournesol")}>
                      Support
                    </p>
                  </li>
                </ul>
              }
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className={fr.cx("fr-mt-8w", "fr-p-4w")} style={{ backgroundColor: "var(--background-contrast-grey)" }}>
          <div className={fr.cx("fr-grid-row", "fr-grid-row--middle")}>
            <div className={fr.cx("fr-col-12", "fr-col-md-8")}>
              <h3 className={fr.cx("fr-h4", "fr-mb-2w")}>
                Créez votre espace personnel
              </h3>
              <p className={fr.cx("fr-text--lg", "fr-mb-0")}>
                Accédez à tous vos services en un seul endroit. Suivez vos démarches et recevez des notifications personnalisées.
              </p>
            </div>
            <div className={fr.cx("fr-col-12", "fr-col-md-4", "fr-mt-4w", "fr-mt-md-0")} style={{ textAlign: "right" }}>
              <Button
                linkProps={{ href: "/login" }}
                iconId="fr-icon-account-circle-line"
                iconPosition="right"
              >
                Se connecter
              </Button>
            </div>
          </div>
        </div>

        {/* Demo Credentials */}
        <Alert
          severity="success"
          title="Identifiants de démonstration"
          description="Email : demo@example.fr | Mot de passe : demo123"
          className={fr.cx("fr-mt-6w")}
          small
        />
      </div>
    </>
  );
}
