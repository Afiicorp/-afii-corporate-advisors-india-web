"use client";
import { useEffect, useState } from "react";
export default function ArchiveGallery({images}:{images:{slide:number;src:string}[]}){
  const [selected,setSelected]=useState<{slide:number;src:string}|null>(null);
  useEffect(()=>{const esc=(e:KeyboardEvent)=>{if(e.key==="Escape")setSelected(null)};window.addEventListener("keydown",esc);return()=>window.removeEventListener("keydown",esc)},[]);
  return <><div className="archive-grid">{images.map((item)=><button className="archive-item" key={item.slide} type="button" onClick={()=>setSelected(item)} aria-label={`Open original AFII transaction slide ${item.slide}`}><img src={item.src} alt={`Original AFII Corporate Advisors historical transaction slide ${item.slide}`} loading="lazy"/><span>View original ↗</span></button>)}</div>
    {selected&&<div className="lightbox" role="dialog" aria-modal="true" aria-label="Historical AFII transaction image" onClick={()=>setSelected(null)}><button className="lightbox-close" type="button" aria-label="Close image" onClick={()=>setSelected(null)}>Close ×</button><img src={selected.src} alt={`Original AFII Corporate Advisors historical transaction slide ${selected.slide}`} onClick={e=>e.stopPropagation()}/><p>Historical archive material · publication date and current status may differ</p></div>}
  </>;
}
