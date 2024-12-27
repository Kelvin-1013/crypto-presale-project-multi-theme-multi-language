import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

export function Roadmap() {
  const { t } = useLanguage();
  
  const phases = [
    {
      title: "Q1 2024",
      items: ["Launch Token", "Community Building", "Exchange Listings"]
    },
    {
      title: "Q2 2024",
      items: ["AI Integration", "Mobile App Beta", "NFT Collection"]
    },
    {
      title: "Q3 2024",
      items: ["DAO Governance", "DeFi Features", "Strategic Partnerships"]
    },
    {
      title: "Q4 2024",
      items: ["Metaverse Integration", "Cross-chain Bridge", "Global Expansion"]
    }
  ];

  return (
    <div className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {t("roadmapTitle") || "Roadmap"}
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <Card key={index} className="backdrop-blur-lg bg-background/80">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {t(item) || item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}