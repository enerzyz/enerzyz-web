"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_KEY = "enerzyz:cookie-consent";

export function CookieBanner() {
  const [accepted, setAccepted] = useState<boolean | null>(null);
  const [showManage, setShowManage] = useState(false);
  const [prefs, setPrefs] = useState({ functional: false, performance: false, advertising: false });

  useEffect(() => {
    try {
      const v = localStorage.getItem(COOKIE_KEY);
      setAccepted(v === "1");
      const raw = localStorage.getItem(`${COOKIE_KEY}:prefs`);
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          setPrefs({
            functional: !!parsed.functional,
            performance: !!parsed.performance,
            advertising: !!parsed.advertising,
          });
        } catch {}
      }
    } catch {
      setAccepted(false);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(COOKIE_KEY, "1");
      localStorage.setItem(`${COOKIE_KEY}:prefs`, JSON.stringify({ functional: true, performance: true, advertising: true }));
    } catch {}
    setAccepted(true);
  };

  const savePrefs = () => {
    try {
      localStorage.setItem(`${COOKIE_KEY}:prefs`, JSON.stringify(prefs));
      // mark consent as given (even if only some categories were enabled)
      localStorage.setItem(COOKIE_KEY, "1");
    } catch {}
    setAccepted(true);
  };

  const togglePref = (key: keyof typeof prefs) => {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[min(96%,900px)] -translate-x-1/2 rounded-2xl bg-black/80 px-6 py-4 text-sm text-white backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <strong className="block font-semibold">We use cookies</strong>
          <div className="mt-1 text-sm text-white/80">
            We use cookies and similar technologies to improve site experience and analyze traffic. By
            continuing you consent to our use of cookies. See our <Link href="/cookie-policy" className="underline">Cookie Policy</Link>.
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3 sm:mt-0">
          <button
            onClick={accept}
            className="rounded-full bg-sky-400/90 px-4 py-2 text-sm font-semibold text-slate-900"
          >
            Accept
          </button>
          <button
            onClick={() => setShowManage((s) => !s)}
            className="text-sm text-white/80 hover:underline"
            aria-expanded={showManage}
            aria-controls="cookie-manage-panel"
          >
            Manage
          </button>
        </div>
      </div>

      {showManage && (
        <div id="cookie-manage-panel" className="mt-4 rounded-lg border border-white/10 bg-white/[0.02] p-4 text-sm">
          <div className="mb-3 text-sm text-white/80">Manage your cookie preferences. Necessary cookies are required for site functionality.</div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">Functional cookies</div>
                <div className="text-xs text-white/60">Remember preferences and enhance usability.</div>
              </div>
              <input type="checkbox" checked={prefs.functional} onChange={() => togglePref('functional')} />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">Performance &amp; analytics</div>
                <div className="text-xs text-white/60">Aggregate usage metrics to improve product.</div>
              </div>
              <input type="checkbox" checked={prefs.performance} onChange={() => togglePref('performance')} />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">Advertising &amp; targeting</div>
                <div className="text-xs text-white/60">Used to deliver relevant marketing (third-party).</div>
              </div>
              <input type="checkbox" checked={prefs.advertising} onChange={() => togglePref('advertising')} />
            </label>
          </div>
          <div className="mt-4 flex gap-3 justify-end">
            <button className="rounded-full bg-white/5 px-3 py-1 text-sm" onClick={() => setShowManage(false)}>Cancel</button>
            <button className="rounded-full bg-sky-400/90 px-3 py-1 text-sm font-semibold text-slate-900" onClick={savePrefs}>Save preferences</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CookieBanner;
