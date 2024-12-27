import { Button } from "@/components/ui/button";
import { Monitor, Moon, Zap } from "lucide-react";
import { Theme, useTheme } from "@/hooks/useTheme";

export function ThemeSwitcher() {
  const { theme, changeTheme } = useTheme();

  const themes: { value: Theme; icon: React.ReactNode; label: string }[] = [
    { value: "light", icon: <Monitor className="h-4 w-4" />, label: "Light" },
    { value: "dark", icon: <Moon className="h-4 w-4" />, label: "Dark" },
    { value: "cyber", icon: <Zap className="h-4 w-4" />, label: "Cyber" },
  ];

  return (
    <div className="flex gap-2">
      {themes.map(({ value, icon, label }) => (
        <Button
          key={value}
          variant={theme === value ? "default" : "outline"}
          size="sm"
          onClick={() => changeTheme(value)}
          className="gap-2"
        >
          {icon}
          <span className="sr-only">{label}</span>
        </Button>
      ))}
    </div>
  );
}