import {
  FileText, Building2, ClipboardCheck, CreditCard,
  Clock, BarChart3, Users, LineChart, ChevronRight,
} from "lucide-react";
import { Accent, Pill, TestimonialsBlock } from "../shared";

const SERVICE_CARDS = [
  {
    Icon: FileText,
    label: "Hospital Credit Billing",
    desc: "Managing patient billing cycles with accuracy and efficiency — from admission to final settlement.",
    bg: "#FEF0E6",
    color: "#E0A82E",
  },
  {
    Icon: Building2,
    label: "TPA Desk Operations",
    desc: "Dedicated staff and systems to handle TPA approvals, documentation, and insurer coordination.",
    bg: "#E6F7F5",
    color: "#3BBFAD",
  },
  {
    Icon: ClipboardCheck,
    label: "Mediclaim Assistance",
    desc: "From document collection to claim submission — we ensure patients and hospitals face zero stress.",
    bg: "#FDE8EA",
    color: "#E89098",
  },
  {
    Icon: CreditCard,
    label: "Cashless Treatment Facilitation",
    desc: "Quick coordination with insurers for immediate approvals, so patients receive care without delays.",
    bg: "#EDE8F7",
    color: "#9B8DC4",
  },
  {
    Icon: Clock,
    label: "Claim Settlement Follow-ups",
    desc: "Active monitoring and follow-ups to minimize delays in reimbursements from insurers.",
    bg: "#E6F2FB",
    color: "#5AAAD8",
  },
  {
    Icon: BarChart3,
    label: "Reconciliation Services",
    desc: "Ensuring financial records, payments, and claims are perfectly aligned with insurers' remittances.",
    bg: "#FEF0E6",
    color: "#E0A82E",
  },
  {
    Icon: Users,
    label: "Empanelment Services",
    desc: "Complete assistance in empanelment with insurance providers, TPAs, and corporates.",
    bg: "#E6F7F5",
    color: "#3BBFAD",
  },
  {
    Icon: LineChart,
    label: "Customized Reporting",
    desc: "Transparent financial reports and dashboards for hospitals and healthcare partners.",
    bg: "#FDE8EA",
    color: "#E89098",
  },
];

export default function Services() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#FBF7F0] pt-14 pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold text-[#E0A82E] uppercase tracking-[0.18em] mb-3">What we do</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] leading-[1.15] mb-5">
              End-to-End <Accent color="#009387">Healthcare</Accent> Financial Services
            </h1>
            <p className="text-[#4a4a6a] text-lg leading-relaxed mb-8 max-w-md">
              From hospital credit billing to empanelment — every financial service your hospital needs, handled by experts.
            </p>
            <Pill variant="teal" to="/contact">Talk to an Expert</Pill>
          </div>

          {/* Photo inside large orange circle */}
          <div className="relative flex items-center justify-center min-h-[360px]">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#FEE8D6]" />
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=380&h=440&fit=crop&auto=format"
              alt="Confident healthcare finance professional"
              className="relative z-10 w-60 h-[300px] object-cover rounded-[28px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── Service cards 2×4 ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#E0A82E] uppercase tracking-[0.18em] mb-3">Full-service solutions</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
              Our <Accent>Services</Accent>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CARDS.map(({ Icon, label, desc, bg, color }, i) => (
              <div
                key={i}
                className="bg-white border border-black/[0.06] rounded-2xl p-7 hover:shadow-lg transition-all duration-200 group cursor-default"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: bg }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <h3 className="font-extrabold text-[#1a1a2e] mb-2.5 text-base leading-snug">{label}</h3>
                <p className="text-sm text-[#4a4a6a] leading-relaxed mb-5">{desc}</p>
                <div className="flex items-center gap-1 text-xs font-bold" style={{ color }}>
                  Learn more <ChevronRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsBlock />
    </main>
  );
}
