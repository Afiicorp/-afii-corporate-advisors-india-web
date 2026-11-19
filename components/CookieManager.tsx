"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Choices = { analytics: boolean; media: boolean; savedAt: string; version: string };
const STORAGE_KEY = "afii_india_consent_v1";
function readChoices(): Choices | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const value: unknown = JSON.parse(raw);
    if (value && typeof value === "object" && "version" in value && value.version === "1" &&
        "analytics" in value && typeof value.analytics === "boolean" &&
        "media" in value && typeof value.media === "boolean") return value as Choices;
    return null;
  } catch { return null; }
}

export default function CookieManager() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [media, setMedia] = useState(false);
  const panelRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const previous = readChoices();
    if (previous) { setAnalytics(previous.analytics); setMedia(previous.media); }
    else setOpen(true);
    setReady(true);
    const show = () => {
      const stored = readChoices();
      if (stored) { setAnalytics(stored.analytics); setMedia(stored.media); }
      setPreferences(true); setOpen(true);
    };
    window.addEventListener("afii:cookie-open", show);
    return () => window.removeEventListener("afii:cookie-open", show);
  }, []);
  useEffect(() => {
    if (preferences) panelRef.current?.focus();
  }, [preferences]);
  const closePreferences = () => {
    setPreferences(false);
    if (readChoices()) setOpen(false);
  };
  useEffect(() => {
    if (!preferences) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); closePreferences(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preferences]);
  const save = (a: boolean, m: boolean) => {
    const choice: Choices = { analytics: a, media: m, savedAt: new Date().toISOString(), version: "1" };
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(choice)); }
    catch { /* Consent remains functional for this session if storage is blocked. */ }
    setAnalytics(a); setMedia(m); setOpen(false); setPreferences(false);
    window.dispatchEvent(new CustomEvent("afii:consent-change", { detail: choice }));
  };
  if (!ready || !open) return null;
  return <div className={preferences ? "v5-cookie-layer v5-cookie-layer-modal" : "v5-cookie-layer"}
    onMouseDown={e => { if (preferences && e.target === e.currentTarget) closePreferences(); }}>
    <section className={preferences ? "v5-cookie-panel is-preferences" : "v5-cookie-panel"}
      role={preferences ? "dialog" : "region"} aria-modal={preferences ? true : undefined}
      aria-labelledby="v5-cookie-title" aria-describedby="v5-cookie-description">
      <div className="v5-cookie-top">
        <div className="v5-cookie-heading">
          <span className="v5-cookie-eyebrow">AFII Corporate Advisors · Privacy</span>
          <h2 id="v5-cookie-title" tabIndex={preferences ? -1 : undefined} ref={panelRef}>
            {preferences ? "Manage cookie preferences" : "Your privacy choices"}
          </h2>
        </div>
        {preferences && <button className="v5-cookie-close" type="button" onClick={closePreferences} aria-label="Close preferences">×</button>}
      </div>
      <p id="v5-cookie-description" className="v5-cookie-intro">
        We use essential browser storage to remember your choice. Optional analytics and external-media preferences are off by default. No optional tracking services are currently active on this website.
      </p>
      {preferences && <div className="v5-cookie-categories">
        <div className="v5-cookie-category">
          <div><strong>Strictly necessary</strong><p>Remembers your selection and supports essential website functions.</p></div>
          <span className="v5-cookie-essential">Always active</span>
        </div>
        <label className="v5-cookie-category" htmlFor="v5-analytics">
          <div><strong>Analytics</strong><p>No analytics provider is currently installed. A new provider will require an updated notice and consent.</p></div>
          <span className="v5-switch"><input id="v5-analytics" type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)}/><span aria-hidden="true"/></span>
        </label>
        <label className="v5-cookie-category" htmlFor="v5-media">
          <div><strong>External media</strong><p>Controls permission for future third-party embeds. The current homepage video is hosted locally.</p></div>
          <span className="v5-switch"><input id="v5-media" type="checkbox" checked={media} onChange={e => setMedia(e.target.checked)}/><span aria-hidden="true"/></span>
        </label>
      </div>}
      <div className="v5-cookie-actions">
        <button type="button" className="v5-cookie-button v5-cookie-reject" onClick={() => save(false, false)}>Reject optional</button>
        {preferences ? <button type="button" className="v5-cookie-button v5-cookie-save" onClick={() => save(analytics, media)}>Save my choices</button>
          : <button type="button" className="v5-cookie-button v5-cookie-manage" onClick={() => setPreferences(true)}>Manage preferences</button>}
        <button type="button" className="v5-cookie-button v5-cookie-accept" onClick={() => save(true, true)}>Accept optional</button>
      </div>
      <div className="v5-cookie-foot">
        <span>You can change your choice at any time.</span>
        <div><Link href="/cookies" onClick={() => { setOpen(false); setPreferences(false); }}>Cookie Policy</Link><Link href="/privacy-policy" onClick={() => { setOpen(false); setPreferences(false); }}>Privacy Policy</Link></div>
      </div>
    </section>
  </div>;
}
