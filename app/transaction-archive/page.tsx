import Link from "next/link";
import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import ArchiveGallery from "@/components/ArchiveGallery";
import { archiveSlides } from "@/lib/transactions";
export const metadata: Metadata = {title: "Transaction Gallery", description: "AFII transaction presentations and project imagery."};
export default function TransactionGallery(){
 const images=archiveSlides.filter(slide=>existsSync(join(process.cwd(),"public","media","archive",`slide-${slide}.jpeg`))).map(slide=>({slide,src:`/media/archive/slide-${slide}.jpeg`}));
 return <><section className="v2-page-hero v2-page-hero-light"><div className="shell"><Link href="/transactions" className="v2-back">← Transactions</Link><h1>Transaction gallery</h1><p>AFII transaction presentations and project material.</p></div></section><section className="v2-section"><div className="shell">{images.length ? <ArchiveGallery images={images}/> : <p>Project images are being prepared.</p>}</div></section></>;
}
