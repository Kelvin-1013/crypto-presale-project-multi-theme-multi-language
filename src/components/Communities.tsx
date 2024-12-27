import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Share2, MessagesSquare, Github } from "lucide-react";

export function Communities() {
  const { t } = useLanguage();
  
  const communities = [
    {
      icon: <Share2 className="w-6 h-6" />,
      name: "Twitter",
      members: "50K+",
      link: "https://twitter.com"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "Telegram",
      members: "25K+",
      link: "https://telegram.org"
    },
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      name: "Discord",
      members: "30K+",
      link: "https://discord.com"
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "Github",
      members: "1K+",
      link: "https://github.com"
    }
  ];

  return (
    <div className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {t("communitiesTitle") || "Join Our Communities"}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community, index) => (
            <Card key={index} className="backdrop-blur-lg bg-background/80">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">{community.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{community.name}</h3>
                <p className="text-muted-foreground mb-4">{community.members} {t("members")}</p>
                <Button asChild variant="outline" className="w-full">
                  <a href={community.link} target="_blank" rel="noopener noreferrer">
                    {t("join") || "Join"}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}