import { useState, type FormEvent } from "react";
import { fr } from "@codegouvfr/react-dsfr/fr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { Select } from "@codegouvfr/react-dsfr/Select";
import { Checkbox } from "@codegouvfr/react-dsfr/Checkbox";
import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";
import type { ContactFormData } from "../types";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  consent?: string;
}

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est obligatoire";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Veuillez saisir une adresse email valide";
    }

    if (!formData.subject) {
      newErrors.subject = "Veuillez sélectionner un sujet";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est obligatoire";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Le message doit contenir au moins 20 caractères";
    }

    if (!formData.consent) {
      newErrors.consent = "Vous devez accepter la politique de confidentialité";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      (firstErrorField as HTMLElement)?.focus();
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitStatus("success");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      consent: false
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      consent: false
    });
    setErrors({});
    setSubmitStatus("idle");
  };

  return (
    <div className={fr.cx("fr-container", "fr-py-8w")}>
      <Breadcrumb
        currentPageLabel="Contact"
        segments={[
          { label: "Accueil", linkProps: { href: "/" } }
        ]}
      />

      <div className={fr.cx("fr-grid-row", "fr-grid-row--gutters")}>
        <div className={fr.cx("fr-col-12", "fr-col-lg-8")}>
          <h1 className={fr.cx("fr-h1", "fr-mb-4w")}>Nous contacter</h1>

          <p className={fr.cx("fr-text--lead", "fr-mb-6w")}>
            Une question, une suggestion ou besoin d'aide ? Remplissez le formulaire ci-dessous
            et notre équipe vous répondra dans les meilleurs délais.
          </p>

          {submitStatus === "success" && (
            <Alert
              severity="success"
              title="Message envoyé"
              description="Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais."
              className={fr.cx("fr-mb-4w")}
              closable
              onClose={() => setSubmitStatus("idle")}
            />
          )}

          {submitStatus === "error" && (
            <Alert
              severity="error"
              title="Erreur"
              description="Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
              className={fr.cx("fr-mb-4w")}
              closable
              onClose={() => setSubmitStatus("idle")}
            />
          )}

          <form onSubmit={handleSubmit} noValidate>
            <Input
              label="Nom complet"
              hintText="Prénom et nom de famille"
              state={errors.name ? "error" : "default"}
              stateRelatedMessage={errors.name}
              nativeInputProps={{
                required: true,
                name: "name",
                value: formData.name,
                onChange: (e) => {
                  setFormData(prev => ({ ...prev, name: e.target.value }));
                  if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                },
                "aria-invalid": !!errors.name
              }}
            />

            <Input
              label="Adresse email"
              hintText="exemple@domaine.fr"
              state={errors.email ? "error" : "default"}
              stateRelatedMessage={errors.email}
              nativeInputProps={{
                type: "email",
                required: true,
                name: "email",
                value: formData.email,
                onChange: (e) => {
                  setFormData(prev => ({ ...prev, email: e.target.value }));
                  if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                },
                "aria-invalid": !!errors.email
              }}
            />

            <Select
              label="Sujet de votre demande"
              state={errors.subject ? "error" : "default"}
              stateRelatedMessage={errors.subject}
              nativeSelectProps={{
                required: true,
                name: "subject",
                value: formData.subject,
                onChange: (e) => {
                  setFormData(prev => ({ ...prev, subject: e.target.value }));
                  if (errors.subject) setErrors(prev => ({ ...prev, subject: undefined }));
                },
                "aria-invalid": !!errors.subject
              }}
            >
              <option value="">Sélectionnez un sujet</option>
              <option value="info">Demande d'information</option>
              <option value="demarche">Question sur une démarche</option>
              <option value="technique">Problème technique</option>
              <option value="reclamation">Réclamation</option>
              <option value="autre">Autre</option>
            </Select>

            <Input
              label="Votre message"
              hintText="Décrivez votre demande en détail"
              state={errors.message ? "error" : "default"}
              stateRelatedMessage={errors.message}
              textArea
              nativeTextAreaProps={{
                required: true,
                name: "message",
                rows: 6,
                value: formData.message,
                onChange: (e) => {
                  setFormData(prev => ({ ...prev, message: e.target.value }));
                  if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
                },
                "aria-invalid": !!errors.message
              }}
            />

            <Checkbox
              state={errors.consent ? "error" : "default"}
              stateRelatedMessage={errors.consent}
              options={[
                {
                  label: (
                    <>
                      J'accepte que mes données soient traitées conformément à la{" "}
                      <a href="/politique-confidentialite">politique de confidentialité</a>
                    </>
                  ),
                  nativeInputProps: {
                    name: "consent",
                    checked: formData.consent,
                    onChange: (e) => {
                      setFormData(prev => ({ ...prev, consent: e.target.checked }));
                      if (errors.consent) setErrors(prev => ({ ...prev, consent: undefined }));
                    }
                  }
                }
              ]}
            />

            <ButtonsGroup
              className={fr.cx("fr-mt-4w")}
              buttons={[
                {
                  children: "Envoyer le message",
                  type: "submit",
                  iconId: "fr-icon-send-plane-line",
                  iconPosition: "right"
                },
                {
                  children: "Effacer",
                  priority: "secondary",
                  type: "button",
                  onClick: handleReset
                }
              ]}
            />
          </form>
        </div>

        <div className={fr.cx("fr-col-12", "fr-col-lg-4")}>
          <CallOut
            iconId="fr-icon-phone-fill"
            title="Par téléphone"
          >
            <p className={fr.cx("fr-mb-2w")}>
              <strong>01 23 45 67 89</strong>
            </p>
            <p className={fr.cx("fr-text--sm", "fr-mb-0")}>
              Du lundi au vendredi<br />
              de 9h à 12h et de 14h à 17h
            </p>
          </CallOut>

          <div className={fr.cx("fr-mt-4w", "fr-p-4w")} style={{ backgroundColor: "var(--background-contrast-grey)" }}>
            <h3 className={fr.cx("fr-h5", "fr-mb-2w")}>
              <span className={fr.cx("fr-icon-map-pin-2-fill", "fr-mr-1w")} aria-hidden="true" />
              Adresse
            </h3>
            <p className={fr.cx("fr-text--sm", "fr-mb-0")}>
              Service Public Démo<br />
              1 rue de la République<br />
              75001 Paris
            </p>
          </div>

          <div className={fr.cx("fr-mt-4w", "fr-p-4w")} style={{ backgroundColor: "var(--background-contrast-grey)" }}>
            <h3 className={fr.cx("fr-h5", "fr-mb-2w")}>
              <span className={fr.cx("fr-icon-mail-fill", "fr-mr-1w")} aria-hidden="true" />
              Email
            </h3>
            <p className={fr.cx("fr-text--sm", "fr-mb-0")}>
              <a href="mailto:contact@service-public-demo.fr">
                contact@service-public-demo.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
