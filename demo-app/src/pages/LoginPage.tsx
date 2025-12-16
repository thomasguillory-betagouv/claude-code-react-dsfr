import { useState, type FormEvent } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { fr } from "@codegouvfr/react-dsfr/fr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { PasswordInput } from "@codegouvfr/react-dsfr/blocks/PasswordInput";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { useAuth } from "../hooks/useAuth";

export function LoginPage() {
  const { login, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const success = await login(email, password);

    if (success) {
      navigate("/dashboard");
    } else {
      setError("Identifiants incorrects. Utilisez demo@example.fr / demo123");
    }

    setIsSubmitting(false);
  };

  return (
    <div className={fr.cx("fr-container", "fr-py-8w")}>
      <Breadcrumb
        currentPageLabel="Connexion"
        segments={[
          { label: "Accueil", linkProps: { href: "/" } }
        ]}
      />

      <div className={fr.cx("fr-grid-row", "fr-grid-row--center")}>
        <div className={fr.cx("fr-col-12", "fr-col-md-8", "fr-col-lg-6")}>
          <h1 className={fr.cx("fr-h1", "fr-mb-4w")}>Connexion</h1>

          <p className={fr.cx("fr-text--lead", "fr-mb-6w")}>
            Connectez-vous pour accéder à votre espace personnel et gérer vos démarches.
          </p>

          <Alert
            severity="info"
            title="Identifiants de démonstration"
            description={
              <>
                <strong>Email :</strong> demo@example.fr<br />
                <strong>Mot de passe :</strong> demo123
              </>
            }
            className={fr.cx("fr-mb-4w")}
            small
          />

          {error && (
            <Alert
              severity="error"
              title="Erreur de connexion"
              description={error}
              className={fr.cx("fr-mb-4w")}
              closable
              onClose={() => setError(null)}
            />
          )}

          <form onSubmit={handleSubmit}>
            <Input
              label="Adresse email"
              hintText="Saisissez votre adresse email"
              nativeInputProps={{
                type: "email",
                required: true,
                autoComplete: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                disabled: isSubmitting
              }}
            />

            <PasswordInput
              label="Mot de passe"
              nativeInputProps={{
                required: true,
                autoComplete: "current-password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                disabled: isSubmitting
              }}
            />

            <div className={fr.cx("fr-mt-2w", "fr-mb-4w")}>
              <a href="#" className={fr.cx("fr-link")}>
                Mot de passe oublié ?
              </a>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isLoading}
            >
              {isSubmitting ? "Connexion en cours..." : "Se connecter"}
            </Button>
          </form>

          <hr className={fr.cx("fr-mt-6w", "fr-mb-4w")} />

          <div style={{ textAlign: "center" }}>
            <p className={fr.cx("fr-mb-2w")}>Vous n'avez pas encore de compte ?</p>
            <Button
              priority="secondary"
              linkProps={{ href: "#" }}
            >
              Créer un compte
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
