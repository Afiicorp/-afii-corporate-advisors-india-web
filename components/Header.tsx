"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { FocusEvent } from "react";
import { navItems, services, site } from "@/lib/site";

type MenuKey = "expertise" | "group" | "offices";
const menus: Record<MenuKey, { title: string; introduction: string; links: { name: string; href: string }[]; fullLabel: string }> = {
  expertise: {
    title: "Expertise",
    introduction: "Advisory services for the development, structuring and financing of projects.",
    links: services.map(s => ({ name: s.name, href: `/expertise/${s.slug}` })),
    fullLabel: "Explore all expertise",
  },
  group: {
    title: "AFII Group",
    introduction: "Learn about the network of AFII businesses and their respective practices.",
    links: [
      { name: "Group companies", href: "/group" },
      { name: "People & representatives", href: "/people" },
      { name: "Offices & locations", href: "/offices" },
    ],
    fullLabel: "About the AFII Group",
  },
  offices: {
    title: "People & Offices",
    introduction: "Find AFII representatives and offices across the international network.",
    links: [
      { name: "Our representatives", href: "/people" },
      { name: "Offices & contacts", href: "/offices" },
      { name: "Contact the New Delhi office", href: "/contact" },
    ],
    fullLabel: "View all offices",
  },
};
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About AFII", href: "/about" },
  ...services.map(s => ({ name: s.name, href: `/expertise/${s.slug}` })),
  { name: "Industries", href: "/industries" },
  { name: "Transactions", href: "/transactions" },
  { name: "AFII Group", href: "/group" },
  { name: "People & representatives", href: "/people" },
  { name: "Offices", href: "/offices" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const path = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [query, setQuery] = useState("");
  useEffect(() => { setMobileOpen(false); setSearchOpen(false); setActiveMenu(null); }, [path]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen || searchOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen, searchOpen]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMobileOpen(false); setSearchOpen(false); setActiveMenu(null); }
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault(); setActiveMenu(null); setSearchOpen(v => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const matches = useMemo(() => quickLinks.filter(x => `${x.name} ${x.href}`.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 9), [query]);
  const onGroupBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActiveMenu(null);
  };
  return <>
    <div className="v2-utility"><div className="shell v2-utility-inner">
      <span>AFII Corporate Advisors Limited · India</span>
      <a href={site.groupUrl} target="_blank" rel="noopener noreferrer">AFII Group · International <span aria-hidden="true">↗</span></a>
    </div></div>
    <header className="v2-header" onMouseLeave={() => setActiveMenu(null)}>
      <div className="shell v2-header-row">
        <Link className="v2-brand v4-brand" href="/" aria-label="AFII Corporate Advisors homepage" onClick={() => setActiveMenu(null)}>
          <Image src="/brand/afii-original.jpg" width={54} height={54} alt="AFII official logo" priority className="v4-original-logo" />
          <span className="v2-brand-name">AFII CORPORATE ADVISORS<small>INDIA</small></span>
        </Link>
        <nav className="v2-nav" aria-label="Main navigation">
          {navItems.map(item => {
            const menu: MenuKey | null = item.href === "/expertise" ? "expertise" : item.href === "/group" ? "group" : item.href === "/offices" ? "offices" : null;
            const visible = menu !== null && activeMenu === menu;
            return <div key={item.href} className={`v2-nav-group ${visible ? "v5-menu-open" : ""}`}
              onMouseEnter={() => setActiveMenu(menu)}
              onMouseLeave={() => setActiveMenu(null)}
              onFocusCapture={() => { if (menu) setActiveMenu(menu); }}
              onBlurCapture={onGroupBlur}>
              <Link href={item.href} onClick={() => setActiveMenu(null)}
                aria-expanded={menu ? visible : undefined}
                aria-controls={menu ? `v5-menu-${menu}` : undefined}
                className={path === item.href || path.startsWith(item.href + "/") ? "is-current" : ""}>
                {item.name}
              </Link>
              {menu && <div id={`v5-menu-${menu}`}
                className={`v2-nav-submenu v5-nav-dropdown ${menu === "offices" ? "v5-align-right" : ""}`}
                hidden={!visible}>
                <div className="v5-dropdown-heading"><strong>{menus[menu].title}</strong><p>{menus[menu].introduction}</p></div>
                <div className="v5-dropdown-links">
                  {menus[menu].links.map(link => <Link href={link.href} onClick={() => setActiveMenu(null)} key={link.href}>{link.name}</Link>)}
                </div>
                <Link className="v5-dropdown-footer" href={item.href} onClick={() => setActiveMenu(null)}>{menus[menu].fullLabel}</Link>
              </div>}
            </div>;
          })}
        </nav>
        <div className="v2-nav-actions">
          <button type="button" className="v2-search-toggle" aria-label="Search website" title="Search website (Ctrl + K)" onClick={() => { setActiveMenu(null); setSearchOpen(true); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true"><circle cx="10.7" cy="10.7" r="6.3"/><path d="m15.5 15.5 5.3 5.3"/></svg>
          </button>
          <Link href="/contact" className="v2-contact-nav">Contact</Link>
          <button type="button" className="v2-hamburger" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-controls="v2-mobile-menu" aria-expanded={mobileOpen} onClick={() => { setMobileOpen(v => !v); setActiveMenu(null); }}><span/><span/><span/></button>
        </div>
      </div>
    </header>
    {mobileOpen && <nav id="v2-mobile-menu" className="v2-mobile-menu" aria-label="Mobile navigation"><div className="shell">
      {navItems.map(x => <Link key={x.href} href={x.href} onClick={() => setMobileOpen(false)}>{x.name}</Link>)}
      <Link href="/people" onClick={() => setMobileOpen(false)}>People & representatives</Link>
      <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact us</Link>
      <a href={site.groupUrl} target="_blank" rel="noopener noreferrer">Visit AFII Group ↗</a>
    </div></nav>}
    {searchOpen && <div className="v2-search-overlay" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setSearchOpen(false); }}>
      <div className="v2-search-panel" role="dialog" aria-modal="true" aria-label="Search AFII website">
        <div className="v2-search-line"><label htmlFor="v2-site-search">Search AFII</label><button type="button" onClick={() => setSearchOpen(false)}>Close ×</button></div>
        <input id="v2-site-search" autoFocus type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search expertise, transactions or offices" />
        <div className="v2-search-results">{matches.map(x => <Link key={x.href} href={x.href} onClick={() => setSearchOpen(false)}>{x.name}<span>View</span></Link>)}{matches.length === 0 && <p>No pages match your search.</p>}</div>
      </div>
    </div>}
  </>;
}
