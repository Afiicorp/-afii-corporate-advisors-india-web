import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { transactions } from "@/lib/transactions";
export async function generateStaticParams(){return transactions.map(t=>({slug:t.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const t=transactions.find(x=>x.slug===slug);return {title:t?.title||"Transaction",description:t?.detail}}
export default async function Deal({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const t=transactions.find(x=>x.slug===slug);if(!t)notFound();
 const slide=t.archivedSlide && existsSync(join(process.cwd(),"public","media","archive",`slide-${t.archivedSlide}.jpeg`))?`/media/archive/slide-${t.archivedSlide}.jpeg`:null;
 return <><section className="v2-page-hero v2-page-hero-light"><div className="shell"><Link className="v2-back" href="/transactions">← Transactions</Link><h1>{t.title}</h1><p>{t.sector} · {t.region}</p></div></section>
 <div className="v2-detail-banner"><Image src={t.image} fill sizes="100vw" alt={`${t.sector} project image`}/></div>
 <section className="v2-section"><div className="shell v2-standard-split"><div><h2>Transaction overview</h2></div><div><p>{t.detail}</p><dl className="v2-detail-facts"><div><dt>Sector</dt><dd>{t.sector}</dd></div><div><dt>Location</dt><dd>{t.region}</dd></div><div><dt>Parties involved</dt><dd>{t.counterpart}</dd></div><div><dt>Area of work</dt><dd>{t.status}</dd></div></dl>
 {slide && <div className="v2-source-slide"><h3>Project presentation</h3><a href={slide} target="_blank" rel="noopener noreferrer"><img src={slide} alt={`${t.title} presentation`}/></a></div>}
 <Link className="v2-button-navy" href="/contact">Discuss a transaction <span>→</span></Link></div></div></section></>;
}
