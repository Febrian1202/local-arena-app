"use client";

import { useState } from 'react'
import Link from 'next/link';

const navLinks = [
    { title: "Tournaments", link: "/tournaments" },
    { title: "Teams", link: "/teams" },
    { title: "Bracket", link: "/bracket" }
];

const Navbar = () => {
    const [active, setActive] = useState("Tournaments");

    return (
        <nav className='fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl'>
            <div className='glass rounded-full px-4 py-2.5 flex items-center justify-between neon-border-cyan'>
                {/* Logo */}
                <Link href={"/"} className='font-heading text-sm md:text-base font-bold tracking-wider text-primary flex items-center gap-1.5 shrink-0'>
                    <span>🏆</span>
                    <span className='text-glow-cyan'>LOCAL ARENA</span>
                </Link>

                {/* Links */}
                <div className='hidden md:flex items-center gap-1'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.link}
                            onClick={() => setActive(link.title)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${active === link.title
                                ? "bg-primary/15 text-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                }`}>
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Login */}
                <Link
                    href="/login"
                    className="bg-primary text-primary-foreground font-heading text-xs font-semibold px-5 py-2 rounded-full glow-cyan transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(185_100%_50%/0.5)] shrink-0"
                >
                    Login
                </Link>
            </div>
        </nav>
    )
}

export default Navbar