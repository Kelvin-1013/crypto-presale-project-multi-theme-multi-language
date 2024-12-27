import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Rocket, Coins } from "lucide-react";

export function Utilities() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Fast Transactions",
      description: "Lightning-fast transaction speeds with minimal fees"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure Platform",
      description: "Advanced security measures to protect your assets"
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "AI Integration",
      description: "Cutting-edge AI features for enhanced functionality"
    },
    {
      icon: <Coins className="w-8 h-8 text-primary" />,
      title: "Staking Rewards",
      description: "Earn rewards by participating in our staking program"
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {t("utilitiesTitle") || "Utilities"}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="backdrop-blur-lg bg-background/80">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{t(feature.title) || feature.title}</h3>
                <p className="text-muted-foreground">{t(feature.description) || feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}