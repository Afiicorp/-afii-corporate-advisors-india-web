import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Our Approach", description: "Project feasibility, institutional engagement and structuring at AFII Corporate Advisors." };
const priorities = [
 { title: "Commercial assessment", body: "We study the project, cash flows, procurement context and commercial viability to identify the appropriate development route." },
 { title: "Institutional engagement", body: "We bring together public enterprises, sponsors, technical specialists and financing institutions around defined opportunities." },
 { title: "Transaction structuring", body: "We develop financing, consortium and bid structures suited to each project's commercial and institutional requirements." }
];
export default function Approach() { return <>
 <section className="v2-page-hero"><div className="shell"><h1>Our approach</h1><p>Clarity in project development, financial structuring and institutional coordination.</p></div></section>
 <section className="v2-section"><div className="shell v2-standard-split"><div><h2>Built around the project.</h2><p>Large infrastructure investments depend on sound commercial assumptions, suitable financing and alignment between institutions.</p><p>AFII connects project evaluation with the financial and technical capabilities needed to advance viable opportunities.</p><Link href="/expertise" className="v2-inline-link">Explore our expertise <span aria-hidden="true">→</span></Link></div><div className="v2-standard-image"><Image src="/media/v3/approach-planning.jpg" fill sizes="(max-width:850px) 100vw, 50vw" alt="Project planning and professional documentation"/></div></div></section>
 <section className="v4-approach-section"><div className="shell"><div className="v4-approach-head"><h2>What shapes our work</h2><p>Commercial discipline, a strong institutional network and experience in complex project development.</p></div><div className="v4-approach-grid">{priorities.map(x => <article key={x.title}><h3>{x.title}</h3><p>{x.body}</p></article>)}</div></div></section>
 </>; }
