import { fr } from "@codegouvfr/react-dsfr/fr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { Card } from "@codegouvfr/react-dsfr/Card";
import { Tile } from "@codegouvfr/react-dsfr/Tile";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";
import { Quote } from "@codegouvfr/react-dsfr/Quote";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { Button } from "@codegouvfr/react-dsfr/Button";

export function AboutPage() {
  return (
    <div className={fr.cx("fr-container", "fr-py-8w")}>
      <Breadcrumb
        currentPageLabel="À propos"
        segments={[{ label: "Accueil", linkProps: { href: "/" } }]}
      />

      {/* Hero Section */}
      <div className={fr.cx("fr-mb-8w")}>
        <h1 className={fr.cx("fr-h1", "fr-mb-2w")}>À propos</h1>
        <p className={fr.cx("fr-text--lead")}>
          Découvrez Service Public Démo, une application de démonstration pour
          l'utilisation du Système de Design de l'État (DSFR) avec React.
        </p>
      </div>

      {/* Mission Section */}
      <section className={fr.cx("fr-mb-8w")}>
        <h2 className={fr.cx("fr-h2", "fr-mb-4w")}>Notre mission</h2>
        <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
          <div className={fr.cx("fr-col-12", "fr-col-md-8")}>
            <p className={fr.cx("fr-text--lg", "fr-mb-3w")}>
              Service Public Démo a pour objectif de montrer comment créer des
              applications web conformes au DSFR en utilisant React et la
              bibliothèque <code>@codegouvfr/react-dsfr</code>.
            </p>
            <p className={fr.cx("fr-mb-3w")}>
              Cette application sert de référence pour les développeurs
              souhaitant implémenter des interfaces utilisateur respectant la
              charte graphique de l'État français. Elle illustre les bonnes
              pratiques en matière d'accessibilité (RGAA), de responsive design
              et d'expérience utilisateur.
            </p>
            <p>
              Le code source de cette application est disponible en open source
              et peut être utilisé comme point de départ pour vos propres
              projets de services publics numériques.
            </p>
          </div>
          <div className={fr.cx("fr-col-12", "fr-col-md-4")}>
            <CallOut
              iconId="fr-icon-france-fill"
              title="Made in France"
            >
              Développé dans le cadre de la transformation numérique de l'État
              français.
            </CallOut>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className={fr.cx("fr-mb-8w")}>
        <h2 className={fr.cx("fr-h2", "fr-mb-4w")}>Nos valeurs</h2>
        <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
          <div className={fr.cx("fr-col-12", "fr-col-md-4")}>
            <Tile
              title="Accessibilité"
              desc="Conformité RGAA niveau AA pour garantir l'accès à tous les citoyens, quelles que soient leurs capacités."
              imageUrl="https://picsum.photos/seed/accessibilite/400/400"
              imageAlt="Illustration accessibilité"
              orientation="vertical"
            />
          </div>
          <div className={fr.cx("fr-col-12", "fr-col-md-4")}>
            <Tile
              title="Simplicité"
              desc="Une interface claire et intuitive pour faciliter les démarches des usagers et réduire la complexité administrative."
              imageUrl="https://picsum.photos/seed/simplicite/400/400"
              imageAlt="Illustration simplicité"
              orientation="vertical"
            />
          </div>
          <div className={fr.cx("fr-col-12", "fr-col-md-4")}>
            <Tile
              title="Open Source"
              desc="Code ouvert et réutilisable pour favoriser la collaboration et la mutualisation entre services publics."
              imageUrl="https://picsum.photos/seed/opensource/400/400"
              imageAlt="Illustration open source"
              orientation="vertical"
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={fr.cx("fr-mb-8w")}>
        <h2 className={fr.cx("fr-h2", "fr-mb-4w")}>Technologies utilisées</h2>
        <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
          <div className={fr.cx("fr-col-12", "fr-col-md-6")}>
            <Card
              title="Stack technique"
              desc="Cette application est construite avec les technologies modernes du web pour garantir performance et maintenabilité."
            />
          </div>
          <div className={fr.cx("fr-col-12", "fr-col-md-6")}>
            <div className={fr.cx("fr-p-3w")} style={{ backgroundColor: "var(--background-contrast-grey)" }}>
              <h3 className={fr.cx("fr-h5", "fr-mb-2w")}>Dépendances principales</h3>
              <ul className={fr.cx("fr-badges-group", "fr-mb-0")}>
                <li><Badge>React 18+</Badge></li>
                <li><Badge>TypeScript</Badge></li>
                <li><Badge>Vite</Badge></li>
                <li><Badge severity="new">@codegouvfr/react-dsfr</Badge></li>
                <li><Badge>React Router</Badge></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className={fr.cx("fr-mb-8w")}>
        <Quote
          author="Direction Interministérielle du Numérique"
          source="Système de Design de l'État"
          text="Le système de design de l'État permet aux administrations de créer des services publics numériques de qualité, accessibles, ergonomiques et qui respectent la charte graphique de l'État."
        />
      </section>

      {/* Équipe Section */}
      <section className={fr.cx("fr-mb-8w")}>
        <h2 className={fr.cx("fr-h2", "fr-mb-4w")}>L'équipe</h2>
        <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
          <div className={fr.cx("fr-col-12", "fr-col-md-6", "fr-col-lg-3")}>
            <div className={fr.cx("fr-card", "fr-card--no-border")}>
              <div className={fr.cx("fr-card__body")}>
                <div className={fr.cx("fr-card__content")}>
                  <h3 className={fr.cx("fr-card__title", "fr-h5")}>
                    Marie Dupont
                  </h3>
                  <p className={fr.cx("fr-card__desc", "fr-text--sm")}>
                    Chef de projet
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={fr.cx("fr-col-12", "fr-col-md-6", "fr-col-lg-3")}>
            <div className={fr.cx("fr-card", "fr-card--no-border")}>
              <div className={fr.cx("fr-card__body")}>
                <div className={fr.cx("fr-card__content")}>
                  <h3 className={fr.cx("fr-card__title", "fr-h5")}>
                    Thomas Martin
                  </h3>
                  <p className={fr.cx("fr-card__desc", "fr-text--sm")}>
                    Développeur front-end
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={fr.cx("fr-col-12", "fr-col-md-6", "fr-col-lg-3")}>
            <div className={fr.cx("fr-card", "fr-card--no-border")}>
              <div className={fr.cx("fr-card__body")}>
                <div className={fr.cx("fr-card__content")}>
                  <h3 className={fr.cx("fr-card__title", "fr-h5")}>
                    Sophie Bernard
                  </h3>
                  <p className={fr.cx("fr-card__desc", "fr-text--sm")}>
                    Designer UX/UI
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={fr.cx("fr-col-12", "fr-col-md-6", "fr-col-lg-3")}>
            <div className={fr.cx("fr-card", "fr-card--no-border")}>
              <div className={fr.cx("fr-card__body")}>
                <div className={fr.cx("fr-card__content")}>
                  <h3 className={fr.cx("fr-card__title", "fr-h5")}>
                    Pierre Leroy
                  </h3>
                  <p className={fr.cx("fr-card__desc", "fr-text--sm")}>
                    Expert accessibilité
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={fr.cx("fr-p-4w")}
        style={{ backgroundColor: "var(--background-alt-blue-france)" }}
      >
        <div className={fr.cx("fr-grid-row", "fr-grid-row--middle", "fr-grid-row--gutters")}>
          <div className={fr.cx("fr-col-12", "fr-col-md-8")}>
            <h2 className={fr.cx("fr-h4", "fr-mb-2w")}>
              Une question ? Un projet ?
            </h2>
            <p className={fr.cx("fr-mb-0")}>
              N'hésitez pas à nous contacter pour en savoir plus sur cette
              application ou pour discuter de vos besoins en matière de services
              numériques.
            </p>
          </div>
          <div className={fr.cx("fr-col-12", "fr-col-md-4", "fr-mt-4w", "fr-mt-md-0")} style={{ textAlign: "right" }}>
            <Button
              linkProps={{ href: "/contact" }}
              iconId="fr-icon-mail-line"
              iconPosition="right"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
