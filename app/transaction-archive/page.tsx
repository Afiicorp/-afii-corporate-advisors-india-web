import Link from "next/link";
import type {Metadata} from "next";
import {existsSync} from "node:fs";
import {join} from "node:path";
import ArchiveGallery from "@/components/ArchiveGallery";
import {archiveSlides,archiveUrl} from "@/lib/transactions";
export const metadata:Metadata={title:"Published Transaction Slides",description:"AFII Corporate Advisors' historical presentation images retained as supporting source material."};
export default function Archive(){const images=archiveSlides.map(slide=>({slide,src:existsSync(join(process.cwd(),"public","media","archive",`slide-${slide}.jpeg`))?`/media/archive/slide-${slide}.jpeg`:archiveUrl(slide)}));return <><section className="v2-page-hero v2-page-hero-light"><div className="shell"><Link href="/transactions" className="v2-back">← Transactions</Link><h1>Published transaction slides</h1><p>Original AFII Corporate Advisors reference images, shown for context.</p></div></section><section className="v2-section"><div className="shell"><p className="v2-transactions-notice">The images below reproduce the company's historical presentation material. References can include bids, pipeline proposals or transactions not necessarily completed. Approval to republish third-party imagery and logos must be confirmed.</p><ArchiveGallery images={images}/></div></section></>}
