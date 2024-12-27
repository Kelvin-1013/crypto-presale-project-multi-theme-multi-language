import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";

export function PresaleStats() {
  const { t } = useLanguage();
  
  const stats = {
    raised: "2,500,000",
    target: "5,000,000",
    participants: "1,234",
    progress: 50,
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <Card className="p-6 backdrop-blur-lg bg-background/80">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{t("raised")}</h3>
            <p className="text-2xl font-bold">${stats.raised}</p>
          </div>
          <Progress value={stats.progress} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${stats.raised}</span>
            <span>${stats.target}</span>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 backdrop-blur-lg bg-background/80">
          <h4 className="text-sm text-muted-foreground">{t("participants")}</h4>
          <p className="text-2xl font-bold">{stats.participants}</p>
        </Card>
        <Card className="p-4 backdrop-blur-lg bg-background/80">
          <h4 className="text-sm text-muted-foreground">{t("minBuy")}</h4>
          <p className="text-2xl font-bold">0.1 ETH</p>
        </Card>
        <Card className="p-4 backdrop-blur-lg bg-background/80">
          <h4 className="text-sm text-muted-foreground">{t("maxBuy")}</h4>
          <p className="text-2xl font-bold">5 ETH</p>
        </Card>
      </div>
    </div>
  );
}