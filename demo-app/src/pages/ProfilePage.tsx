import { useState, type FormEvent } from "react";
import { Navigate } from "react-router-dom";
import { fr } from "@codegouvfr/react-dsfr/fr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { ToggleSwitch } from "@codegouvfr/react-dsfr/ToggleSwitch";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { useAuth } from "../hooks/useAuth";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  preferredContact: "email" | "phone" | "mail";
}

interface NotificationSettings {
  emailNotifications: boolean;
  smsNotifications: boolean;
  newsletterSubscription: boolean;
}

export function ProfilePage() {
  const { isAuthenticated, user } = useAuth();

  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: user?.firstName || "Jean",
    lastName: user?.lastName || "Dupont",
    email: user?.email || "demo@example.fr",
    phone: "06 12 34 56 78",
    address: "1 rue de la République",
    postalCode: "75001",
    city: "Paris",
    preferredContact: "email"
  });

  const [notifications, setNotifications] = useState<NotificationSettings>({
    emailNotifications: true,
    smsNotifications: false,
    newsletterSubscription: true
  });

  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
  const [isEditing, setIsEditing] = useState(false);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaveStatus("success");
    setIsEditing(false);

    // Reset status after delay
    setTimeout(() => setSaveStatus("idle"), 3000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data to original values
    setFormData({
      firstName: user?.firstName || "Jean",
      lastName: user?.lastName || "Dupont",
      email: user?.email || "demo@example.fr",
      phone: "06 12 34 56 78",
      address: "1 rue de la République",
      postalCode: "75001",
      city: "Paris",
      preferredContact: "email"
    });
  };

  return (
    <div className={fr.cx("fr-container", "fr-py-8w")}>
      <Breadcrumb
        currentPageLabel="Mon profil"
        segments={[
          { label: "Accueil", linkProps: { href: "/" } },
          { label: "Tableau de bord", linkProps: { href: "/dashboard" } }
        ]}
      />

      <h1 className={fr.cx("fr-h1", "fr-mb-4w")}>Mon profil</h1>

      <p className={fr.cx("fr-text--lead", "fr-mb-6w")}>
        Gérez vos informations personnelles et vos préférences de communication.
      </p>

      {saveStatus === "success" && (
        <Alert
          severity="success"
          title="Modifications enregistrées"
          description="Vos informations ont été mises à jour avec succès."
          className={fr.cx("fr-mb-4w")}
          closable
          onClose={() => setSaveStatus("idle")}
        />
      )}

      <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
        {/* Personal Information */}
        <div className={fr.cx("fr-col-12", "fr-col-lg-8")}>
          <div className={fr.cx("fr-p-4w")} style={{ backgroundColor: "var(--background-default-grey)" }}>
            <div className={fr.cx("fr-grid-row", "fr-grid-row--middle", "fr-mb-4w")}>
              <div className={fr.cx("fr-col")}>
                <h2 className={fr.cx("fr-h3", "fr-mb-0")}>Informations personnelles</h2>
              </div>
              {!isEditing && (
                <div>
                  <Button
                    priority="secondary"
                    size="small"
                    iconId="fr-icon-edit-line"
                    onClick={() => setIsEditing(true)}
                  >
                    Modifier
                  </Button>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit}>
              <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
                <div className={fr.cx("fr-col-12", "fr-col-md-6")}>
                  <Input
                    label="Prénom"
                    disabled={!isEditing}
                    nativeInputProps={{
                      value: formData.firstName,
                      onChange: (e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))
                    }}
                  />
                </div>
                <div className={fr.cx("fr-col-12", "fr-col-md-6")}>
                  <Input
                    label="Nom"
                    disabled={!isEditing}
                    nativeInputProps={{
                      value: formData.lastName,
                      onChange: (e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))
                    }}
                  />
                </div>
              </div>

              <Input
                label="Adresse email"
                hintText="Utilisée pour les notifications"
                disabled={!isEditing}
                nativeInputProps={{
                  type: "email",
                  value: formData.email,
                  onChange: (e) => setFormData(prev => ({ ...prev, email: e.target.value }))
                }}
              />

              <Input
                label="Téléphone"
                disabled={!isEditing}
                nativeInputProps={{
                  type: "tel",
                  value: formData.phone,
                  onChange: (e) => setFormData(prev => ({ ...prev, phone: e.target.value }))
                }}
              />

              <Input
                label="Adresse"
                disabled={!isEditing}
                nativeInputProps={{
                  value: formData.address,
                  onChange: (e) => setFormData(prev => ({ ...prev, address: e.target.value }))
                }}
              />

              <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
                <div className={fr.cx("fr-col-12", "fr-col-md-4")}>
                  <Input
                    label="Code postal"
                    disabled={!isEditing}
                    nativeInputProps={{
                      value: formData.postalCode,
                      onChange: (e) => setFormData(prev => ({ ...prev, postalCode: e.target.value }))
                    }}
                  />
                </div>
                <div className={fr.cx("fr-col-12", "fr-col-md-8")}>
                  <Input
                    label="Ville"
                    disabled={!isEditing}
                    nativeInputProps={{
                      value: formData.city,
                      onChange: (e) => setFormData(prev => ({ ...prev, city: e.target.value }))
                    }}
                  />
                </div>
              </div>

              <RadioButtons
                legend="Moyen de contact préféré"
                disabled={!isEditing}
                name="preferredContact"
                options={[
                  {
                    label: "Email",
                    nativeInputProps: {
                      value: "email",
                      checked: formData.preferredContact === "email",
                      onChange: () => setFormData(prev => ({ ...prev, preferredContact: "email" }))
                    }
                  },
                  {
                    label: "Téléphone",
                    nativeInputProps: {
                      value: "phone",
                      checked: formData.preferredContact === "phone",
                      onChange: () => setFormData(prev => ({ ...prev, preferredContact: "phone" }))
                    }
                  },
                  {
                    label: "Courrier postal",
                    nativeInputProps: {
                      value: "mail",
                      checked: formData.preferredContact === "mail",
                      onChange: () => setFormData(prev => ({ ...prev, preferredContact: "mail" }))
                    }
                  }
                ]}
                orientation="horizontal"
              />

              {isEditing && (
                <div className={fr.cx("fr-mt-4w")}>
                  <Button type="submit" className={fr.cx("fr-mr-2w")}>
                    Enregistrer
                  </Button>
                  <Button
                    type="button"
                    priority="secondary"
                    onClick={handleCancel}
                  >
                    Annuler
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Notification Settings */}
        <div className={fr.cx("fr-col-12", "fr-col-lg-4")}>
          <div className={fr.cx("fr-p-4w")} style={{ backgroundColor: "var(--background-default-grey)" }}>
            <h2 className={fr.cx("fr-h3", "fr-mb-4w")}>Préférences de notification</h2>

            <ToggleSwitch
              label="Notifications par email"
              helperText="Recevez des mises à jour sur vos démarches"
              checked={notifications.emailNotifications}
              onChange={(checked) => setNotifications(prev => ({ ...prev, emailNotifications: checked }))}
              className={fr.cx("fr-mb-3w")}
            />

            <ToggleSwitch
              label="Notifications par SMS"
              helperText="Alertes importantes uniquement"
              checked={notifications.smsNotifications}
              onChange={(checked) => setNotifications(prev => ({ ...prev, smsNotifications: checked }))}
              className={fr.cx("fr-mb-3w")}
            />

            <ToggleSwitch
              label="Newsletter"
              helperText="Actualités et nouveaux services"
              checked={notifications.newsletterSubscription}
              onChange={(checked) => setNotifications(prev => ({ ...prev, newsletterSubscription: checked }))}
            />
          </div>

          {/* Security Section */}
          <div className={fr.cx("fr-mt-4w", "fr-p-4w")} style={{ backgroundColor: "var(--background-default-grey)" }}>
            <h2 className={fr.cx("fr-h3", "fr-mb-4w")}>Sécurité</h2>

            <Button
              priority="secondary"
              iconId="fr-icon-lock-line"
              className={fr.cx("fr-mb-2w")}
              style={{ width: "100%" }}
            >
              Modifier le mot de passe
            </Button>

            <Button
              priority="tertiary"
              iconId="fr-icon-shield-line"
              style={{ width: "100%" }}
            >
              Activer l'authentification à deux facteurs
            </Button>
          </div>

          {/* Account Actions */}
          <div className={fr.cx("fr-mt-4w", "fr-p-4w")} style={{ backgroundColor: "var(--background-default-grey)" }}>
            <h2 className={fr.cx("fr-h3", "fr-mb-4w")}>Mon compte</h2>

            <Button
              priority="tertiary"
              iconId="fr-icon-download-line"
              className={fr.cx("fr-mb-2w")}
              style={{ width: "100%" }}
            >
              Télécharger mes données
            </Button>

            <Button
              priority="tertiary"
              iconId="fr-icon-delete-line"
              style={{ width: "100%", color: "var(--text-default-error)" }}
            >
              Supprimer mon compte
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
