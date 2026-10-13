import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import {
  Shield,
  Phone,
  Star,
  Menu,
  X,
  Quote,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Globe,
  Twitter,
} from "lucide-react";
import { Logo } from "./components/ui/logo";

// ─── Primitives ───────────────────────────────────────────────────────────────

export function Accent({
  children,
  color = "#009387",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      className="font-script font-extrabold"
      style={{ color, fontStyle: "italic" }}
    >
      {children}
    </span>
  );
}

export function Pill({
  children,
  onClick,
  to,
  variant = "orange",
  className = "",
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  variant?: "orange" | "outline" | "teal" | "ghost-orange";
  className?: string;
  type?: "button" | "submit";
}) {
  const navigate = useNavigate();
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ease-out hover:scale-[1.04] hover:shadow-lg active:scale-[0.97]";
  const variants: Record<string, string> = {
    orange: "bg-[#E0A82E] text-white shadow-md hover:bg-[#c9941a] hover:shadow-[#E0A82E]/30",
    outline:
      "bg-transparent text-[#1a1a2e] border-2 border-[#1a1a2e]/20 hover:border-[#E0A82E] hover:text-[#E0A82E] hover:bg-[#FEF0E6]",
    teal: "bg-[#3BBFAD] text-white shadow-md hover:bg-[#2ea899] hover:shadow-[#3BBFAD]/30",
    "ghost-orange":
      "bg-[#FEF0E6] text-[#E0A82E] hover:bg-[#E0A82E] hover:text-white",
  };
  const handleClick = () => {
    if (to) navigate(to);
    else onClick?.();
  };
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export function Stars({ n = 5, size = 12 }: { n?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={size} className="fill-[#E0A82E] text-[#E0A82E]" />
      ))}
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#ffffff] sticky top-0 z-50 border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Logo className="text-white" />

          <div className="flex flex-col leading-none">
            <span className="text-[#1a1a2e] font-extrabold text-base tracking-tight">
              Larisha
            </span>
            <span className="text-[#E0A82E] font-semibold text-[10px] tracking-wide uppercase">
              Insurance Processing
            </span>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive
                  ? "text-[#E0A82E]"
                  : "text-[#4a4a6a] hover:text-[#E0A82E]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#E0A82E] px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#c9941a] hover:scale-[1.04] hover:shadow-lg hover:shadow-[#E0A82E]/30 active:scale-[0.97]"
          >
            <Phone size={14} />
            Contact Us
          </Link>
        </nav>

        <button
          className="md:hidden p-1.5 text-[#4a4a6a]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#FBF7F0] border-t border-black/[0.06] px-5 py-5 flex flex-col gap-4">
          {NAV.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `text-left text-base font-semibold py-0.5 ${isActive ? "text-[#E0A82E]" : "text-[#4a4a6a]"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Pill
            to="/contact"
            className="w-full mt-1"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Pill>
        </div>
      )}
    </header>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: "Dr. Ramesh Gupta",
    role: "Medical Director, City General Hospital",
    text: "Larisha's TPA desk management transformed our admission process. Claim approvals that used to take days now happen within hours — our patients and staff are thrilled.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    quoteColor: "#E0A82E",
    badge: "Faster Processing",
    badgeColor: "#E0A82E",
    badgeBg: "#FEF0E6",
  },
  {
    name: "Sneha Patel",
    role: "Finance Head, Apollo Multi-Speciality",
    text: "The reconciliation reports Larisha provides are incredibly detailed. We've reduced revenue leakage by over 40% since onboarding them. Truly a trusted partner.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
    quoteColor: "#3BBFAD",
    badge: "Reduced Leakage",
    badgeColor: "#3BBFAD",
    badgeBg: "#E6F7F5",
  },
  {
    name: "Vikram Nair",
    role: "CEO, HealthBridge Hospitals",
    text: "From empanelment support to cashless claims facilitation, Larisha handles it all with precision. Our claim rejection rate dropped from 18% to under 3% in six months.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format",
    quoteColor: "#9B8DC4",
    badge: "Better Accuracy",
    badgeColor: "#9B8DC4",
    badgeBg: "#EDE8F7",
  },
];

export function TestimonialsBlock() {
  const [active, setActive] = useState(1);
  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section className="py-20 bg-[#FBF7F0]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-[#E0A82E] uppercase tracking-[0.18em] mb-3">
            What hospitals say
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
            Our <Accent>Testimonials</Accent>
          </h2>
        </div>

        {/* Avatar strip with arrows */}
        <div className="flex justify-center items-center gap-6 mb-10">

          <button
            onClick={prev}
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#1a1a2e] hover:bg-[#E0A82E] hover:text-white transition-all duration-200 flex-shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          {/* Avatars */}
          <div className="flex items-end gap-5">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-2 transition-all duration-200"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={`w-12 h-12 object-cover rounded-full transition-all duration-300 ${i === active
                    ? "ring-4 ring-[#3BBFAD] ring-offset-2 shadow-lg"
                    : "ring-2 ring-white shadow-md opacity-70"
                    }`}
                />
                <Stars n={5} size={10} />
              </button>
            ))}
          </div>


          <button
            onClick={next}
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#1a1a2e] hover:bg-[#E0A82E] hover:text-white transition-all duration-200 flex-shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`relative rounded-2xl p-7 flex-col cursor-pointer transition-all duration-300 overflow-hidden ${isActive
                  ? "bg-white border-2 border-[#3BBFAD] shadow-xl flex"
                  : "bg-white border-2 border-transparent shadow-sm hover:shadow-md hover:-translate-y-1 hidden md:flex"
                  }`}
              >
                {/* Card top roww */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: t.badgeBg }}
                  >
                    <Quote size={16} style={{ color: t.quoteColor }} />
                  </div>
                  <span
                    className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: t.badgeBg, color: t.badgeColor }}
                  >
                    <Shield size={9} />
                    {t.badge}
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-[#4a4a6a] text-sm leading-relaxed flex-1 mb-6">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-black/[0.05]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-sm text-[#1a1a2e]">{t.name}</p>
                    <p className="text-xs text-[#9ca3af] mt-0.5">{t.role}</p>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full opacity-10"
                  style={{ backgroundColor: t.quoteColor }}
                />
              </div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${i === active
                ? "w-6 h-2.5 bg-[#E0A82E]"
                : "w-2.5 h-2.5 bg-[#1a1a2e]/20 hover:bg-[#1a1a2e]/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const PARTNERS = [
  { name: "City General Hospital", rating: "5.0", color: "#E0A82E" },
  { name: "Apollo Multi-Speciality", rating: "4.9", color: "#3BBFAD" },
  { name: "HealthBridge Hospitals", rating: "5.0", color: "#E89098" },
  { name: "MedFirst Healthcare", rating: "4.8", color: "#9B8DC4" },
  { name: "Sunrise Medical Centre", rating: "4.9", color: "#5AAAD8" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      {/* Partner strip */}
      <div className="border-b border-black/[0.06] overflow-hidden bg-[#FBF7F0]">
        <div className="text-center text-[#1a1a2e]/40 text-sm mt-2 uppercase tracking-[0.18em] font-semibold">
          Partners
        </div>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 overflow-hidden py-4">
          <div className="flex gap-4 animate-[marquee_18s_linear_infinite] w-max">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white hover:bg-[#FEF0E6] transition-colors rounded-xl px-4 py-3 cursor-default shadow-sm flex-shrink-0"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-extrabold text-white flex-shrink-0"
                  style={{ backgroundColor: p.color }}
                >
                  {p.name[0]}
                </div>
                <div>
                  <p className="text-xs font-semibold leading-none mb-1.5 text-[#1a1a2e]">
                    {p.name}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star size={9} className="fill-[#E0A82E] text-[#E0A82E]" />
                    <span className="text-[10px] text-[#1a1a2e]/50">{p.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo />

              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-sm">Larisha</span>
                <span className="text-[#E0A82E] text-[9px] font-semibold uppercase tracking-wide">
                  Insurance Processing
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-3">
              Bridging hospitals, patients, and insurers for faster, stress-free
              claim settlements.
            </p>
          </div>

          {/* About */}
          <div>
            <p className="font-bold text-sm mb-4">Quick Links</p>
            <ul className="flex flex-col gap-2.5">
              {[...NAV, { label: "Contact", to: "/contact" }].map(
                ({ label, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className="text-white/40 text-sm hover:text-white transition-colors"
                    >
                      {label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-bold text-sm mb-4">Services</p>
            <ul className="flex flex-col gap-2.5">
              {[
                "Hospital Credit Billing",
                "TPA Desk Management",
                "Mediclaim Processing",
                "Reconciliation Services",
              ].map((item) => (
                <li key={item}>
                  <NavLink
                    to="/services"
                    className="text-white/40 text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="font-bold text-sm mb-4">Contact</p>
            <ul className="flex flex-col gap-2.5 mb-5">
              <li className="flex items-start gap-2 text-white/40 text-sm">
                <Mail size={13} className="flex-shrink-0 mt-0.5" />
                info@larishainsurance.com
              </li>
              <li className="flex items-start gap-2 text-white/40 text-sm">
                <Phone size={13} className="flex-shrink-0 mt-0.5" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2 text-white/40 text-sm">
                <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                123 Healthcare Ave, Mumbai 400001
              </li>
            </ul>
            <p className="font-bold text-sm mb-3">Social</p>
            <div className="flex gap-2.5">
              {[Twitter, Linkedin, Facebook, Globe].map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center hover:bg-[#E0A82E] transition-colors cursor-pointer"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/25 text-xs">
            © 2024 Larisha Insurance Processing. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Privacy Policy · Terms of Service · IRDAI Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}