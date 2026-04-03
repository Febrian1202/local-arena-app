import HeroSection from "@/components/public/HeroSection";
import TournamentCards from "@/components/public/TournamentCards";
import BracketView from "@/components/public/BracketView";
// import Footer from "@/components/public/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <HeroSection />
      <TournamentCards />
      <BracketView />
    </div>
  );
};

export default Home;
