
import { useState, useEffect } from "react";

export interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "cookie-consent-settings";

export const useCookieConsent = () => {
  const [showConsentDialog, setShowConsentDialog] = useState(false);
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Verifica se o consentimento já foi dado anteriormente
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (!storedConsent) {
      // Se não houver consentimento armazenado, mostra o diálogo
      setShowConsentDialog(true);
    } else {
      // Se já houver, carrega as configurações salvas
      try {
        setCookieSettings(JSON.parse(storedConsent));
      } catch (e) {
        // Em caso de erro no parsing, reseta para o padrão e mostra o diálogo
        setShowConsentDialog(true);
      }
    }
  }, []);

  const acceptCookies = (settings: CookieSettings) => {
    setCookieSettings(settings);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(settings));
    setShowConsentDialog(false);
  };

  const rejectCookies = () => {
    const essentialOnly: CookieSettings = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setCookieSettings(essentialOnly);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(essentialOnly));
    setShowConsentDialog(false);
    
    // Aqui poderia adicionar lógica adicional para lidar com rejeição total
    // como redirecionar para uma página de explicação ou limitar funcionalidades
  };

  const reopenConsentDialog = () => {
    setShowConsentDialog(true);
  };

  return {
    showConsentDialog,
    setShowConsentDialog,
    cookieSettings,
    acceptCookies,
    rejectCookies,
    reopenConsentDialog
  };
};
