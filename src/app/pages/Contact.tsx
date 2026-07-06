import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Accent, TestimonialsBlock } from "../shared";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", address: "", message: "" });
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <main>
      <section className="bg-[#FBF7F0] py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#E0A82E] uppercase tracking-[0.18em] mb-3">
              We'd love to hear from you
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] leading-[1.15]">
              Get in Touch{" "}
              <Accent color="#009387">with Us</Accent>
            </h1>
            <p className="mt-4 text-[#4a4a6a] text-base max-w-md mx-auto leading-relaxed">
              Reach out to discuss how Larisha can support your hospital's billing,
              insurance, and reconciliation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
            {/* Contact info sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {[
                {
                  Icon: Phone,
                  label: "Call Us",
                  value: "+91 98765 43210",
                  color: "#E0A82E",
                  bg: "#FEF0E6",
                },
                {
                  Icon: Mail,
                  label: "Email Us",
                  value: "info@larishainsurance.com",
                  color: "#3BBFAD",
                  bg: "#E6F7F5",
                },
                {
                  Icon: MapPin,
                  label: "Our Office",
                  value: "123 Healthcare Avenue, Mumbai, MH 400001",
                  color: "#9B8DC4",
                  bg: "#EDE8F7",
                },
              ].map(({ Icon, label, value, color, bg }, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: bg }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#9ca3af] uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-[#1a1a2e] leading-snug">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form card */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8 sm:p-10">
              {sent && (
                <div className="mb-6 bg-[#E6F7F5] text-[#2ea899] rounded-xl px-5 py-3.5 text-sm font-bold text-center">
                  ✓ Message sent! We'll be in touch shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Dr. Anjali Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full bg-[#F8F5F0] rounded-xl px-4 py-3.5 text-sm text-[#1a1a2e] outline-none focus:ring-2 focus:ring-[#E0A82E]/30 border border-transparent focus:border-[#E0A82E]/40 transition placeholder:text-[#bbb]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#F8F5F0] rounded-xl px-4 py-3.5 text-sm text-[#1a1a2e] outline-none focus:ring-2 focus:ring-[#E0A82E]/30 border border-transparent focus:border-[#E0A82E]/40 transition placeholder:text-[#bbb]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="hospital@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-[#F8F5F0] rounded-xl px-4 py-3.5 text-sm text-[#1a1a2e] outline-none focus:ring-2 focus:ring-[#E0A82E]/30 border border-transparent focus:border-[#E0A82E]/40 transition placeholder:text-[#bbb]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest block mb-2">
                    Hospital / Address
                  </label>
                  <input
                    type="text"
                    placeholder="City General Hospital, Mumbai"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full bg-[#F8F5F0] rounded-xl px-4 py-3.5 text-sm text-[#1a1a2e] outline-none focus:ring-2 focus:ring-[#E0A82E]/30 border border-transparent focus:border-[#E0A82E]/40 transition placeholder:text-[#bbb]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your billing or insurance requirements..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-[#F8F5F0] rounded-xl px-4 py-3.5 text-sm text-[#1a1a2e] outline-none focus:ring-2 focus:ring-[#E0A82E]/30 border border-transparent focus:border-[#E0A82E]/40 transition resize-none placeholder:text-[#bbb]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E0A82E] text-white rounded-full py-4 font-extrabold text-sm hover:bg-[#d4712e] transition-colors shadow-md cursor-pointer"
                >
                  Send Message
                </button>
              </form>

              {/* Quick-action pills */}
              <div className="flex gap-3 mt-5">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#FEF0E6] text-[#E0A82E] rounded-full py-3.5 text-sm font-bold hover:bg-[#E0A82E] hover:text-white transition-colors cursor-pointer">
                  <Phone size={15} /> Call Us
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#FEF0E6] text-[#E0A82E] rounded-full py-3.5 text-sm font-bold hover:bg-[#E0A82E] hover:text-white transition-colors cursor-pointer">
                  <MessageCircle size={15} /> Message Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsBlock />
    </main>
  );
}
