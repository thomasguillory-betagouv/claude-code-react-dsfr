import { fr } from "@codegouvfr/react-dsfr/fr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { Accordion } from "@codegouvfr/react-dsfr/Accordion";
import { Highlight } from "@codegouvfr/react-dsfr/Highlight";
import { Summary } from "@codegouvfr/react-dsfr/Summary";
import { Button } from "@codegouvfr/react-dsfr/Button";

export function PrivacyPolicyPage() {
  return (
    <div className={fr.cx("fr-container", "fr-py-8w")}>
      <Breadcrumb
        currentPageLabel="Politique de confidentialité"
        segments={[
          { label: "Accueil", linkProps: { href: "/" } }
        ]}
      />

      <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
        {/* Main Content */}
        <div className={fr.cx("fr-col-12", "fr-col-lg-8")}>
          <h1 className={fr.cx("fr-h1", "fr-mb-4w")}>Politique de confidentialité</h1>

          <Highlight className={fr.cx("fr-mb-6w")}>
            Le Service Public Démo accorde une importance primordiale à la protection de vos
            données personnelles. Cette politique explique comment nous collectons, utilisons
            et protégeons vos informations conformément au RGPD.
          </Highlight>

          <section id="responsable" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est :
            </p>
            <p>
              <strong>Service Public Démo</strong><br />
              Direction du Numérique<br />
              1 rue de la République<br />
              75001 Paris<br />
              Email : <a href="mailto:dpo@service-public-demo.fr">dpo@service-public-demo.fr</a>
            </p>
          </section>

          <section id="donnees-collectees" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>Données collectées</h2>

            <Accordion label="Données d'identification" defaultExpanded>
              <ul>
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale</li>
              </ul>
              <p>
                <strong>Finalité :</strong> Gestion de votre compte et traitement de vos démarches administratives.
              </p>
              <p>
                <strong>Base légale :</strong> Exécution d'une mission de service public (article 6.1.e du RGPD).
              </p>
            </Accordion>

            <Accordion label="Données de connexion">
              <ul>
                <li>Adresse IP</li>
                <li>Date et heure de connexion</li>
                <li>Pages consultées</li>
                <li>Type de navigateur</li>
              </ul>
              <p>
                <strong>Finalité :</strong> Sécurité du service, statistiques de fréquentation, amélioration de l'expérience utilisateur.
              </p>
              <p>
                <strong>Base légale :</strong> Intérêt légitime (article 6.1.f du RGPD).
              </p>
            </Accordion>

            <Accordion label="Données de démarches">
              <ul>
                <li>Documents téléversés</li>
                <li>Informations saisies dans les formulaires</li>
                <li>Historique des démarches</li>
              </ul>
              <p>
                <strong>Finalité :</strong> Traitement de vos demandes administratives.
              </p>
              <p>
                <strong>Base légale :</strong> Obligation légale (article 6.1.c du RGPD).
              </p>
            </Accordion>
          </section>

          <section id="cookies" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>Cookies et traceurs</h2>

            <h3 className={fr.cx("fr-h4")}>Cookies strictement nécessaires</h3>
            <p>
              Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés :
            </p>
            <ul>
              <li><strong>Session :</strong> Maintient votre connexion pendant la navigation</li>
              <li><strong>Sécurité :</strong> Protection contre les attaques CSRF</li>
              <li><strong>Préférences :</strong> Mémorisation du mode sombre/clair</li>
            </ul>

            <h3 className={fr.cx("fr-h4")}>Cookies de mesure d'audience</h3>
            <p>
              Ces cookies nous permettent d'analyser la fréquentation du site de manière anonyme.
              Ils sont soumis à votre consentement.
            </p>
            <ul>
              <li><strong>Matomo :</strong> Statistiques de visite (hébergé en France)</li>
            </ul>

            <Button
              priority="secondary"
              iconId="fr-icon-settings-5-line"
              className={fr.cx("fr-mt-2w")}
              onClick={() => {
                // This would typically open the consent management modal
                console.log("Open consent management");
              }}
            >
              Gérer mes préférences de cookies
            </Button>
          </section>

          <section id="duree-conservation" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>Durée de conservation</h2>
            <ul>
              <li><strong>Données de compte :</strong> 3 ans après la dernière connexion</li>
              <li><strong>Données de démarches :</strong> Selon les obligations légales applicables à chaque type de démarche</li>
              <li><strong>Données de connexion :</strong> 1 an</li>
              <li><strong>Cookies de mesure d'audience :</strong> 13 mois</li>
            </ul>
          </section>

          <section id="droits" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
            </p>

            <Accordion label="Droit d'accès" defaultExpanded>
              Vous pouvez demander à consulter l'ensemble des données personnelles vous concernant.
            </Accordion>

            <Accordion label="Droit de rectification">
              Vous pouvez demander la correction des données inexactes ou incomplètes.
            </Accordion>

            <Accordion label="Droit à l'effacement">
              Vous pouvez demander la suppression de vos données dans les conditions prévues par le RGPD.
            </Accordion>

            <Accordion label="Droit à la limitation du traitement">
              Vous pouvez demander la limitation du traitement de vos données dans certaines circonstances.
            </Accordion>

            <Accordion label="Droit à la portabilité">
              Vous pouvez récupérer vos données dans un format structuré et lisible par machine.
            </Accordion>

            <Accordion label="Droit d'opposition">
              Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière.
            </Accordion>

            <p className={fr.cx("fr-mt-4w")}>
              Pour exercer ces droits, contactez notre Délégué à la Protection des Données :
            </p>
            <Button
              iconId="fr-icon-mail-line"
              linkProps={{ href: "mailto:dpo@service-public-demo.fr" }}
              className={fr.cx("fr-mt-2w")}
            >
              Contacter le DPO
            </Button>
          </section>

          <section id="reclamation" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>Droit de réclamation</h2>
            <p>
              Si vous estimez que le traitement de vos données personnelles constitue une violation
              du RGPD, vous avez le droit d'introduire une réclamation auprès de la CNIL :
            </p>
            <p>
              <strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong><br />
              3 Place de Fontenoy<br />
              TSA 80715<br />
              75334 PARIS CEDEX 07<br />
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>
          </section>

          <section id="securite" className={fr.cx("fr-mb-6w")}>
            <h2 className={fr.cx("fr-h2")}>Sécurité des données</h2>
            <p>
              Nous mettons en œuvre les mesures techniques et organisationnelles appropriées
              pour protéger vos données personnelles :
            </p>
            <ul>
              <li>Chiffrement des données en transit (HTTPS) et au repos</li>
              <li>Contrôle d'accès strict aux données</li>
              <li>Journalisation et surveillance des accès</li>
              <li>Sauvegardes régulières</li>
              <li>Tests de sécurité périodiques</li>
              <li>Hébergement en France sur des infrastructures certifiées</li>
            </ul>
          </section>

          <section id="modifications">
            <h2 className={fr.cx("fr-h2")}>Modifications de la politique</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour périodiquement.
              La date de dernière mise à jour est indiquée ci-dessous.
            </p>
            <p>
              <strong>Dernière mise à jour :</strong> 15 décembre 2024
            </p>
          </section>
        </div>

        {/* Sidebar with Summary */}
        <div className={fr.cx("fr-col-12", "fr-col-lg-4")}>
          <div className={fr.cx("fr-hidden", "fr-unhidden-lg")} style={{ position: "sticky", top: "2rem" }}>
            <Summary
              links={[
                { linkProps: { href: "#responsable" }, text: "Responsable du traitement" },
                { linkProps: { href: "#donnees-collectees" }, text: "Données collectées" },
                { linkProps: { href: "#cookies" }, text: "Cookies et traceurs" },
                { linkProps: { href: "#duree-conservation" }, text: "Durée de conservation" },
                { linkProps: { href: "#droits" }, text: "Vos droits" },
                { linkProps: { href: "#reclamation" }, text: "Droit de réclamation" },
                { linkProps: { href: "#securite" }, text: "Sécurité des données" },
                { linkProps: { href: "#modifications" }, text: "Modifications" }
              ]}
            />

            <div className={fr.cx("fr-mt-6w", "fr-p-4w")} style={{ backgroundColor: "var(--background-contrast-grey)" }}>
              <h3 className={fr.cx("fr-h5", "fr-mb-2w")}>Contact DPO</h3>
              <p className={fr.cx("fr-text--sm", "fr-mb-2w")}>
                Pour toute question relative à vos données personnelles :
              </p>
              <p className={fr.cx("fr-text--sm", "fr-mb-0")}>
                <a href="mailto:dpo@service-public-demo.fr">
                  dpo@service-public-demo.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
