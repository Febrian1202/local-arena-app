import { prisma, TournamentStatus } from "@/lib/prisma";

async function main() {
  console.log("   Memulai proses seeding database...");

  // 1. Bersihkan data lama
  await prisma.match.deleteMany();
  await prisma.player.deleteMany();
  await prisma.tournament.deleteMany();
  await prisma.team.deleteMany();
  await prisma.user.deleteMany();

  // 2. Buat Users
  const teamNames = [
    "Team Alpha",
    "Shadow Wolves",
    "Neon Strikers",
    "Cyber Dragons",
    "Iron Clads",
    "Phantom X",
    "Storm Riders",
    "Nova Elite",
  ];

  const teams = [];

  for (let i = 0; i < teamNames.length; i++) {
    const user = await prisma.user.create({
      data: {
        name: `Captain ${teamNames[i]}`,
        email: `captain${i}@localarena.com`,
        role: "CAPTAIN",
        team: {
          create: {
            name: teamNames[i],
            logo: `https://api.dicebear.com/7.x/bottts/svg?seed=${teamNames[i]}`,
            players: {
              create: [
                {
                  nickname: `${teamNames[i]} Player 1`,
                  gameId: `ID-${i}01`,
                  role: "Jungler",
                },
                {
                  nickname: `${teamNames[i]} Player 2`,
                  gameId: `ID-${i}02`,
                  role: "Gold Lane",
                },
                {
                  nickname: `${teamNames[i]} Player 3`,
                  gameId: `ID-${i}03`,
                  role: "Mid Lane",
                },
                {
                  nickname: `${teamNames[i]} Player 4`,
                  gameId: `ID-${i}04`,
                  role: "EXP Lane",
                },
                {
                  nickname: `${teamNames[i]} Player 5`,
                  gameId: `ID-${i}05`,
                  role: "Roamer",
                },
              ],
            },
          },
        },
      },
      include: {
        team: true,
      },
    });
    // Simpan team yang berhasil dibuat ke dalam array yang untuk dipakai di turnamen
    if (user.team) teams.push(user.team);
  }

  console.log(
    `   Berhasil membuat ${teams.length} tim beserta kapten dan pemainnya.`,
  );

  // Buat Turnamen
  const tournament = await prisma.tournament.create({
    data: {
      name: "Local Arena Weekly #1",
      description: "Turnamen mingguan untuk mencari tim terbaik di komunitas.",
      prizePool: "Rp 5.000.000",
      maxSlots: 8,
      status: TournamentStatus.ONGOING,
      startDate: new Date(),
      teams: {
        connect: teams.map((t) => ({ id: t.id })), // Masukkan semua 8 time ke turnamen
      },
    },
  });

  console.log(`   Berhasil membuat turnamen ${tournament.name}`);

  // Buat Matches (Simulasi Bracket)
  // Untuk mempermudah logika Relasi Self-Referenching (nextMatch)
  // kita buat dari babak Final dulu, lalu mundur ke Semi-Final, lalu Quarter-Final.

  // -- FINALS (Round 3) --
  const finalMatch = await prisma.match.create({
    data: {
      tournamentId: tournament.id,
      round: 3,
      matchNumber: 1,
      teamAId: teams[0].id, // Team Alpha
      teamBId: teams[7].id, // Nova Elite
      scoreA: 3,
      scoreB: 1,
      winnerId: teams[0].id, // Team Alpha Juara!
    },
  });

  // -- SEMI-FINALS (Round 2) --
  const semiFinal1 = await prisma.match.create({
    data: {
      tournamentId: tournament.id,
      round: 2,
      matchNumber: 1,
      teamAId: teams[0].id, // Team Alpha
      teamBId: teams[3].id, // Cyber Dragons
      scoreA: 2,
      scoreB: 1,
      winnerId: teams[0].id, // Team Alpha maju ke Final
    },
  });

  const semiFinal2 = await prisma.match.create({
    data: {
      tournamentId: tournament.id,
      round: 2,
      matchNumber: 2,
      teamAId: teams[4].id, // Team Alpha
      teamBId: teams[7].id, // Cyber Dragons
      scoreA: 0,
      scoreB: 2,
      winnerId: teams[7].id, // Nova Elite maju ke Final
    },
  });

  // -- QUARTER-FINALS (Round 1) --
  const quarterFinals = [
    {
      a: 0,
      b: 1,
      sA: 2,
      sB: 0,
      win: 0,
      next: semiFinal1.id,
    }, // Alpha vs Shadow Wolves
    {
      a: 2,
      b: 3,
      sA: 1,
      sB: 2,
      win: 3,
      next: semiFinal1.id,
    }, // Neon Strikers vs Cyber Dragon
    {
      a: 4,
      b: 5,
      sA: 2,
      sB: 1,
      win: 4,
      next: semiFinal2.id,
    }, // Iron Clads vs Phantom X
    {
      a: 6,
      b: 7,
      sA: 0,
      sB: 2,
      win: 7,
      next: semiFinal2.id,
    }, // Storm Riders vs Nova Elite
  ];

  for (let i = 0; i < quarterFinals.length; i++) {
    const qf = quarterFinals[i];
    await prisma.match.create({
      data: {
        tournamentId: tournament.id,
        round: 1,
        matchNumber: i + 1,
        teamAId: teams[qf.a].id,
        teamBId: teams[qf.b].id,
        scoreA: qf.sA,
        scoreB: qf.sB,
        winnerId: teams[qf.win].id,
        nextMatchId: qf.next,
      },
    });
  }

  console.log(`   Berhasil merangkai Bracket Match (Quarter, Semi, Finals).`);
  console.log(`   Seeding Selesai.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
