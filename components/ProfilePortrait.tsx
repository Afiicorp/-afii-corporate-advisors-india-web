"use client";
import {useState} from "react";
export default function ProfilePortrait({name,image}:{name:string;image:string}){const[failed,setFailed]=useState(false);const initials=name.replace(/^(Dr\.|Mr\.|Ms\.)\s*/i,"").split(/\s+/).slice(0,2).map(s=>s[0]).join("");return <div className="v2-profile-photo">{!failed&&<img src={image} alt={`Portrait of ${name}`} onError={()=>setFailed(true)} loading="lazy"/>}{failed&&<span aria-hidden="true">{initials}</span>}</div>}
