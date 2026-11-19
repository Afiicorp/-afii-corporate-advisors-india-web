"use client";
import { useState } from "react";
import { site } from "@/lib/site";
export default function ContactForm(){
  const [name,setName]=useState("");const [email,setEmail]=useState("");const [interest,setInterest]=useState("Infrastructure Advisory");const [message,setMessage]=useState("");const [agreed,setAgreed]=useState(false);
  const send=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();if(!agreed)return;
    const subject=`AFII India enquiry — ${interest}`;
    const body=`Name: ${name}\nReply-to: ${email}\nArea: ${interest}\n\n${message}\n\nSubmitted via local email application. No information was stored on this website.`;
    window.location.href=`mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return <form onSubmit={send} className="contact-form"><p className="form-note">This form opens your email application. No website server collects or stores the information you enter here.</p><div className="form-line"><label>Full Name <input required maxLength={120} autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name"/></label><label>Business Email <input required type="email" maxLength={200} autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" /></label></div><label>Area of Interest<select value={interest} onChange={e=>setInterest(e.target.value)}><option>Infrastructure Advisory</option><option>Structured Finance</option><option>Project Incubation</option><option>Government & Public Enterprises</option><option>Partnership / General Enquiry</option></select></label><label>Your Enquiry<textarea required minLength={10} maxLength={5000} rows={6} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us about the project, programme or mandate" /></label><label className="privacy-checkbox"><input type="checkbox" required checked={agreed} onChange={e=>setAgreed(e.target.checked)}/><span>I have read the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy notice</a> and agree to send this message using my email application.</span></label><button type="submit" className="button-dark">Prepare Email <span>↗</span></button><p className="form-note">For confidential or sensitive material, request a secure communication channel before sharing documents.</p></form>;
}
