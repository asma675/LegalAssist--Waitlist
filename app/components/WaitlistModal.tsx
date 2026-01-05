"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  openAfterScrollPct?: number; // 0-100
};

export default function WaitlistModal({ openAfterScrollPct = 22 }: Props) {
  const [open, setOpen] = useState(false);

  const storageKey = useMemo(() => "legalassist_waitlist_modal_dismissed_v1", []);

  useEffect(() => {
    // don't re-open if dismissed
    try {
      if (localStorage.getItem(storageKey) === "1") return;
    } catch {}

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) return;

      const pct = (window.scrollY / max) * 100;
      if (pct >= openAfterScrollPct) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openAfterScrollPct, storageKey]);

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(storageKey, "1");
    } catch {}
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <button
        aria-label="Close modal"
        onClick={dismiss}
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative mx-auto mt-16 w-[min(940px,92vw)]">
        <div className="overflow-hidden rounded-[28px] border border-white/20 bg-white/80 shadow-soft backdrop-blur">
          <div className="flex items-start justify-between gap-4 border-b border-white/40 px-6 py-5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-ink-600/10 px-3 py-1 text-xs font-semibold text-ink-800">
                ✨ Early Access
              </div>
              <div className="mt-2 text-xl font-semibold text-slate-900">
                Join the LegalAssist waitlist
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Get an invite when we open early access for lawyers and legal teams.
              </div>
            </div>

            <button
              onClick={dismiss}
              className="rounded-2xl border border-white/60 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
            >
              ✕
            </button>
          </div>

          <div className="grid gap-0 md:grid-cols-[1.1fr,0.9fr]">
            {/* Form */}
            <div className="px-6 py-6">
              <form action="/api/waitlist" method="POST" className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Name</label>
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="mt-2 w-full rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-sm outline-none focus:border-ink-300 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="mt-2 w-full rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-sm outline-none focus:border-ink-300 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Role</label>
                    <select
                      name="role"
                      defaultValue="Lawyer"
                      className="mt-2 w-full rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-sm outline-none focus:border-ink-300 focus:bg-white"
                    >
                      <option>Lawyer</option>
                      <option>Paralegal</option>
                      <option>Law Student</option>
                      <option>Operations</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700">Firm size</label>
                    <select
                      name="firmSize"
                      defaultValue="1–5"
                      className="mt-2 w-full rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-sm outline-none focus:border-ink-300 focus:bg-white"
                    >
                      <option>1–5</option>
                      <option>6–20</option>
                      <option>21–100</option>
                      <option>100+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">What do you want to automate first?</label>
                  <textarea
                    name="note"
                    rows={3}
                    placeholder="Client intake, document generation, case strategy, document analysis..."
                    className="mt-2 w-full rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-sm outline-none focus:border-ink-300 focus:bg-white"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="rounded-2xl bg-gradient-to-r from-ink-600 to-ink-800 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
                  >
                    Join Waitlist
                  </button>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/70 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
                  >
                    Not now
                  </button>

                  <div className="w-full text-xs text-slate-500">
                    By joining, you agree to receive updates about LegalAssist.
                  </div>
                </div>
              </form>
            </div>

            {/* Side panel */}
            <div className="relative overflow-hidden border-t border-white/40 bg-gradient-to-br from-slate-950 via-ink-900 to-ink-700 px-6 py-6 text-white md:border-l md:border-t-0">
              <div className="text-sm font-semibold">Why teams join early</div>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>• Faster document drafting + review workflows</li>
                <li>• Centralized client/case CRM and matter organization</li>
                <li>• Structured case strategy outputs (strengths/risks/recs)</li>
                <li>• Early access to upcoming premium features</li>
              </ul>

              <div className="mt-5 rounded-2xl bg-white/10 p-4 text-xs text-white/80">
                Disclaimer: LegalAssist does not provide legal advice and does not create an attorney-client relationship. Outputs are informational and require attorney review.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
