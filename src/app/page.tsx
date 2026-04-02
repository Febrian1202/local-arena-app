import HeroSection from "@/components/public/HeroSection";
import TournamentCards from "@/components/public/TournamentCards";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <HeroSection />
      <TournamentCards />
    </div>
  );
};

export default Home;
