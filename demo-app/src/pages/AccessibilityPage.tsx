import { fr } from "@codegouvfr/react-dsfr/fr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { Summary } from "@codegouvfr/react-dsfr/Summary";
import { Table } from "@codegouvfr/react-dsfr/Table";
import { Highlight } from "@codegouvfr/react-dsfr/Highlight";
import { Button } from "@codegouvfr/react-dsfr/Button";

export function AccessibilityPage() {
  return (
    <div className={fr.cx("fr-container", "fr-py-8w")}>
      <Breadcrumb
        currentPageLabel="Accessibilité"
        segments={[
          { label: "Accueil", linkProps: { href: "/" } }
        ]}
      />

      <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
        {/* Main Content */}
        <div className={fr.cx("fr-col-12", "fr-col-lg-8")}>
          <h1 className={fr.cx("fr-h1", "fr-mb-4w")}>Déclaration d'accessibilité</h1>

          <Highlight className={fr.cx("fr-mb-6w")}>
            Le Service Public Démo s'engage à rendre son site internet accessible conformément
            à l'article 47 de la loi n° 2005-102 du 11 février 2005.
          </Highlight>

          <section id="etat-conformite" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>État de conformité</h2>
            <p>
              Ce site est <strong>partiellement conforme</strong> avec le référentiel général
              d'amélioration de l'accessibilité (RGAA) version 4.1.
            </p>
          </section>

          <section id="resultats-tests" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>Résultats des tests</h2>
            <p>
              L'audit de conformité réalisé en décembre 2024 révèle que :
            </p>
            <ul>
              <li>75% des critères RGAA sont respectés</li>
              <li>L'ensemble des critères de niveau A sont satisfaits</li>
              <li>85% des critères de niveau AA sont satisfaits</li>
            </ul>

            <Table
              caption="Résultats par thématique"
              className={fr.cx("fr-mt-4w")}
              headers={["Thématique", "Taux de conformité"]}
              data={[
                ["Images", "100%"],
                ["Cadres", "100%"],
                ["Couleurs", "100%"],
                ["Multimédia", "N/A"],
                ["Tableaux", "100%"],
                ["Liens", "90%"],
                ["Scripts", "75%"],
                ["Éléments obligatoires", "100%"],
                ["Structuration de l'information", "85%"],
                ["Présentation de l'information", "80%"],
                ["Formulaires", "90%"],
                ["Navigation", "85%"],
                ["Consultation", "75%"]
              ]}
            />
          </section>

          <section id="contenus-non-accessibles" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>Contenus non accessibles</h2>

            <h3 className={fr.cx("fr-h4")}>Non-conformités</h3>
            <ul>
              <li>
                Certains scripts dynamiques ne sont pas entièrement compatibles avec les
                technologies d'assistance (critères 7.1, 7.3)
              </li>
              <li>
                Quelques contrastes de couleur sont insuffisants sur des éléments secondaires
                (critère 3.2)
              </li>
            </ul>

            <h3 className={fr.cx("fr-h4")}>Dérogations pour charge disproportionnée</h3>
            <p>Aucune dérogation n'a été établie.</p>

            <h3 className={fr.cx("fr-h4")}>Contenus non soumis à l'obligation d'accessibilité</h3>
            <ul>
              <li>Documents PDF téléchargeables publiés avant septembre 2018</li>
              <li>Contenus de tiers intégrés (vidéos YouTube)</li>
            </ul>
          </section>

          <section id="etablissement" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>Établissement de cette déclaration</h2>
            <p>
              Cette déclaration a été établie le <strong>15 décembre 2024</strong>.
            </p>
            <p>Technologies utilisées pour la réalisation du site :</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript / TypeScript</li>
              <li>React 18</li>
              <li>DSFR (Système de Design de l'État) via @codegouvfr/react-dsfr</li>
            </ul>
            <p>
              Les tests ont été effectués avec les combinaisons de navigateur et lecteur d'écran suivantes :
            </p>
            <ul>
              <li>NVDA avec Firefox</li>
              <li>VoiceOver avec Safari</li>
              <li>JAWS avec Chrome</li>
            </ul>
          </section>

          <section id="amelioration" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>Amélioration et contact</h2>
            <p>
              Si vous n'arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter
              le responsable du site pour être orienté vers une alternative accessible ou obtenir
              le contenu sous une autre forme.
            </p>
            <Button
              iconId="fr-icon-mail-line"
              linkProps={{ href: "/contact" }}
              className={fr.cx("fr-mt-2w")}
            >
              Nous contacter
            </Button>
          </section>

          <section id="voies-recours" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>Voies de recours</h2>
            <p>
              Cette procédure est à utiliser dans le cas suivant : vous avez signalé au
              responsable du site internet un défaut d'accessibilité qui vous empêche d'accéder
              à un contenu ou à un des services du portail et vous n'avez pas obtenu de réponse
              satisfaisante.
            </p>
            <p>Vous pouvez :</p>
            <ul>
              <li>
                Écrire un message au{" "}
                <a href="https://formulaire.defenseurdesdroits.fr/" target="_blank" rel="noopener noreferrer">
                  Défenseur des droits
                </a>
              </li>
              <li>
                Contacter le délégué du{" "}
                <a href="https://www.defenseurdesdroits.fr/saisir/delegues" target="_blank" rel="noopener noreferrer">
                  Défenseur des droits dans votre région
                </a>
              </li>
              <li>
                Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) à :<br />
                Défenseur des droits<br />
                Libre réponse 71120<br />
                75342 Paris CEDEX 07
              </li>
            </ul>
          </section>
        </div>

        {/* Sidebar with Summary */}
        <div className={fr.cx("fr-col-12", "fr-col-lg-4")}>
          <div className={fr.cx("fr-hidden", "fr-unhidden-lg")} style={{ position: "sticky", top: "2rem" }}>
            <Summary
              links={[
                { linkProps: { href: "#etat-conformite" }, text: "État de conformité" },
                { linkProps: { href: "#resultats-tests" }, text: "Résultats des tests" },
                { linkProps: { href: "#contenus-non-accessibles" }, text: "Contenus non accessibles" },
                { linkProps: { href: "#etablissement" }, text: "Établissement de cette déclaration" },
                { linkProps: { href: "#amelioration" }, text: "Amélioration et contact" },
                { linkProps: { href: "#voies-recours" }, text: "Voies de recours" }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
