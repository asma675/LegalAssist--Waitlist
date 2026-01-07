import Image from "next/image";
import JoinToast from "./components/JoinToast";
import WaitlistModal from "./components/WaitlistModal";

const WAITLIST_FORM_URL = "https://forms.gle/tCmgmxyvCxLms7Nb7";

const screens = [
  { src: "/screens/app-1.png", title: "LegalAssist screen 1" },
  { src: "/screens/app-2.png", title: "LegalAssist screen 2" },
  { src: "/screens/app-3.png", title: "LegalAssist screen 3" },
  { src: "/screens/app-4.png", title: "LegalAssist screen 4" },
  { src: "/screens/app-5.png", title: "LegalAssist screen 5" },
  { src: "/screens/app-6.png", title: "LegalAssist screen 6" },
  { src: "/screens/app-7.png", title: "LegalAssist screen 7" },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <JoinToast />
      <WaitlistModal />

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 md:px-6 md:py-8">

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden w-[270px] shrink-0 md:block">
          <div className="sticky top-6 space-y-4">
            <div className="rounded-3xl bg-slate-950/95 p-5 text-white shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-ink-500 to-ink-700">
                  ⚖️
                </div>
                <div>
                  <div className="font-semibold">LegalAssist</div>
                  <div className="text-xs text-white/70">AI Legal Platform</div>
                </div>
              </div>

              <nav className="mt-5 space-y-2 text-sm">
                {[
                  ["#overview", "🏠 Overview"],
                  ["#features", "✨ Features"],
                  ["#demo", "🎥 Demo"],
                  ["#pricing", "💎 Pricing"],
                  ["#screens", "🖼️ Screens"],
                  ["#waitlist", "📝 Waitlist"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-950"
              >
                Get Early Access
              </a>
            </div>

            <div className="rounded-3xl bg-white/70 p-4 text-xs text-slate-600 shadow-soft">
              Built by Asma Ahmed • Not legal advice
            </div>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <div className="flex-1 space-y-8">

          {/* ================= HERO ================= */}
          <section id="overview" className="rounded-[28px] bg-gradient-to-br from-slate-950 via-ink-900 to-ink-700 p-8 text-white shadow-soft">
            <h1 className="text-3xl font-semibold md:text-4xl">
              Your AI-powered legal workspace
            </h1>
            <p className="mt-3 max-w-2xl text-white/80">
              Manage clients, cases, documents, and AI analysis — built like real firm software.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#demo" className="rounded-xl bg-white/10 px-5 py-3 font-semibold">
                Watch Demo
              </a>
              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-950"
              >
                Join Waitlist
              </a>
            </div>
          </section>

          {/* ================= FEATURES ================= */}
          <section id="features" className="rounded-[28px] bg-white/70 p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                "Client & Case Management",
                "Document Generator",
                "Document Analyzer (Beta)",
                "AI Case Strategy",
                "Tasks & Calendar",
                "Professional Disclaimers",
              ].map((f) => (
                <div key={f} className="rounded-2xl bg-white/80 p-5">
                  <div className="font-semibold">{f}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ================= DEMO VIDEO ================= */}
          <section id="demo" className="rounded-[28px] bg-white/70 p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Product Demo</h2>
            <div className="mt-5 overflow-hidden rounded-3xl aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/HTjIDlD48Qo"
                title="LegalAssist Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>

          {/* ================= SCREENS ================= */}
          <section id="screens" className="rounded-[28px] bg-white/70 p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Screenshots</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {screens.map((s) => (
                <div key={s.src} className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image src={s.src} alt={s.title} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>

          {/* ================= PRICING ================= */}
          <section id="pricing" className="rounded-[28px] bg-white/70 p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Simple, Transparent Pricing</h2>
            <p className="mt-2 text-sm text-slate-600">14-day free trial on all plans</p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$39",
                  desc: "Solo practitioners",
                  features: [
                    "50 doc generations",
                    "20 analyses",
                    "Unlimited cases",
                    "HTML export",
                  ],
                },
                {
                  name: "Professional",
                  price: "$119",
                  desc: "Small firms",
                  popular: true,
                  features: [
                    "100 doc generations",
                    "50 analyses",
                    "PDF & DOCX export",
                    "Team collaboration",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "$399",
                  desc: "Large firms",
                  features: [
                    "Unlimited everything",
                    "SSO & security",
                    "Custom AI training",
                  ],
                },
              ].map((p) => (
                <div key={p.name} className="rounded-3xl bg-white/80 p-6">
                  {p.popular && (
                    <div className="mb-2 text-xs font-semibold text-ink-700">
                      Most Popular
                    </div>
                  )}
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-3xl font-semibold mt-2">{p.price}/mo</div>
                  <div className="mt-4 text-sm space-y-1">
                    {p.features.map((f) => (
                      <div key={f}>• {f}</div>
                    ))}
                  </div>
                  <a
                    href={WAITLIST_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full justify-center rounded-xl bg-ink-700 px-4 py-2 text-white font-semibold"
                  >
                    Start Free Trial
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ================= WAITLIST ================= */}
          <section id="waitlist" className="rounded-[28px] bg-white/70 p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Join the Waitlist</h2>
            <p className="mt-2 text-sm text-slate-600">
              Sign up via Google Form — no account required.
            </p>

            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-ink-600 to-ink-800 px-6 py-3 text-white font-semibold"
            >
              Open Waitlist Form
            </a>

            <div className="mt-6 text-xs text-slate-500">
              © 2026 LegalAssist • Built by Asma Ahmed • Not legal advice
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
