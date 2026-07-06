import {
  FileText, Building2, ClipboardCheck, CreditCard,
  Link2, TrendingUp, BarChart3, Users, CheckCircle,
} from "lucide-react";
import { Accent, Pill, TestimonialsBlock } from "../shared";

const SERVICES = [
  { Icon: FileText,       label: "Hospital Credit\nBilling",     bg: "#FEF0E6", color: "#E0A82E" },
  { Icon: Building2,      label: "TPA Desk\nManagement",         bg: "#E6F7F5", color: "#3BBFAD" },
  { Icon: ClipboardCheck, label: "Mediclaim\nProcessing",        bg: "#FDE8EA", color: "#E89098" },
  { Icon: CreditCard,     label: "Cashless Claims\nSupport",     bg: "#EDE8F7", color: "#9B8DC4" },
  { Icon: Link2,          label: "Insurance\nLiaison",           bg: "#E6F2FB", color: "#5AAAD8" },
  { Icon: TrendingUp,     label: "Revenue\nAssurance",           bg: "#FEF0E6", color: "#E0A82E" },
  { Icon: BarChart3,      label: "Reconciliation\nServices",     bg: "#E6F7F5", color: "#3BBFAD" },
  { Icon: Users,          label: "Empanelment\nSupport",         bg: "#FDE8EA", color: "#E89098" },
];

const WHY = [
  { stat: "Speed & Accuracy",    desc: "Faster billing cycles with near-zero error rates in claim submissions",    color: "#E0A82E" },
  { stat: "TPA Expertise",       desc: "Deep experience with all major TPAs and insurer portals",                  color: "#3BBFAD" },
  { stat: "Trusted Hospitals",   desc: "Partnered with 200+ leading hospitals across India",                       color: "#9B8DC4" },
  { stat: "IRDAI Compliant",     desc: "End-to-end secure data handling aligned with regulatory requirements",     color: "#5AAAD8" },
  { stat: "Full Revenue Cycle",  desc: "From admission to final settlement — every step managed for you",          color: "#E89098" },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#FBF7F0] pt-14 pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FEF0E6] rounded-full px-4 py-1.5 mb-7">
              <CheckCircle size={13} className="text-[#E0A82E]" />
              <span className="text-xs font-bold text-[#E0A82E]">Trusted by 200+ Hospitals</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] leading-[1.15] mb-4">
              Simplifying Hospital <Accent>Billing,</Accent> Insurance &amp; Reconciliation
            </h1>
            <p className="text-[#4a4a6a] text-lg leading-relaxed mb-8 max-w-md">
              Fast. Transparent. Reliable Healthcare Financial Solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Pill variant="outline" to="/contact">Get Started Today</Pill>
              <Pill variant="outline" to="/services">Our Services</Pill>
            </div>
          </div>

          {/* Hero visual — cream circle backdrop */}
          <div className="relative flex items-center justify-center min-h-[360px]">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#FEE8D6]/70" />
            <img
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=380&h=440&fit=crop&auto=format"
              alt="Healthcare billing professional reviewing insurance documents"
              className="relative z-10 w-60 h-[300px] object-cover rounded-[28px] shadow-2xl"
            />
            {/* Floating badge — verified */}
            <div className="absolute top-8 right-6 z-20 bg-white rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#FEF0E6] flex items-center justify-center">
                <CheckCircle size={14} className="text-[#E0A82E]" />
              </div>
              <span className="text-xs font-bold text-[#1a1a2e]">IRDAI Compliant</span>
            </div>
            {/* Floating badge — claims */}
            <div className="absolute bottom-12 left-2 z-20 bg-white rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2">
              <CheckCircle size={15} className="text-[#3BBFAD]" />
              <span className="text-xs font-bold text-[#1a1a2e]">Zero-Leakage Revenue</span>
            </div>
            {/* Sparkle dots */}
            <div className="absolute top-20 left-0 w-4 h-4 rounded-full bg-[#3BBFAD]/60 animate-bounce" />
            <div className="absolute bottom-24 right-1 w-3 h-3 rounded-full bg-[#9B8DC4]/60 animate-bounce" style={{ animationDelay: "0.4s" }} />
            <div className="absolute top-6 left-16 w-2.5 h-2.5 rounded-full bg-[#E0A82E]/50 animate-bounce" style={{ animationDelay: "0.2s" }} />
          </div>
        </div>
      </section>

      {/* ── Stat strip ────────────────────────────────────────────────────── */}
      <section className="py-12 bg-[#FBF7F0]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-center text-[#4a4a6a] text-base font-medium mb-8">
            Why hospitals choose us?{" "}
            <span className="font-extrabold text-[#1a1a2e]">The numbers speak for themselves.</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-md mx-auto">
            <div className="bg-[#E0A82E] rounded-2xl p-8 text-white text-center shadow-md">
              <p className="text-5xl font-extrabold leading-none mb-2">98%</p>
              <p className="text-sm opacity-80 leading-snug">Claim approval rate across all submissions</p>
            </div>
            <div className="bg-[#3BBFAD] rounded-2xl p-8 text-white text-center shadow-md">
              <p className="text-5xl font-extrabold leading-none mb-2">48 Hrs</p>
              <p className="text-sm opacity-80 leading-snug">Average cashless approval turnaround time</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Services ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#E0A82E] uppercase tracking-[0.18em] mb-3">
              What we offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
              Our <Accent>Services</Accent>
            </h2>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-5 sm:gap-6">
            {SERVICES.map(({ Icon, label, bg, color }, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group cursor-default">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm"
                  style={{ backgroundColor: bg }}
                >
                  <Icon size={24} style={{ color }} />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-center text-[#1a1a2e] leading-tight whitespace-pre-line">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#FBF7F0]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Illustration: scattered billing/ID cards */}
          <div className="relative flex items-center justify-center min-h-[280px]">
            <div className="absolute w-56 h-56 rounded-full bg-[#E6F7F5]/80" />
            <div className="relative z-10 flex flex-col gap-3">
              {[
                { label: "Policy #MED-2024-0081",   color: "#E0A82E" },
                { label: "Claim #CLM-TPA-0928",     color: "#3BBFAD" },
                { label: "Empanelment: INS-447",     color: "#9B8DC4" },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl px-5 py-3.5 shadow-md flex items-center gap-3"
                  style={{ transform: `rotate(${(i - 1) * 2.5}deg)` }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: card.color + "22" }}
                  >
                    <FileText size={15} style={{ color: card.color }} />
                  </div>
                  <span className="text-sm font-bold text-[#1a1a2e]">{card.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bullet differentiators */}
          <div>
            <p className="text-xs font-bold text-[#E0A82E] uppercase tracking-[0.18em] mb-3">Our advantage</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] mb-9">
              Why Choose <Accent>Us?</Accent>
            </h2>
            <div className="flex flex-col gap-7">
              {WHY.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>
                    <span className="font-extrabold text-[#1a1a2e] text-base">{item.stat}</span>
                    <span className="text-[#4a4a6a] ml-2 text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsBlock />
    </main>
  );
}
