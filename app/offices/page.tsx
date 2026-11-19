import Link from "next/link";
import type { Metadata } from "next";
import { networkPresences, site } from "@/lib/site";
export const metadata: Metadata = {title:"Offices & International Representatives",description:"Locations of AFII Corporate Advisors in India and the wider international AFII network."};
function mapsHref(address:string){return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;}
export default function Offices(){return <>
<section className="v2-page-hero v2-page-hero-light"><div className="shell"><h1>Offices & representatives</h1><p>Our offices in India and across the international AFII network.</p></div></section>
<section className="v2-section"><div className="shell">
 <div className="v2-office-highlight"><div><span>AFII Corporate Advisors · India</span><h2>New Delhi</h2><p>{site.address}</p><p>Head of India Business — Vinit Vidyarthi<br/>Representative Director — K. Aakash</p><a href={mapsHref("B1/14 Safdarjung Enclave, New Delhi 110029, India")} target="_blank" rel="noopener noreferrer" className="v2-inline-link">View location on Google Maps <span aria-hidden="true">↗</span></a></div>
 <div className="v3-office-hero-side"><span className="v3-office-side-flag" aria-hidden="true">INDIA</span><h3>India business</h3><p>New Delhi · Mumbai</p><div className="v3-office-side-rule"/><p>Working alongside AFII teams and specialist businesses across international markets.</p><Link href="/group" className="v3-office-hero-link">Our Group <span aria-hidden="true">↗</span></Link></div></div>
 <div className="v3-offices-legend"><span><b className="v3-legend-dot v3-legend-dot-india"/> India offices</span><span><b className="v3-legend-dot v3-legend-dot-intl"/> International offices</span><span><b className="v3-legend-dot v3-legend-dot-network"/> Regional network</span></div>
 <div className="v2-office-grid v3-office-grid">{networkPresences.map((n,i)=><article className={`v2-office v3-office-card v3-office-card-${i%6}`} key={`${n.place}-${n.country}`}>
 <div className="v3-office-card-top"><span className="v3-location-badge">{n.type}</span><span className="v3-office-card-region">{n.country}</span></div>
 <h3>{n.place}</h3><p className="v3-office-entity">{n.detail}</p><div className="v3-office-card-details"><p><strong>Team / contact</strong>{n.contact}</p><address>{n.address}</address></div>
 {n.mapAddress ? <a href={mapsHref(n.mapAddress)} target="_blank" rel="noopener noreferrer" className="v3-office-card-link">View location <span aria-hidden="true">↗</span></a> : <div className="v6-office-region">{n.place} · {n.country}</div>}
 </article>)}</div></div></section></>}
