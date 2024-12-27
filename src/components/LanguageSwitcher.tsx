import { Button } from "@/components/ui/button";
import { Language } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/components/ui/use-toast";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const { toast } = useToast();

  const languages: { value: Language; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "es", label: "ES" },
    { value: "zh", label: "中文" },
  ];

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    toast({
      description: "Language changed successfully",
      duration: 2000,
    });
  };

  return (
    <div className="flex gap-2">
      {languages.map(({ value, label }) => (
        <Button
          key={value}
          variant={language === value ? "default" : "outline"}
          size="sm"
          onClick={() => handleLanguageChange(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}