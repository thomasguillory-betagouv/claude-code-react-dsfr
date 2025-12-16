import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { App } from "./App";

// Base path for GitHub Pages deployment
const basename = import.meta.env.BASE_URL;

// Initialize DSFR
startReactDsfr({
  defaultColorScheme: "system",
  Link: ({ href, ...props }: { href: string; [key: string]: unknown }) => <Link to={href} {...props} />
});

declare module "@codegouvfr/react-dsfr/spa" {
  interface RegisterLink {
    Link: typeof Link;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
