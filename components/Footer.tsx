"use client";
import Image from "next/image";
import Link from "next/link";
import { site, navItems } from "@/lib/site";
export default function Footer() {
 return <footer className="v2-footer"><div className="shell">
  <div className="v2-footer-main">
   <div className="v2-footer-about">
    <Link href="/" className="v4-footer-brand" aria-label="AFII homepage"><Image src="/brand/afii-original.jpg" alt="AFII official logo" width={55} height={55}/><span>AFII Corporate Advisors<small>India</small></span></Link>
    <p>Infrastructure incubation, investments and financial advisory. New Delhi, India.</p>
    <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
   </div>
   <div className="v2-footer-col"><h3>Explore</h3>{navItems.map(x => <Link key={x.href} href={x.href}>{x.name}</Link>)}<Link href="/people">People & representatives</Link></div>
   <div className="v2-footer-col"><h3>AFII network</h3><Link href="/group">Group companies</Link><Link href="/offices">Offices and representatives</Link><a target="_blank" rel="noopener noreferrer" href={site.groupUrl}>AFII Group</a><a target="_blank" rel="noopener noreferrer" href={site.ukUrl}>AFII Capital</a></div>
   <div className="v2-footer-col v2-footer-location"><h3>New Delhi</h3><address>{site.address}</address><a href={`tel:${site.telephone}`}>{site.telephoneLabel}</a><Link href="/contact">Contact our office</Link></div>
  </div>
  <div className="v2-footer-bottom"><span>© {new Date().getFullYear()} AFII Corporate Advisors Limited</span><div>
   <Link href="/privacy-policy">Privacy policy</Link><Link href="/cookies">Cookie policy</Link>
   <button type="button" onClick={() => window.dispatchEvent(new Event("afii:cookie-open"))}>Cookie settings</button>
   <Link href="/terms">Terms</Link><Link href="/legal-notice">Legal notice</Link>
  </div></div>
 </div></footer>;
}
