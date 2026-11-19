import type { Metadata } from "next";
import Link from "next/link";
import TransactionBrowser from "@/components/TransactionBrowser";
export const metadata: Metadata = {
  title: "Transactions",
  description: "AFII Corporate Advisors' infrastructure, structured finance and project-advisory transactions across India and international markets."
};
export default function Transactions(){return <>
  <section className="v2-page-hero v2-page-hero-light"><div className="shell"><h1>Transactions</h1><p>Our project and advisory experience across infrastructure, investments and institutional partnerships.</p></div></section>
  <section className="v2-section"><div className="shell"><TransactionBrowser/><div className="v6-gallery-link"><div><h2>Transaction gallery</h2><p>Explore AFII transaction presentations and project material.</p></div><Link href="/transaction-archive" className="v2-inline-link">View gallery <span aria-hidden="true">→</span></Link></div></div></section>
</>}
