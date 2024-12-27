import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

export function AboutUs() {
  const { t } = useLanguage();
  
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {t("aboutUsTitle") || "About DOGE AI"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="backdrop-blur-lg bg-background/80">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">{t("vision") || "Vision"}</h3>
              <p className="text-muted-foreground">
                {t("visionText") || "Combining the fun of memes with cutting-edge AI technology"}
              </p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-lg bg-background/80">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">{t("mission") || "Mission"}</h3>
              <p className="text-muted-foreground">
                {t("missionText") || "Creating a vibrant ecosystem where memes meet artificial intelligence"}
              </p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-lg bg-background/80">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">{t("values") || "Values"}</h3>
              <p className="text-muted-foreground">
                {t("valuesText") || "Community-driven innovation with a touch of humor"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}