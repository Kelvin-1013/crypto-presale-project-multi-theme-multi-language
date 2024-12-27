import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/hooks/useTheme";
import { useToast } from "@/components/ui/use-toast";

export function SettingsDropdown() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, changeTheme } = useTheme();
  const { toast } = useToast();

  const languages = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "zh", label: "中文" },
    { value: "fr", label: "Français" },
  ] as const;

  const themes = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "cyber", label: "Cyber" },
  ] as const;

  const handleLanguageChange = (newLang: typeof languages[number]["value"]) => {
    setLanguage(newLang);
    toast({
      description: "Language changed successfully",
      duration: 2000,
    });
  };

  const handleThemeChange = (newTheme: typeof themes[number]["value"]) => {
    changeTheme(newTheme);
    toast({
      description: "Theme changed successfully",
      duration: 2000,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>{t("settings")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-2 text-xs font-normal text-muted-foreground">
            {t("language")}
          </DropdownMenuLabel>
          {languages.map(({ value, label }) => (
            <DropdownMenuItem
              key={value}
              className={language === value ? "bg-accent" : ""}
              onClick={() => handleLanguageChange(value)}
            >
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-2 text-xs font-normal text-muted-foreground">
            {t("theme")}
          </DropdownMenuLabel>
          {themes.map(({ value, label }) => (
            <DropdownMenuItem
              key={value}
              className={theme === value ? "bg-accent" : ""}
              onClick={() => handleThemeChange(value)}
            >
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}