import type { Metadata } from "next";
import Link from "next/link";
import ServiceTile from "@/components/ServiceTile";
import {services} from "@/lib/site";
export const metadata:Metadata={title:"Expertise",description:"Infrastructure projects, structured finance, incubation, bids and government advisory at AFII Corporate Advisors."};
export default function Expertise(){return <><section className="v2-page-hero"><div className="shell"><h1>Our expertise</h1><p>Infrastructure incubation, investment and finance are the foundations of AFII Corporate Advisors' India practice.</p></div></section><section className="v2-section"><div className="shell"><div className="v2-expertise-grid v2-expertise-directory">{services.map(s=><ServiceTile key={s.slug} {...s}/>)}</div></div></section></>}
