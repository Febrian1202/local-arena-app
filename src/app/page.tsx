import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar Sederhana
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost text-xl font-bold text-primary font-heading tracking-wider"
          >
            🏆 Local Arena
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link href="/tournaments">Tournaments</Link>
            </li>
            <li>
              <Link
                href="/login"
                className="btn btn-outline btn-primary btn-sm ml-2"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div> */}

      {/* Hero Section */}
      <div className="hero min-h-screen bg-base-600">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-4 font-heading uppercase tracking-wide">
              Kuasai Arena, <br />
              <span className={`text-primary`}>Jadilah Legenda.</span>
            </h1>
            <p className="py-6 text-lg opacity-80">
              Platform manajemen turnamen esports terlengkap untuk komunitasmu.
              Daftarkan timmu, pantau bracket pertandingan secar real-time, dan
              raih juara!
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/tournaments" className="btn btn-primary">
                Cari Turnamen
              </Link>
              <Link href="register" className="btn btn-neutral">
                Daftarkan Tim
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-[80vh] bg-base-600">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-4 font-heading uppercase tracking-wide">
              Kuasai Arena, <br />
              <span className={`text-primary`}>Jadilah Legenda.</span>
            </h1>
            <p className="py-6 text-lg opacity-80">
              Platform manajemen turnamen esports terlengkap untuk komunitasmu.
              Daftarkan timmu, pantau bracket pertandingan secar real-time, dan
              raih juara!
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/tournaments" className="btn btn-primary">
                Cari Turnamen
              </Link>
              <Link href="register" className="btn btn-neutral">
                Daftarkan Tim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
