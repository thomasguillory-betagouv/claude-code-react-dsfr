import { Navigate } from "react-router-dom";
import { fr } from "@codegouvfr/react-dsfr/fr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { Card } from "@codegouvfr/react-dsfr/Card";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { Table } from "@codegouvfr/react-dsfr/Table";
import { Notice } from "@codegouvfr/react-dsfr/Notice";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { useAuth } from "../hooks/useAuth";

// Demo statistics data
const stats = [
  {
    label: "Démarches en cours",
    value: "3",
    icon: "fr-icon-file-text-line",
    color: "blue-france"
  },
  {
    label: "Démarches terminées",
    value: "12",
    icon: "fr-icon-checkbox-circle-line",
    color: "success"
  },
  {
    label: "Messages non lus",
    value: "2",
    icon: "fr-icon-mail-line",
    color: "warning"
  },
  {
    label: "Documents disponibles",
    value: "8",
    icon: "fr-icon-file-download-line",
    color: "info"
  }
];

// Demo recent activity
const recentActivity = [
  {
    id: "1",
    type: "Carte d'identité",
    status: "En cours",
    date: "15/12/2024",
    statusSeverity: "info" as const
  },
  {
    id: "2",
    type: "Passeport",
    status: "Complété",
    date: "10/12/2024",
    statusSeverity: "success" as const
  },
  {
    id: "3",
    type: "Certificat de résidence",
    status: "En attente",
    date: "05/12/2024",
    statusSeverity: "warning" as const
  },
  {
    id: "4",
    type: "Demande d'aide sociale",
    status: "Complété",
    date: "01/12/2024",
    statusSeverity: "success" as const
  }
];

function StatCard({ label, value, icon, color }: {
  label: string;
  value: string;
  icon: string;
  color: string;
}) {
  return (
    <div className={fr.cx("fr-col-12", "fr-col-sm-6", "fr-col-lg-3")}>
      <div
        className={fr.cx("fr-p-3w")}
        style={{
          backgroundColor: "var(--background-default-grey)",
          borderLeft: `4px solid var(--border-plain-${color})`
        }}
      >
        <div className={fr.cx("fr-grid-row", "fr-grid-row--middle")}>
          <div style={{ marginRight: "1rem" }}>
            <span
              className={icon}
              aria-hidden="true"
              style={{ fontSize: "2rem", color: `var(--text-label-${color})` }}
            />
          </div>
          <div className={fr.cx("fr-col")}>
            <p className={fr.cx("fr-mb-0")} style={{ fontWeight: "bold", fontSize: "1.25rem" }}>{value}</p>
            <p className={fr.cx("fr-text--sm", "fr-mb-0")} style={{ color: "var(--text-mention-grey)" }}>
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardPage() {
  const { isAuthenticated, user } = useAuth();

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const tableData = recentActivity.map(activity => [
    activity.type,
    <Badge key={activity.id} severity={activity.statusSeverity} small>
      {activity.status}
    </Badge>,
    activity.date,
    <Button
      key={`action-${activity.id}`}
      priority="tertiary no outline"
      size="small"
      iconId="fr-icon-arrow-right-line"
      iconPosition="right"
    >
      Voir
    </Button>
  ]);

  return (
    <div className={fr.cx("fr-container", "fr-py-8w")}>
      <Breadcrumb
        currentPageLabel="Tableau de bord"
        segments={[
          { label: "Accueil", linkProps: { href: "/" } }
        ]}
      />

      {/* Welcome Section */}
      <div className={fr.cx("fr-mb-6w")}>
        <h1 className={fr.cx("fr-h1", "fr-mb-2w")}>
          Bonjour, {user?.name || "Utilisateur"}
        </h1>
        <p className={fr.cx("fr-text--lead", "fr-mb-0")}>
          Bienvenue sur votre espace personnel. Retrouvez ici l'ensemble de vos démarches et documents.
        </p>
      </div>

      {/* Notice */}
      <Notice
        title="Vous avez 2 messages non lus dans votre messagerie."
        className={fr.cx("fr-mb-6w")}
      />

      {/* Statistics */}
      <h2 className={fr.cx("fr-h3", "fr-mb-4w")}>Vue d'ensemble</h2>

      <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters", "fr-mb-6w")}>
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Recent Activity */}
      <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
        <div className={fr.cx("fr-col-12", "fr-col-lg-8")}>
          <h2 className={fr.cx("fr-h3", "fr-mb-4w")}>Activité récente</h2>

          <Table
            caption="Vos dernières démarches"
            headers={["Démarche", "Statut", "Date", "Action"]}
            data={tableData}
          />

          <div className={fr.cx("fr-mt-4w")}>
            <Button
              priority="secondary"
              linkProps={{ href: "/services" }}
            >
              Voir toutes mes démarches
            </Button>
          </div>
        </div>

        <div className={fr.cx("fr-col-12", "fr-col-lg-4")}>
          <h2 className={fr.cx("fr-h3", "fr-mb-4w")}>Actions rapides</h2>

          <Card
            title="Nouvelle démarche"
            desc="Commencez une nouvelle démarche administrative"
            linkProps={{ href: "/services" }}
            className={fr.cx("fr-mb-4w")}
            enlargeLink
            size="small"
          />

          <Card
            title="Mes documents"
            desc="Accédez à vos documents et attestations"
            linkProps={{ href: "#" }}
            className={fr.cx("fr-mb-4w")}
            enlargeLink
            size="small"
          />

          <Card
            title="Modifier mon profil"
            desc="Mettez à jour vos informations personnelles"
            linkProps={{ href: "/profil" }}
            enlargeLink
            size="small"
          />

          {/* Tags section */}
          <div className={fr.cx("fr-mt-6w")}>
            <h3 className={fr.cx("fr-h5", "fr-mb-2w")}>Catégories</h3>
            <ul className={fr.cx("fr-tags-group")}>
              <li>
                <Tag>État civil</Tag>
              </li>
              <li>
                <Tag>Logement</Tag>
              </li>
              <li>
                <Tag>Emploi</Tag>
              </li>
              <li>
                <Tag>Santé</Tag>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
