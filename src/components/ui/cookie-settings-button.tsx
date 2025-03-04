
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

interface CookieSettingsButtonProps {
  onClick: () => void;
}

export const CookieSettingsButton = ({ onClick }: CookieSettingsButtonProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-md hover:bg-white"
      onClick={onClick}
    >
      <Cookie className="h-4 w-4" />
      <span className="text-xs">Cookies</span>
    </Button>
  );
};
