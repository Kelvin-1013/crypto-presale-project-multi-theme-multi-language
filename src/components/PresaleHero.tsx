import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function PresaleHero() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 -z-10" />
      <div className="max-w-4xl mx-auto text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-float">
          {t("presaleTitle")}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          {t("presaleSubtitle")}
        </p>
        <Button size="lg" className="text-lg px-8">
          {t("buyNow")}
        </Button>
      </div>
    </div>
  );
}