import Image from "next/image";
import Link from "next/link";
import type {Metadata} from "next";
import {industries} from "@/lib/site";
export const metadata:Metadata={title:"Industries",description:"AFII Corporate Advisors sector experience across rail, roads, energy, water, manufacturing and urban development."};
export default function Industries(){return <><section className="v2-page-hero"><div className="shell"><h1>Industries</h1><p>Infrastructure and real-asset sectors that shape India's investment and development priorities.</p></div></section><section className="v2-section"><div className="shell v2-industries-directory">{industries.map(x=><article className="v2-industry-feature" key={x.title}><div className="v2-industry-feature-media"><Image src={x.image} fill sizes="(max-width:850px) 100vw, 50vw" alt={`${x.title.toLowerCase()} landscape`}/></div><div className="v2-industry-feature-copy"><h2>{x.title}</h2><p>{x.text}</p><Link className="v2-inline-link" href={`/expertise/${x.practice}`}>Explore relevant expertise <span>→</span></Link></div></article>)}</div></section></>}
