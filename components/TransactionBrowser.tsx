"use client";
import Link from "next/link";
import Image from "next/image";
import {useMemo,useState} from "react";
import {categories,transactions} from "@/lib/transactions";
export default function TransactionBrowser(){const[sector,setSector]=useState("All"),[search,setSearch]=useState("");const results=useMemo(()=>transactions.filter(t=>(sector==="All"||t.sector===sector)&&`${t.title} ${t.region} ${t.counterpart} ${t.sector}`.toLowerCase().includes(search.trim().toLowerCase())),[sector,search]);return <>
 <div className="v2-filter"><div><label htmlFor="v2-search-deals">Search projects and references</label><input id="v2-search-deals" type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Project, region or partner"/></div><div><label htmlFor="v2-sector">Sector</label><select id="v2-sector" value={sector} onChange={e=>setSector(e.target.value)}>{categories.map(x=><option key={x} value={x}>{x}</option>)}</select></div><p aria-live="polite">{results.length} results</p></div>
 <div className="v2-deal-list">{results.map(t=><Link className="v2-deal-row" href={`/transactions/${t.slug}`} key={t.slug}><div className="v2-deal-img"><Image src={t.image} alt={`${t.sector.toLowerCase()} imagery`} fill sizes="(max-width:700px) 100vw, 300px"/></div><div className="v2-deal-name"><small>{t.sector}</small><h2>{t.title}</h2><p>{t.region}</p></div><div className="v2-deal-description"><p>{t.detail}</p><span>View reference <span aria-hidden="true">→</span></span></div></Link>)}</div>{results.length===0&&<p className="v2-empty">No matching public references. Try a broader search.</p>}
 </>}
