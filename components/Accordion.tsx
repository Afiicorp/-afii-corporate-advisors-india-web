"use client";
import { useState } from "react";
export default function Accordion({items}:{items:{title:string;body:string}[]}) {
  const [active,setActive] = useState<number|null>(0);
  return <div className="accordion">{items.map((item,i)=><section key={item.title} className={active===i?"accordion-item is-open":"accordion-item"}><h3><button type="button" onClick={()=>setActive(active===i?null:i)} aria-expanded={active===i} aria-controls={`answer-${i}`}><span>{item.title}</span><span aria-hidden="true">{active===i?"−":"+"}</span></button></h3>{active===i && <p id={`answer-${i}`}>{item.body}</p>}</section>)}</div>;
}
