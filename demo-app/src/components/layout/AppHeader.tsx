import { Header } from "@codegouvfr/react-dsfr/Header";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function AppHeader() {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <Header
      brandTop={
        <>
          RÉPUBLIQUE
          <br />
          FRANÇAISE
        </>
      }
      homeLinkProps={{
        href: "/",
        title: "Accueil - Service Public Démo"
      }}
      serviceTitle="Service Public Démo"
      serviceTagline="Application de démonstration DSFR React"
      quickAccessItems={[
        ...(isAuthenticated
          ? [
              {
                iconId: "fr-icon-user-line" as const,
                text: "Mon espace",
                linkProps: { href: "/dashboard" }
              },
              {
                iconId: "fr-icon-account-circle-line" as const,
                text: user?.firstName || "Profil",
                linkProps: { href: "/profil" }
              },
              {
                iconId: "fr-icon-logout-box-r-line" as const,
                text: "Se déconnecter",
                buttonProps: {
                  onClick: () => logout()
                }
              }
            ]
          : [
              {
                iconId: "fr-icon-account-line" as const,
                text: "Se connecter",
                linkProps: { href: "/login" }
              }
            ]),
        {
          iconId: "fr-icon-mail-line" as const,
          text: "Contact",
          linkProps: { href: "/contact" }
        }
      ]}
      navigation={[
        {
          text: "Accueil",
          linkProps: { href: "/" },
          isActive: isActive("/")
        },
        {
          text: "Services",
          menuLinks: [
            {
              text: "Tous les services",
              linkProps: { href: "/services" }
            },
            {
              text: "Démarches en ligne",
              linkProps: { href: "/services/demarches" }
            },
            {
              text: "Informations pratiques",
              linkProps: { href: "/services/informations" }
            },
            {
              text: "Aide et support",
              linkProps: { href: "/services/aide" }
            }
          ],
          isActive: isActive("/services")
        },
        {
          text: "Contact",
          linkProps: { href: "/contact" },
          isActive: isActive("/contact")
        }
      ]}
    />
  );
}
