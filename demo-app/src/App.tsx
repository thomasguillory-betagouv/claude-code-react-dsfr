import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthProvider";
import { PageLayout } from "./components/layout/PageLayout";
import { ConsentBannerAndConsentManagement } from "./consent/consentManagement";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { AboutPage } from "./pages/AboutPage";

export function App() {
  return (
    <AuthProvider>
      {/* RGPD Consent Banner - displays cookie consent dialog */}
      <ConsentBannerAndConsentManagement />

      <PageLayout>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/accessibilite" element={<AccessibilityPage />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicyPage />} />
          <Route path="/a-propos" element={<AboutPage />} />

          {/* Protected routes */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profil" element={<ProfilePage />} />
        </Routes>
      </PageLayout>
    </AuthProvider>
  );
}
