
import {
  ThumbsUp,
  Camera,
  Play,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Heart,
  Church,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Ministries", path: "/ministries" },
  { name: "Events", path: "/events" },
  { name: "Contact Us", path: "/contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-700" />

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Church identity */}
          <div>
            <Link
              to="/"
              className="mb-5 flex items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/10">
                <Church size={30} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  ACK Nkoroi Parish
                </h2>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  Faith • Hope • Love
                </p>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Welcome to ACK Nkoroi Parish, Diocese of Mount Kenya
              South. We are a Christian family committed to worship,
              fellowship, service, and sharing the love of Christ.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-lg border border-white/10 p-2.5 transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950"
              >
                <ThumbsUp size={19} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-lg border border-white/10 p-2.5 transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950"
              >
                <Camera size={19} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="rounded-lg border border-white/10 p-2.5 transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950"
              >
                <Play size={19} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm transition hover:text-amber-400"
                  >
                    <ArrowUpRight
                      size={15}
                      className="text-amber-400 transition group-hover:translate-x-1"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service times */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Worship With Us
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Clock
                  size={20}
                  className="mt-1 shrink-0 text-amber-400"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Sunday Service
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Join us for worship and fellowship.
                  </p>
                  <p className="mt-1 text-xs text-amber-400">
                    Check locally for service times
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Heart
                  size={20}
                  className="mt-1 shrink-0 text-amber-400"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Everyone Is Welcome
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Come as you are and grow with us in Christ.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Get In Touch
            </h3>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-amber-400"
                />
                <span className="text-sm leading-6 text-slate-400">
                  ACK Nkoroi Parish
                  <br />
                  Diocese of Mount Kenya South
                </span>
              </li>

              <li className="flex gap-3">
                <Phone
                  size={19}
                  className="shrink-0 text-amber-400"
                />
                <span className="text-sm text-slate-400">
                  Contact the parish office
                </span>
              </li>

              <li className="flex gap-3">
                <Mail
                  size={20}
                  className="shrink-0 text-amber-400"
                />
                <Link
                  to="/contact"
                  className="text-sm transition hover:text-amber-400"
                >
                  Send us a message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bible verse */}
        <div className="mt-12 rounded-2xl border border-amber-400/20 bg-white/[0.03] px-6 py-7 text-center">
          <p className="text-base italic leading-7 text-slate-200 sm:text-lg">
            "I was glad when they said unto me, Let us go into the
            house of the LORD."
          </p>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Psalm 122:1 (KJV)
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-slate-500">
            © {year} ACK Nkoroi Parish. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Built with <Heart
              size={13}
              className="mx-1 inline text-amber-400"
              fill="currentColor"
            />{" "}
            for the glory of God.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
