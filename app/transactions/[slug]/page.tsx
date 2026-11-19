import Image from "next/image";
import Link from "next/link";
import type {Metadata} from "next";
import {existsSync} from "node:fs";
import {join} from "node:path";
import {notFound} from "next/navigation";
import {transactions,archiveUrl} from "@/lib/transactions";
export async function generateStaticParams(){return transactions.map(t=>({slug:t.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const t=transactions.find(x=>x.slug===slug);return {title:t?.title||"Transaction",description:t?.detail}}
export default async function Deal({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const t=transactions.find(x=>x.slug===slug);if(!t)notFound();const original=t.archivedSlide?(existsSync(join(process.cwd(),"public","media","archive",`slide-${t.archivedSlide}.jpeg`))?`/media/archive/slide-${t.archivedSlide}.jpeg`:archiveUrl(t.archivedSlide)):null;
return <><section className="v2-page-hero v2-page-hero-light"><div className="shell"><Link className="v2-back" href="/transactions">← Transactions</Link><h1>{t.title}</h1><p>{t.sector} · {t.region}</p></div></section><div className="v2-detail-banner"><Image src={t.image} fill sizes="100vw" alt={`${t.sector.toLowerCase()} photograph`}/></div><section className="v2-section"><div className="shell v2-standard-split"><div><h2>Published reference</h2></div><div><p>{t.detail}</p><dl className="v2-detail-facts"><div><dt>Sector</dt><dd>{t.sector}</dd></div><div><dt>Location</dt><dd>{t.region}</dd></div><div><dt>Published party or counterparty</dt><dd>{t.counterpart}</dd></div><div><dt>Classification</dt><dd>{t.status}</dd></div></dl>{original&&<div className="v2-source-slide"><h3>Original published slide</h3><a href={original} target="_blank" rel="noopener noreferrer"><img src={original} alt={`AFII original published slide ${t.archivedSlide}`}/></a><p>Click to view the original presentation image. Check the original publication for context.</p></div>}<Link className="v2-button-navy" href="/contact">Request more information <span>→</span></Link></div></div></section></>}
