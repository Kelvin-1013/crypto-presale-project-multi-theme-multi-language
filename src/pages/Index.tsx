import { PresaleHero } from "@/components/PresaleHero";
import { PresaleStats } from "@/components/PresaleStats";
import { TokenomicsCarousel } from "@/components/TokenomicsCarousel";
import { AboutUs } from "@/components/AboutUs";
import { Roadmap } from "@/components/Roadmap";
import { Utilities } from "@/components/Utilities";
import { Communities } from "@/components/Communities";
import { SettingsDropdown } from "@/components/SettingsDropdown";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold">DOGE AI</h1>
          <SettingsDropdown />
        </div>
      </header>

      <main className="pt-16">
        <PresaleHero />
        <section className="container mx-auto px-4 py-12">
          <PresaleStats />
        </section>
        <TokenomicsCarousel />
        <AboutUs />
        <Roadmap />
        <Utilities />
        <Communities />
      </main>
    </div>
  );
};

export default Index;