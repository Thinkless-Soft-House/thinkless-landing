
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: (settings: CookieSettings) => void;
  onReject: () => void;
}

interface CookieTypeProps {
  id: keyof CookieSettings;
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

// Componente separado para cada tipo de cookie para melhorar reuso
const CookieType = ({ id, label, description, checked, disabled = false, onCheckedChange }: CookieTypeProps) => (
  <div className="flex items-start space-x-3 p-3 border rounded-md">
    <Checkbox 
      id={id} 
      checked={checked} 
      disabled={disabled}
      onCheckedChange={(checked) => onCheckedChange?.(checked === true)}
    />
    <div>
      <Label 
        htmlFor={id} 
        className="font-medium text-foreground"
      >
        {label}
      </Label>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  </div>
);

export const CookieConsent = ({ 
  open, 
  onOpenChange, 
  onAccept, 
  onReject 
}: CookieConsentProps) => {
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true, // Essenciais são sempre necessários
    analytics: false,
    marketing: false,
  });
  
  const [showDetails, setShowDetails] = useState(false);

  const handleAcceptSelected = () => {
    onAccept(settings);
    toast.success("Preferências de cookies salvas!");
  };

  const handleAcceptAll = () => {
    const allSettings = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    onAccept(allSettings);
    toast.success("Todos os cookies foram aceitos!");
  };

  const handleReject = () => {
    onReject();
    toast.info("Cookies rejeitados. Algumas funcionalidades podem estar limitadas.");
  };

  const cookieTypes = [
    {
      id: "essential" as keyof CookieSettings,
      label: "Cookies Essenciais",
      description: "Necessários para o funcionamento básico do site. Não podem ser desativados.",
      checked: settings.essential,
      disabled: true
    },
    {
      id: "analytics" as keyof CookieSettings,
      label: "Cookies Analíticos",
      description: "Nos ajudam a entender como os visitantes interagem com o site, permitindo melhorar a experiência de navegação.",
      checked: settings.analytics,
      onCheckedChange: (checked: boolean) => setSettings({...settings, analytics: checked})
    },
    {
      id: "marketing" as keyof CookieSettings,
      label: "Cookies de Marketing",
      description: "Usados para rastrear visitantes em sites. A intenção é exibir anúncios relevantes e envolventes para o usuário.",
      checked: settings.marketing,
      onCheckedChange: (checked: boolean) => setSettings({...settings, marketing: checked})
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto overflow-x-hidden w-[calc(100%-2rem)] mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Política de Cookies</DialogTitle>
          <DialogDescription className="pt-2">
            Utilizamos cookies para melhorar sua experiência em nosso site. 
            Ao navegar, você concorda com a nossa política de privacidade.
          </DialogDescription>
        </DialogHeader>
        
        {showDetails && (
          <div className="space-y-4 my-4">
            {cookieTypes.map((cookieType) => (
              <CookieType 
                key={cookieType.id}
                id={cookieType.id}
                label={cookieType.label}
                description={cookieType.description}
                checked={cookieType.checked}
                disabled={cookieType.disabled}
                onCheckedChange={cookieType.onCheckedChange}
              />
            ))}
          </div>
        )}
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2 pt-2">
          <Button
            variant="outline"
            className="w-full md:w-auto"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Esconder detalhes" : "Personalizar preferências"}
          </Button>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            onClick={handleReject}
            className="w-full sm:w-auto"
          >
            Rejeitar todos
          </Button>
          <Button 
            variant="outline" 
            onClick={handleAcceptSelected}
            className="w-full sm:w-auto"
          >
            Aceitar selecionados
          </Button>
          <Button 
            onClick={handleAcceptAll}
            className="w-full sm:w-auto bg-thinkless-blue hover:bg-thinkless-blue/90"
          >
            Aceitar todos
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
