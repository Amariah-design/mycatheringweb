import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#392b27] px-5 py-10 text-[#f8efeb] md:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <Link to="/" className="font-serif text-2xl font-bold">
                        SweetBites<span className="text-[#e8b4c0]">.</span>
                    </Link>
                    <p className="mt-2 text-sm text-[#d8c6bd]">
                        Good food, made for good moments.
                    </p>
                </div>

                <div className="flex flex-wrap gap-5 text-sm text-[#e5d5ce]">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>

            <div className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-5 text-xs text-[#cbb8af]">
                © {new Date().getFullYear()} SweetBites Catering. All rights
                reserved.
            </div>
        </footer>
    );
}
