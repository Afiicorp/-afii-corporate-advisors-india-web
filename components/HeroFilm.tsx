"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const clamp = (value: number) => Math.max(0, Math.min(1, value));

/**
 * The first part of the hero is deliberately video-only. The copy arrives as
 * the visitor scrolls through a pinned film, before normal page flow resumes.
 * All text and links remain actual HTML for accessibility and search engines.
 */
export default function HeroFilm() {
  const trackRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setEnhanced(true);
    let frame = 0;
    const update = () => {
      frame = 0;
      const track = trackRef.current;
      const stage = stageRef.current;
      if (!track || !stage) return;
      const stickyTop = Number.parseFloat(window.getComputedStyle(stage).top) || 0;
      const runway = Math.max(1, track.offsetHeight - stage.offsetHeight);
      const distance = stickyTop - track.getBoundingClientRect().top;
      const next = clamp(distance / runway);
      setProgress((current) => Math.abs(current - next) > 0.002 ? next : current);
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    const observer = new ResizeObserver(requestUpdate);
    if (trackRef.current) observer.observe(trackRef.current);
    if (stageRef.current) observer.observe(stageRef.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
      setPlaying(false);
    }
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const reveal = clamp((progress - 0.19) / 0.42);
  const readyToInteract = !enhanced || reveal > 0.92;
  const visualStyle = {
    "--v7-reveal": reveal,
    "--v7-rise": `${Math.round((1 - reveal) * 105)}px`,
  } as CSSProperties;

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video || failed) return;
    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleHeroSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const enable = video.muted;
    video.muted = !enable;
    video.volume = 1;
    setSoundOn(enable);
    if (enable && video.paused) {
      void video.play().catch(() => {});
    }
  };
  return (
    <section ref={trackRef} className="v7-hero-scroll" aria-label="AFII Corporate Advisors India introduction">
      <div ref={stageRef} className="v2-hero v7-hero-stage" style={visualStyle}>
        <video
          ref={videoRef}
          className="v2-hero-video v7-hero-video"
          muted={!soundOn}
          autoPlay
          loop
          playsInline
          preload="auto"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setFailed(true)}
          aria-hidden="true"
        >
          <source src="/media/Hero_Video_afiicorp.mp4" type="video/mp4" />
        </video>
        <button
          type="button"
          onClick={toggleHeroSound}
          aria-pressed={soundOn}
          style={{
            position: "absolute",
            right: "calc(clamp(16px, 3vw, 55px) + 52px)",
            bottom: 20,
            zIndex: 5,
            padding: "11px 16px",
            background: "rgba(5,18,34,.85)",
            border: "1px solid rgba(255,255,255,.7)",
            borderRadius: 24,
            color: "#fff",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          {soundOn ? "Mute sound" : "Enable sound"}
        </button>
        <div className="v7-hero-shade" aria-hidden="true" />
        <div className="v7-hero-copy shell" aria-hidden={!readyToInteract} inert={!readyToInteract}>
          <div className="v2-hero-text">
            <p className="v2-hero-location">India • AFII Corporate Advisors Limited</p>
            <h1 id="home-hero-title">Infrastructure and investment advisory for India.</h1>
            <p className="v2-hero-sub">Project incubation, financial structuring and institutional partnerships for complex infrastructure opportunities.</p>
            <div className="v2-hero-actions">
              <Link className="v2-button-gold" href="/expertise">Our expertise <span aria-hidden="true">→</span></Link>
              <Link className="v2-hero-outline" href="/group">AFII Group <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
        <div className="v7-hero-controls">
          <button
            type="button"
            className="v7-film-toggle"
            onClick={toggleVideo}
            disabled={failed}
            aria-label={failed ? "Video unavailable" : playing ? "Pause hero video" : "Play hero video"}
            title={failed ? "Video unavailable" : playing ? "Pause video" : "Play video"}
          >
            {playing && !failed ? (
              <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden="true"><rect x="2" y="1" width="4" height="16" rx="1"/><rect x="10" y="1" width="4" height="16" rx="1"/></svg>
            ) : (
              <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden="true"><path d="M3 1.5a1 1 0 0 1 1.5-.85l11 7a1.6 1.6 0 0 1 0 2.7l-11 7A1 1 0 0 1 3 16.5z"/></svg>
            )}
          </button>
        </div>
        <noscript>
          <style>{`.v7-hero-copy{opacity:1!important;transform:none!important;pointer-events:auto!important}.v7-hero-shade{opacity:1!important}`}</style>
        </noscript>
      </div>
    </section>
  );
}
