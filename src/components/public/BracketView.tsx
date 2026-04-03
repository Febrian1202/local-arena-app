interface Team {
  name: string;
  score: number;
  winner?: boolean;
}

interface Match {
  team1: Team;
  team2: Team;
}

const bracketData: { round: string; matches: Match[] }[] = [
  {
    round: "Quarter-Finals",
    matches: [
      {
        team1: { name: "Team Alpha", score: 2, winner: true },
        team2: { name: "Shadow Wolves", score: 0 },
      },
      {
        team1: { name: "Neon Strikers", score: 1 },
        team2: { name: "Cyber Dragons", score: 2, winner: true },
      },
      {
        team1: { name: "Iron Clads", score: 2, winner: true },
        team2: { name: "Phantom X", score: 1 },
      },
      {
        team1: { name: "Storm Riders", score: 0 },
        team2: { name: "Nova Elite", score: 2, winner: true },
      },
    ],
  },
  {
    round: "Semi-Finals",
    matches: [
      {
        team1: { name: "Team Alpha", score: 2, winner: true },
        team2: { name: "Cyber Dragons", score: 1 },
      },
      {
        team1: { name: "Iron Clads", score: 0 },
        team2: { name: "Nova Elite", score: 2, winner: true },
      },
    ],
  },
  {
    round: "Finals",
    matches: [
      {
        team1: { name: "Team Alpha", score: 3, winner: true },
        team2: { name: "Nova Elite", score: 1 },
      },
    ],
  },
];

const MatchBox = ({ match }: { match: Match }) => (
  <div className="glass rounded-xl overflow-hidden neon-border-cyan w-56 shrink-0">
    {[match.team1, match.team2].map((team, idx) => (
      <div
        key={idx}
        className={`flex items-center justify-between px-3 py-2.5 ${
          idx === 0 ? "border-b border-border/50" : ""
        } ${team.winner ? "bg-primary/10" : ""}`}
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-6 rounded-md ${team.winner ? "bg-primary/30 neon-border-cyan" : "bg-muted"} flex items-center justify-center`}
          >
            <span className="text-[10px] font-heading font-bold text-foreground">
              {team.name.charAt(0)}
            </span>
          </div>
          <span
            className={`text-xs font-medium ${team.winner ? "text-primary" : "text-muted-foreground"}`}
          >
            {team.name}
          </span>
        </div>
        <span
          className={`font-heading text-sm font-bold ${team.winner ? "text-primary text-glow-cyan" : "text-muted-foreground"}`}
        >
          {team.score}
        </span>
      </div>
    ))}
  </div>
);

const BracketView = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(320_100%_60%/0.06),transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase text-foreground mb-3">
            Live <span className="text-neon-pink text-glow-pink">Bracket</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Follow the action as teams battle through the elimination rounds.
          </p>
        </div>

        {/* Bracket */}
        <div className="overflow-x-auto pb-4">
          <div className="flex items-center gap-2 min-w-max justify-center">
            {bracketData.map((round, roundIdx) => (
              <div key={round.round} className="flex items-center">
                <div className="flex flex-col items-center">
                  <span className="font-heading text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    {round.round}
                  </span>
                  <div
                    className="flex flex-col gap-6"
                    style={{
                      justifyContent: "space-around",
                      minHeight:
                        round.matches.length === 1
                          ? "auto"
                          : `${round.matches.length * 90}px`,
                    }}
                  >
                    {round.matches.map((match, matchIdx) => (
                      <MatchBox key={matchIdx} match={match} />
                    ))}
                  </div>
                </div>

                {/* Connector lines */}
                {roundIdx < bracketData.length - 1 && (
                  <div className="flex items-center mx-3">
                    <svg
                      width="40"
                      height={round.matches.length * 90}
                      className="overflow-visible"
                    >
                      {round.matches.map((_, i) => {
                        if (i % 2 !== 0) return null;
                        const y1 = i * 90 + 45;
                        const y2 = (i + 1) * 90 + 45;
                        const midY = (y1 + y2) / 2;
                        return (
                          <g key={i}>
                            <line
                              x1="0"
                              y1={y1}
                              x2="15"
                              y2={y1}
                              stroke="hsl(185 100% 50% / 0.3)"
                              strokeWidth="1.5"
                            />
                            <line
                              x1="0"
                              y1={y2}
                              x2="15"
                              y2={y2}
                              stroke="hsl(185 100% 50% / 0.3)"
                              strokeWidth="1.5"
                            />
                            <line
                              x1="15"
                              y1={y1}
                              x2="15"
                              y2={y2}
                              stroke="hsl(185 100% 50% / 0.3)"
                              strokeWidth="1.5"
                            />
                            <line
                              x1="15"
                              y1={midY}
                              x2="40"
                              y2={midY}
                              stroke="hsl(185 100% 50% / 0.3)"
                              strokeWidth="1.5"
                            />
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Winner banner */}
        <div
          className="mt-10 flex justify-center animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="glass rounded-2xl px-8 py-4 neon-border-cyan glow-cyan flex items-center gap-4">
            <span className="text-3xl">🏆</span>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-heading">
                Champion
              </div>
              <div className="font-heading text-lg font-bold text-primary text-glow-cyan">
                Team Alpha
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BracketView;
