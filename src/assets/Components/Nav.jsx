import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import churchLogo from "../Images/ack-diocese-of-mount-kenya-south.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const ministries = [
  { name: "Children Ministry", path: "/ministries/children" },
  { name: "Youth Ministry", path: "/ministries/youth" },
  { name: "Mothers Union Ministry", path: "/ministries/mothers" },
  { name: "KAMA Ministry", path: "/ministries/kama" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ministriesOpen, setMinistriesOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-amber-400/10 text-amber-300"
        : "text-slate-200 hover:bg-white/10 hover:text-amber-300"
    }`;

  const closeMenus = () => {
    setMenuOpen(false);
    setMinistriesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950 text-white shadow-lg">
      {/* Main navigation bar */}
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Church identity */}
        <Link
          to="/"
          onClick={closeMenus}
          className="flex min-w-0 items-center gap-3"
          aria-label="ACK Nkoroi Parish home"
        >
          <img
            src={churchLogo}
            alt="ACK Diocese of Mount Kenya South logo"
            className="h-14 w-14 shrink-0 rounded-xl bg-white p-1 object-contain sm:h-16 sm:w-16"
          />

          <div className="min-w-0">
            <h1 className="text-base font-bold leading-tight tracking-wide sm:text-xl">
              ACK Nkoroi Parish
            </h1>
            <p className="mt-1 max-w-56 text-[10px] font-semibold uppercase leading-relaxed tracking-widest text-amber-300 sm:max-w-none sm:text-xs">
              Diocese of Mount Kenya South
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkStyle}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Desktop ministries dropdown */}
          <div className="group relative">
            <NavLink
              to="/ministries"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-amber-400/10 text-amber-300"
                    : "text-slate-200 hover:bg-white/10 hover:text-amber-300"
                }`
              }
              aria-haspopup="true"
            >
              Ministries
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 7.22a.75.75 0 011.06 0L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 8.28a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>

            <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white py-2 text-slate-800 shadow-2xl">
                <p className="px-5 pb-2 pt-3 text-xs font-bold uppercase tracking-widest text-green-800">
                  Our Ministries
                </p>

                {ministries.map((ministry) => (
                  <NavLink
                    key={ministry.path}
                    to={ministry.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-5 py-3 text-sm transition-colors duration-200 ${
                        isActive
                          ? "bg-green-50 font-semibold text-green-800"
                          : "text-slate-700 hover:bg-amber-50 hover:text-green-800"
                      }`
                    }
                  >
                    {ministry.name}
                    <span className="text-amber-500" aria-hidden="true">
                      →
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkStyle}
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="ml-3 rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-2 rounded-lg p-2 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Backdrop: inactive when the drawer is closed */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        onClick={closeMenus}
        aria-hidden="true"
      />

      {/* Mobile drawer: enters from the right */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-72 max-w-[85vw] flex-col overflow-y-auto border-l border-white/10 bg-slate-950 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <Link
            to="/"
            onClick={closeMenus}
            className="flex min-w-0 items-center gap-3"
          >
            <img
              src={churchLogo}
              alt="ACK Diocese of Mount Kenya South logo"
              className="h-12 w-12 shrink-0 rounded-lg bg-white p-1 object-contain"
            />

            <div className="min-w-0">
              <h2 className="text-sm font-bold text-white">
                ACK Nkoroi Parish
              </h2>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-amber-300">
                Diocese of Mount Kenya South
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={closeMenus}
            className="ml-2 rounded-lg p-2 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-amber-300"
            aria-label="Close navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile drawer links */}
        <nav className="flex flex-1 flex-col gap-1 p-4">
          {navLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenus}
              className={linkStyle}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile ministries accordion */}
          <div>
            <div className="flex items-center rounded-lg hover:bg-white/10">
              <NavLink
                to="/ministries"
                onClick={closeMenus}
                className={({ isActive }) =>
                  `flex-1 rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "text-amber-300"
                      : "text-slate-200 hover:text-amber-300"
                  }`
                }
              >
                Ministries
              </NavLink>

              <button
                type="button"
                onClick={() => setMinistriesOpen((open) => !open)}
                className="rounded-lg px-4 py-3 text-amber-300"
                aria-label="Toggle ministry links"
                aria-expanded={ministriesOpen}
              >
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    ministriesOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 7.22a.75.75 0 011.06 0L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 8.28a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {ministriesOpen && (
              <div className="ml-4 mt-1 border-l-2 border-amber-400/50 pl-3">
                {ministries.map((ministry) => (
                  <NavLink
                    key={ministry.path}
                    to={ministry.path}
                    onClick={closeMenus}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-sm transition ${
                        isActive
                          ? "bg-white/10 font-semibold text-amber-300"
                          : "text-slate-300 hover:bg-white/10 hover:text-amber-300"
                      }`
                    }
                  >
                    {ministry.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenus}
              className={linkStyle}
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={closeMenus}
            className="mt-2 rounded-lg bg-amber-400 px-4 py-3 text-center font-bold text-slate-950 transition hover:bg-amber-300"
          >
            Join Us
          </Link>
        </nav>

        {/* Drawer footer */}
        <div className="border-t border-white/10 p-4">
          <p className="text-center text-xs text-slate-400">
            ACK Nkoroi Parish
          </p>
        </div>
      </aside>
    </header>
  );
}

export default Nav;