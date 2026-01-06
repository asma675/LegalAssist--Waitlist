"use client";

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

// ✅ Your YouTube link
const YT_EMBED_URL = "https://www.youtube.com/embed/HTjIDlD48Qo";

// ✅ Your Google Form waitlist link (opens in new tab)
const WAITLIST_FORM_URL = "https://forms.gle/tCmgmxyvCxLms7Nb7";

export default function Page() {
  return (
    <main className="min-h-screen">
      <JoinToast />
      <WaitlistModal />

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 md:px-6 md:py-8">
        {/* Sidebar */}
        <aside className="hidden w-[270px] shrink-0 md:block">
          <div className="sticky top-6 space-y-4">
            <div className="rounded-3xl bg-slate-950/95 p-5 text-white shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-ink-500 to-ink-700">
                  <span className="text-lg">⚖️</span>
                </div>
                <div>
                  <div className="text-base font-semibold leading-tight">LegalAssist</div>
                  <div className="text-xs text-white/70">AI Legal Platform</div>
                </div>
              </div>

              <nav className="mt-5 space-y-2 text-sm">
                <a
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-2 hover:bg-white/15"
                  href="#overview"
                >
                  <span className="opacity-80">🏠</span> Overview
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  href="#features"
                >
                  <span className="opacity-80">✨</span> Features
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  href="#demo"
                >
                  <span className="opacity-80">🎥</span> Demo Video
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  href="#pricing"
                >
                  <span className="opacity-80">💎</span> Pricing
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  href="#faq"
                >
                  <span className="opacity-80">❓</span> FAQ
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  href="#screens"
                >
                  <span className="opacity-80">🖼️</span> Screens
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  href="#waitlist"
                >
                  <span className="opacity-80">📝</span> Waitlist
                </a>
              </nav>

              <div className="mt-5 rounded-2xl bg-gradient-to-br from-ink-600/60 to-ink-900/40 p-4">
                <div className="text-sm font-semibold">Go Premium</div>
                <div className="mt-1 text-xs text-white/75">Unlimited documents & priority support</div>
                <a
                  href="#waitlist"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-950 hover:opacity-95"
                >
                  Get Early Access
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/40 bg-white/70 p-4 shadow-soft backdrop-blur">
              <div className="text-sm font-semibold text-slate-900">Built by Asma Ahmed</div>
              <div className="mt-1 text-xs text-slate-600">
                LegalAssist does not provide legal advice and does not create an attorney-client relationship.
              </div>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 md:hidden">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-ink-500 to-ink-700 text-white">
                ⚖️
              </div>
              <div>
                <div className="font-semibold leading-tight">LegalAssist</div>
                <div className="text-xs text-slate-600">AI Legal Platform</div>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-gradient-to-r from-ink-600 to-ink-800 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-95"
              >
                Join Waitlist
              </a>
              <a
                href="#"
                className="hidden rounded-xl bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur hover:bg-white md:inline-flex"
                title="Optional: link to your app sign in"
              >
                Sign In
              </a>
            </div>
          </div>

          {/* Hero */}
          <section
            id="overview"
            className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8"
          >
            <div className="rounded-[26px] bg-gradient-to-br from-slate-950 via-ink-900 to-ink-700 p-7 text-white md:p-10">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">⚖️</div>
                <div>
                  <div className="text-lg font-semibold leading-tight">LegalAssist</div>
                  <div className="text-xs text-white/70">AI Legal Platform</div>
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                ✨ AI-Powered Legal Platform
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Your intelligent legal assistant — built like a real firm system.
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-white/80 md:text-base">
                Manage clients, cases, tasks, documents, and AI workflows in one place. Generate legal documents,
                analyze uploaded files, and get structured case strategy outputs — faster and more organized.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:opacity-95"
                >
                  Join Waitlist
                </a>
                <a
                  href="#demo"
                  className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                { k: "Clients", v: "CRM-style" },
                { k: "Cases", v: "Matter tracking" },
                { k: "Docs", v: "Generate + store" },
                { k: "AI", v: "Analyze + strategy" },
              ].map((c) => (
                <div key={c.k} className="rounded-2xl border border-white/60 bg-white/60 p-4 backdrop-blur">
                  <div className="text-xs text-slate-600">{c.k}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">{c.v}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section
            id="features"
            className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What LegalAssist helps you do</h2>
            <p className="mt-2 text-sm text-slate-600">
              Built to mirror end-to-end legal workflows: intake → case workspace → documents → analysis.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Client & Case Management",
                  desc: "CRM-style clients and matters with clean navigation — just like your UI.",
                },
                {
                  title: "Document Generator",
                  desc: "Generate contracts, NDAs, agreements, letters, memos, briefs, motions, and more.",
                },
                {
                  title: "Document Analyzer (Beta)",
                  desc: "Upload PDFs/images and extract key clauses + insights to speed up review.",
                },
                {
                  title: "AI Case Strategy",
                  desc: "Strengths/weaknesses + strategic recommendations in a professional format.",
                },
                {
                  title: "Tasks & Calendar",
                  desc: "Organize work with tasks and scheduling (great for matter deadlines).",
                },
                {
                  title: "Professional Disclaimers",
                  desc: "Clear boundaries: informational only, attorney review required.",
                },
              ].map((f) => (
                <div key={f.title} className="rounded-3xl border border-white/60 bg-white/60 p-5 backdrop-blur">
                  <div className="text-sm font-semibold text-slate-900">{f.title}</div>
                  <div className="mt-2 text-sm text-slate-600">{f.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900">
              Disclaimer: LegalAssist does not provide legal advice and does not create an attorney-client relationship.
              AI outputs are informational and must be reviewed by a qualified attorney.
            </div>
          </section>

          {/* Demo Video */}
          <section id="demo" className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Demo video</h2>
            <p className="mt-2 text-sm text-slate-600">
              Full walkthrough: dashboard → document analysis → research → case strategy.
            </p>

            <div className="mt-5 overflow-hidden rounded-3xl border border-white/60 bg-white/60">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={YT_EMBED_URL}
                  title="LegalAssist Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            <div className="mt-3 text-xs text-slate-500">
              Prefer opening in YouTube?{" "}
              <a
                className="font-semibold text-ink-700 hover:underline"
                href="https://youtu.be/HTjIDlD48Qo"
                target="_blank"
                rel="noreferrer"
              >
                Watch here
              </a>
              .
            </div>
          </section>

          {/* Screens */}
          <section
            id="screens"
            className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">App screenshots</h2>
            <p className="mt-2 text-sm text-slate-600">
              Add/remove images in <code className="rounded bg-slate-100 px-1">/public/screens</code>.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {screens.map((s) => (
                <div key={s.src} className="overflow-hidden rounded-3xl border border-white/60 bg-white/60">
                  <div className="relative aspect-[16/9] w-full">
                    <Image src={s.src} alt={s.title} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Pricing</h2>
            <p className="mt-2 text-sm text-slate-600">Simple tiers for solo lawyers through firms.</p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/60 bg-white/60 p-6 backdrop-blur">
                <div className="text-sm font-semibold text-slate-900">Free</div>
                <div className="mt-2 text-3xl font-semibold text-slate-900">$0</div>
                <div className="mt-1 text-xs text-slate-600">For trying the core experience</div>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  <li>• Basic client & case workspace</li>
                  <li>• Limited document generations / month</li>
                  <li>• Standard templates</li>
                  <li>• Community support</li>
                </ul>
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-ink-200 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  Join Waitlist
                </a>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white/75 p-6 shadow-soft backdrop-blur">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-ink-500/20 blur-2xl" />
                <div className="inline-flex items-center gap-2 rounded-full bg-ink-600/10 px-3 py-1 text-xs font-semibold text-ink-800">
                  Most popular
                </div>
                <div className="mt-3 text-sm font-semibold text-slate-900">Pro</div>
                <div className="mt-2 text-3xl font-semibold text-slate-900">
                  $29<span className="text-base font-semibold text-slate-600">/mo</span>
                </div>
                <div className="mt-1 text-xs text-slate-600">For solo + small practices</div>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  <li>• Higher AI generation limits</li>
                  <li>• Document Analyzer (Beta)</li>
                  <li>• Case Strategy outputs</li>
                  <li>• Export to PDF/DOCX (planned)</li>
                  <li>• Priority support</li>
                </ul>
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-ink-600 to-ink-800 px-4 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
                >
                  Get Early Access
                </a>
              </div>

              <div className="rounded-3xl border border-white/60 bg-white/60 p-6 backdrop-blur">
                <div className="text-sm font-semibold text-slate-900">Firm</div>
                <div className="mt-2 text-3xl font-semibold text-slate-900">Custom</div>
                <div className="mt-1 text-xs text-slate-600">For multi-user teams and firms</div>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  <li>• Multi-user access + roles</li>
                  <li>• Team workflows & approvals</li>
                  <li>• SSO / enterprise controls (planned)</li>
                  <li>• Dedicated onboarding</li>
                  <li>• Custom integrations</li>
                </ul>
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-ink-200 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  Request Firm Access
                </a>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              Note: Pricing is preliminary and may change during beta. Waitlist members get early access and launch offers.
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">FAQ</h2>
            <p className="mt-2 text-sm text-slate-600">Quick answers to common questions.</p>

            <div className="mt-6 grid gap-4">
              {[
                {
                  q: "Is this legal advice?",
                  a: "No. LegalAssist does not provide legal advice and does not create an attorney-client relationship. All AI outputs are informational and must be reviewed by a qualified attorney before use.",
                },
                {
                  q: "Who is LegalAssist for?",
                  a: "Lawyers, solo practices, paralegals, and legal operations teams that want a clean workspace to manage clients/cases and accelerate drafting + review with AI.",
                },
                {
                  q: "Can I upload documents for analysis?",
                  a: "Yes — the Document Analyzer (Beta) supports uploads and returns AI-generated clause/insight summaries. Always validate results with attorney review.",
                },
                {
                  q: "How do you handle data privacy?",
                  a: "During beta, we minimize stored data and use secure infrastructure. For production, we plan clear data controls, retention policies, and firm-level settings.",
                },
                {
                  q: "When will invites go out?",
                  a: "Invites roll out in batches. Join the waitlist and we’ll email you when early access opens for your segment.",
                },
              ].map((item) => (
                <details key={item.q} className="group rounded-3xl border border-white/60 bg-white/60 p-5 backdrop-blur">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                    <span className="mr-2 inline-block rounded-lg bg-ink-600/10 px-2 py-1 text-xs font-semibold text-ink-800">
                      Q
                    </span>
                    {item.q}
                    <span className="float-right text-slate-400 transition-transform group-open:rotate-180">⌄</span>
                  </summary>
                  <div className="mt-3 text-sm text-slate-600">{item.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Waitlist (Google Form link) */}
          <section
            id="waitlist"
            className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Join the waitlist</h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Join the official LegalAssist early access waitlist. It takes less than a minute.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-gradient-to-r from-ink-600 to-ink-800 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
              >
                Join Waitlist (Google Form)
              </a>
              <div className="text-xs text-slate-500">No spam — just early access updates.</div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/60 bg-white/60 px-4 py-3 text-xs text-slate-600">
              Legal Disclaimer: LegalAssist does not provide legal advice and does not create an attorney-client relationship.
              All AI-generated content is for informational purposes only and must be reviewed by a qualified attorney.
              <span className="text-slate-500"> © 2026 LegalAssist • Built by Asma Ahmed</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
