import Image from "next/image";
import JoinToast from "./components/JoinToast";
import WaitlistModal from "./components/WaitlistModal";

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

      <div className="mx-auto max-w-7xl px-4 py-8 space-y-8">
        {/* HERO */}
        <section
          id="overview"
          className="rounded-[28px] bg-gradient-to-br from-slate-950 via-purple-900 to-indigo-800 p-8 text-white shadow-xl"
        >
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            LegalAssist — AI-Powered Legal Workflow Platform
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            A modern legal workspace for document analysis, legal research,
            case strategy, and workflow management — built like a real firm system.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#waitlist"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:opacity-95"
            >
              Join Waitlist
            </a>
            <a
              href="#demo"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/15"
            >
              Watch Demo
            </a>
          </div>
        </section>

        {/* DEMO VIDEO */}
        <section
          id="demo"
          className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur"
        >
          <h2 className="text-2xl font-semibold text-slate-900">
            Product Demo
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A walkthrough of LegalAssist starting from the dashboard through
            document analysis, research, and case strategy.
          </p>

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/60 bg-black">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/HTjIDlD48Qo"
                title="LegalAssist Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            ⚠️ LegalAssist does not provide legal advice. AI outputs are informational
            and must be reviewed by a qualified attorney.
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur"
        >
          <h2 className="text-2xl font-semibold text-slate-900">
            Core Capabilities
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Client & Case Management", "CRM-style legal workspace"],
              ["Document Generator", "Contracts, NDAs, letters, memos"],
              ["Document Analyzer (Beta)", "Clause extraction & risk flags"],
              ["AI Legal Research", "Structured, saveable outputs"],
              ["Case Strategy", "Strengths, weaknesses, recommendations"],
              ["Tasks & Deadlines", "Matter-level organization"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/60 bg-white/60 p-5"
              >
                <div className="font-semibold text-slate-900">{title}</div>
                <div className="mt-2 text-sm text-slate-600">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SCREENS */}
        <section
          id="screens"
          className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur"
        >
          <h2 className="text-2xl font-semibold text-slate-900">
            App Screenshots
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {screens.map((s) => (
              <div
                key={s.src}
                className="overflow-hidden rounded-3xl border border-white/60 bg-white/60"
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WAITLIST */}
        <section
          id="waitlist"
          className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur"
        >
          <h2 className="text-2xl font-semibold text-slate-900">
            Join the Waitlist
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Get early access when invites open.
          </p>

          <form
            action="/api/waitlist"
            method="POST"
            className="mt-6 grid gap-4 md:grid-cols-2"
          >
            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-2xl border bg-white/80 px-4 py-3 text-sm"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="rounded-2xl border bg-white/80 px-4 py-3 text-sm"
            />

            <button
              type="submit"
              className="md:col-span-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-95"
            >
              Join Waitlist
            </button>
          </form>

          <div className="mt-6 text-xs text-slate-500">
            © 2026 LegalAssist · Built by Asma Ahmed · Not legal advice
          </div>
        </section>
      </div>
    </main>
  );
}
