const tournaments = [
  {
    name: "Valorant Showdown",
    game: "Valorant",
    status: "Live",
    prize: "$500",
    slots: "16/16",
    statusColor: "neon-pink",
  },
  {
    name: "CS2 Community Cup",
    game: "CS2",
    status: "Upcoming",
    prize: "$750",
    slots: "8/16",
    statusColor: "primary",
  },
  {
    name: "MLBB Championship",
    game: "Mobile Legends: Bang Bang",
    status: "Upcoming",
    prize: "$300",
    slots: "12/32",
    statusColor: "primary",
  },
  {
    name: "Dota 2 Battle Arena",
    game: "Dota 2",
    status: "Live",
    prize: "$1.000",
    slots: "8/8",
    statusColor: "neon-pink",
  },
  {
    name: "PUBG Warzone",
    game: "PUBG Mobile",
    status: "Upcoming",
    prize: "$250",
    slots: "20/32",
    statusColor: "primary",
  },
  {
    name: "League Finals",
    game: "League of Legends",
    status: "Completed",
    prize: "$2.000",
    slots: "16/16",
    statusColor: "muted-foreground",
  },
];

const gameColors: Record<string, string> = {
  Valorant: "from-[hsl(0,80%,55%)] to-[hsl(340,80%,45%)]",
  "Counter-Strike 2": "from-[hsl(35,90%,50%)] to-[hsl(20,80%,40%)]",
  "Mobile Legends": "from-[hsl(210,90%,50%)] to-[hsl(240,70%,40%)]",
  "Dota 2": "from-[hsl(10,80%,50%)] to-[hsl(30,70%,35%)]",
  "PUBG Mobile": "from-[hsl(45,80%,50%)] to-[hsl(30,60%,35%)]",
  "League of Legends": "from-[hsl(200,80%,45%)] to-[hsl(220,70%,30%)]",
};

const TournamentCards = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase text-foreground mb-3 ">
            Explore{" "}
            <span className="text-primary text-glow-cyan">Tournaments</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Find and join tournaments happening in your community right now.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tournaments.map((t, i) => (
            <div
              key={t.name}
              className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(185_100%_50%/0.15)] neon-border-cyan animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Banner */}
              <div
                className={`h-28 bg-linear-to-br ${gameColors[t.game] || "from-muted to-card"} relative`}
              >
                <div className="absolute inset-0 bg-background/30" />
                <div className="absolute bottom-3 left-4 font-heading text-xs font-semibold uppercase tracking-wider text-foreground/80">
                  {t.game}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {t.name}
                  </h3>
                  <span
                    className={`flex items-center gap-1.5 text-xs font-medium ${t.status === "Live" ? "text-neon-pink" : t.status === "Upcoming" ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {t.status === "Live" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse-dot" />
                    )}
                    {t.status}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-muted-foreground text-xs">
                      Prize Pool
                    </span>
                    <div className="font-heading text-base font-bold text-primary">
                      {t.prize}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-muted-foreground text-xs">Teams</span>
                    <div className="font-heading text-base font-bold text-foreground">
                      {t.slots}
                    </div>
                  </div>
                </div>

                <button className="w-full mt-4 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-wider border border-primary/30 text-primary transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(185_100%_50%/0.1)]">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentCards;
