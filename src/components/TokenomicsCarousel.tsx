import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function TokenomicsCarousel() {
  const { t } = useLanguage();

  const tokenomicsData = [
    { name: "Presale", value: 40, color: "#8b5cf6" },
    { name: "Liquidity", value: 30, color: "#3b82f6" },
    { name: "Marketing", value: 15, color: "#10b981" },
    { name: "Team", value: 10, color: "#f59e0b" },
    { name: "Reserve", value: 5, color: "#ef4444" },
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {t("tokenomicsTitle") || "Tokenomics"}
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <Card className="backdrop-blur-lg bg-background/80">
                <CardContent className="p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={tokenomicsData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {tokenomicsData.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="backdrop-blur-lg bg-background/80">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{t("tokenDetails") || "Token Details"}</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-semibold">{t("totalSupply") || "Total Supply"}:</span> 1,000,000,000
                    </li>
                    <li>
                      <span className="font-semibold">{t("network") || "Network"}:</span> Ethereum
                    </li>
                    <li>
                      <span className="font-semibold">{t("type") || "Type"}:</span> ERC-20
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}