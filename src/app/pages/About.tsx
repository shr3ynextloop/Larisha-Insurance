import { Star, CheckCircle } from "lucide-react";
import { Accent, Pill, TestimonialsBlock } from "../shared";

const TEAM = [
  {
    name: "Priya Mehta",
    role: "Founder & CEO",
    bio: "15+ years in healthcare finance. Pioneer of hospital TPA desk automation across Maharashtra.",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=220&h=220&fit=crop&auto=format",
    bg: "#FDE8EA",
  },
  {
    name: "Arjun Sharma",
    role: "Head of TPA Operations",
    bio: "Former senior adjuster at a leading insurer. Expert in cashless claim facilitation and insurer coordination.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=220&h=220&fit=crop&auto=format",
    bg: "#E6F7F5",
  },
  {
    name: "Kavya Nair",
    role: "Reconciliation Lead",
    bio: "Certified healthcare accountant specializing in revenue assurance and IRDAI compliance reporting.",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=220&h=220&fit=crop&auto=format",
    bg: "#E6F2FB",
  },
];

const VALUES = [
  { label: "Integrity",   color: "#E0A82E" },
  { label: "Accuracy",    color: "#3BBFAD" },
  { label: "Compassion",  color: "#E89098" },
  { label: "Efficiency",  color: "#9B8DC4" },
  { label: "Innovation",  color: "#5AAAD8" },
];

export default function About() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#FBF7F0] pt-14 pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold text-[#E0A82E] uppercase tracking-[0.18em] mb-3">About us</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] leading-[1.15] mb-5">
              Your Trusted <Accent color="#3BBFAD">Partner</Accent> in Hospital Billing &amp; Insurance Support
            </h1>
            <p className="text-[#4a4a6a] text-lg leading-relaxed mb-8 max-w-md">
              Bridging the gap between hospitals, patients, and insurers for faster and stress-free claim settlements.
            </p>
            <Pill variant="teal" to="/contact">Work With Us</Pill>
          </div>

          {/* Photo inside large teal circle */}
          <div className="relative flex items-center justify-center min-h-[360px]">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#E6F7F5]" />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=380&h=440&fit=crop&auto=format"
              alt="Healthcare professional smiling at work"
              className="relative z-10 w-60 h-[300px] object-cover rounded-[28px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── Company story strip + 4.9 badge ──────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#E0A82E] uppercase tracking-[0.18em] mb-3">Our story</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a2e] mb-4 leading-snug">
              Built to simplify <Accent color="#3BBFAD">healthcare</Accent> finance.
            </h2>
            <p className="text-[#4a4a6a] leading-relaxed mb-4">
              We started with a vision to simplify hospital billing and insurance processing. Over the years, we have expanded our expertise into reconciliation and empanelment, making us a one-stop solution for hospital financial services.
            </p>
            <p className="text-[#4a4a6a] leading-relaxed">
              Today, Larisha partners with 200+ hospitals across India, processing thousands of claims monthly with industry-leading accuracy and compliance.
            </p>
          </div>

          <div className="relative flex items-end gap-3">
            {[
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=220&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=220&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=220&fit=crop&auto=format",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Team member ${i + 1}`}
                className="flex-1 min-w-0 h-44 sm:h-52 object-cover rounded-2xl shadow-md"
                style={{ marginTop: i === 1 ? "28px" : "0" }}
              />
            ))}
            {/* 4.9 ★ badge */}
            <div className="absolute -top-5 right-0 bg-[#E0A82E] text-white rounded-2xl px-4 py-3 shadow-xl text-center z-10">
              <p className="text-2xl font-extrabold leading-none mb-1">4.9</p>
              <div className="flex justify-center gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={9} className="fill-white text-white" />
                ))}
              </div>
              <p className="text-[10px] font-semibold opacity-75 uppercase tracking-widest">Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Team ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#FBF7F0]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#E0A82E] uppercase tracking-[0.18em] mb-3">The people behind the work</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
              Our <Accent>Team.</Accent> Meet your team.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center">
            {TEAM.map((member, i) => (
              <div key={i} className="flex flex-col items-center gap-4 text-center max-w-xs">
                <div className="relative w-36 h-36">
                  <div className="absolute inset-0 rounded-full" style={{ backgroundColor: member.bg }} />
                  <img
                    src={member.src}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-extrabold text-[#1a1a2e]">{member.name}</p>
                  <p className="text-sm text-[#E0A82E] font-semibold mt-0.5">{member.role}</p>
                  <p className="text-xs text-[#9ca3af] mt-2 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Mission ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=520&h=380&fit=crop&auto=format"
            alt="Healthcare team collaborating"
            className="w-full h-72 object-cover rounded-3xl shadow-xl"
          />
          <div>
            <p className="text-xs font-bold text-[#E0A82E] uppercase tracking-[0.18em] mb-3">What drives us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] mb-6">
              Our <Accent>Mission</Accent>
            </h2>
            <p className="text-[#4a4a6a] leading-relaxed mb-6">
              To empower hospitals with faster claim settlements, accurate reconciliations, and expanded insurer networks — reducing administrative burden so healthcare providers can focus on what matters most: patient care.
            </p>
            <div className="flex flex-wrap gap-2">
              {VALUES.map(({ label, color }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: color }}
                >
                  <CheckCircle size={11} /> {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Vision ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#FBF7F0]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold text-[#3BBFAD] uppercase tracking-[0.18em] mb-3">Where we're headed</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] mb-6">
              Our <Accent color="#3BBFAD">Vision</Accent>
            </h2>
            <p className="text-[#4a4a6a] leading-relaxed mb-4">
              To become India's most trusted healthcare financial services partner — a company where every hospital, regardless of size, has access to world-class billing, reconciliation, and insurer empanelment support.
            </p>
            <p className="text-[#4a4a6a] leading-relaxed">
              We envision a future where claim rejections are rare, cashless approvals are instant, and hospitals receive every rupee they rightfully earn.
            </p>
          </div>

          {/* Photo inside teal circle */}
          <div className="relative flex items-center justify-center min-h-[320px]">
            <div className="absolute w-[270px] h-[270px] rounded-full bg-[#E6F7F5]" />
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=360&h=420&fit=crop&auto=format"
              alt="Confident healthcare professional giving thumbs up"
              className="relative z-10 w-56 h-[280px] object-cover rounded-[28px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      <TestimonialsBlock />
    </main>
  );
}
