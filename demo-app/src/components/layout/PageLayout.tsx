import type { ReactNode } from "react";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";
import { SkipLinks } from "@codegouvfr/react-dsfr/SkipLinks";
import { Display } from "@codegouvfr/react-dsfr/Display";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SkipLinks
        links={[
          {
            anchor: "#content",
            label: "Contenu"
          },
          {
            anchor: "#footer",
            label: "Pied de page"
          }
        ]}
      />
      <AppHeader />
      <main id="content" role="main" style={{ flex: 1 }}>
        {children}
      </main>
      <AppFooter />
      <Display />
    </div>
  );
}
