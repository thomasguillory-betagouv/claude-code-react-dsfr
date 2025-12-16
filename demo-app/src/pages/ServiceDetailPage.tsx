import { useParams } from "react-router-dom";
import { fr } from "@codegouvfr/react-dsfr/fr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { Stepper } from "@codegouvfr/react-dsfr/Stepper";
import { Accordion } from "@codegouvfr/react-dsfr/Accordion";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";

// Demo service data
const serviceData: Record<string, {
  title: string;
  description: string;
  steps: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
}> = {
  demarches: {
    title: "Demande de carte d'identité",
    description: "Effectuez votre demande de carte nationale d'identité en ligne. La procédure est simple et rapide.",
    steps: [
      { title: "Pré-demande en ligne", description: "Remplissez le formulaire de pré-demande sur notre plateforme." },
      { title: "Prise de rendez-vous", description: "Choisissez un créneau pour déposer votre dossier en mairie." },
      { title: "Dépôt du dossier", description: "Présentez-vous au rendez-vous avec les pièces justificatives." },
      { title: "Retrait de la carte", description: "Récupérez votre carte d'identité une fois prête." }
    ],
    faq: [
      { question: "Quels documents sont nécessaires ?", answer: "Vous devez fournir : une photo d'identité récente, un justificatif de domicile de moins de 3 mois, et votre ancienne carte d'identité si vous en avez une." },
      { question: "Quel est le délai de traitement ?", answer: "Le délai moyen est de 3 à 4 semaines, mais peut varier selon les périodes." },
      { question: "La carte d'identité est-elle gratuite ?", answer: "Oui, la première demande et le renouvellement sont gratuits. En cas de perte ou vol, des frais de 25€ s'appliquent." }
    ]
  },
  passeport: {
    title: "Demande de passeport",
    description: "Renouvelez ou demandez un nouveau passeport pour vos voyages à l'étranger.",
    steps: [
      { title: "Vérification des conditions", description: "Assurez-vous de remplir les conditions pour obtenir un passeport." },
      { title: "Constitution du dossier", description: "Rassemblez tous les documents nécessaires." },
      { title: "Rendez-vous en mairie", description: "Déposez votre dossier et effectuez la prise d'empreintes." },
      { title: "Retrait du passeport", description: "Récupérez votre passeport en personne." }
    ],
    faq: [
      { question: "Combien coûte un passeport ?", answer: "Le tarif est de 86€ pour un adulte et 42€ pour un mineur de 15 à 17 ans." },
      { question: "Quelle est la durée de validité ?", answer: "Un passeport est valide 10 ans pour un adulte et 5 ans pour un mineur." },
      { question: "Puis-je voyager sans passeport en Europe ?", answer: "Oui, la carte d'identité suffit pour voyager dans l'Union européenne et l'espace Schengen." }
    ]
  }
};

// Default service for unknown IDs
const defaultService = {
  title: "Service",
  description: "Détails du service demandé.",
  steps: [
    { title: "Étape 1", description: "Première étape de la procédure." },
    { title: "Étape 2", description: "Deuxième étape de la procédure." },
    { title: "Étape 3", description: "Troisième étape de la procédure." }
  ],
  faq: [
    { question: "Comment puis-je obtenir de l'aide ?", answer: "Contactez notre service d'assistance via le formulaire de contact." }
  ]
};

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = id && serviceData[id] ? serviceData[id] : defaultService;

  return (
    <div className={fr.cx("fr-container", "fr-py-8w")}>
      <Breadcrumb
        currentPageLabel={service.title}
        segments={[
          { label: "Accueil", linkProps: { href: "/" } },
          { label: "Services", linkProps: { href: "/services" } }
        ]}
      />

      <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
        {/* Main content */}
        <div className={fr.cx("fr-col-12", "fr-col-lg-8")}>
          <h1 className={fr.cx("fr-h1", "fr-mb-4w")}>{service.title}</h1>

          <p className={fr.cx("fr-text--lead", "fr-mb-6w")}>
            {service.description}
          </p>

          {/* Steps */}
          <h2 className={fr.cx("fr-h3", "fr-mb-4w")}>Les étapes de la démarche</h2>

          <Stepper
            currentStep={1}
            stepCount={service.steps.length}
            title={service.steps[0].title}
            nextTitle={service.steps.length > 1 ? service.steps[1].title : undefined}
          />

          <div className={fr.cx("fr-mb-6w")}>
            {service.steps.map((step, index) => (
              <div key={index} className={fr.cx("fr-mb-4w")}>
                <h3 className={fr.cx("fr-h5", "fr-mb-1w")}>
                  {index + 1}. {step.title}
                </h3>
                <p className={fr.cx("fr-mb-0")}>{step.description}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className={fr.cx("fr-h3", "fr-mb-4w")}>Questions fréquentes</h2>

          {service.faq.map((item, index) => (
            <Accordion
              key={index}
              label={item.question}
              defaultExpanded={index === 0}
            >
              {item.answer}
            </Accordion>
          ))}

          {/* CTA */}
          <div className={fr.cx("fr-mt-6w")}>
            <Button
              iconId="fr-icon-arrow-right-line"
              iconPosition="right"
            >
              Commencer la démarche
            </Button>
            <Button
              priority="secondary"
              className={fr.cx("fr-ml-2w")}
              linkProps={{ href: "/contact" }}
            >
              Besoin d'aide ?
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className={fr.cx("fr-col-12", "fr-col-lg-4")}>
          <CallOut
            iconId="fr-icon-information-fill"
            title="Bon à savoir"
          >
            Cette démarche peut être effectuée entièrement en ligne.
            Munissez-vous de vos documents avant de commencer.
          </CallOut>

          <Alert
            severity="info"
            title="Délai de traitement"
            description="Le délai moyen de traitement est de 3 à 4 semaines."
            className={fr.cx("fr-mt-4w")}
            small
          />

          <div className={fr.cx("fr-mt-4w", "fr-p-4w")} style={{ backgroundColor: "var(--background-contrast-grey)" }}>
            <h3 className={fr.cx("fr-h5", "fr-mb-2w")}>Contact</h3>
            <p className={fr.cx("fr-text--sm", "fr-mb-1w")}>
              <strong>Téléphone :</strong> 01 23 45 67 89
            </p>
            <p className={fr.cx("fr-text--sm", "fr-mb-1w")}>
              <strong>Email :</strong> contact@example.fr
            </p>
            <p className={fr.cx("fr-text--sm", "fr-mb-0")}>
              <strong>Horaires :</strong> Lun-Ven 9h-17h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
