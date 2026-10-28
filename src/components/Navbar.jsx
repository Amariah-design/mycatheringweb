import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/services" },
    { name: "Our Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const linkStyle = ({ isActive }) =>
        `block py-2 text-sm transition ${
            isActive
                ? "font-semibold text-[#c85c78]"
                : "text-[#5f514c] hover:text-[#c85c78]"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-[#eee2db] bg-[#fffaf7]/95 backdrop-blur">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
                <Link to="/" className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5e2e4] text-2xl text-[#a84662]">
                        ♡
                    </span>
                    <span>
                        <span className="block font-serif text-xl font-bold text-[#754b47]">
                            SweetBites
                        </span>
                        <span className="block text-[9px] uppercase tracking-[0.3em] text-[#ad8050]">
                            Catering & Cakes
                        </span>
                    </span>
                </Link>

                <div className="hidden items-center gap-6 lg:flex">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === "/"}
                            className={linkStyle}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <Link
                    to="/contact"
                    className="hidden rounded-full bg-[#c85c78] px-5 py-3 text-sm text-white transition hover:bg-[#a84662] sm:inline-block"
                >
                    Book a Service ↗
                </Link>

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    className="rounded-lg border border-[#eadbd3] px-3 py-2 text-xl lg:hidden"
                >
                    {open ? "×" : "☰"}
                </button>
            </nav>

            {open && (
                <div className="border-t border-[#eee2db] bg-[#fffaf7] px-5 py-4 lg:hidden">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === "/"}
                            onClick={() => setOpen(false)}
                            className={linkStyle}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="mt-3 inline-block rounded-full bg-[#c85c78] px-5 py-3 text-sm text-white"
                    >
                        Book a Service
                    </Link>
                </div>
            )}
        </header>
    );
}
