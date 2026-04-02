const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_100%_65%/0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(185_100%_50%/0.08),transparent_50%)]" />

      {/* Grid Lines */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
        style={{
          backgroundImage: `linear-gradient(hsl(185 100% 50% / 0.3) 1px), linear-gradient(90deg, hsl(185 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 neon-borader-cyan animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Season 4 Now Live
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-tight mb-6 animate-fade-in"
          style={{
            animationDelay: "0.1s",
          }}
        >
          <span className="text-foreground">Kuasai Arena,</span>
          <br />
          <span className="text-primary text-glow-cyan">Jadilah Legenda.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          The ultimate esports tournament management platform for your
          community. Register your team, track real-time brackets, and claim
          victory.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <button className="bg-primary text-primary-foreground font-heading text-sm font-semibold px-8 py-3.5 rounded-full glow-cyan transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(185_100%_50%/0.5)]">
            Find Tournaments
          </button>
          <button className="border border-neon-pink/40 text-neon-pink font-heading text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-neon-pink/10 hover:shadow-[0_0_30px_hsl(320_100%_60%/0.3)] hover:scale-105">
            Register Team
          </button>
        </div>

        {/* Stats Row */}
        <div
          className="flex items-center justify-center gap-8 md:gap-16 mt-16 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { value: "2.400+", label: "Players" },
            { value: "180+", label: "Tournaments" },
            { value: "$50K+", label: "Prize Pool" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-xl md:text-2xl font-bold text-primary text-glow-cyan">
                {stat.value}
              </div>
              <div className="text-xs text-mutedtext-muted-foreground uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
