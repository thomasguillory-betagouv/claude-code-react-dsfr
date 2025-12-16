import { fr } from "@codegouvfr/react-dsfr/fr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import { Tile } from "@codegouvfr/react-dsfr/Tile";

const services = {
  demarches: [
    {
      id: "demarches",
      title: "Demande de carte d'identité",
      description: "Effectuez votre demande de carte nationale d'identité en ligne",
      badge: "En ligne"
    },
    {
      id: "passeport",
      title: "Demande de passeport",
      description: "Renouvelez ou demandez un nouveau passeport",
      badge: "En ligne"
    },
    {
      id: "certificat",
      title: "Certificat de résidence",
      description: "Obtenez un certificat de résidence pour vos démarches",
      badge: "Sur place"
    }
  ],
  informations: [
    {
      id: "horaires",
      title: "Horaires d'ouverture",
      description: "Consultez les horaires de nos services",
      badge: "Info"
    },
    {
      id: "documents",
      title: "Documents nécessaires",
      description: "Liste des pièces justificatives pour vos démarches",
      badge: "Info"
    },
    {
      id: "tarifs",
      title: "Tarifs et délais",
      description: "Informations sur les coûts et délais de traitement",
      badge: "Info"
    }
  ],
  aide: [
    {
      id: "aide",
      title: "Questions fréquentes",
      description: "Trouvez des réponses aux questions les plus courantes",
      badge: "FAQ"
    },
    {
      id: "contact",
      title: "Nous contacter",
      description: "Prenez contact avec notre équipe d'assistance",
      badge: "Contact"
    },
    {
      id: "reclamation",
      title: "Faire une réclamation",
      description: "Signalez un problème ou déposez une réclamation",
      badge: "Réclamation"
    }
  ]
};

function ServiceTile({ id, title, description }: {
  id: string;
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <div className={fr.cx("fr-col-12", "fr-col-md-6", "fr-col-lg-4")}>
      <Tile
        title={title}
        desc={description}
        linkProps={{ href: `/services/${id}` }}
        orientation="horizontal"
      />
    </div>
  );
}

export function ServicesPage() {
  return (
    <div className={fr.cx("fr-container", "fr-py-8w")}>
      <Breadcrumb
        currentPageLabel="Services"
        segments={[
          { label: "Accueil", linkProps: { href: "/" } }
        ]}
      />

      <h1 className={fr.cx("fr-h1", "fr-mb-4w")}>Nos services</h1>

      <p className={fr.cx("fr-text--lead", "fr-mb-6w")}>
        Retrouvez l'ensemble des services proposés par notre administration.
        Effectuez vos démarches en ligne ou trouvez les informations dont vous avez besoin.
      </p>

      <Tabs
        tabs={[
          {
            label: "Démarches en ligne",
            iconId: "fr-icon-file-text-line",
            content: (
              <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters", "fr-pt-4w")}>
                {services.demarches.map((service) => (
                  <ServiceTile key={service.id} {...service} />
                ))}
              </div>
            )
          },
          {
            label: "Informations pratiques",
            iconId: "fr-icon-information-line",
            content: (
              <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters", "fr-pt-4w")}>
                {services.informations.map((service) => (
                  <ServiceTile key={service.id} {...service} />
                ))}
              </div>
            )
          },
          {
            label: "Aide et support",
            iconId: "fr-icon-question-line",
            content: (
              <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters", "fr-pt-4w")}>
                {services.aide.map((service) => (
                  <ServiceTile key={service.id} {...service} />
                ))}
              </div>
            )
          }
        ]}
      />
    </div>
  );
}
